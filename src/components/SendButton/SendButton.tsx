"use client";

import { ArrowUpIcon } from '@heroicons/react/24/outline';

export function SendButton() {
  return (
    <button
      type="submit"
      className="rounded-full bg-black p-2 text-white hover:bg-gray-800"
      aria-label="Send message"
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
}