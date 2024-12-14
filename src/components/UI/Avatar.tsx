"use client";

import { UserCircleIcon } from '@heroicons/react/24/solid';
import { CommandLineIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

interface AvatarProps {
  type: 'user' | 'assistant';
}

export function Avatar({ type }: AvatarProps) {
  return (
    <div className={clsx(
      'flex h-8 w-8 items-center justify-center rounded-full',
      type === 'assistant' ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'
    )}>
      {type === 'user' ? (
        <UserCircleIcon className="h-8 w-8" />
      ) : (
        <CommandLineIcon className="h-5 w-5" />
      )}
    </div>
  );
}