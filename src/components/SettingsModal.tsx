import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, X, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SettingsModalProps {
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ onClose }) => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { 
      id: 'light',
      name: 'Light',
      icon: <Sun className="h-5 w-5" />,
      description: 'Clean and bright interface',
      colors: ['bg-white', 'bg-gray-100', 'bg-indigo-500']
    },
    { 
      id: 'dark',
      name: 'Dark',
      icon: <Moon className="h-5 w-5" />,
      description: 'Easy on the eyes',
      colors: ['bg-gray-900', 'bg-gray-800', 'bg-indigo-500']
    }
  ];

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
        className="relative w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-xl"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">Settings</h2>

        {/* Theme Selection */}
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">Theme</h3>
          <div className="grid grid-cols-1 gap-3">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id as 'light' | 'dark')}
                className={`relative flex items-center rounded-lg border p-4 transition ${
                  theme === t.id
                    ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10'
                    : 'border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`rounded-full p-2 ${
                    theme === t.id 
                      ? 'bg-indigo-500 text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                  }`}>
                    {t.icon}
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900 dark:text-white">{t.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.description}</p>
                  </div>
                </div>
                {theme === t.id && (
                  <div className="absolute right-4 text-indigo-500">
                    <Check className="h-5 w-5" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SettingsModal;