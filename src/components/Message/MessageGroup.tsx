"use client";

import { Message } from '@/types/chat';
import { MessageBubble } from './MessageBubble';
import { Avatar } from '../UI/Avatar';

interface MessageGroupProps {
  messages: Message[];
}

export function MessageGroup({ messages }: MessageGroupProps) {
  return (
    <div className="space-y-6">
      {messages.map((message) => (
        <div key={message.id} className="flex items-start gap-3">
          {message.type === 'assistant' && (
            <Avatar type="assistant" />
          )}
          <MessageBubble message={message} />
          {message.type === 'user' && (
            <Avatar type="user" />
          )}
        </div>
      ))}
    </div>
  );
}