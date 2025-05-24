import React, { createContext, useContext, useState, useEffect } from 'react';
import { Contact, Message, AIResponse } from '../types';
import { initialContacts, initialMessages } from '../data/initialData';

interface ChatContextType {
  activeContact: Contact | null;
  contacts: Contact[];
  messages: Message[];
  aiResponses: AIResponse[];
  currentQuestion: string;
  setActiveContact: (contact: Contact | null) => void;
  sendMessage: (content: string) => void;
  askAI: (question: string) => void;
  addAIResponseToMessage: (response: AIResponse) => void;
  setCurrentQuestion: (question: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeContact, setActiveContact] = useState<Contact | null>(null);
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [aiResponses, setAIResponses] = useState<AIResponse[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState('');

  useEffect(() => {
    // Set the first contact as active by default
    if (contacts.length > 0 && !activeContact) {
      setActiveContact(contacts[0]);
    }
  }, [contacts, activeContact]);

  const sendMessage = (content: string) => {
    if (!content.trim() || !activeContact) return;

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      senderId: 'user',
      receiverId: activeContact.id,
      content,
      timestamp: new Date(),
      status: 'sent',
    };

    setMessages((prev) => [...prev, newMessage]);

    // Update last message for contact
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === activeContact.id
          ? {
              ...contact,
              lastMessage: content,
              lastMessageTime: new Date(),
              unreadCount: 0,
            }
          : contact
      )
    );

    // Simulate response after a delay
    setTimeout(() => {
      const responseMessage: Message = {
        id: `msg-${Date.now()}`,
        senderId: activeContact.id,
        receiverId: 'user',
        content: `Response to "${content.substring(0, 20)}${content.length > 20 ? '...' : ''}"`,
        timestamp: new Date(),
        status: 'received',
      };

      setMessages((prev) => [...prev, responseMessage]);
    }, 2000);
  };

  const askAI = (question: string) => {
    if (!question.trim()) return;

    // Simulate AI response with typing effect
    const aiResponse: AIResponse = {
      id: `ai-${Date.now()}`,
      question,
      answer: `Here's the AI-generated answer to "${question.substring(0, 20)}${
        question.length > 20 ? '...' : ''
      }"`,
      timestamp: new Date(),
    };

    setAIResponses((prev) => [aiResponse, ...prev]);
  };

  const addAIResponseToMessage = (response: AIResponse) => {
    if (!activeContact) return;
    
    sendMessage(response.answer);
  };

  return (
    <ChatContext.Provider
      value={{
        activeContact,
        contacts,
        messages,
        aiResponses,
        currentQuestion,
        setActiveContact,
        sendMessage,
        askAI,
        addAIResponseToMessage,
        setCurrentQuestion,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};