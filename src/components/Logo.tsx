import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-primary text-white font-bold flex items-center justify-center rounded">
        NR
      </div>
      <span className="font-semibold text-lg text-primary">Natalia <span className="text-accent">Raitomacki</span></span>
    </div>
  );
};

export default Logo;
