import React from 'react';
import { storyData } from '../data/story';

export default function Hero({ onBeginStory }) {
  const { opening } = storyData;

  const handleScrollDown = () => {
    if (onBeginStory) {
      onBeginStory();
    } else {
      const target = document.getElementById('college-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="hero-wrapper" id="story">
      <div className="hero-inner">
        <span className="hero-small-label">{opening.smallText}</span>
        
        <h1 className="hero-title">{opening.mainHeading}</h1>
        
        <p className="hero-subtitle">{opening.subheading}</p>

        <div>
          <button className="btn-editorial-primary" onClick={handleScrollDown}>
            {opening.buttonText}
          </button>
        </div>

        <div className="hero-scroll-hint">
          <span>Scroll to explore</span>
          <span>↓</span>
        </div>
      </div>
    </section>
  );
}
