import React from 'react';
import { Check, CheckCheck } from 'lucide-react';
import { formatTime } from '../utils/dateUtils';
import { Message, Contact } from '../types';

interface MessageBubbleProps {
  message: Message;
  contact: Contact;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, contact }) => {
  const isSender = message.senderId === 'user';

  // Message status icon
  const StatusIcon = () => {
    if (message.status === 'sent') return <Check className="h-3.5 w-3.5" />;
    if (message.status === 'delivered' || message.status === 'read')
      return <CheckCheck className="h-3.5 w-3.5" />;
    return null;
  };

  return (
    <div
      className={`flex items-end ${
        isSender ? 'justify-end' : 'justify-start'
      } space-x-2`}
    >
      {/* Avatar for received messages */}
      {!isSender && (
        <div className="h-8 w-8 flex-shrink-0 rounded-full">
          <img
            src={contact.avatar}
            alt={contact.name}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      )}

      {/* Message bubble */}
      <div
        className={`max-w-xs space-y-1 ${
          isSender ? 'order-1' : 'order-2'
        }`}
      >
        <div
          className={`inline-block rounded-2xl px-4 py-2 ${
            isSender
              ? 'rounded-br-none bg-indigo-600 text-white'
              : 'rounded-tl-none bg-gray-200 text-gray-800'
          }`}
        >
          <p className="text-sm">{message.content}</p>
        </div>

        {/* Timestamp and status */}
        <div
          className={`flex items-center text-xs ${
            isSender ? 'justify-end text-gray-500' : 'justify-start text-gray-500'
          }`}
        >
          <span>{formatTime(message.timestamp)}</span>
          {isSender && (
            <span className="ml-1 text-indigo-600">
              <StatusIcon />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;