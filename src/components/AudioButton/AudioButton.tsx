"use client";

import { MicrophoneIcon } from '@heroicons/react/24/outline';

export function AudioButton() {
  return (
    <button
      type="button"
      className="rounded-full bg-black p-2 text-white hover:bg-gray-800"
    >
      <MicrophoneIcon className="h-5 w-5" />
    </button>
  );
}