
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 relative">
            <div className="box-border block absolute w-16 h-16 m-2 border-8 border-yellow-300 animate-spin"></div>
        </div>
        <p className="mt-6 text-lg text-yellow-300">Generating Pixels...</p>
    </div>
  );
};

export default Loader;
