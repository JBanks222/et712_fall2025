// ---------- Audio ----------
const audioToggleBtn = document.getElementById('audioToggle');
const beachAudio = new Audio('audio/Seagull Beach Sound Effect  Free Sound Clips  Animal Sounds.mp3');
beachAudio.loop = true;
beachAudio.volume = 0.35;

const savedMuted = localStorage.getItem('beach-muted') === 'true';
let isPlaying = false;

function setPressedState(pressed) {
  audioToggleBtn.setAttribute('aria-pressed', pressed ? 'true' : 'false');
  audioToggleBtn.textContent = pressed ? '🔇 Beach Sounds Off' : '🔊 Beach Sounds';
}
setPressedState(savedMuted);
if (!savedMuted) window.addEventListener('pointerdown', tryPlayOnce, { once: true });
function tryPlayOnce() { beachAudio.play().then(() => { isPlaying = true; }).catch(()=>{}); }

audioToggleBtn.addEventListener('click', async () => {
  if (isPlaying && !beachAudio.paused) {
    beachAudio.pause(); isPlaying = false;
    localStorage.setItem('beach-muted', true); setPressedState(true);
  } else {
    try { await beachAudio.play(); isPlaying = true; localStorage.setItem('beach-muted', false); setPressedState(false); }
    catch(e){ setPressedState(true); }
  }
});

// ---------- Helpers for random placement ----------
function rand(min, max)   { return Math.random() * (max - min) + min; }
function clamp(v, a, b)   { return Math.min(Math.max(v, a), b); }
function rectsOverlap(a, b, pad = 0) {
  return !(a.x + a.w + pad < b.x ||
           b.x + b.w + pad < a.x ||
           a.y + a.h + pad < b.y ||
           b.y + b.h + pad < a.y);
}
function placeNonOverlapping({
  container,
  elements,           // array of HTMLElements
  bounds,             // { left, top, right, bottom } in px (container coords)
  minGap = 16,        // px between elements
  exclusionRects = [],// array of rects to avoid {x,y,w,h}
  maxAttempts = 500
}) {
  const placed = [];

  elements.forEach(el => {
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    let attempt = 0;
    let placedOk = false;

    while (attempt++ < maxAttempts && !placedOk) {
      const x = rand(bounds.left, Math.max(bounds.right - w, bounds.left));
      const y = rand(bounds.top,  Math.max(bounds.bottom - h, bounds.top));
      const rect = { x, y, w, h };

      const clashWithPlaced   = placed.some(p => rectsOverlap(rect, p, minGap));
      const clashWithExcl     = exclusionRects.some(er => rectsOverlap(rect, er, minGap));
      if (!clashWithPlaced && !clashWithExcl) {
        el.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
        placed.push(rect);
        placedOk = true;
      }
    }

    // fallback: if we couldn't place, stick it centered
    if (!placedOk) {
      const cx = (bounds.left + bounds.right - w) / 2;
      const cy = (bounds.top  + bounds.bottom - h) / 2;
      el.style.transform = `translate(${Math.round(cx)}px, ${Math.round(cy)}px)`;
      placed.push({ x: cx, y: cy, w, h });
    }
  });

  return placed;
}

// ---------- Build tiny islets with random sizes ----------
const isletsContainer = document.querySelector('.islets');
const ISLET_COUNT = 10;
function createIslets() {
  isletsContainer.innerHTML = '';
  for (let i = 0; i < ISLET_COUNT; i++) {
    const d = document.createElement('div');
    d.className = 'islet';
    const size = clamp(Math.round(rand(24, 44)), 20, 60);
    d.style.width = `${size}px`;
    d.style.height = `${size}px`;
    d.style.transform = `rotate(${rand(-18, 18)}deg)`;
    d.style.animationDelay = `${rand(-2, 2)}s`;
    isletsContainer.appendChild(d);
  }
}

// ---------- Randomize layout ----------
const ocean = document.querySelector('.ocean');
const islandsLayer = document.querySelector('.islands');
const mainIslands = Array.from(document.querySelectorAll('.island'));

function getRect(el) {
  const r = el.getBoundingClientRect();
  const cr = ocean.getBoundingClientRect();
  return { x: r.left - cr.left, y: r.top - cr.top, w: r.width, h: r.height };
}

function layout() {
  // Ensure islets exist (and reset)
  createIslets();

  // Force reflow so sizes are accurate
  mainIslands.forEach(el => { el.style.transform = 'translate(-9999px, -9999px)'; });

  // Container & safe bounds
  const cRect = ocean.getBoundingClientRect();

  // Safe margins (keep islands away from edges for UX)
  const marginPct = 0.08; // 8% padding all around
  const bounds = {
    left:  cRect.width  * marginPct,
    top:   cRect.height * marginPct,
    right: cRect.width  * (1 - marginPct),
    bottom:cRect.height * (1 - marginPct)
  };

  // Exclusion zone for the audio button (slightly padded)
  const audioRect = getRect(audioToggleBtn);
  const audioPad = 18;
  const exclusionRects = [{ x: Math.max(audioRect.x - audioPad, 0),
                            y: Math.max(audioRect.y - audioPad, 0),
                            w: audioRect.w + audioPad*2,
                            h: audioRect.h + audioPad*2 }];

  // Place main islands (non-overlapping)
  const mainPlaced = placeNonOverlapping({
    container: ocean,
    elements: mainIslands,
    bounds,
    minGap: 28,                // bigger gap for big tiles
    exclusionRects
  });

  // Now place islets around, avoiding the main islands a bit (but not too strict)
  const islets = Array.from(document.querySelectorAll('.islet'));
  placeNonOverlapping({
    container: ocean,
    elements: islets,
    bounds: {
      left:  cRect.width  * 0.02,
      top:   cRect.height * 0.03,
      right: cRect.width  * 0.98,
      bottom:cRect.height * 0.95
    },
    minGap: 12,
    exclusionRects: mainPlaced.concat(exclusionRects)
  });
}

// Initial layout after fonts/sizes settle
window.addEventListener('load', () => {
  layout();
  
  // Add class to trigger welcome message fade-out
  setTimeout(() => {
    document.body.classList.add('islands-loaded');
  }, 1000);
});

// Relayout on resize/orientation (debounced)
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(layout, 180);
});

// ---------- Island hover and click effects ----------
document.querySelectorAll('.island').forEach(el => {
  // Add ripple effect on click
  el.addEventListener('click', (e) => {
    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.marginLeft = '-10px';
    ripple.style.marginTop = '-10px';
    ripple.style.pointerEvents = 'none';
    
    el.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
