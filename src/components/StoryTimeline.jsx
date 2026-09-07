import React from 'react';
import { storyData } from '../data/story';
import { useLightbox } from '../context/LightboxContext';

export default function StoryTimeline() {
  const { college } = storyData;
  const { openLightbox } = useLightbox();

  return (
    <section className="editorial-section timeline-section" id="college-section">
      <div className="editorial-container">
        <div className="text-center mb-5">
          <span className="section-tag">Chapter {college.sectionNum}</span>
          <h2 className="editorial-title">{college.title}</h2>
        </div>

        <div className="college-intro-box">
          <p className="editorial-lead mb-4" style={{ whiteSpace: 'pre-line' }}>
            {college.leadText}
          </p>
          <hr className="my-4" style={{ borderColor: 'var(--border-card)' }} />
          <h4 className="serif-font mb-3" style={{ fontSize: '1.45rem', color: 'var(--accent-wine)' }}>
            {college.subTitle}
          </h4>
          <p className="mb-0" style={{ whiteSpace: 'pre-line', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            {college.bodyText}
          </p>
        </div>

        <div className="editorial-timeline">
          {college.timeline.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-node"></div>
              <div className="timeline-content-card">
                {item.image && (
                  <div 
                    className="timeline-thumb-wrapper"
                    onClick={() => openLightbox(item.image, item.title, item.desc)}
                    title="Click to view full photo"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="timeline-thumb"
                      loading="lazy"
                      onError={(e) => {
                        e.target.parentElement.style.display = 'none';
                      }}
                    />
                    <span className="photo-expand-badge">
                      🔍 Tap to expand
                    </span>
                  </div>
                )}
                <span className="timeline-step-badge">Phase {item.step}</span>
                <h4 className="timeline-title serif-font">{item.title}</h4>
                <p className="timeline-desc mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
