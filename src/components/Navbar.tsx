import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  return (
    <header className="w-full py-4 px-6 md:px-10 border-b border-border bg-background">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <Logo />
        <nav className="flex items-center gap-2">
          <div className="flex gap-1 bg-secondary rounded-md overflow-hidden">
            <Link 
              to="/" 
              className="px-4 py-2 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Create Proposal
            </Link>
            <Link 
              to="/dashboard" 
              className="px-4 py-2 text-primary text-sm font-medium hover:bg-secondary/80 transition-colors"
            >
              Dashboard
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
