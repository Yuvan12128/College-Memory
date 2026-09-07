import React from 'react';
import { storyData } from '../data/story';

export default function SupportSection() {
  const { support } = storyData;

  return (
    <section className="editorial-section support-section" id="support-section">
      <div className="editorial-container">
        <div className="text-center mb-5">
          <span className="section-tag">Chapter {support.sectionNum}</span>
          <h2 className="editorial-title">{support.title}</h2>
          <p className="editorial-lead">{support.subtitle}</p>
        </div>

        <div className="emotional-flow-box">
          <div className="sentence-flow-list">
            {support.sentences.map((sentence, index) => {
              const isHighlight = sentence.includes("Naan irukken");
              return (
                <div
                  key={index}
                  className={`fade-sentence ${isHighlight ? 'highlight-sentence' : ''}`}
                >
                  {sentence}
                </div>
              );
            })}
          </div>

          <div className="pause-divider"></div>

          <p className="text-muted fst-italic my-4" style={{ fontSize: '1.1rem' }}>
            {support.reflectionPause}
          </p>

          <div className="anchor-callout">
            "{support.anchorStatement}"
          </div>
        </div>
      </div>
    </section>
  );
}
