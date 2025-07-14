import React, { useState } from 'react';
import { Image } from 'lucide-react';

const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    // Mock API call
    setGeneratedImage('https://source.unsplash.com/random/400x300/?' + encodeURIComponent(prompt));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-heading">Text to Image</h2>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-2 rounded bg-background text-foreground border border-neutral"
        placeholder="Enter prompt for image..."
      />
      <button onClick={handleGenerate} className="p-2 bg-primary text-primary-foreground rounded flex items-center space-x-2">
        <Image className="h-5 w-5" /> <span>Generate</span>
      </button>
      {generatedImage && <img src={generatedImage} alt="Generated" className="max-w-full rounded shadow-lg" />}
    </div>
  );
};

export default ImageGenerator;