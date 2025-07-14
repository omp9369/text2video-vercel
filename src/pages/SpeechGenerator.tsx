import React, { useState } from 'react';
import { Mic } from 'lucide-react';

const SpeechGenerator: React.FC = () => {
  const [text, setText] = useState('');

  const handleGenerate = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-heading">Text to Speech</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 rounded bg-background text-foreground border border-neutral"
        placeholder="Enter text for speech..."
        rows={4}
      />
      <button onClick={handleGenerate} className="p-2 bg-primary text-primary-foreground rounded flex items-center space-x-2">
        <Mic className="h-5 w-5" /> <span>Speak</span>
      </button>
    </div>
  );
};

export default SpeechGenerator;