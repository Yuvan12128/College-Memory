/* ==========================================================
   ROMANTIC BELATED BIRTHDAY JAVASCRIPT
   Crafted for Kalaiselvi (Kalai) by Yuvan Shankar
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Canvas Starfield & Floating Hearts Animation ---
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let hearts = [];

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Star {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 1.8 + 0.4;
      this.alpha = Math.random() * 0.7 + 0.2;
      this.alphaSpeed = (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1);
    }
    update() {
      this.alpha += this.alphaSpeed;
      if (this.alpha >= 0.9 || this.alpha <= 0.15) {
        this.alphaSpeed = -this.alphaSpeed;
      }
    }
    draw() {
      ctx.fillStyle = `rgba(255, 230, 240, ${this.alpha})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  class FloatingHeart {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 50;
      this.size = Math.random() * 14 + 10;
      this.speedY = Math.random() * 1.2 + 0.5;
      this.speedX = Math.sin(Math.random() * Math.PI) * 0.8;
      this.opacity = Math.random() * 0.6 + 0.2;
      this.color = Math.random() > 0.4 ? '255, 117, 140' : '247, 215, 148';
      this.angle = Math.random() * 360;
      this.rotSpeed = (Math.random() - 0.5) * 2;
    }
    update() {
      this.y -= this.speedY;
      this.x += Math.sin(this.y * 0.02) * 0.6;
      this.angle += this.rotSpeed;
      if (this.y < -30) {
        this.reset();
      }
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.angle * Math.PI) / 180);
      ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
      ctx.font = `${this.size}px serif`;
      ctx.fillText('❤', 0, 0);
      ctx.restore();
    }
  }

  // Initialize stars and hearts
  for (let i = 0; i < 75; i++) {
    particles.push(new Star());
  }
  for (let i = 0; i < 16; i++) {
    hearts.push(new FloatingHeart());
  }

  function renderLoop() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    hearts.forEach(h => {
      h.update();
      h.draw();
    });
    requestAnimationFrame(renderLoop);
  }
  renderLoop();

  // --- 2. Romantic Audio Player (Procedural Synth + File fallback) ---
  let audioCtx = null;
  let isPlayingAudio = false;
  let synthTimer = null;
  const audioElement = document.getElementById('bg-audio');
  const vinylDisc = document.getElementById('vinyl-disc');
  const musicWaves = document.getElementById('music-waves');
  const musicStatus = document.getElementById('music-status');
  const musicToggleBtn = document.getElementById('music-toggle-btn');
  const musicWidget = document.getElementById('music-widget');

  // Romantic chord progression chords (Frequencies in Hz: C - G - Am - F progression in high dreamy octave)
  const melodyNotes = [
    261.63, 329.63, 392.00, 523.25, // C chord
    246.94, 293.66, 392.00, 493.88, // G chord
    220.00, 261.63, 329.63, 440.00, // Am chord
    174.61, 220.00, 261.63, 349.23  // F chord
  ];
  let noteIndex = 0;

  function initAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
  }

  function playGentleChime(freq, time = 0) {
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime + time);

      gain.gain.setValueAtTime(0.001, audioCtx.currentTime + time);
      gain.gain.exponentialRampToValueAtTime(0.09, audioCtx.currentTime + time + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + time + 1.6);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(audioCtx.currentTime + time);
      osc.stop(audioCtx.currentTime + time + 1.8);
    } catch (e) {
      console.warn("Chime synth notice:", e);
    }
  }

  function startProceduralMelody() {
    if (synthTimer) clearInterval(synthTimer);
    synthTimer = setInterval(() => {
      if (!isPlayingAudio) return;
      const note = melodyNotes[noteIndex % melodyNotes.length];
      playGentleChime(note, 0);
      if (noteIndex % 2 === 0) {
        playGentleChime(note * 1.5, 0.25);
      }
      noteIndex++;
    }, 450);
  }

  function toggleMusic() {
    initAudioContext();
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (isPlayingAudio) {
      // Pause
      isPlayingAudio = false;
      if (audioElement && !audioElement.paused) {
        audioElement.pause();
      }
      if (synthTimer) clearInterval(synthTimer);
      vinylDisc.classList.remove('playing');
      musicWaves.classList.remove('active');
      musicStatus.innerText = 'Paused 🎶';
      musicToggleBtn.innerText = '▶';
    } else {
      // Play
      isPlayingAudio = true;
      vinylDisc.classList.add('playing');
      musicWaves.classList.add('active');
      musicStatus.innerText = 'Now Playing ❤️';
      musicToggleBtn.innerText = '❚❚';

      // Try playing mp3 if available; if not or errored, use procedural melody
      if (audioElement && audioElement.currentSrc) {
        audioElement.play().then(() => {
          // File playing fine!
        }).catch(() => {
          // Fallback to procedural dreamy synth
          startProceduralMelody();
        });
      } else {
        startProceduralMelody();
      }
    }
  }

  musicToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMusic();
  });
  musicWidget.addEventListener('click', () => {
    toggleMusic();
  });

  // --- 3. Envelope Unsealing & Open Sequence ---
  const envelopeHero = document.getElementById('envelope-hero');
  const envelopeBox = document.getElementById('envelope-box');
  const openEnvelopeBtn = document.getElementById('open-envelope-btn');
  const mainContent = document.getElementById('main-content');

  function openSurpriseEnvelope() {
    envelopeBox.classList.add('is-open');

    // Trigger audio softly
    if (!isPlayingAudio) {
      toggleMusic();
    }

    // Launch initial gentle confetti celebration
    launchCelebrationConfetti(0.4);

    setTimeout(() => {
      envelopeHero.classList.add('opened');
      mainContent.classList.add('visible');

      // Scroll into view smoothly
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 850);
  }

  openEnvelopeBtn.addEventListener('click', openSurpriseEnvelope);
  envelopeBox.addEventListener('click', openSurpriseEnvelope);

  // --- 4. Confetti Helper ---
  function launchCelebrationConfetti(durationSeconds = 2) {
    if (typeof confetti === 'function') {
      const end = Date.now() + durationSeconds * 1000;
      const colors = ['#ff758c', '#ff7eb3', '#f7d794', '#ff3838', '#ffffff'];

      (function frame() {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 },
          colors: colors
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  }

  // --- 5. Forgive-Me Playful Game ---
  const btnYes = document.getElementById('btn-forgive-yes');
  const btnNo = document.getElementById('btn-forgive-no');
  const forgiveMessage = document.getElementById('forgive-message');
  const forgiveActionBox = document.getElementById('forgive-action-box');

  const funnyNoPhrases = [
    "No solla mudiyathu! 😜",
    "Ayyayo thoda mudiyala! 😂",
    "Pavam la Yuvan? 🥺",
    "Catch me if you can! 🏃‍♂️",
    "Yes mattum dhaan option! ❤️",
    "Enna paathu No solriya? 🙈"
  ];
  let noIndex = 0;

  function dodgeNoButton() {
    const boxRect = forgiveActionBox.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();

    // Random offset inside visible area
    const maxX = 180;
    const maxY = 60;
    const randX = (Math.random() - 0.5) * maxX * 2;
    const randY = (Math.random() - 0.5) * maxY * 2;

    btnNo.style.transform = `translate(${randX}px, ${randY}px)`;
    btnNo.innerText = funnyNoPhrases[noIndex % funnyNoPhrases.length];
    noIndex++;
  }

  btnNo.addEventListener('mouseenter', dodgeNoButton);
  btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault();
    dodgeNoButton();
  });
  btnNo.addEventListener('click', (e) => {
    e.preventDefault();
    dodgeNoButton();
  });

  btnYes.addEventListener('click', () => {
    btnNo.style.display = 'none';
    btnYes.style.transform = 'scale(1.1)';
    forgiveMessage.classList.remove('hidden');
    launchCelebrationConfetti(3.5);

    // Play happy chime sound
    if (audioCtx) {
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        playGentleChime(freq, i * 0.12);
      });
    }
  });

  // --- 6. Virtual Cake & Candle Blow ---
  const candleFlame = document.getElementById('candle-flame');
  const candleSmoke = document.getElementById('candle-smoke');
  const blowCandleBtn = document.getElementById('blow-candle-btn');
  const cakeWishBanner = document.getElementById('cake-wish-banner');
  let isBlown = false;

  function blowOutCandle() {
    if (isBlown) return;
    isBlown = true;

    // Extinguish flame and emit smoke
    candleFlame.classList.add('extinguished');
    candleSmoke.classList.add('puff');
    blowCandleBtn.innerHTML = '<span>Candle Blown! Happy Belated Birthday! 🎉</span>';
    blowCandleBtn.style.opacity = '0.7';
    blowCandleBtn.style.cursor = 'default';

    setTimeout(() => {
      cakeWishBanner.classList.remove('hidden');
      launchCelebrationConfetti(5);

      // Cheerful arpeggio
      if (audioCtx) {
        [392.00, 523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((freq, i) => {
          playGentleChime(freq, i * 0.14);
        });
      }
    }, 400);
  }

  blowCandleBtn.addEventListener('click', blowOutCandle);
  candleFlame.addEventListener('click', blowOutCandle);

  // --- 7. Lightbox Modal ---
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  window.openLightbox = function(imgSrc, captionText) {
    lightboxImg.src = imgSrc;
    lightboxCaption.innerText = captionText || '';
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });

  // --- 8. Scroll to Top ---
  const scrollTopBtn = document.getElementById('scroll-to-top');
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

});
