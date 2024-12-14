import { marked } from 'marked';

// Configure marked options
marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: true,
  mangle: false,
  sanitize: false,
  smartLists: true,
  smartypants: true,
  xhtml: true
});

export function parseMarkdown(content: string): string {
  return marked.parse(content);
}