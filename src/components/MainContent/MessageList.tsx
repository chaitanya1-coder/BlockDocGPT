"use client";

import { Message } from '@/types/chat';
import { MessageGroup } from '../Message/MessageGroup';

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <div className="space-y-8 py-4">
      <MessageGroup messages={messages} />
    </div>
  );
}