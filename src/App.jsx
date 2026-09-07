import React from 'react';
import Navigation from './components/Navigation';
import MusicPlayer from './components/MusicPlayer';
import Hero from './components/Hero';
import StoryTimeline from './components/StoryTimeline';
import LittleThings from './components/LittleThings';
import CallSection from './components/CallSection';
import SupportSection from './components/SupportSection';
import MutualSupport from './components/MutualSupport';
import AppreciationCards from './components/AppreciationCards';
import WhatAreWe from './components/WhatAreWe';
import FinalLetter from './components/FinalLetter';
import FinalMessage from './components/FinalMessage';
import { LightboxProvider } from './context/LightboxContext';

export default function App() {
  const handleBeginStory = () => {
    const el = document.getElementById('college-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LightboxProvider>
      <div className="app-root">
      {/* Minimal Top Navigation */}
      <Navigation />

      {/* Discreet Audio Controller */}
      <MusicPlayer />

      {/* 01 — Opening */}
      <Hero onBeginStory={handleBeginStory} />

      {/* 02 — It Started In College */}
      <StoryTimeline />

      {/* 03 — Little Things */}
      <LittleThings />

      {/* 04 — The Calls */}
      <CallSection />

      {/* 05 — You Were There */}
      <SupportSection />

      {/* 06 — We Were There For Each Other */}
      <MutualSupport />

      {/* 07 — Things I Genuinely Like About You */}
      <AppreciationCards />

      {/* 08 — What Are We? */}
      <WhatAreWe />

      {/* 09 — A Letter For You */}
      <FinalLetter />

      {/* 10 — Final Message */}
      <FinalMessage />
    </div>
  </LightboxProvider>
  );
}
