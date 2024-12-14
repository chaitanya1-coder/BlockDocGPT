const DOC_KEYWORDS = [
  'write documentation',
  'create docs',
  'generate documentation',
  'write docs',
  'document this'
] as const;

export function isDocumentationRequest(message: string): boolean {
  return DOC_KEYWORDS.some(keyword => 
    message.toLowerCase().includes(keyword)
  );
}

export function extractDocumentationPrompt(message: string): string {
  let prompt = message.toLowerCase();
  
  for (const keyword of DOC_KEYWORDS) {
    if (prompt.includes(keyword)) {
      prompt = prompt.replace(keyword, '').trim();
      break;
    }
  }
  
  return prompt;
}