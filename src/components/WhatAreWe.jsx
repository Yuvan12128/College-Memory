import React, { useState } from 'react';
import { storyData } from '../data/story';

export default function WhatAreWe() {
  const { whatAreWe } = storyData;
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section className="editorial-section" id="what-are-we-section">
      <div className="editorial-container">
        <div className="text-center mb-5">
          <span className="section-tag">Chapter {whatAreWe.sectionNum}</span>
          <h2 className="editorial-title">{whatAreWe.title}</h2>
        </div>

        <div className="what-are-we-box">
          {whatAreWe.lines.map((line, idx) => (
            <div className="waw-line" key={idx}>
              {line}
            </div>
          ))}

          <div className="waw-doubt">
            "{whatAreWe.doubt}"
          </div>

          {!isRevealed ? (
            <button
              className="btn-editorial-primary mt-2"
              onClick={() => setIsRevealed(true)}
            >
              {whatAreWe.buttonLabel}
            </button>
          ) : (
            <div className="waw-reveal-box">
              <h3 className="waw-reveal-title">{whatAreWe.revealedTitle}</h3>
              <p className="waw-reveal-note mb-0">{whatAreWe.revealedNote}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
