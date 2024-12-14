"use client";

import { useState, useRef, useEffect } from 'react';
import { PaperClipIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';
import { Button } from '../UI/Button';
import { useAutoResizeTextarea } from '@/hooks/useAutoResizeTextarea';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const textareaRef = useAutoResizeTextarea(message);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-t border-gray-100 bg-white p-4 shadow-lg">
      <form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
        <div className={clsx(
          'relative overflow-hidden rounded-2xl border transition-all duration-200',
          isTyping ? 'border-black' : 'border-gray-200'
        )}>
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setIsTyping(e.target.value.length > 0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Message BlockDocGPT..."
            className="max-h-[200px] w-full resize-none bg-white p-4 pr-24 focus:outline-none"
            rows={1}
          />
          <div className="absolute bottom-2 right-2 flex items-center space-x-2">
            <Button variant="secondary">
              <PaperClipIcon className="h-5 w-5" />
            </Button>
            <Button 
              type="submit" 
              variant="primary"
              className={clsx(
                'transform transition-all duration-200',
                !isTyping && 'opacity-50'
              )}
            >
              <ArrowUpIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="mt-2 text-center text-xs text-gray-400">
          Press Enter to send • Shift + Enter for new line
        </div>
      </form>
    </div>
  );
}