import { useMemo } from 'react';

interface MessageContentProps {
  content: string;
  type: 'user' | 'assistant';
}

export function MessageContent({ content, type }: MessageContentProps) {
  const formattedContent = useMemo(() => {
    if (type === 'assistant' && content.startsWith('<')) {
      return (
        <div 
          className="prose prose-sm max-w-none prose-pre:bg-gray-800 prose-pre:text-gray-100"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      );
    }
    return <p className="whitespace-pre-wrap leading-relaxed">{content}</p>;
  }, [content, type]);

  return formattedContent;
}