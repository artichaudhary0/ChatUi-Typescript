import React from 'react';
import ContactSidebar from './ContactSidebar';
import ChatSection from './ChatSection';
import AIComposer from './AIComposer';
import { useChat } from '../context/ChatContext';
import { Menu, X } from 'lucide-react';

const ChatLayout: React.FC = () => {
  const { activeContact } = useChat();
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [showAIComposer, setShowAIComposer] = React.useState(false);

  return (
    <div className="container mx-auto h-screen max-w-full overflow-hidden p-0 sm:p-4 lg:p-8">
      <div className="relative flex h-full overflow-hidden rounded-none bg-white dark:bg-gray-800 shadow-2xl sm:rounded-2xl">
        {/* Mobile Header */}
        <div className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 lg:hidden">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="rounded-full p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {showSidebar ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <h1 className="text-lg font-semibold text-indigo-900 dark:text-indigo-300">Chat App</h1>
          <button
            onClick={() => setShowAIComposer(!showAIComposer)}
            className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-2 text-white"
          >
            AI
          </button>
        </div>

        {/* Left Sidebar - Contacts */}
        <div
          className={`absolute inset-y-0 left-0 z-40 w-full border-r border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out md:relative md:w-80 lg:w-96 ${
            showSidebar ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          <div className="h-full pt-16 md:pt-0">
            <ContactSidebar />
          </div>
        </div>

        {/* Middle Section - Chat */}
        <div className={`flex-1 pt-16 md:pt-0 ${activeContact ? 'block' : 'hidden md:block'}`}>
          {activeContact ? (
            <ChatSection />
          ) : (
            <div className="flex h-full items-center justify-center bg-gray-50 dark:bg-gray-900">
              <p className="text-lg text-gray-500 dark:text-gray-400">Select a contact to start chatting</p>
            </div>
          )}
        </div>

        {/* Right Section - AI Composer */}
        <div
          className={`absolute inset-y-0 right-0 z-40 w-full border-l border-gray-100 dark:border-gray-700 bg-gradient-to-b from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10 transition-transform duration-300 ease-in-out lg:relative lg:block lg:w-96 ${
            showAIComposer ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="h-full pt-16 lg:pt-0">
            <AIComposer onClose={() => setShowAIComposer(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatLayout;