"use client";

import { PaperClipIcon } from '@heroicons/react/24/outline';

export function AttachmentButton() {
  return (
    <button
      type="button"
      className="p-2 text-gray-400 hover:text-gray-600"
      aria-label="Attach file"
    >
      <PaperClipIcon className="h-5 w-5" />
    </button>
  );
}