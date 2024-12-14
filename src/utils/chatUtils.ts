import { simulateApiResponse } from './mockApi';

export async function generateChatResponse(message: string): Promise<string> {
  try {
    return await simulateApiResponse(message);
  } catch (error) {
    console.error('Error generating chat response:', error);
    return "Sorry, I encountered an error while processing your request.";
  }
}