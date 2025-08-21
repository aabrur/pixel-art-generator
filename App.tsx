
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PromptInput from './components/PromptInput';
import ImageDisplay from './components/ImageDisplay';
import { generatePixelArt } from './services/geminiService';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('A majestic castle on a floating island, 8-bit');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt || isLoading) return;

    setIsLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const generatedImageUrl = await generatePixelArt(prompt);
      setImageUrl(generatedImageUrl);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Failed to generate art. ${errorMessage}`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-teal-300">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="w-full max-w-2xl">
          <PromptInput
            prompt={prompt}
            setPrompt={setPrompt}
            onSubmit={handleGenerate}
            isLoading={isLoading}
          />
          <ImageDisplay
            imageUrl={imageUrl}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
