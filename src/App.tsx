import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header.tsx';
import ChatBox from './components/ChatBox.tsx';
import ImageGenerator from './pages/ImageGenerator.tsx';
import VideoGenerator from './pages/VideoGenerator.tsx';
import SpeechGenerator from './pages/SpeechGenerator.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<ChatBox />} />
          <Route path="/image" element={<ImageGenerator />} />
          <Route path="/video" element={<VideoGenerator />} />
          <Route path="/speech" element={<SpeechGenerator />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;