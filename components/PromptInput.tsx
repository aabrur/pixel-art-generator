
import React from 'react';

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };
    
  return (
    <div className="mb-8 p-4 bg-gray-800 border-4 border-purple-600 shadow-inner">
      <label htmlFor="prompt-input" className="block text-lg mb-2 text-yellow-300">
        Enter Your Prompt:
      </label>
      <textarea
        id="prompt-input"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="e.g., A knight fighting a dragon"
        disabled={isLoading}
        className="w-full h-24 p-2 bg-gray-900 border-2 border-cyan-400 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-200"
      />
      <button
        onClick={onSubmit}
        disabled={isLoading || !prompt}
        className="mt-4 w-full py-3 px-4 text-lg font-bold bg-yellow-400 text-purple-900 border-b-4 border-yellow-600 hover:bg-yellow-300 hover:border-yellow-500 disabled:bg-gray-600 disabled:text-gray-400 disabled:border-gray-700 disabled:cursor-not-allowed transform hover:-translate-y-0.5 transition-all duration-150 active:translate-y-0.5 active:border-b-2"
      >
        {isLoading ? 'Generating...' : 'GENERATE'}
      </button>
    </div>
  );
};

export default PromptInput;
