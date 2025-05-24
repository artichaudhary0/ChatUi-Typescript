import React from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { X } from 'lucide-react';

interface EmojiPickerProps {
  onEmojiSelect: (emoji: any) => void;
  onClose: () => void;
}

const EmojiPicker: React.FC<EmojiPickerProps> = ({ onEmojiSelect, onClose }) => {
  return (
    <div className="relative rounded-lg bg-white shadow-xl">
      <button
        onClick={onClose}
        className="absolute right-2 top-2 rounded-full p-1 text-gray-500 hover:bg-gray-100"
      >
        <X className="h-4 w-4" />
      </button>
      <Picker
        data={data}
        onEmojiSelect={onEmojiSelect}
        theme="light"
        set="native"
      />
    </div>
  );
};

export default EmojiPicker;