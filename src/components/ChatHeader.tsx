import React, { useState } from 'react';
import { Phone, Video, Settings,  } from 'lucide-react';
import { Contact } from '../types';
import {  AnimatePresence } from 'framer-motion';
import CallModal from './CallModal';
import SettingsModal from './SettingsModal';

interface ChatHeaderProps {
  contact: Contact;
  onVideoCall: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ contact, onVideoCall }) => {
  const [showCallModal, setShowCallModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const statusInfo = {
    online: { color: 'bg-green-500', text: 'Online' },
    offline: { color: 'bg-gray-400', text: 'Offline' },
    away: { color: 'bg-yellow-500', text: 'Away' },
  }[contact.status];

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative mr-3 h-10 w-10">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="h-full w-full rounded-full object-cover"
              />
              <div
                className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white dark:border-gray-800 ${statusInfo.color}`}
              ></div>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-900 dark:text-white">{contact.name}</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">{statusInfo.text}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setShowCallModal(true)}
              className="rounded-full p-2 text-gray-500 dark:text-gray-400 transition hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Phone className="h-5 w-5" />
            </button>
            <button 
              onClick={onVideoCall}
              className="rounded-full p-2 text-gray-500 dark:text-gray-400 transition hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Video className="h-5 w-5" />
            </button>
            <button 
              onClick={() => setShowSettings(true)}
              className="rounded-full p-2 text-gray-500 dark:text-gray-400 transition hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showCallModal && (
          <CallModal contact={contact} onClose={() => setShowCallModal(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSettings && (
          <SettingsModal onClose={() => setShowSettings(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatHeader;