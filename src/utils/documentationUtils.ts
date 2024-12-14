import { marked } from 'marked';
import { simulateApiResponse } from './mockApi';

export async function generateDocumentation(prompt: string): Promise<string> {
  try {
    const response = await simulateApiResponse(prompt);
    return marked.parse(response);
  } catch (error) {
    console.error('Error generating documentation:', error);
    return '<p>Sorry, I encountered an error while generating the documentation.</p>';
  }
}