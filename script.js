'use strict';

/* ============================================================
   template-fisio-002 — Movement Lab
   Phosphor Icons (256×256 viewBox, stroke-width 14, fill none)
   ============================================================ */

var PHOSPHOR_ICONS = {
  /* conditions */
  'spine': '<line x1="128" y1="32" x2="128" y2="224"/><rect x="92" y="64" width="72" height="30" rx="8"/><rect x="92" y="112" width="72" height="30" rx="8"/><rect x="92" y="160" width="72" height="30" rx="8"/>',
  'knee': '<path d="M80,32 Q100,80 128,120 Q156,80 176,32"/><circle cx="128" cy="128" r="30"/><path d="M98,158 Q80,200 80,224"/><path d="M158,158 Q176,200 176,224"/>',
  'shoulder': '<circle cx="128" cy="80" r="32"/><path d="M96,80 Q48,128 56,192"/><path d="M160,80 Q208,128 200,192"/><path d="M56,192 Q80,200 128,200 Q176,200 200,192"/>',
  'running': '<circle cx="168" cy="52" r="24"/><path d="M152,76 L136,144 L88,188"/><path d="M88,104 L152,132"/><path d="M136,144 L172,204"/>',
  'head': '<ellipse cx="128" cy="104" rx="72" ry="80"/><path d="M80,184 Q80,224 128,224 Q176,224 176,184"/>',
  'posture': '<circle cx="128" cy="56" r="28"/><line x1="128" y1="84" x2="128" y2="224"/><path d="M72,120 L128,148 L184,120"/>',
  /* methodologies */
  'hands': '<path d="M128,216 C88,216 40,184 40,136 L40,96 C40,86 50,78 62,80 C72,80 82,88 82,100 L82,60 C82,50 90,42 102,42 C112,42 122,50 122,60 L122,44 C122,34 130,26 142,26 C152,26 162,34 162,44 L162,60 C162,50 170,42 182,42 C194,42 202,50 202,60 L202,136 C202,184 168,216 128,216"/>',
  'exercise': '<circle cx="48" cy="128" r="26"/><rect x="74" y="112" width="108" height="32" rx="8"/><circle cx="208" cy="128" r="26"/><line x1="128" y1="32" x2="128" y2="80"/><circle cx="128" cy="56" r="16"/>',
  'wave': '<path d="M24,128 Q40,88 56,128 Q72,168 88,128 Q104,88 120,128 Q136,168 152,128 Q168,88 184,128 Q200,168 216,128 Q232,88 248,128" stroke-linecap="round"/>',
  'brain': '<path d="M128,224 L128,128"/><path d="M128,128 C128,96 96,64 64,80 C32,96 32,144 64,160 C80,168 96,160 104,148"/><path d="M128,128 C128,96 160,64 192,80 C224,96 224,144 192,160 C176,168 160,160 152,148"/><path d="M128,80 C128,56 144,32 168,32 C192,32 208,56 200,80"/><path d="M128,80 C128,56 112,32 88,32 C64,32 48,56 56,80"/>',
  /* ui */
  'arrow-right': '<line x1="40" y1="128" x2="216" y2="128"/><polyline points="144,56 216,128 144,200"/>',
  'phone': '<path d="M92,40 L72,40 C64,40 56,48 56,56 L56,72 C56,152 104,200 184,200 L200,200 C208,200 216,192 216,184 L216,164 C216,156 210,150 202,148 L176,142 C168,140 160,144 156,151 L148,163 C132,155 100,123 92,108 L104,100 C111,96 115,88 113,80 L107,54 C105,46 99,40 92,40 Z"/>',
  'map-pin': '<circle cx="128" cy="104" r="40"/><path d="M208,104 C208,168 128,224 128,224 C128,224 48,168 48,104 A80,80,0,0,1,208,104"/>',
  'clock': '<circle cx="128" cy="128" r="96"/><polyline points="128,64 128,128 176,160"/>',
  'check': '<polyline points="40,128 96,184 216,72"/>',
  'menu': '<line x1="40" y1="72" x2="216" y2="72"/><line x1="40" y1="128" x2="216" y2="128"/><line x1="40" y1="184" x2="216" y2="184"/>',
  'x': '<line x1="56" y1="56" x2="200" y2="200"/><line x1="200" y1="56" x2="56" y2="200"/>',
  'instagram': '<rect x="32" y="32" width="192" height="192" rx="48" ry="48"/><circle cx="128" cy="128" r="48"/><circle cx="186" cy="70" r="10" fill="currentColor" stroke="none"/>',
  'facebook': '<path d="M168,32 L148,32 C120,32 106,46 106,74 L106,96 L80,96 L80,128 L106,128 L106,224 L142,224 L142,128 L168,128 L172,96 L142,96 L142,76 C142,68 146,64 154,64 L168,64 Z"/>',
  'whatsapp': '<circle cx="128" cy="128" r="96"/><path d="M180,148 C176,156 166,168 152,172 C132,176 104,168 84,148 C64,128 56,100 60,80 C64,66 76,56 84,52 L96,80 C90,84 86,90 86,96 C88,110 96,126 108,138 C120,150 136,158 150,160 L156,148 C160,142 166,140 172,142 Z"/>',
  'whatsapp-fill': '<path d="M128,32 C74,32 30,76 30,130 C30,148 35,165 44,180 L32,224 L78,212 C92,220 109,224 128,224 C182,224 226,180 226,126 C226,72 182,32 128,32 Z M128,208 C111,208 95,203 82,195 L78,192 L52,200 L60,175 L56,171 C47,157 42,143 42,130 C42,83 80,44 128,44 C176,44 214,83 214,130 C214,177 176,208 128,208 Z"/><path d="M172,148 C168,156 158,168 144,172 C124,176 96,168 76,148 C56,128 48,100 52,80 C56,66 68,56 76,52 L88,80 C82,84 78,90 78,96 C80,110 88,126 100,138 C112,150 128,158 142,160 L148,148 C152,142 158,140 164,142 Z"/>',
  'calendar': '<rect x="40" y="56" width="176" height="160" rx="16"/><line x1="40" y1="104" x2="216" y2="104"/><line x1="88" y1="32" x2="88" y2="80"/><line x1="168" y1="32" x2="168" y2="80"/>',
  'star': '<polygon points="128,32 154,102 230,102 168,147 190,220 128,176 66,220 88,147 26,102 102,102"/>'
};

function svgIcon(name, cls) {
  var paths = PHOSPHOR_ICONS[name] || PHOSPHOR_ICONS['check'];
  var classes = cls ? ' class="' + cls + '"' : '';
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"' + classes + '>' + paths + '</svg>';
}

/* ============================================================
   ICON RENDERING
   ============================================================ */
function renderIcons() {
  document.querySelectorAll('[data-icon]').forEach(function(el) {
    var name = el.getAttribute('data-icon');
    el.innerHTML = svgIcon(name);
  });
}

/* ============================================================
   FRAME PATH (pipeline Handlebars placeholder)
   ============================================================ */
var FRAME_PATH = 'https://8ispuxmgjxgu2r5q.public.blob.vercel-storage.com/templates/fisio-002/frames/';
var FRAME_COUNT = 151;

/* ============================================================
   SCROLL ANIMATION (index.html only)
   ============================================================ */
function initScrollAnim() {
  var section = document.getElementById('scroll-section');
  var canvas = document.getElementById('scroll-canvas');
  if (!section || !canvas) return;

  var ctx = canvas.getContext('2d');
  var images = [];
  var currentFrame = 0;
  var loaded = 0;
  var totalNeeded = FRAME_COUNT;

  function padded(n) {
    return String(n).padStart(4, '0');
  }

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    drawFrame(currentFrame);
  }

  function drawFrame(idx) {
    var img = images[idx];
    if (!img || !img.complete || !img.naturalWidth) return;
    var cw = canvas.width;
    var ch = canvas.height;
    var iw = img.naturalWidth;
    var ih = img.naturalHeight;
    var scale = Math.max(cw / iw, ch / ih);
    var dw = iw * scale;
    var dh = ih * scale;
    var dx = (cw - dw) / 2;
    var dy = (ch - dh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  function onScroll() {
    var rect = section.getBoundingClientRect();
    var sectionH = section.offsetHeight;
    var canvasH = canvas.offsetHeight;
    var scrolled = -rect.top;
    var scrollable = sectionH - canvasH;
    var progress = Math.max(0, Math.min(1, scrolled / scrollable));
    var frame = Math.round(progress * (FRAME_COUNT - 1));
    if (frame !== currentFrame) {
      currentFrame = frame;
      drawFrame(currentFrame);
    }
  }

  /* Load frames */
  if (!FRAME_PATH) {
    canvas.style.background = 'linear-gradient(135deg, #0D3B2E 0%, #1DB87A 100%)';
    return;
  }

  for (var i = 1; i <= FRAME_COUNT; i++) {
    (function(idx) {
      var img = new Image();
      img.src = FRAME_PATH + 'frame_' + padded(idx) + '.webp';
      img.onload = function() {
        loaded++;
        if (idx === 1) { resizeCanvas(); }
        if (loaded === totalNeeded) { onScroll(); }
      };
      images[idx - 1] = img;
    })(i);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', resizeCanvas, { passive: true });
  resizeCanvas();
}

/* ============================================================
   HERO PARALLAX
   ============================================================ */
function initHeroParallax() {
  var heroImg = document.getElementById('hero-parallax');
  if (!heroImg) return;

  function onScroll() {
    var scrollY = window.scrollY;
    var offset = scrollY * 0.3;
    heroImg.style.transform = 'scale(1.08) translateY(' + offset + 'px)';
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ============================================================
   SCROLL OVERLAY TEXT REVEAL
   ============================================================ */
function initTextReveal() {
  var overlay = document.querySelector('.scroll-overlay');
  if (!overlay) return;

  var items = overlay.querySelectorAll('.text-reveal');
  if (!items.length) return;

  var triggered = false;

  function check() {
    var rect = overlay.getBoundingClientRect();
    if (!triggered && rect.top < window.innerHeight * 0.85) {
      triggered = true;
      items.forEach(function(el, i) {
        setTimeout(function() { el.classList.add('visible'); }, i * 220);
      });
    }
  }

  window.addEventListener('scroll', check, { passive: true });
  check();
}

/* ============================================================
   FADE-UP OBSERVER
   ============================================================ */
function initFadeUp() {
  var items = document.querySelectorAll('.fade-up');
  if (!items.length) return;

  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  items.forEach(function(el) { obs.observe(el); });
}

/* ============================================================
   STAGGER CARDS OBSERVER
   ============================================================ */
function initStagger() {
  var grids = document.querySelectorAll(
    '.conditions-grid, .methodologies-grid, .team-grid, .testimonials-grid, .benefits-list'
  );

  if (!grids.length) return;

  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stagger-card').forEach(function(card) {
          card.classList.add('visible');
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  grids.forEach(function(g) { obs.observe(g); });
}

/* ============================================================
   NAVBAR SCROLL + MOBILE TOGGLE
   ============================================================ */
function initNav() {
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('nav-toggle');
  var mobileMenu = document.getElementById('nav-mobile');

  if (nav) {
    window.addEventListener('scroll', function() {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function() {
      var isOpen = mobileMenu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
}

/* ============================================================
   FOOTER YEAR
   ============================================================ */
function initYear() {
  document.querySelectorAll('[data-year]').forEach(function(el) {
    el.textContent = new Date().getFullYear();
  });
}

/* ============================================================
   IMAGE FALLBACK
   ============================================================ */
window.__imgFallback = function(img, label) {
  var w = img.naturalWidth || 400;
  var h = img.naturalHeight || 300;
  var initials = (label || '?').split(' ').map(function(w) { return w[0]; }).join('').slice(0, 2).toUpperCase();
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '">'
    + '<rect width="' + w + '" height="' + h + '" fill="#0D3B2E"/>'
    + '<text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" '
    + 'font-family="Outfit,sans-serif" font-size="' + Math.round(h * 0.2) + '" font-weight="800" fill="rgba(29,184,122,0.6)">'
    + initials + '</text></svg>';
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  img.onerror = null;
};

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', function() {
  renderIcons();
  initScrollAnim();
  initHeroParallax();
  initTextReveal();
  initFadeUp();
  initStagger();
  initNav();
  initYear();
});
