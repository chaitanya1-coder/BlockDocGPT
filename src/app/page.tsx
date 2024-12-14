"use client";

import { useState } from 'react';
import { Header } from '@/components/Header/Header';
import { MainContent } from '@/components/MainContent/MainContent';
import { ChatInput } from '@/components/ChatInput/ChatInput';
import { Message } from '@/types/chat';
import { generateAssistantResponse } from '@/utils/assistantUtils';

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      timestamp: new Date(),
      type: 'user'
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate assistant response
    const assistantMessage = await generateAssistantResponse(content);
    setMessages(prev => [...prev, assistantMessage]);
  };

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <MainContent messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}