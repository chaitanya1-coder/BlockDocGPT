"use client";

import { Message } from '@/types/chat';
import clsx from 'clsx';

interface MessageItemProps {
  message: Message;
}

export function MessageItem({ message }: MessageItemProps) {
  return (
    <div
      className={clsx(
        'rounded-lg p-4',
        message.type === 'user'
          ? 'bg-blue-500 text-white ml-auto'
          : 'bg-gray-100 text-gray-900'
      )}
    >
      <p>{message.content}</p>
      <time className="text-xs opacity-75">
        {message.timestamp.toLocaleTimeString()}
      </time>
    </div>
  );
}