"use client";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-100 bg-white/80 p-4 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        <div className="text-lg font-semibold text-gray-900">
          BlockDocGPT
        </div>
      </div>
    </header>
  );
}