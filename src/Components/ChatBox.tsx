import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useStore } from '../store/useStore.ts';

const ChatBox: React.FC = () => {
  const [input, setInput] = useState('');
  const messages = useStore((state) => state.messages);
  const addMessage = useStore((state) => state.addMessage);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addMessage({ text: input, sender: 'user' });
      // Mock AI response or generation trigger
      addMessage({ text: `Generated from: ${input}`, sender: 'ai' });
      setInput('');
    }
  };

  return (
    <div className="bg-secondary p-4 rounded-lg shadow-lg">
      <div className="h-64 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 rounded ${msg.sender === 'user' ? 'bg-accent text-right' : 'bg-neutral'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded bg-background text-foreground border border-neutral"
          placeholder="Type your prompt..."
        />
        <button type="submit" className="p-2 bg-primary text-primary-foreground rounded">
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default ChatBox;