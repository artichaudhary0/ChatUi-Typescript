import React, { useState } from 'react';
import { Send, Plus, Sparkles, X } from 'lucide-react';
import { useChat } from '../context/ChatContext';
import { formatRelativeTime } from '../utils/dateUtils';

interface AIComposerProps {
  onClose?: () => void;
}

const AIComposer: React.FC<AIComposerProps> = ({ onClose }) => {
  const { currentQuestion, aiResponses, askAI, setCurrentQuestion, addAIResponseToMessage } = useChat();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentQuestion.trim()) return;
    
    setIsSubmitting(true);
    setIsTyping(true);
    
    // Simulate AI typing
    await new Promise(resolve => setTimeout(resolve, 1000));
    askAI(currentQuestion);
    
    setIsSubmitting(false);
    setTimeout(() => setIsTyping(false), 2000);
  };

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-indigo-500 to-purple-500 p-4">
        <div className="flex items-center space-x-2">
          <Sparkles className="h-5 w-5 text-white" />
          <h2 className="text-xl font-semibold text-white">AI Composer</h2>
        </div>
        <p className="mt-1 text-sm text-white/80">
          Ask a question and add the answer to your message
        </p>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-2 top-2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
      
      {/* Question Input */}
      <div className="border-b border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="relative">
            <textarea
              placeholder="Ask AI something..."
              className="h-20 w-full resize-none rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-3 text-sm text-gray-900 dark:text-gray-100 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
              value={currentQuestion}
              onChange={(e) => setCurrentQuestion(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={!currentQuestion.trim() || isSubmitting}
            className={`flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-medium text-white transition ${
              !currentQuestion.trim() || isSubmitting
                ? 'cursor-not-allowed opacity-50'
                : 'hover:from-indigo-600 hover:to-purple-600'
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                <span>Thinking...</span>
              </div>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                <span>Ask AI</span>
              </>
            )}
          </button>
        </form>
      </div>
      
      {/* AI Responses */}
      <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-800 p-4">
        <h3 className="mb-2 text-xs font-medium uppercase text-gray-500 dark:text-gray-400">Recent AI Responses</h3>
        {aiResponses.length > 0 ? (
          <div className="space-y-3">
            {aiResponses.map((response, index) => (
              <div
                key={response.id}
                className={`relative rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-3 shadow-sm transition hover:shadow-md ${
                  isTyping && index === 0 ? 'animate-pulse' : ''
                }`}
              >
                <div className="mb-1 text-xs font-medium text-indigo-600 dark:text-indigo-400">
                  {response.question}
                </div>
                <div className="text-sm text-gray-800 dark:text-gray-200">
                  {isTyping && index === 0 ? (
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-indigo-500 [animation-delay:0.2s]"></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-indigo-500 [animation-delay:0.3s]"></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-indigo-500 [animation-delay:0.4s]"></div>
                    </div>
                  ) : (
                    response.answer
                  )}
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {formatRelativeTime(response.timestamp)}
                  </span>
                  <button
                    onClick={() => addAIResponseToMessage(response)}
                    className="flex items-center rounded-full bg-indigo-50 dark:bg-indigo-900/50 px-2 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 transition hover:bg-indigo-100 dark:hover:bg-indigo-900/70"
                  >
                    <Plus className="mr-1 h-3 w-3" />
                    Add to chat
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              No AI responses yet. Ask a question to get started.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIComposer;