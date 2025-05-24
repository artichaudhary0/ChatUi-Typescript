import React from 'react';
import ChatLayout from './components/ChatLayout';
import { ChatProvider } from './context/ChatContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ThemeProvider>
        <ChatProvider>
          <ChatLayout />
        </ChatProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;