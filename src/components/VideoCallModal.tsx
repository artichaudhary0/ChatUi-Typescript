import React from 'react';
import { motion } from 'framer-motion';
import { X, Mic, MicOff, Video, VideoOff, PhoneOff } from 'lucide-react';
import { Contact } from '../types';

interface VideoCallModalProps {
  contact: Contact;
  onClose: () => void;
}

const VideoCallModal: React.FC<VideoCallModalProps> = ({ contact, onClose }) => {
  const [isMuted, setIsMuted] = React.useState(false);
  const [isVideoOff, setIsVideoOff] = React.useState(false);

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
        className="relative h-[80vh] w-[90vw] max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 to-purple-900 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Main video area */}
        <div className="relative h-full w-full">
          {/* Remote video (full screen) */}
          <div className="h-full w-full bg-black">
            <img
              src={contact.avatar}
              alt={contact.name}
              className="h-full w-full object-cover opacity-50"
            />
            <div className="absolute left-4 top-4 text-xl font-semibold text-white">
              {contact.name}
            </div>
          </div>

          {/* Local video (picture-in-picture) */}
          <div className="absolute bottom-4 right-4 h-48 w-64 overflow-hidden rounded-lg bg-black/50 shadow-lg">
            <div className="h-full w-full bg-gradient-to-br from-indigo-600 to-purple-600"></div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`rounded-full p-4 text-white transition ${
                isMuted ? 'bg-red-500' : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {isMuted ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
            </button>

            <button
              onClick={onClose}
              className="rounded-full bg-red-500 p-4 text-white transition hover:bg-red-600"
            >
              <PhoneOff className="h-6 w-6" />
            </button>

            <button
              onClick={() => setIsVideoOff(!isVideoOff)}
              className={`rounded-full p-4 text-white transition ${
                isVideoOff ? 'bg-red-500' : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {isVideoOff ? <VideoOff className="h-6 w-6" /> : <Video className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VideoCallModal;