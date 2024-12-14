export function WelcomeScreen() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="mb-8 text-4xl font-bold text-gray-900">
        Welcome to BlockDocGPT
      </div>
      <div className="max-w-md space-y-4 text-gray-500">
        <p>
          Your intelligent assistant for documentation and development.
        </p>
        <div className="rounded-lg bg-gray-50 p-4 text-sm">
          <p className="mb-2 font-medium text-gray-700">Try asking me to:</p>
          <ul className="list-disc space-y-2 pl-4 text-gray-600">
            <li>Write documentation for a React component</li>
            <li>Generate API documentation</li>
            <li>Create usage examples</li>
            <li>Explain code snippets</li>
          </ul>
        </div>
      </div>
    </div>
  );
}