import React, { createContext, useContext, useState, useCallback } from 'react';
import ImageLightbox from '../components/ImageLightbox';

const LightboxContext = createContext({
  openLightbox: () => {},
  closeLightbox: () => {}
});

export function LightboxProvider({ children }) {
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    src: '',
    alt: '',
    caption: ''
  });

  const openLightbox = useCallback((src, alt = '', caption = '') => {
    if (!src) return;
    setLightboxState({
      isOpen: true,
      src,
      alt,
      caption
    });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  }, []);

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        src={lightboxState.src}
        alt={lightboxState.alt}
        caption={lightboxState.caption}
        onClose={closeLightbox}
      />
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
}
