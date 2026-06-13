/* ============================================================
   On Capacitor — Main JS
   All page content is loaded from content/*.json and content/*.md
   ============================================================ */

/* ── Icons ──────────────────────────────────────────────── */
const ICONS = {
  zap:         `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  shield:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
  settings:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>`,
  'check-badge':`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>`,
  users:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  globe:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  grid:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>`,
  clock:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  mail:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  phone:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>`,
  'map-pin':   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  linkedin:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`,
  twitter:     `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  chevron:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>`,
  image:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
  building:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
};

const LOGO_SVG = `<svg viewBox="0 0 52 30" xmlns="http://www.w3.org/2000/svg"><rect width="52" height="30" fill="#cc1414"/><text x="26" y="21" text-anchor="middle" fill="white" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="16" letter-spacing="3">ON</text></svg>`;

/* ── Helpers ─────────────────────────────────────────────── */
function set(id, html) {
  const el = document.getElementById(id);
  if (el && html !== undefined) el.innerHTML = html;
}

function icon(name) { return ICONS[name] || ''; }

function btn(b) {
  return `<a href="${b.href}" class="btn ${b.style || 'btn-primary'}">${b.label}</a>`;
}

function featureCard(item, useCategoryStyle = false) {
  if (useCategoryStyle) {
    const thumb = item.image
      ? `<img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.style.display='none'">`
      : '';
    return `
      <div class="feature-card fade-up">
        <div class="feature-card-img">${thumb}</div>
        <div class="feature-card-label">${item.subtitle || ''}</div>
        <h3>${item.title}</h3>
        <div class="feature-card-underline"></div>
        <p>${item.body}</p>
        ${item.href ? `<a href="${item.href}" class="feature-card-link">View Products ${icon('chevron')}</a>` : ''}
      </div>`;
  }
  return `
    <div class="feature-card fade-up">
      <div class="feature-icon">${icon(item.icon)}</div>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </div>`;
}

function sectionHeader(d, center = false) {
  const style = center ? 'text-align:center;max-width:600px;margin:0 auto 56px;' : '';
  return `
    <div class="fade-up" ${style ? `style="${style}"` : ''}>
      <div class="tag">${d.tag}</div>
      <h2 class="section-title">${d.title}</h2>
      ${d.lead ? `<p class="section-lead">${d.lead}</p>` : ''}
    </div>`;
}

function ctaBanner(d) {
  return `
    <h2>${d.title}</h2>
    <p>${d.body}</p>
    <div class="cta-actions">${d.actions.map(btn).join('')}</div>`;
}

function logoLink(href = 'index.html', company = 'On Capacitor') {
  const [first, ...rest] = company.split(' ');
  return `
    <a href="${href}" class="nav-logo">
      ${LOGO_SVG}
      ${first}<span class="accent">${rest.join(' ')}</span>
    </a>`;
}

function placeholderImg(iconName = 'image') {
  return `<div class="placeholder-img">${icon(iconName)}</div>`;
}

function imgOrPlaceholder(src, alt, iconName = 'image') {
  if (!src) return placeholderImg(iconName);
  const ph = placeholderImg(iconName).replace(/'/g, '&apos;').replace(/"/g, '&quot;');
  return `<img src="${src}" alt="${alt || ''}" loading="lazy"
    onerror="this.parentElement.innerHTML='${ph}'">`;
}

/* ── Nav & Footer (shared) ───────────────────────────────── */
function renderNav(site, page, categories = []) {
  const dropdownItems = categories.map(c => `
    <a href="products.html#${c.id}" class="nav-dropdown-item">
      <div class="nav-dropdown-icon">${icon(c.icon)}</div>
      <div class="nav-dropdown-text">
        <strong>${c.name}</strong>
        <span>${c.subtitle}</span>
      </div>
    </a>`).join('');

  const links = site.nav.map(l => {
    if (l.href === 'products.html' && categories.length) {
      return `
        <div class="nav-dropdown">
          <a href="${l.href}" ${page === l.href ? 'class="active"' : ''}>${l.label}</a>
          <div class="nav-dropdown-menu">${dropdownItems}</div>
        </div>`;
    }
    return `<a href="${l.href}" ${page === l.href ? 'class="active"' : ''}>${l.label}</a>`;
  }).join('');

  const mobileLinks = site.nav.map(l => `<a href="${l.href}">${l.label}</a>`).join('');
  const mobileCats = categories.map(c =>
    `<a href="products.html#${c.id}" style="padding-left:32px;font-size:.875rem;opacity:.8;">${c.name}</a>`
  ).join('');

  set('nav', `
    <div class="nav-inner">
      ${logoLink('index.html', site.company)}
      <div class="nav-links">${links}</div>
      <div class="nav-end">
        <a href="contact.html" class="btn btn-primary nav-cta">Contact Us</a>
        <button class="nav-hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>`);

  set('nav-mobile',
    mobileLinks +
    (categories.length ? mobileCats : '') +
    `<a href="contact.html">Contact Us</a>`
  );
}

function renderFooter(site) {
  const cols = site.footer_columns.map(col => `
    <div class="footer-col">
      <h5>${col.heading}</h5>
      <ul>${col.links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul>
    </div>`).join('');

  const social = site.social.map(s => `
    <a href="${s.href}" aria-label="${s.label}">${icon(s.icon)}</a>`).join('');

  set('footer', `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          ${logoLink('index.html', site.company)}
          <p>${site.tagline}</p>
        </div>
        ${cols}
      </div>
      <div class="footer-bottom">
        <p>&copy; <span id="year"></span> ${site.copyright}</p>
        <div class="footer-social">${social}</div>
      </div>
    </div>`);

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ── Page renderers ──────────────────────────────────────── */
function renderHome(d) {
  const h = d.hero;
  set('hero', `
    <span class="hero-eyebrow">${h.eyebrow}</span>
    <h1 class="hero-title">${h.title}</h1>
    <p class="hero-subtitle">${h.subtitle}</p>
    <div class="hero-actions">${h.cta.map(btn).join('')}</div>`);

  set('stats', d.stats.map(s => `
    <div>
      <div class="stat-number" data-count="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join(''));

  const f = d.features;
  set('features', `
    <div class="features-grid">${f.items.map(i => featureCard(i, true)).join('')}</div>`);

  const a = d.about_teaser;
  set('about-teaser', `
    <div class="split-img fade-up">${imgOrPlaceholder(a.image, 'Our team', 'image')}</div>
    <div class="fade-up">
      <div class="tag">${a.tag}</div>
      <h2 class="section-title">${a.title}</h2>
      ${a.body.map(p => `<p style="color:var(--text-muted);margin-bottom:24px;font-size:1.05rem;">${p}</p>`).join('')}
      ${btn(a.cta)}
    </div>`);

  const pp = d.products_preview;
  set('products-header', `
    <div class="tag">${pp.tag}</div>
    <h2 class="section-title">${pp.title}</h2>
    <p class="section-lead">${pp.lead}</p>`);

  set('products-cta', btn(pp.cta));
  set('cta', ctaBanner(d.cta));
}

function renderAbout(d) {
  set('page-hero', `
    <h1>${d.page_hero.title}</h1>
    <p>${d.page_hero.subtitle}</p>`);

  if (d.story?.image) {
    set('story-image', imgOrPlaceholder(d.story.image, 'Our facility', 'building'));
  }

  const v = d.values;
  set('values', `
    ${sectionHeader(v, true)}
    <div class="features-grid">${v.items.map(featureCard).join('')}</div>`);

  set('stats', d.stats.map(s => `
    <div>
      <div class="stat-number" data-count="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join(''));

  const t = d.team;
  set('team', `
    <div class="fade-up" style="text-align:center;max-width:560px;margin:0 auto 56px;">
      <div class="tag">${t.tag}</div>
      <h2 class="section-title">${t.title}</h2>
      <p class="section-lead">${t.lead}</p>
    </div>
    <div class="team-grid">
      ${t.members.map(m => `
        <div class="team-card fade-up">
          <div class="team-avatar">
            <img src="${m.image}" alt="${m.name}"
              onerror="this.parentElement.innerHTML='<div class=\\'placeholder-img\\'>👤</div>'">
          </div>
          <h4>${m.name}</h4>
          <span>${m.role}</span>
        </div>`).join('')}
    </div>`);

  set('cta', ctaBanner(d.cta));
}

function renderProducts(d) {
  set('page-hero', `
    <h1>${d.page_hero.title}</h1>
    <p>${d.page_hero.subtitle}</p>`);

  const c = d.custom;
  set('custom', `
    <div class="split fade-up">
      <div>
        <div class="tag">${c.tag}</div>
        <h2 class="section-title">${c.title}</h2>
        ${c.body.map(p => `<p style="color:var(--gray-300);margin-bottom:24px;font-size:1.05rem;">${p}</p>`).join('')}
        ${btn(c.cta)}
      </div>
      <div class="features-grid" style="grid-template-columns:1fr;">
        ${c.features.map(featureCard).join('')}
      </div>
    </div>`);

  set('cta', ctaBanner(d.cta));
}

function renderContact(d) {
  set('page-hero', `
    <h1>${d.page_hero.title}</h1>
    <p>${d.page_hero.subtitle}</p>`);

  set('contact-tag',   d.tag);
  set('contact-title', d.title);

  set('contact-details', d.details.map(detail => `
    <div class="contact-detail">
      <div class="contact-detail-icon">${icon(detail.icon)}</div>
      <div class="contact-detail-text">
        <strong>${detail.label}</strong>
        <span>${detail.href
          ? `<a href="${detail.href}" style="color:var(--blue)">${detail.value}</a>`
          : detail.value}</span>
      </div>
    </div>`).join(''));

  const form = document.getElementById('contact-form');
  if (form) {
    form.action = d.form.action;
    const select = form.querySelector('#subject');
    if (select) {
      select.innerHTML = `<option value="" disabled selected>Select a topic…</option>` +
        d.form.subjects.map(s => `<option>${s}</option>`).join('');
    }
  }
}

/* ── Products (flat grid — homepage preview) ─────────────── */
async function loadProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  try {
    const products = await fetch('content/products.json').then(r => r.json());
    grid.innerHTML = products.map(p => productCardHTML(p)).join('');
    grid.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));
  } catch { console.warn('Could not load products.json'); }
}

/* ── Products by category (products page sidebar) ────────── */
async function loadProductSections(pageData) {
  const sidebar = document.getElementById('products-sidebar');
  const main    = document.getElementById('products-main');
  if (!sidebar || !main) return;

  try {
    const products   = await fetch('content/products.json').then(r => r.json());
    const categories = pageData?.categories || [];

    const grouped = {};
    products.forEach(p => {
      const key = p.category || 'Other';
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(p);
    });

    const order = categories.length ? categories.map(c => c.name) : Object.keys(grouped);

    // Build sidebar
    sidebar.innerHTML = `<span class="products-sidebar-label">Product Lines</span>` +
      order.map((catName, i) => {
        const meta = categories.find(c => c.name === catName) || {};
        return `
          <button class="products-sidebar-btn${i === 0 ? ' active' : ''}"
                  data-cat="${catName}" type="button">
            <div class="products-sidebar-btn-icon">${icon(meta.icon || 'grid')}</div>
            <div class="products-sidebar-btn-text">
              <strong>${catName}</strong>
              <span>${meta.subtitle || ''}</span>
            </div>
          </button>`;
      }).join('');

    // Build panels
    main.innerHTML = order.map((catName, i) => {
      const items = grouped[catName] || [];
      const meta  = categories.find(c => c.name === catName) || {};
      return `
        <div class="products-panel${i === 0 ? ' active' : ''}" data-cat="${catName}" id="${meta.id || ''}">
          <div class="products-panel-header">
            <h2>${catName}</h2>
            <p>${meta.description || ''}</p>
          </div>
          <div class="product-list">
            ${items.map(p => productListItemHTML(p)).join('')}
          </div>
        </div>`;
    }).join('');

    // Switch panels on sidebar click
    sidebar.addEventListener('click', e => {
      const btn = e.target.closest('.products-sidebar-btn');
      if (!btn) return;
      const cat = btn.dataset.cat;
      sidebar.querySelectorAll('.products-sidebar-btn').forEach(b => b.classList.toggle('active', b === btn));
      main.querySelectorAll('.products-panel').forEach(p => p.classList.toggle('active', p.dataset.cat === cat));
    });

    // Activate via URL hash (from nav dropdown links)
    const hash = location.hash.slice(1);
    if (hash) {
      const panel = main.querySelector(`.products-panel[id="${hash}"]`);
      if (panel) {
        const cat = panel.dataset.cat;
        sidebar.querySelectorAll('.products-sidebar-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
        main.querySelectorAll('.products-panel').forEach(p => p.classList.toggle('active', p === panel));
      }
    }

  } catch { console.warn('Could not load products.json'); }
}

function productListItemHTML(p) {
  const url = p.id ? `product.html?id=${p.id}` : (p.link || '#');
  const thumb = p.image
    ? `<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'">`
    : '';
  return `
    <a href="${url}" class="product-list-item">
      <div class="product-list-thumb">${thumb}</div>
      <div>
        <div class="product-list-name">${p.name}</div>
        <div class="product-list-desc">${p.description}</div>
      </div>
    </a>`;
}

function productCardHTML(p) {
  const detailUrl = p.id ? `product.html?id=${p.id}` : (p.link || '#');
  return `
    <div class="product-card fade-up">
      <div class="product-card-img">
        ${p.image
          ? `<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'">`
          : `<div class="placeholder-img">${icon('image')}</div>`}
      </div>
      <div class="product-card-body">
        <div class="product-card-tag">${p.category || 'Product'}</div>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <a href="${detailUrl}" class="btn btn-primary">Learn More</a>
      </div>
    </div>`;
}

/* ── Product detail page ─────────────────────────────────── */
async function renderProductDetail() {
  const id = new URLSearchParams(location.search).get('id');
  if (!id) { location.href = 'products.html'; return; }

  try {
    const products = await fetch('content/products.json').then(r => r.json());
    const p = products.find(x => x.id === id);
    if (!p) { location.href = 'products.html'; return; }

    document.title = `${p.name} — On Capacitor`;

    set('page-hero', `<h1>${p.name}</h1>`);

    set('product-image', imgOrPlaceholder(p.image, p.name, 'image'));

    set('product-meta', `
      <div class="tag">${p.category}</div>
      <h1>${p.name}</h1>
      <p>${p.overview || p.description}</p>`);

    if (p.applications?.length) {
      set('product-applications', `
        <h3>Applications</h3>
        <ul>${p.applications.map(a => `<li>${a}</li>`).join('')}</ul>`);
    }

    set('specs-body', (p.specs || []).map(s => `
      <tr>
        <td>${s.label}</td>
        <td class="${s.value === 'TBD' ? 'spec-tbd' : ''}">${s.value === 'TBD' ? 'To be confirmed' : s.value}</td>
      </tr>`).join(''));

  } catch { location.href = 'products.html'; }
}

/* ── Markdown loader ─────────────────────────────────────── */
async function loadMarkdown() {
  const els = document.querySelectorAll('[data-md]');
  if (!els.length) return;
  await loadScript('https://cdn.jsdelivr.net/npm/marked@9/marked.min.js');
  marked.use({ breaks: true, gfm: true });
  for (const el of els) {
    try {
      const text = await fetch(el.dataset.md).then(r => r.ok ? r.text() : '');
      el.innerHTML = marked.parse(text);
      el.classList.add('md-content');
    } catch { console.warn(`Could not load: ${el.dataset.md}`); }
  }
}

/* ── Contact form ────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const submitBtn = form.querySelector('[type=submit]');
    const success = document.getElementById('form-success');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.reset();
        if (success) success.style.display = 'block';
        submitBtn.textContent = 'Sent!';
      } else throw new Error();
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
      alert('Something went wrong. Please email us directly.');
    }
  });
}

/* ── Animated counters ───────────────────────────────────── */
function initCounters() {
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(({ isIntersecting, target }) => {
      if (!isIntersecting) return;
      const end = parseFloat(target.dataset.count);
      const suffix = target.dataset.suffix || '';
      const isFloat = String(end).includes('.');
      const start = performance.now();
      const animate = now => {
        const t = Math.min((now - start) / 1600, 1);
        const val = end * (1 - Math.pow(1 - t, 3));
        target.textContent = (isFloat ? val.toFixed(1) : Math.round(val)) + suffix;
        if (t < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      countObserver.unobserve(target);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));
}

/* ── Scroll-triggered fade ───────────────────────────────── */
const fadeObserver = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

/* ── Nav behaviour ───────────────────────────────────────── */
function initNav() {
  const navEl = document.querySelector('.nav');
  window.addEventListener('scroll', () =>
    navEl?.classList.toggle('scrolled', window.scrollY > 40), { passive: true });

  // Hamburger toggle
  document.addEventListener('click', e => {
    const hamburger = e.target.closest('.nav-hamburger');
    const mobileMenu = document.getElementById('nav-mobile');
    if (hamburger) {
      hamburger.classList.toggle('open');
      mobileMenu?.classList.toggle('open');
    } else if (!e.target.closest('#nav-mobile')) {
      document.querySelector('.nav-hamburger')?.classList.remove('open');
      mobileMenu?.classList.remove('open');
    }
  });

  // Dropdown: open on hover, close with delay so mouse can travel to menu
  document.querySelectorAll('.nav-dropdown').forEach(wrapper => {
    const menu = wrapper.querySelector('.nav-dropdown-menu');
    if (!menu) return;
    let timer;
    const open  = () => { clearTimeout(timer); menu.classList.add('open'); };
    const close = () => { timer = setTimeout(() => menu.classList.remove('open'), 200); };
    wrapper.addEventListener('mouseenter', open);
    wrapper.addEventListener('mouseleave', close);
    menu.addEventListener('mouseenter', open);
    menu.addEventListener('mouseleave', close);
  });
}

/* ── Products page filter ────────────────────────────────── */
function initProductFilter() {
  const filterBar = document.getElementById('filter-bar');
  const grid = document.getElementById('products-grid');
  const empty = document.getElementById('products-empty');
  if (!filterBar || !grid) return;

  const interval = setInterval(() => {
    const cards = grid.querySelectorAll('.product-card');
    if (!cards.length) return;
    clearInterval(interval);

    const cats = new Set();
    cards.forEach(c => {
      const tag = c.querySelector('.product-card-tag')?.textContent?.trim();
      if (tag) cats.add(tag);
    });

    filterBar.innerHTML = `<span style="font-size:.85rem;font-weight:600;color:var(--text-muted);margin-right:4px;">Filter:</span>
      <button class="filter-btn active" data-filter="all">All Products</button>` +
      [...cats].map(cat =>
        `<button class="filter-btn" data-filter="${cat}">${cat}</button>`).join('');

    filterBar.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      let visible = 0;
      cards.forEach(card => {
        const tag = card.querySelector('.product-card-tag')?.textContent?.trim();
        const show = filter === 'all' || tag === filter;
        card.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      if (empty) empty.style.display = visible === 0 ? 'block' : 'none';
    });
  }, 200);
}

/* ── Utility ─────────────────────────────────────────────── */
function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = Object.assign(document.createElement('script'), { src, onload: resolve, onerror: reject });
    document.head.appendChild(s);
  });
}

function currentPage() {
  const name = location.pathname.split('/').pop().replace('.html', '');
  return name || 'index';
}

/* ── Boot ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
  const page = currentPage();

  const pageFile = { index: 'home', about: 'about', products: 'products-page', contact: 'contact' }[page] || page;

  const [site, pageData, productsPage] = await Promise.all([
    fetch('content/site.json').then(r => r.json()).catch(() => ({})),
    fetch(`content/${pageFile}.json`).then(r => r.json()).catch(() => ({})),
    fetch('content/products-page.json').then(r => r.json()).catch(() => ({}))
  ]);

  const categories = productsPage?.categories || [];
  renderNav(site, location.pathname.split('/').pop() || 'index.html', categories);
  renderFooter(site);

  if (page === 'index')    renderHome(pageData);
  if (page === 'about')    renderAbout(pageData);
  if (page === 'products') renderProducts(pageData);
  if (page === 'contact')  renderContact(pageData);
  if (page === 'product')  await renderProductDetail();

  await Promise.all([loadProducts(), loadProductSections(pageData), loadMarkdown()]);

  initNav();
  initContactForm();
  initCounters();
  initProductFilter();

  document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));
});
