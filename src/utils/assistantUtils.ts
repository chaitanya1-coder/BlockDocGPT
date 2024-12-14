import { Message } from '@/types/chat';
import { generateChatResponse } from './chatUtils';
import { generateDocumentation } from './documentationUtils';
import { isDocumentationRequest, extractDocumentationPrompt } from './promptUtils';

export async function generateAssistantResponse(userMessage: string): Promise<Message> {
  let content: string;

  try {
    if (isDocumentationRequest(userMessage)) {
      content = await generateDocumentation(extractDocumentationPrompt(userMessage));
    } else {
      content = await generateChatResponse(userMessage);
    }
  } catch (error) {
    console.error('Error generating assistant response:', error);
    content = 'Sorry, I encountered an error while processing your request.';
  }

  return {
    id: Date.now().toString(),
    content,
    timestamp: new Date(),
    type: 'assistant'
  };
}