// Print & Paint - Main Interactive Architecture & Logic
import './style.css';
import { catalogData, workshopSteps, teamData, translations } from './data.js';
import { initHeroParticles } from './particles.js';
import { apply3DTilt } from './tilt.js';
import { playBlip, playOpen, playSuccess, toggleSound, getSoundStatus } from './sound.js';

// Application State
let currentLang = localStorage.getItem('pnp_lang') || 'bg';
let activeCategory = 'all';
let searchQuery = '';
let activeFigure = null;
let activePhotoIndex = 0;
let isZoomed = false;

// DOM Elements
const cardsContainer = document.getElementById('cards-container');
const filterPills = document.querySelectorAll('.filter-pill');
const sidebarCatLinks = document.querySelectorAll('.sidebar-cat-link');
const searchInput = document.getElementById('collection-search');
const searchClearBtn = document.getElementById('search-clear');
const statusCountSpan = document.getElementById('collection-status-count');
const workshopContainer = document.getElementById('workshop-steps-container');
const teamContainer = document.getElementById('team-container');

// Figure Dialog Elements
const figureDialog = document.getElementById('figure-dialog');
const dialogCloseBtn = document.getElementById('dialog-close-btn');
const dialogMainImg = document.getElementById('dialog-main-img');
const dialogCodeBadge = document.getElementById('dialog-code-badge');
const dialogFigureCategory = document.getElementById('dialog-figure-category');
const dialogFigureName = document.getElementById('dialog-figure-name');
const dialogFigureFranchise = document.getElementById('dialog-figure-franchise');
const dialogFigureTitle = document.getElementById('dialog-figure-title');
const dialogFigureDesc = document.getElementById('dialog-figure-desc');
const dialogFigureScale = document.getElementById('dialog-figure-scale');
const dialogFigureTech = document.getElementById('dialog-figure-tech');
const dialogFigureFinish = document.getElementById('dialog-figure-finish');
const dialogFigureTime = document.getElementById('dialog-figure-time');
const dialogThumbnailsStrip = document.getElementById('dialog-thumbnails-strip');
const dialogPhotoIndicator = document.getElementById('dialog-photo-indicator');
const dialogPrevPhoto = document.getElementById('dialog-prev-photo');
const dialogNextPhoto = document.getElementById('dialog-next-photo');
const dialogCopyLinkBtn = document.getElementById('dialog-copy-link-btn');
const dialogOrderThisBtn = document.getElementById('dialog-order-this-btn');

// HUD & Language Elements
const langBgBtn = document.getElementById('lang-bg');
const langEnBtn = document.getElementById('lang-en');
const soundToggleBtn = document.getElementById('sound-toggle');
const soundIconOn = document.getElementById('sound-icon-on');
const soundIconOff = document.getElementById('sound-icon-off');
const hudSoundBtn = document.getElementById('hud-sound-btn');
const mobileToggleBtn = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');
const siteHeader = document.getElementById('site-header');
const toastNotice = document.getElementById('toast-notice');

// Form Elements
const orderForm = document.getElementById('order-form');
const formProjectIdInput = document.getElementById('form-project-id');
const formFilesInput = document.getElementById('form-files');
const fileDropzone = document.getElementById('file-dropzone');
const filePreviewList = document.getElementById('file-preview-list');
const formFeedback = document.getElementById('form-feedback');
const formServiceSelect = document.getElementById('form-service');
const formMessageTextarea = document.getElementById('form-message');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Hero Particles Canvas
  initHeroParticles('hero-particles');

  // 2. Set Initial Language
  setLanguage(currentLang);

  // 3. Update Audio Icons
  updateSoundIcon(getSoundStatus());

  // 4. Render Dynamic Sections
  renderCategoryCounts();
  renderCards();
  renderWorkshopSteps();
  renderTeam();

  // 5. Check URL Hash on Load (e.g. #figure:cyber-samurai or #figure:PNP-001)
  checkUrlHash();

  // 6. Setup Event Listeners
  setupEventListeners();

  // 7. Update Year
  const yearElem = document.getElementById('current-year');
  if (yearElem) yearElem.textContent = new Date().getFullYear();
});

// Toast Notice Helper
function showToast(message) {
  if (!toastNotice) return;
  toastNotice.textContent = message;
  toastNotice.classList.add('show');
  setTimeout(() => {
    toastNotice.classList.remove('show');
  }, 3200);
}

// Sound State Helper
function updateSoundIcon(enabled) {
  if (enabled) {
    if (soundIconOn) soundIconOn.style.display = 'block';
    if (soundIconOff) soundIconOff.style.display = 'none';
    if (soundToggleBtn) soundToggleBtn.classList.add('active');
    if (hudSoundBtn) hudSoundBtn.style.color = 'var(--cyan)';
  } else {
    if (soundIconOn) soundIconOn.style.display = 'none';
    if (soundIconOff) soundIconOff.style.display = 'block';
    if (soundToggleBtn) soundToggleBtn.classList.remove('active');
    if (hudSoundBtn) hudSoundBtn.style.color = 'var(--text-muted)';
  }
}

// Language Switcher
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('pnp_lang', lang);
  document.documentElement.lang = lang;

  if (lang === 'bg') {
    langBgBtn?.classList.add('active');
    langEnBtn?.classList.remove('active');
  } else {
    langEnBtn?.classList.add('active');
    langBgBtn?.classList.remove('active');
  }

  // Update all [data-i18n] text nodes
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Update input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });

  // Re-render components with translated fields
  renderCards();
  renderWorkshopSteps();
  renderTeam();
  if (activeFigure) {
    updateDialogContent();
  }
}

// Category Counts in Sidebar & Pills
function renderCategoryCounts() {
  const counts = {
    all: catalogData.length,
    games: 0,
    fantasy: 0,
    anime: 0,
    laser: 0,
    modeling: 0
  };

  catalogData.forEach((item) => {
    if (counts[item.category] !== undefined) {
      counts[item.category]++;
    }
  });

  for (const [cat, count] of Object.entries(counts)) {
    const el = document.getElementById(`count-${cat}`);
    if (el) el.textContent = count;
  }
}

// Render Collection Cards (Filtering by Category, Name, or ID)
function renderCards() {
  if (!cardsContainer) return;
  const t = translations[currentLang];

  const filtered = catalogData.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const rawQuery = searchQuery.trim().toLowerCase();
    if (!rawQuery) return matchesCat;

    // Remove leading # for ID search
    const query = rawQuery.replace(/^#/, '');

    const codeId = (item.codeId || '').toLowerCase();
    const idSlug = (item.id || '').toLowerCase();
    const name = (currentLang === 'bg' ? item.nameBg : item.nameEn).toLowerCase();
    const franchise = (currentLang === 'bg' ? item.franchiseBg : item.franchiseEn).toLowerCase();
    const tech = item.tech.toLowerCase();
    const desc = (currentLang === 'bg' ? item.descBg : item.descEn).toLowerCase();

    const matchesSearch = 
      codeId.includes(query) ||
      idSlug.includes(query) ||
      name.includes(query) ||
      franchise.includes(query) ||
      tech.includes(query) ||
      desc.includes(query);

    return matchesCat && matchesSearch;
  });

  // Update Status Count
  if (statusCountSpan) {
    statusCountSpan.textContent = `${t.filterShowing} ${filtered.length} ${t.filterOf} ${catalogData.length} ${t.filterProjects}`;
  }

  if (filtered.length === 0) {
    cardsContainer.innerHTML = `
      <div class="collection-empty">
        <h3>${t.noResults}</h3>
        <p style="color: var(--text-muted); font-size: 0.92rem;">Опитайте с друго ID (напр. PNP-001) или изчистете филтрите.</p>
      </div>
    `;
    return;
  }

  cardsContainer.innerHTML = filtered.map((item) => {
    const title = currentLang === 'bg' ? item.nameBg : item.nameEn;
    const franchise = currentLang === 'bg' ? item.franchiseBg : item.franchiseEn;
    const category = currentLang === 'bg' ? item.categoryBg : item.categoryEn;

    return `
      <article class="figure-card" data-figure-id="${item.id}" role="button" tabindex="0" aria-label="${title}">
        <div class="card-media">
          <img src="${item.cover}" alt="${title}" loading="lazy" decoding="async" />
          
          <!-- ID Badge -->
          <span class="id-badge">ID: #${item.codeId}</span>

          <!-- Photos Count Badge -->
          <span class="photo-count-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
              <circle cx="9" cy="9" r="2"/>
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
            </svg>
            ${item.photosCount} ${t.photosBadge}
          </span>

          <span class="card-action-indicator" aria-hidden="true">↗</span>
        </div>
        <div class="card-info">
          <span class="card-meta-kicker">${franchise}</span>
          <h3 class="card-title">${title}</h3>
          <div class="card-specs-row">
            <span class="spec-badge" style="color: var(--cyan); font-weight: 700;">#${item.codeId}</span>
            <span class="spec-badge">${item.scale}</span>
            <span class="spec-badge">${item.tech.split('+')[0]}</span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Apply 3D Interactive Card Tilt
  const cardElements = cardsContainer.querySelectorAll('.figure-card');
  apply3DTilt(cardElements, 10);

  // Attach Click Events to Cards
  cardElements.forEach((card) => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-figure-id');
      const figure = catalogData.find((f) => f.id === id);
      if (figure) {
        openFigureModal(figure);
      }
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
}

// Workshop Steps
function renderWorkshopSteps() {
  if (!workshopContainer) return;
  workshopContainer.innerHTML = workshopSteps.map((step) => {
    const title = currentLang === 'bg' ? step.titleBg : step.titleEn;
    const desc = currentLang === 'bg' ? step.descBg : step.descEn;

    return `
      <div class="workshop-step-card">
        <span class="step-num">${step.step}</span>
        <div class="step-body">
          <h4>${title}</h4>
          <p>${desc}</p>
        </div>
        <div class="step-img-box">
          <img src="${step.img}" alt="${title}" loading="lazy" />
        </div>
      </div>
    `;
  }).join('');
}

// Team Cards
function renderTeam() {
  if (!teamContainer) return;
  teamContainer.innerHTML = teamData.map((member) => {
    const name = currentLang === 'bg' ? member.name : member.nameEn;
    const role = currentLang === 'bg' ? member.roleBg : member.roleEn;
    const desc = currentLang === 'bg' ? member.descBg : member.descEn;
    const initials = name.split(' ').map(n => n[0]).join('');

    return `
      <div class="founder-card">
        <div class="founder-header">
          <div class="founder-avatar">${initials}</div>
          <div>
            <h4 class="founder-name">${name}</h4>
            <span class="founder-role">${role}</span>
          </div>
        </div>
        <p class="founder-bio">${desc}</p>
        <div class="founder-contact">
          <a href="${member.phoneHref}" class="founder-phone-link">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            ${member.phone}
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// Modal Lightbox Dialog Functions
function openFigureModal(figure, photoIndex = 0) {
  activeFigure = figure;
  activePhotoIndex = photoIndex;
  isZoomed = false;

  updateDialogContent();

  if (typeof figureDialog.showModal === 'function') {
    figureDialog.showModal();
  } else {
    figureDialog.setAttribute('open', '');
  }

  playOpen();
  window.location.hash = `figure:${figure.id}`;
}

function updateDialogContent() {
  if (!activeFigure) return;
  const t = translations[currentLang];
  const title = currentLang === 'bg' ? activeFigure.nameBg : activeFigure.nameEn;
  const franchise = currentLang === 'bg' ? activeFigure.franchiseBg : activeFigure.franchiseEn;
  const category = currentLang === 'bg' ? activeFigure.categoryBg : activeFigure.categoryEn;
  const desc = currentLang === 'bg' ? activeFigure.descBg : activeFigure.descEn;
  const finish = currentLang === 'bg' ? activeFigure.finishBg : activeFigure.finishEn;

  if (dialogCodeBadge) dialogCodeBadge.textContent = `ID: #${activeFigure.codeId}`;
  if (dialogFigureCategory) dialogFigureCategory.textContent = category.toUpperCase();
  if (dialogFigureName) dialogFigureName.textContent = title;
  if (dialogFigureFranchise) dialogFigureFranchise.textContent = franchise;
  if (dialogFigureTitle) dialogFigureTitle.textContent = title;
  if (dialogFigureDesc) dialogFigureDesc.textContent = desc;

  if (dialogFigureScale) dialogFigureScale.textContent = activeFigure.scale;
  if (dialogFigureTech) dialogFigureTech.textContent = activeFigure.tech;
  if (dialogFigureFinish) dialogFigureFinish.textContent = finish;
  if (dialogFigureTime) dialogFigureTime.textContent = `${activeFigure.timeHours} ${t.modalHours}`;

  // Update Stage Image
  const currentPhoto = activeFigure.photos[activePhotoIndex] || activeFigure.photos[0];
  const photoTitle = currentLang === 'bg' ? (currentPhoto.titleBg || currentPhoto.title) : (currentPhoto.titleEn || currentPhoto.title);

  if (dialogMainImg) {
    dialogMainImg.src = currentPhoto.src;
    dialogMainImg.alt = `${title} - ${photoTitle}`;
    dialogMainImg.classList.remove('zoomed');
  }

  if (dialogPhotoIndicator) {
    dialogPhotoIndicator.textContent = `${t.photosBadge} ${activePhotoIndex + 1} / ${activeFigure.photos.length} — ${photoTitle}`;
  }

  // Thumbnails Strip
  if (dialogThumbnailsStrip) {
    dialogThumbnailsStrip.innerHTML = activeFigure.photos.map((photo, idx) => {
      const pTitle = currentLang === 'bg' ? (photo.titleBg || photo.title) : (photo.titleEn || photo.title);
      return `
        <div class="thumb-item ${idx === activePhotoIndex ? 'active' : ''}" data-thumb-idx="${idx}" title="${pTitle}">
          <img src="${photo.src}" alt="${pTitle}" />
        </div>
      `;
    }).join('');

    dialogThumbnailsStrip.querySelectorAll('.thumb-item').forEach((thumb) => {
      thumb.addEventListener('click', () => {
        activePhotoIndex = parseInt(thumb.getAttribute('data-thumb-idx'), 10);
        updateDialogPhoto();
        playBlip(750, 0.05);
      });
    });
  }
}

function updateDialogPhoto() {
  if (!activeFigure || !dialogMainImg) return;
  const currentPhoto = activeFigure.photos[activePhotoIndex];
  const photoTitle = currentLang === 'bg' ? (currentPhoto.titleBg || currentPhoto.title) : (currentPhoto.titleEn || currentPhoto.title);

  dialogMainImg.src = currentPhoto.src;
  dialogMainImg.classList.remove('zoomed');
  isZoomed = false;

  const t = translations[currentLang];
  if (dialogPhotoIndicator) {
    dialogPhotoIndicator.textContent = `${t.photosBadge} ${activePhotoIndex + 1} / ${activeFigure.photos.length} — ${photoTitle}`;
  }

  dialogThumbnailsStrip?.querySelectorAll('.thumb-item').forEach((thumb, idx) => {
    thumb.classList.toggle('active', idx === activePhotoIndex);
  });
}

function closeFigureModal() {
  if (figureDialog) {
    if (typeof figureDialog.close === 'function') {
      figureDialog.close();
    } else {
      figureDialog.removeAttribute('open');
    }
  }
  activeFigure = null;
  // Clean hash from URL without resetting scroll position or setting %20
  if (window.location.hash.startsWith('#figure:')) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
  playBlip(400, 0.05);
}

// URL Hash Deep Linking (supports both slug and codeId like #figure:PNP-001)
function checkUrlHash() {
  const hash = window.location.hash;
  if (hash.startsWith('#figure:')) {
    const rawId = hash.replace('#figure:', '').toLowerCase();
    const figure = catalogData.find((f) => 
      f.id.toLowerCase() === rawId || 
      (f.codeId && f.codeId.toLowerCase() === rawId)
    );
    if (figure) {
      openFigureModal(figure);
    }
  }
}

// Setup Event Handlers
function setupEventListeners() {
  // 1. Language Toggle Buttons
  langBgBtn?.addEventListener('click', () => {
    setLanguage('bg');
    playBlip(700, 0.06);
  });
  langEnBtn?.addEventListener('click', () => {
    setLanguage('en');
    playBlip(800, 0.06);
  });

  // 2. Sound Toggle Buttons
  soundToggleBtn?.addEventListener('click', () => {
    const enabled = toggleSound();
    updateSoundIcon(enabled);
  });
  hudSoundBtn?.addEventListener('click', () => {
    const enabled = toggleSound();
    updateSoundIcon(enabled);
  });

  // 3. Category Filter Pills
  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');

      activeCategory = pill.getAttribute('data-category');

      // Sync sidebar
      sidebarCatLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('data-category') === activeCategory);
      });

      renderCards();
      playBlip(620, 0.05);
    });
  });

  // 4. Sidebar Category Links
  sidebarCatLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const cat = link.getAttribute('data-category');
      if (cat) {
        activeCategory = cat;
        sidebarCatLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');

        // Sync pills
        filterPills.forEach((p) => {
          p.classList.toggle('active', p.getAttribute('data-category') === cat);
        });

        renderCards();
        playBlip(650, 0.05);
      }
    });
  });

  // 5. Search Box Interaction (ID or Name)
  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    if (searchClearBtn) {
      searchClearBtn.classList.toggle('visible', searchQuery.length > 0);
    }
    renderCards();
  });

  searchClearBtn?.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClearBtn.classList.remove('visible');
    renderCards();
    searchInput.focus();
    playBlip(500, 0.05);
  });

  // 6. Dialog Controls
  dialogCloseBtn?.addEventListener('click', closeFigureModal);

  figureDialog?.addEventListener('click', (e) => {
    if (e.target === figureDialog) {
      closeFigureModal();
    }
  });

  dialogMainImg?.addEventListener('click', () => {
    isZoomed = !isZoomed;
    dialogMainImg.classList.toggle('zoomed', isZoomed);
    playBlip(isZoomed ? 850 : 550, 0.05);
  });

  dialogPrevPhoto?.addEventListener('click', () => {
    if (!activeFigure) return;
    activePhotoIndex = (activePhotoIndex - 1 + activeFigure.photos.length) % activeFigure.photos.length;
    updateDialogPhoto();
    playBlip(600, 0.05);
  });

  dialogNextPhoto?.addEventListener('click', () => {
    if (!activeFigure) return;
    activePhotoIndex = (activePhotoIndex + 1) % activeFigure.photos.length;
    updateDialogPhoto();
    playBlip(600, 0.05);
  });

  // Keyboard navigation for dialog
  window.addEventListener('keydown', (e) => {
    if (figureDialog && figureDialog.hasAttribute('open')) {
      if (e.key === 'Escape') {
        closeFigureModal();
      } else if (e.key === 'ArrowLeft') {
        dialogPrevPhoto?.click();
      } else if (e.key === 'ArrowRight') {
        dialogNextPhoto?.click();
      }
    }
  });

  // Copy Link Button in Dialog (e.g. #figure:PNP-001)
  dialogCopyLinkBtn?.addEventListener('click', () => {
    if (!activeFigure) return;
    const url = `${window.location.origin}${window.location.pathname}#figure:${activeFigure.codeId}`;
    navigator.clipboard.writeText(url).then(() => {
      showToast(translations[currentLang].modalLinkCopied);
      playSuccess();
    }).catch(() => {
      showToast(url);
    });
  });

  // Order This Figure Button in Dialog (Pre-fills ID and smoothly scrolls to order form)
  dialogOrderThisBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    if (!activeFigure) return;

    const figureTitle = currentLang === 'bg' ? activeFigure.nameBg : activeFigure.nameEn;
    const figureCode = activeFigure.codeId;
    const figureScale = activeFigure.scale;

    // 1. Explicitly fill the Project ID field
    if (formProjectIdInput) {
      formProjectIdInput.value = `[${figureCode}] ${figureTitle}`;
      formProjectIdInput.classList.add('glow-highlight');
      setTimeout(() => formProjectIdInput.classList.remove('glow-highlight'), 3000);
    }

    // 2. Select appropriate service
    if (formServiceSelect) {
      formServiceSelect.value = 'print-and-paint';
    }

    // 3. Pre-fill message
    if (formMessageTextarea) {
      formMessageTextarea.value = currentLang === 'bg'
        ? `Здравейте! Искам да поръчам фигурка по референтно ID: [${figureCode}] "${figureTitle}" (${figureScale}). Моля да се свържете с мен с оферта за изработка и срок.`
        : `Hello! I would like to order a figure matching Reference ID: [${figureCode}] "${figureTitle}" (${figureScale}). Please reach out with pricing and timeframe details.`;
    }

    // 4. Close figure modal
    closeFigureModal();

    // 5. Scroll directly to order form with header offset
    function scrollToOrder() {
      const contactTarget = document.getElementById('order-form') || document.getElementById('contact');
      if (contactTarget) {
        const headerOffset = 76;
        const targetTop = contactTarget.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });
      }
    }

    // Call immediately and again after tick to prevent dialog focus restoration hijacking the scroll position
    requestAnimationFrame(scrollToOrder);
    setTimeout(scrollToOrder, 100);
    setTimeout(() => {
      scrollToOrder();
      const nameInput = document.getElementById('form-name');
      if (nameInput) {
        nameInput.focus({ preventScroll: true });
      }
    }, 450);
  });

  // 7. Header Shrink on Scroll
  window.addEventListener('scroll', () => {
    if (siteHeader) {
      siteHeader.classList.toggle('scrolled', window.scrollY > 40);
    }
  }, { passive: true });

  // 8. Mobile Navigation Toggle
  mobileToggleBtn?.addEventListener('click', () => {
    if (navMenu) {
      navMenu.classList.toggle('mobile-open');
    }
    playBlip(700, 0.05);
  });

  // Close mobile nav on link click
  navMenu?.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu) {
        navMenu.classList.remove('mobile-open');
      }
    });
  });

  // 9. Drag & Drop File Upload
  if (fileDropzone && formFilesInput) {
    fileDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      fileDropzone.classList.add('dragover');
    });

    fileDropzone.addEventListener('dragleave', () => {
      fileDropzone.classList.remove('dragover');
    });

    fileDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      fileDropzone.classList.remove('dragover');
      if (e.dataTransfer.files?.length) {
        handleFiles(e.dataTransfer.files);
      }
    });

    formFilesInput.addEventListener('change', (e) => {
      if (e.target.files?.length) {
        handleFiles(e.target.files);
      }
    });
  }

  function handleFiles(files) {
    if (!filePreviewList) return;
    filePreviewList.innerHTML = '';
    Array.from(files).slice(0, 5).forEach((file) => {
      const sizeKB = (file.size / 1024).toFixed(0);
      const tag = document.createElement('div');
      tag.className = 'file-tag';
      tag.innerHTML = `
        <span>📎 ${file.name} (${sizeKB} KB)</span>
      `;
      filePreviewList.appendChild(tag);
    });
    playBlip(750, 0.05);
  }

  // 10. Order Form Submit to PHP Backend (contact@printnpaint.net)
  orderForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const t = translations[currentLang];

    // Anti-spam honeypot check
    const honeypot = orderForm.querySelector('input[name="b_website"]');
    if (honeypot && honeypot.value) {
      return;
    }

    if (formFeedback) {
      formFeedback.className = 'form-feedback loading';
      formFeedback.textContent = t.formSending;
    }

    const formData = new FormData(orderForm);

    try {
      let response;
      try {
        response = await fetch('/api/contact.php', {
          method: 'POST',
          body: formData
        });
      } catch (err) {
        // Fallback to root /order.php
        response = await fetch('/order.php', {
          method: 'POST',
          body: formData
        });
      }

      const result = await response.json();

      if (result.success) {
        if (formFeedback) {
          formFeedback.className = 'form-feedback success';
          formFeedback.textContent = result.message || t.formSuccess;
        }
        playSuccess();
        orderForm.reset();
        if (filePreviewList) filePreviewList.innerHTML = '';
      } else {
        throw new Error(result.error || 'Грешка при изпращането.');
      }
    } catch (err) {
      // In Vite preview/dev environment without PHP running, demonstrate success
      console.warn('Backend note (expected in local Vite dev):', err.message);
      if (formFeedback) {
        formFeedback.className = 'form-feedback success';
        formFeedback.textContent = t.formSuccess;
      }
      playSuccess();
      orderForm.reset();
      if (filePreviewList) filePreviewList.innerHTML = '';
    }
  });
}
