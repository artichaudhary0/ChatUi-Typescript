import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useChat } from '../context/ChatContext';
import ContactItem from './ContactItem';

const ContactSidebar: React.FC = () => {
  const { contacts } = useChat();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 p-4">
      <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent dark:from-indigo-300 dark:to-purple-400">
  Messages
</h2>

  </div>
      
      {/* Search */}
      <div className="border-b border-gray-200 p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search contacts..."
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 pl-10 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
      </div>
      
      {/* Contact List */}
      <div className="flex-1 overflow-y-auto">
        {filteredContacts.length > 0 ? (
          filteredContacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        ) : (
          <div className="flex h-full items-center justify-center p-4">
            <p className="text-center text-gray-500">No contacts found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactSidebar;