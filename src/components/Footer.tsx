
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-4 px-6 md:px-10 border-t border-border bg-background">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>Proposal Generator © 2025 Penridge Media</p>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <span className="text-xs">Edit with</span>
          <span className="text-white flex items-center gap-1">
            <span className="text-forest">❤</span> Lovable
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
