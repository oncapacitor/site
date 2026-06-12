/* ============================================================
   On Capacitor — Main JS
   ============================================================ */

/* ── Nav scroll effect ──────────────────────────────────── */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Mobile hamburger ───────────────────────────────────── */
const hamburger = document.querySelector('.nav-hamburger');
const mobileMenu = document.querySelector('.nav-mobile');
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu?.classList.toggle('open');
});
mobileMenu?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    mobileMenu.classList.remove('open');
  })
);

/* ── Active nav link ────────────────────────────────────── */
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

/* ── Fade-up on scroll ──────────────────────────────────── */
const observer = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ── Markdown content loader ────────────────────────────── */
async function loadMarkdown() {
  const els = document.querySelectorAll('[data-md]');
  if (!els.length) return;

  await loadScript('https://cdn.jsdelivr.net/npm/marked@9/marked.min.js');
  marked.use({ breaks: true, gfm: true });

  for (const el of els) {
    const src = el.dataset.md;
    try {
      const res = await fetch(src);
      if (!res.ok) throw new Error(res.status);
      const text = await res.text();
      el.innerHTML = marked.parse(text);
      el.classList.add('md-content');
    } catch {
      console.warn(`Could not load markdown: ${src}`);
    }
  }
}

/* ── Products loader (from JSON) ────────────────────────── */
async function loadProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  try {
    const res = await fetch('content/products.json');
    const products = await res.json();
    grid.innerHTML = products.map(p => `
      <div class="product-card fade-up">
        <div class="product-card-img">
          ${p.image
            ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
            : `<div class="placeholder-img"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg></div>`}
        </div>
        <div class="product-card-body">
          <div class="product-card-tag">${p.category || 'Product'}</div>
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          ${p.link ? `<a href="${p.link}" class="btn btn-primary">Learn More</a>` : ''}
        </div>
      </div>
    `).join('');
    grid.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  } catch {
    console.warn('Could not load products.json');
  }
}

/* ── Contact form ───────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    const success = document.getElementById('form-success');
    btn.disabled = true;
    btn.textContent = 'Sending…';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.reset();
        if (success) success.style.display = 'block';
        btn.textContent = 'Sent!';
      } else {
        throw new Error();
      }
    } catch {
      btn.disabled = false;
      btn.textContent = 'Send Message';
      alert('Something went wrong. Please email us directly.');
    }
  });
}

/* ── Animated counters ──────────────────────────────────── */
function initCounters() {
  const nums = document.querySelectorAll('[data-count]');
  if (!nums.length) return;

  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const duration = 1600;
      const start = performance.now();
      const isFloat = String(target).includes('.');
      const animate = now => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = (isFloat ? value.toFixed(1) : Math.round(value)) + suffix;
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  nums.forEach(el => countObserver.observe(el));
}

/* ── Utility ────────────────────────────────────────────── */
function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

/* ── Init ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  loadMarkdown();
  loadProducts();
  initContactForm();
  initCounters();
});
