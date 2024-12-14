"use client";

import { clsx } from 'clsx';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  className?: string;
  onClick?: () => void;
}

export function Button({ 
  children, 
  variant = 'primary', 
  type = 'button',
  className,
  onClick 
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'rounded-full p-2 transition-all duration-200 ease-in-out',
        variant === 'primary' && 'bg-black text-white hover:bg-gray-800',
        variant === 'secondary' && 'text-gray-400 hover:text-gray-600',
        className
      )}
    >
      {children}
    </button>
  );
}