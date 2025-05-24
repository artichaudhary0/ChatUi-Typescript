import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Smile, Phone, Video, X, ArrowLeft } from 'lucide-react';
import { useChat } from '../context/ChatContext';
import MessageBubble from './MessageBubble';
import ChatHeader from './ChatHeader';
import EmojiPicker from './EmojiPicker';
import VideoCallModal from './VideoCallModal';
import { motion, AnimatePresence } from 'framer-motion';

const ChatSection: React.FC = () => {
  const { activeContact, messages, sendMessage, setActiveContact } = useChat();
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showVideoCall, setShowVideoCall] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeContactMessages = messages.filter(
    (message) =>
      (message.senderId === activeContact?.id && message.receiverId === 'user') ||
      (message.senderId === 'user' && message.receiverId === activeContact?.id)
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeContactMessages]);

  useEffect(() => {
    if (activeContact) {
      const lastMessage = activeContactMessages[activeContactMessages.length - 1];
      if (lastMessage && lastMessage.senderId === 'user') {
        setIsTyping(true);
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 3000);
        return () => clearTimeout(timer);
      }
    }
  }, [activeContact, activeContactMessages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      sendMessage(newMessage);
      setNewMessage('');
      setShowEmojiPicker(false);
    }
  };

  const handleEmojiSelect = (emoji: any) => {
    setNewMessage((prev) => prev + emoji.native);
  };

  if (!activeContact) return null;

  return (
    <div className="flex h-full flex-col bg-white">
      {/* Mobile Back Button */}
      <div className="border-b border-gray-200 bg-white p-4 md:hidden">
        <button
          onClick={() => setActiveContact(null)}
          className="flex items-center text-gray-500"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span>Back to contacts</span>
        </button>
      </div>

      <ChatHeader 
        contact={activeContact} 
        onVideoCall={() => setShowVideoCall(true)} 
      />
      
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {activeContactMessages.map((message) => (
            <MessageBubble key={message.id} message={message} contact={activeContact} />
          ))}
          
          {/* Typing indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex items-center space-x-2"
              >
                <div className="h-8 w-8 rounded-full bg-gray-100">
                  <img
                    src={activeContact.avatar}
                    alt={activeContact.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="rounded-2xl rounded-tl-none bg-gray-100 px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:0.2s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:0.3s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Message Input */}
      <div className="border-t border-gray-100 bg-white p-4">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
          <button
            type="button"
            className="flex-shrink-0 rounded-full p-2 text-gray-500 transition hover:bg-gray-100"
          >
            <Paperclip className="h-5 w-5" />
          </button>
          
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-2 pr-10 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-500 transition hover:bg-gray-100"
            >
              <Smile className="h-5 w-5" />
            </button>
            
            {/* Emoji Picker Popup */}
            <AnimatePresence>
              {showEmojiPicker && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-full right-0 mb-2"
                >
                  <EmojiPicker onEmojiSelect={handleEmojiSelect} onClose={() => setShowEmojiPicker(false)} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <button
            type="submit"
            className="flex-shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-2 text-white shadow-lg transition hover:from-indigo-600 hover:to-purple-600"
            disabled={!newMessage.trim()}
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>

      {/* Video Call Modal */}
      <AnimatePresence>
        {showVideoCall && (
          <VideoCallModal contact={activeContact} onClose={() => setShowVideoCall(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatSection;