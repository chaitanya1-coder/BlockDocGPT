"use client";

import { clsx } from 'clsx';
import { Message } from '@/types/chat';
import { MessageContent } from './MessageContent';
import { MessageTimestamp } from './MessageTimestamp';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <div
      className={clsx(
        'group relative max-w-[85%] transform rounded-2xl px-4 py-3 transition-all duration-200',
        message.type === 'user' 
          ? 'ml-auto bg-black text-white' 
          : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
      )}
    >
      <MessageContent content={message.content} type={message.type} />
      <MessageTimestamp timestamp={message.timestamp} type={message.type} />
    </div>
  );
}