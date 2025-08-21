
import React from 'react';
import Loader from './Loader';

interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, isLoading, error }) => {
  const renderContent = () => {
    if (isLoading) {
      return <Loader />;
    }
    if (error) {
      return <p className="text-red-400 text-center p-4 bg-red-900/50 border-2 border-red-500">{error}</p>;
    }
    if (imageUrl) {
      return (
        <img
          src={imageUrl}
          alt="Generated pixel art"
          className="pixelated w-full h-full object-contain"
        />
      );
    }
    return (
      <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-lg">Your generated art will appear here.</p>
        <p className="text-sm mt-1">Enter a prompt and click generate!</p>
      </div>
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto aspect-square bg-gray-900/50 border-4 border-cyan-400 p-2 flex items-center justify-center shadow-lg">
      {renderContent()}
    </div>
  );
};

export default ImageDisplay;
