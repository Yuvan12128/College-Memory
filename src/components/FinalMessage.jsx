import React from 'react';
import { storyData } from '../data/story';

export default function FinalMessage() {
  const { finalMessage } = storyData;

  const handleReplay = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="final-screen" id="final-message">
      <div className="final-inner">
        <h2 className="final-quote-line">
          "{finalMessage.line1}"
        </h2>

        <div className="final-sub-line">
          {finalMessage.line2}
        </div>

        <p className="final-gratitude">
          {finalMessage.line3}
        </p>

        <div className="final-accent-line">
          {finalMessage.finalLine}
        </div>

        <div>
          <button className="btn-replay" onClick={handleReplay}>
            {finalMessage.replayButton}
          </button>
        </div>
      </div>
    </footer>
  );
}
