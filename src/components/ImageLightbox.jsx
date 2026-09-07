import React, { useEffect } from 'react';

export default function ImageLightbox({ isOpen, src, alt, caption, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling while lightbox is active
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !src) return null;

  return (
    <div 
      className="lightbox-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Photo Full View"
    >
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Sleek Close Button */}
        <button 
          className="lightbox-close-btn" 
          onClick={onClose}
          aria-label="Close full view"
          title="Close (Esc)"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Full Image Display Container */}
        <div className="lightbox-image-wrapper">
          <img
            src={src}
            alt={alt || 'Full View Memory'}
            className="lightbox-img"
          />
        </div>

        {/* Caption & Description */}
        {(alt || caption) && (
          <div className="lightbox-caption-card">
            {alt && <h4 className="lightbox-title serif-font">{alt}</h4>}
            {caption && <p className="lightbox-text">{caption}</p>}
            <span className="lightbox-hint">Tap anywhere outside or press Esc to close</span>
          </div>
        )}
      </div>
    </div>
  );
}
