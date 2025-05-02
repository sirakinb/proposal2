
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-forest text-white font-bold flex items-center justify-center rounded">
        BC
      </div>
      <span className="font-semibold text-lg text-white">Business Credit <span className="text-gold">Blueprint</span></span>
    </div>
  );
};

export default Logo;
