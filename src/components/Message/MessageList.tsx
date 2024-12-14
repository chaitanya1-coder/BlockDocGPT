"use client";

import { Message } from '@/types/chat';
import { MessageGroup } from './MessageGroup';
import { groupMessagesByDate } from '@/utils/messageUtils';

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  const groupedMessages = groupMessagesByDate(messages);

  return (
    <div className="space-y-8 py-4">
      {groupedMessages.map((group) => (
        <div key={group.date} className="space-y-6">
          <div className="sticky top-0 z-10 flex justify-center">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
              {group.date}
            </span>
          </div>
          <MessageGroup messages={group.messages} />
        </div>
      ))}
    </div>
  );
}