import React from "react";
import { formatDistanceToNow } from "../utils/dateUtils";
import { useChat } from "../context/ChatContext";
import { Contact } from "../types";

interface ContactItemProps {
  contact: Contact;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  const { activeContact, setActiveContact } = useChat();
  const isActive = activeContact?.id === contact.id;

  // Status indicator color based on status
  const statusColor = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    away: "bg-yellow-500",
  }[contact.status];

  return (
    <div
      className={`cursor-pointer border-b border-gray-100 p-4 transition hover:bg-gray-50 ${
        isActive ? "bg-indigo-50" : ""
      }`}
      onClick={() => setActiveContact(contact)}
    >
      <div className="flex items-center">
        {/* Avatar with status indicator */}
        <div className="relative mr-3 h-12 w-12 flex-shrink-0">
          <img
            src={contact.avatar}
            alt={contact.name}
            className="h-full w-full rounded-full object-cover"
          />
          <div
            className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${statusColor}`}
          ></div>
        </div>

        {/* Contact details */}
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center justify-between">
            <h3
              className={`truncate text-sm font-medium ${
                isActive
                  ? "text-black"
                  : "text-gray-900 dark:text-white group-hover:text-black"
              }`}
            >
              {contact.name}
            </h3>

            {contact.lastMessageTime && (
              <p className="text-xs text-gray-500">
                {formatDistanceToNow(contact.lastMessageTime)}
              </p>
            )}
          </div>

          {contact.lastMessage && (
            <p className="mt-1 truncate text-xs text-gray-500">
              {contact.lastMessage}
            </p>
          )}
        </div>

        {/* Unread count */}
        {contact.unreadCount > 0 && (
          <div className="ml-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-medium text-white">
            {contact.unreadCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactItem;
