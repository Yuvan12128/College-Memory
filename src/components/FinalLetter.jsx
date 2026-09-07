import React, { useState } from 'react';
import { storyData } from '../data/story';
import { useLightbox } from '../context/LightboxContext';

export default function FinalLetter() {
  const { letter } = storyData;
  const { openLightbox } = useLightbox();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <section className="editorial-section letter-section-wrapper" id="letter">
      <div className="editorial-container">
        <div className="text-center mb-5">
          <span className="section-tag">Chapter {letter.sectionNum}</span>
          <h2 className="editorial-title">A Letter For You</h2>
        </div>

        <div className="envelope-container">
          {!isOpen ? (
            <div>
              <p className="editorial-lead mb-4">{letter.teaser}</p>
              
              <div className="envelope-graphic" onClick={handleOpen} title="Click to open letter">
                <div className="envelope-seal-badge">
                  ✉
                </div>
              </div>

              <button className="btn-editorial-primary" onClick={handleOpen}>
                {letter.buttonText}
              </button>
            </div>
          ) : (
            <div className="letter-sheet">
              <div className="letter-header-note">
                Personal Letter • Written with Sincerity
              </div>

              <h3 className="letter-salutation">{letter.salutation}</h3>

              <div className="letter-content-text">
                {letter.paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>

              <div className="letter-sign-block text-end">
                <div className="letter-sign-name">{letter.signOff}</div>
              </div>

              {letter.handwrittenImage && (
                <div className="handwritten-keepsake-box mt-5">
                  <div className="handwritten-divider mb-4">
                    <span>✦ A Keepsake We Cherish ✦</span>
                  </div>
                  <div 
                    className="handwritten-card-wrapper"
                    onClick={() => openLightbox(letter.handwrittenImage, letter.handwrittenTitle, letter.handwrittenNote)}
                    title="Click to expand handwritten card"
                  >
                    <img 
                      src={letter.handwrittenImage} 
                      alt="Kalai's Handwritten Wish" 
                      className="handwritten-preview-img"
                      loading="lazy"
                    />
                    <div className="photo-expand-badge">
                      <span>🔍 Click to Read Full Letter</span>
                    </div>
                  </div>
                  <h4 className="serif-font mt-3 mb-1" style={{ fontSize: '1.25rem', color: 'var(--accent-wine)' }}>
                    {letter.handwrittenTitle}
                  </h4>
                  <p className="text-muted small mb-0">
                    {letter.handwrittenNote}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
