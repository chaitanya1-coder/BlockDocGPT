export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  type: 'user' | 'assistant';
}