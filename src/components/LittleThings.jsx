import React from 'react';
import { storyData } from '../data/story';
import { useLightbox } from '../context/LightboxContext';

export default function LittleThings() {
  const { littleThings } = storyData;
  const { openLightbox } = useLightbox();

  return (
    <section className="editorial-section" id="memories">
      <div className="editorial-container">
        <div className="text-center mb-5">
          <span className="section-tag">Chapter {littleThings.sectionNum}</span>
          <h2 className="editorial-title">{littleThings.title}</h2>
          <p className="editorial-lead">{littleThings.subtitle}</p>
        </div>

        <div className="memory-grid">
          {littleThings.cards.map((card) => (
            <div className="memory-card" key={card.id}>
              {card.image && (
                <div 
                  className="memory-img-box"
                  onClick={() => openLightbox(card.image, card.title, card.text)}
                  title="Click to view full image"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="memory-img"
                    loading="lazy"
                    onError={(e) => {
                      e.target.parentElement.style.display = 'none';
                    }}
                  />
                  <div className="photo-expand-badge">
                    <span>🔍 Full View</span>
                  </div>
                </div>
              )}
              <div className="memory-body">
                <span className="memory-tag">{card.tag}</span>
                <h3 className="memory-title serif-font">{card.title}</h3>
                <p className="memory-text mb-0">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
