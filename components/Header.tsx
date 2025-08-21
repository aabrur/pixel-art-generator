
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 border-b-4 border-purple-600 shadow-lg py-4">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-yellow-300 drop-shadow-[3px_3px_0_rgba(147,51,234,1)]">
          PIXEL ART GENERATOR
        </h1>
        <p className="text-sm text-cyan-400 mt-2">Powered by Google Imagen</p>
      </div>
    </header>
  );
};

export default Header;
