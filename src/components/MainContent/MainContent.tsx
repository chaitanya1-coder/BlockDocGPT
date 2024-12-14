"use client";

import { Message } from '@/types/chat';
import { MessageList } from './MessageList';
import { WelcomeScreen } from './WelcomeScreen';

interface MainContentProps {
  messages: Message[];
}

export function MainContent({ messages }: MainContentProps) {
  return (
    <main className="flex-1 overflow-y-auto bg-white px-4">
      <div className="mx-auto max-w-4xl">
        {messages.length === 0 ? (
          <WelcomeScreen />
        ) : (
          <MessageList messages={messages} />
        )}
      </div>
    </main>
  );
}