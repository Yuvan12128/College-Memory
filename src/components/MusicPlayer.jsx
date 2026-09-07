import React, { useState, useRef } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const audioCtxRef = useRef(null);
  const synthIntervalRef = useRef(null);

  // Soft romantic progression frequencies
  const notes = [261.63, 329.63, 392.00, 523.25, 293.66, 369.99, 440.00, 587.33];
  let noteIndex = 0;

  const playSynthNote = (freq) => {
    if (!audioCtxRef.current || isMuted) return;
    try {
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.0);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 2.1);
    } catch (e) {
      // AudioContext fallback
    }
  };

  const startSynth = () => {
    if (synthIntervalRef.current) clearInterval(synthIntervalRef.current);
    synthIntervalRef.current = setInterval(() => {
      const freq = notes[noteIndex % notes.length];
      playSynthNote(freq);
      noteIndex++;
    }, 700);
  };

  const stopSynth = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
  };

  const togglePlay = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    if (isPlaying) {
      setIsPlaying(false);
      stopSynth();
      if (audioRef.current) audioRef.current.pause();
    } else {
      setIsPlaying(true);
      if (audioRef.current && audioRef.current.currentSrc) {
        audioRef.current.play().catch(() => {
          startSynth();
        });
      } else {
        startSynth();
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="audio-controller-widget" onClick={togglePlay} title="Toggle Background Music">
      <audio ref={audioRef} loop preload="none">
        <source src="/music/bgm.mp3" type="audio/mp3" />
      </audio>

      <button className="audio-icon-btn" aria-label={isPlaying ? "Pause music" : "Play music"}>
        {isPlaying ? '❚❚' : '▶'}
      </button>

      <div className="audio-meta">
        <span className="audio-title">Soft Melody</span>
        <span className="audio-sub">{isPlaying ? 'Playing softly' : 'Tap to play music'}</span>
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
