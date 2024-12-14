import { clsx } from 'clsx';

interface MessageTimestampProps {
  timestamp: Date;
  type: 'user' | 'assistant';
}

export function MessageTimestamp({ timestamp, type }: MessageTimestampProps) {
  return (
    <div 
      className={clsx(
        'mt-1 text-[11px] opacity-0 transition-opacity duration-200 group-hover:opacity-100',
        type === 'user' ? 'text-gray-300' : 'text-gray-400'
      )}
    >
      {timestamp.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
      })}
    </div>
  );
}