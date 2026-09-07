import React, { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('story');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = [
        { id: 'story', element: document.getElementById('story') },
        { id: 'memories', element: document.getElementById('memories') },
        { id: 'letter', element: document.getElementById('letter') }
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.element && sec.element.offsetTop <= scrollPos) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="editorial-nav-wrapper" aria-label="Main Navigation">
      <div className="editorial-nav">
        <button
          className={`nav-link-btn ${activeSection === 'story' ? 'active' : ''}`}
          onClick={() => scrollTo('story')}
        >
          Story
        </button>
        <button
          className={`nav-link-btn ${activeSection === 'memories' ? 'active' : ''}`}
          onClick={() => scrollTo('memories')}
        >
          Memories
        </button>
        <button
          className={`nav-link-btn ${activeSection === 'letter' ? 'active' : ''}`}
          onClick={() => scrollTo('letter')}
        >
          Letter
        </button>
      </div>
    </nav>
  );
}
