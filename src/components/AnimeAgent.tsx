'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { processAnimeQuery } from '@/lib/animeAgent';

interface Message {
  id: string;
  type: 'user' | 'agent';
  content: string;
  suggestions?: string[];
  timestamp: Date;
}

let messageIdCounter = 1;

function generateId(): string {
  return `msg-${messageIdCounter++}`;
}

// Generate initial greeting message
function getInitialMessages(): Message[] {
  const greeting = processAnimeQuery('hello');
  return [
    {
      id: generateId(),
      type: 'agent',
      content: greeting.text,
      suggestions: greeting.suggestions,
      timestamp: new Date()
    }
  ];
}

export default function AnimeAgent() {
  const [messages, setMessages] = useState<Message[]>(() => getInitialMessages());
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSend = useCallback(async (messageText?: string) => {
    const text = messageText || input.trim();
    if (!text) return;

    const userMessage: Message = {
      id: generateId(),
      type: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate processing delay for realism
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

    const response = processAnimeQuery(text);
    
    const agentMessage: Message = {
      id: generateId(),
      type: 'agent',
      content: response.text,
      suggestions: response.suggestions,
      timestamp: new Date()
    };

    setIsTyping(false);
    setMessages(prev => [...prev, agentMessage]);
    inputRef.current?.focus();
  }, [input]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSend(suggestion);
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto">
      {/* Header */}
      <header className="flex-shrink-0 p-4 border-b border-[#2a2a4e] bg-[#1a1a2e]/80 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ff6b9d] via-[#9d4edd] to-[#00d4ff] p-0.5">
              <div className="w-full h-full rounded-full bg-[#1a1a2e] flex items-center justify-center text-3xl">
                🎌
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1a1a2e]"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold gradient-text">Anime Sensei</h1>
            <p className="text-sm text-gray-400">Your Ultimate Anime Knowledge Agent</p>
          </div>
        </div>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message-animate flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] ${message.type === 'user' ? 'order-1' : 'order-2'}`}>
              {message.type === 'agent' && (
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🎌</span>
                  <span className="text-sm text-[#ff6b9d] font-medium">Anime Sensei</span>
                </div>
              )}
              <div
                className={`rounded-2xl p-4 ${
                  message.type === 'user'
                    ? 'bg-gradient-to-r from-[#9d4edd] to-[#ff6b9d] text-white'
                    : 'bg-[#1a1a2e] border border-[#2a2a4e] text-gray-100'
                }`}
              >
                <div className="whitespace-pre-wrap text-sm leading-relaxed">
                  {message.content.split('\n').map((line, i) => {
                    // Handle markdown-like formatting
                    if (line.startsWith('# ')) {
                      return <h2 key={i} className="text-xl font-bold gradient-text mb-2">{line.slice(2)}</h2>;
                    }
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return <p key={i} className="font-bold text-[#00d4ff]">{line.slice(2, -2)}</p>;
                    }
                    if (line.includes('**')) {
                      const parts = line.split(/\*\*(.*?)\*\*/g);
                      return (
                        <p key={i}>
                          {parts.map((part, j) => 
                            j % 2 === 1 ? <strong key={j} className="text-[#ff6b9d]">{part}</strong> : part
                          )}
                        </p>
                      );
                    }
                    if (line.startsWith('• ')) {
                      return <p key={i} className="ml-2 my-1">{line}</p>;
                    }
                    return <p key={i}>{line}</p>;
                  })}
                </div>
              </div>
              
              {/* Suggestions */}
              {message.suggestions && message.suggestions.length > 0 && message.type === 'agent' && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {message.suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-3 py-1.5 text-xs rounded-full bg-[#2a2a4e] border border-[#3a3a5e] 
                                 text-gray-300 hover:border-[#ff6b9d] hover:text-[#ff6b9d] 
                                 transition-all duration-200 hover:scale-105"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start message-animate">
            <div className="flex items-center gap-2 bg-[#1a1a2e] border border-[#2a2a4e] rounded-2xl px-4 py-3">
              <span className="text-xl">🎌</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-[#ff6b9d] rounded-full typing-dot"></div>
                <div className="w-2 h-2 bg-[#9d4edd] rounded-full typing-dot"></div>
                <div className="w-2 h-2 bg-[#00d4ff] rounded-full typing-dot"></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="flex-shrink-0 px-4 py-2 border-t border-[#2a2a4e]">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {['Recommend anime', 'Tell me about Naruto', 'What is shounen?', 'Best anime studios'].map((action, i) => (
            <button
              key={i}
              onClick={() => handleSend(action)}
              className="flex-shrink-0 px-4 py-2 text-sm rounded-full bg-[#2a2a4e]/50 
                         border border-[#3a3a5e] text-gray-400 hover:text-white 
                         hover:border-[#9d4edd] transition-all duration-200"
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="flex-shrink-0 p-4 border-t border-[#2a2a4e] bg-[#1a1a2e]/80 backdrop-blur-sm">
        <div className="flex gap-3 items-center">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about anime..."
              className="w-full px-5 py-3 bg-[#2a2a4e] border border-[#3a3a5e] rounded-full
                         text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#ff6b9d]
                         focus:ring-2 focus:ring-[#ff6b9d]/20 transition-all duration-200"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
              ⌘ Enter
            </div>
          </div>
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isTyping}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ff6b9d] to-[#9d4edd] 
                       flex items-center justify-center text-white text-xl
                       hover:scale-105 transition-all duration-200 disabled:opacity-50
                       disabled:cursor-not-allowed disabled:hover:scale-100 glow"
          >
            ➤
          </button>
        </div>
        <p className="text-center text-xs text-gray-600 mt-3">
          Anime Sensei knows everything from Dragon Ball to Frieren! 🌸
        </p>
      </div>
    </div>
  );
}
