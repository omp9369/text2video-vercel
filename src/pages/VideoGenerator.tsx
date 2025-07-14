import React, { useState } from 'react';
import { Video } from 'lucide-react';

const VideoGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);

  const handleGenerate = async () => {
    // Mock video (use a placeholder URL)
    setGeneratedVideo('https://www.w3schools.com/html/mov_bbb.mp4');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-heading">Text to Video</h2>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-2 rounded bg-background text-foreground border border-neutral"
        placeholder="Enter prompt for video..."
      />
      <button onClick={handleGenerate} className="p-2 bg-primary text-primary-foreground rounded flex items-center space-x-2">
        <Video className="h-5 w-5" /> <span>Generate</span>
      </button>
      {generatedVideo && (
        <video controls className="max-w-full rounded shadow-lg">
          <source src={generatedVideo} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default VideoGenerator;