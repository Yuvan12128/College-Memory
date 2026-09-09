import React, { useState, useRef, useEffect } from 'react';
import harleysSong from '../assets/music/harleys-in-hawaii.mp3';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const hasUserPausedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set sound volume to 30%
    audio.volume = 0.3;

    const tryPlay = () => {
      if (hasUserPausedRef.current) return;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          cleanupListeners();
        })
        .catch(() => {
          // Autoplay policy prevented immediate playback, will play on first user interaction
        });
    };

    // 1. Attempt automatic playback immediately on page open
    tryPlay();

    // 2. If browser requires interaction first, start on the very first touch, click, scroll or key
    const onUserInteraction = () => {
      tryPlay();
    };

    const cleanupListeners = () => {
      window.removeEventListener('click', onUserInteraction);
      window.removeEventListener('touchstart', onUserInteraction);
      window.removeEventListener('scroll', onUserInteraction);
      window.removeEventListener('keydown', onUserInteraction);
    };

    window.addEventListener('click', onUserInteraction, { passive: true });
    window.addEventListener('touchstart', onUserInteraction, { passive: true });
    window.addEventListener('scroll', onUserInteraction, { passive: true });
    window.addEventListener('keydown', onUserInteraction, { passive: true });

    return () => {
      cleanupListeners();
    };
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      hasUserPausedRef.current = true;
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      hasUserPausedRef.current = false;
      audioRef.current.volume = 0.3;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Audio playback issue:", err);
        });
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (audioRef.current) {
      const nextMuted = !isMuted;
      audioRef.current.muted = nextMuted;
      if (!nextMuted) {
        audioRef.current.volume = 0.3;
      }
      setIsMuted(nextMuted);
    }
  };

  return (
    <div className="audio-controller-widget" onClick={togglePlay} title="Toggle Background Music">
      <audio
        ref={audioRef}
        src={harleysSong}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={harleysSong} type="audio/mpeg" />
      </audio>

      <button className="audio-icon-btn" aria-label={isPlaying ? "Pause music" : "Play music"}>
        {isPlaying ? '❚❚' : '▶'}
      </button>

      <div className="audio-meta">
        <span className="audio-title">Harleys In Hawaii</span>
        <span className="audio-sub">{isPlaying ? 'Playing softly (30%)' : 'Tap to play music'}</span>
      </div>

      <div className={`sound-bars ${isPlaying ? 'active' : ''}`}>
        <span className="sound-bar"></span>
        <span className="sound-bar"></span>
        <span className="sound-bar"></span>
      </div>

      {isPlaying && (
        <button
          className="btn btn-sm btn-link text-decoration-none p-0 ms-1 text-muted"
          onClick={toggleMute}
          title={isMuted ? "Unmute" : "Mute"}
          style={{ fontSize: '0.85rem' }}
        >
          {isMuted ? '🔇' : '🔉'}
        </button>
      )}
    </div>
  );
}
