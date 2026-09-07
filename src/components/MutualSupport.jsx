import React from 'react';
import { storyData } from '../data/story';

export default function MutualSupport() {
  const { mutual } = storyData;

  return (
    <section className="editorial-section" id="mutual-section">
      <div className="editorial-container">
        <div className="text-center mb-5">
          <span className="section-tag">Chapter {mutual.sectionNum}</span>
          <h2 className="editorial-title">{mutual.title}</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <p className="editorial-lead text-center mb-4" style={{ whiteSpace: 'pre-line' }}>
              {mutual.content}
            </p>

            <div className="text-center my-4 py-2">
              <p className="text-muted mb-1">{mutual.thought1}</p>
              <h4 className="serif-font" style={{ color: 'var(--accent-wine)', fontSize: '1.5rem' }}>
                {mutual.thought2}
              </h4>
            </div>

            <div className="quote-highlight-card">
              <p className="mb-0 serif-font fst-italic">
                {mutual.statement}
              </p>
            </div>

            <div className="mutual-cards-grid">
              {mutual.cards.map((card, idx) => (
                <div className="mutual-card text-center" key={idx}>
                  <span className="mutual-title d-block">{card.title}</span>
                  <div className="mutual-text">{card.text}</div>
                  <p className="mutual-sub mb-0">{card.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
