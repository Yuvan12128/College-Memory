import React from 'react';
import { storyData } from '../data/story';

export default function CallSection() {
  const { calls } = storyData;

  return (
    <section className="editorial-section" id="calls-section" style={{ background: 'var(--bg-surface)' }}>
      <div className="editorial-container">
        <div className="text-center mb-5">
          <span className="section-tag">Chapter {calls.sectionNum}</span>
          <h2 className="editorial-title">{calls.title}</h2>
        </div>

        <div className="call-display-wrapper">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-7">
              <p className="editorial-lead mb-0" style={{ whiteSpace: 'pre-line' }}>
                {calls.leadText}
              </p>
            </div>

            <div className="col-lg-5">
              <div className="phone-visual-card">
                <div className="call-avatar-circle">
                  {calls.callerName.charAt(0)}
                </div>
                <h4 className="serif-font mb-1" style={{ fontSize: '1.35rem' }}>{calls.callerName}</h4>
                <div className="call-state-pulse">
                  <span className="pulse-dot"></span>
                  <span>Connected • {calls.callDuration}</span>
                </div>

                <div className="audio-waveform">
                  {[...Array(18)].map((_, i) => (
                    <span key={i} className="wave-stick"></span>
                  ))}
                </div>

                <p className="text-muted small mb-0">
                  Late night conversations & endless listening
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
