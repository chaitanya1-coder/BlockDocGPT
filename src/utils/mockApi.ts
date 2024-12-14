// Simulated API responses for development
const MOCK_RESPONSES = {
  documentation: `# Component Documentation

## Overview
This is a sample documentation response that demonstrates markdown formatting.

## Usage Example
\`\`\`jsx
import { Button } from './Button';

function App() {
  return (
    <Button variant="primary" onClick={() => alert('Clicked!')}>
      Click me
    </Button>
  );
}
\`\`\`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' | 'primary' | The visual style of the button |
| onClick | () => void | - | Function called when button is clicked |
| children | ReactNode | - | Content to display inside the button |

## Notes
- Fully accessible with keyboard navigation
- Supports all ARIA attributes
- Customizable through Tailwind classes`,
  chat: "I'm your AI assistant. I can help you with coding questions, documentation, and general development queries. Feel free to ask anything!"
};

export async function simulateApiResponse(prompt: string): Promise<string> {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  if (prompt.toLowerCase().includes('documentation')) {
    return MOCK_RESPONSES.documentation;
  }
  return MOCK_RESPONSES.chat;
}