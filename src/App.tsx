import React, { useState, useRef, useEffect } from 'react';
import Hero from './components/Hero';
import NotionBlock from './components/NotionBlock';
import { MapPin, Music, Coffee, CableCar, CupSoda, House, Play, Pause } from 'lucide-react';
import SkiingBear from './components/SkiingBear';
import yhxAudio from './assets/yhx.mp3';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(yhxAudio);
    audioRef.current.addEventListener('ended', () => setIsPlaying(false));
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-color)] px-6 py-12 md:py-20">
      <main className="max-w-4xl mx-auto"> {/* Increased max-w to accommodate side-by-side */}
        <Hero />

        <div className="max-w-2xl">
          <NotionBlock type="text">
            I build AI agents and tools designed to delete the "boring work" from people's lives. My focus is applying LLMs to create products that people are actually excited to use. Tools that feel less like software and more like magic in real life.
          </NotionBlock>
        </div>


        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="flex-1">
            <NotionBlock type="h2">A LITTLE MORE ABOUT ME</NotionBlock>

            <div className="space-y-1">
              <NotionBlock type="list-item" icon={<MapPin size={18} />}>
                <span className="font-mono">San Francisco Bay Area, CA</span>
              </NotionBlock>
              <NotionBlock type="list-item" icon={<House size={18} />}>
                <span className="font-mono">Vancouver, BC</span>
              </NotionBlock>
              <NotionBlock type="list-item" icon={<CableCar size={18} />}>
                <span className="font-mono">Skiing Enthusiast</span>
              </NotionBlock>
              <NotionBlock type="list-item" icon={<CupSoda size={18} />}>
                <span className="font-mono">Iced Strawberry Matcha Enjoyer</span>
              </NotionBlock>
              <NotionBlock type="list-item" icon={<Music size={18} />}>
                <div className="flex items-center gap-2">
                  <span className="font-mono">For You - Yan Haoxiang</span>
                  <button
                    onClick={togglePlay}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-600 hover:text-gray-900"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                  </button>
                </div>
              </NotionBlock>
            </div>
          </div>

          <div className="hidden md:block">
            <SkiingBear />
          </div>
        </div>

        <div className="h-px bg-gray-200 mt-16 mb-10 w-full" />

        <footer className="flex flex-wrap gap-6 text-[var(--text-secondary)] text-base font-medium">
          <a href="https://linkedin.com/in/zjayee" className="hover:text-[var(--text-main)] transition-colors">LinkedIn</a>
          <a href="https://github.com/zjayee" className="hover:text-[var(--text-main)] transition-colors">GitHub</a>
        </footer>

        <div className="mt-8 text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()} · Made with &lt;3
        </div>
      </main>
    </div>
  );
}

export default App;
