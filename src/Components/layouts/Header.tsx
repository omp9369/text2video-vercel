import React from 'react';
import { Link } from 'react-router-dom';
import { Bot } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Bot className="h-6 w-6" />
        <h1 className="text-xl font-heading">GenAI Media</h1>
      </div>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Chat</Link>
        <Link to="/image" className="hover:underline">Image</Link>
        <Link to="/video" className="hover:underline">Video</Link>
        <Link to="/speech" className="hover:underline">Speech</Link>
      </nav>
    </header>
  );
};

export default Header;