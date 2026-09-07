import React from 'react';
import { storyData } from '../data/story';

export default function AppreciationCards() {
  const { appreciation } = storyData;

  return (
    <section className="editorial-section" id="appreciation-section" style={{ background: 'var(--bg-surface)' }}>
      <div className="editorial-container">
        <div className="text-center mb-5">
          <span className="section-tag">Chapter {appreciation.sectionNum}</span>
          <h2 className="editorial-title">{appreciation.title}</h2>
          <p className="editorial-lead">{appreciation.subtitle}</p>
        </div>

        <div className="appreciation-grid">
          {appreciation.cards.map((card) => (
            <div className="appreciation-card" key={card.num}>
              <span className="appreciation-num">{card.num}</span>
              <h3 className="appreciation-title serif-font">{card.title}</h3>
              <p className="appreciation-text mb-0">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
//yuvan shankar
