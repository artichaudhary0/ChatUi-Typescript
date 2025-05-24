import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MicOff, Mic, X } from 'lucide-react';
import { Contact } from '../types';

interface CallModalProps {
  contact: Contact;
  onClose: () => void;
}

const CallModal: React.FC<CallModalProps> = ({ contact, onClose }) => {
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-8 text-white shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white/10 p-2 backdrop-blur-sm transition hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center">
          <div className="relative mb-6 h-24 w-24">
            <img
              src={contact.avatar}
              alt={contact.name}
              className="h-full w-full rounded-full object-cover"
            />
            <div className="absolute inset-0 animate-pulse rounded-full bg-white/20"></div>
          </div>

          <h3 className="mb-2 text-xl font-semibold">{contact.name}</h3>
          <p className="mb-6 text-white/80">{formatDuration(callDuration)}</p>

          <div className="flex space-x-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`rounded-full p-4 transition ${
                isMuted ? 'bg-red-500' : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {isMuted ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
            </button>

            <button
              onClick={onClose}
              className="rounded-full bg-red-500 p-4 transition hover:bg-red-600"
            >
              <Phone className="h-6 w-6 rotate-135 transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CallModal;