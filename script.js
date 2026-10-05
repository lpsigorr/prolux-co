(function () {
  'use strict';

  /* ==========================================================
     Languages
     All texts live here. The page is written in French; picking
     another language swaps the texts in place, no page reload.
     Elements opt in with data-i18n="key" (text) or
     data-i18n-attrs="attribute:key;attribute:key" (alt, aria-label...).
     ========================================================== */

  var I18N = {
    fr: {
      title: "Prolux & Co | Travaux de toiture à Zaventem",
      desc: "Prolux & Co SRL, toiture à Zaventem : construction, rénovation, réparation, dépannage urgent. Plus de 20 ans dans le bâtiment.",
      skip: "Aller au contenu",
      brand_aria: "Prolux & Co, accueil",
      nav_aria: "Navigation principale",
      nav_services: "Services",
      nav_work: "Travaux",
      nav_about: "Qui sommes-nous",
      nav_contact: "Contact",
      lang_label: "Langue",
      call: "Appeler",
      menu: "Menu",
      menu_close: "Fermer",
      hero_h1: "Travaux de toiture",
      hero_lead: "Construction, rénovation, réparation et dépannage urgent.",
      hero_cta2: "Voir nos services",
      alt_hero: "Un couvreur sur une échelle posée contre une toiture en tuiles rouges, au niveau du faîte, avec une lance de lavage",
      services_title: "Services",
      s1: "Construction, rénovation et réparation",
      s2: "Toitures plates, inclinées, écologiques et végétales",
      s2_note: "En tuiles et en ardoises",
      s3: "Roofing et zinguerie",
      s4: "Corniche",
      s5: "Lavage et démoussage",
      s6: "Dépannage urgent",
      work_title: "Nos travaux",
      g1: "Lavage et démoussage",
      g2: "Corniche et zinguerie",
      video_aria: "Vidéo d'un chantier de lavage de toiture",
      video_pause: "Mettre en pause",
      video_play: "Lire la vidéo",
      cap_wash: "Lavage de toiture",
      cap_cornice: "Corniche",
      cap_zinc: "Zinguerie",
      cap_cornice_zinc: "Corniche et zinguerie",
      alt_cheminee: "Un couvreur lave une toiture en tuiles depuis une échelle, à côté d'une cheminée en briques",
      alt_fenetres: "Lavage d'une toiture en tuiles autour de deux fenêtres de toit, la partie lavée est plus claire",
      alt_corniche: "Corniche sur un mur en briques rouges, avec une finition métallique sur le dessus",
      alt_zinc_roof: "Bord de toiture en tuiles noires avec finition en zinc et chéneau",
      alt_zinc_gutter: "Chéneau en zinc le long d'une toiture en tuiles noires, vu d'en haut",
      about_pill: "Qui sommes-nous",
      about_a: "Plus de 20 ans dans le",
      about_b: "bâtiment.",
      about_text: "Une toiture à construire, rénover, réparer ou nettoyer\u00a0? Dites-nous ce qu'il vous faut, nous nous en occupons.",
      write_us: "Nous écrire",
      contact_title: "Contact",
      label_phone: "Téléphone",
      label_email: "E-mail",
      label_address: "Adresse",
      copy_btn: "Copier l'adresse",
      copied: "Adresse copiée",
      copy_failed: "Copie impossible. Sélectionnez l'adresse à la main.",
      lb_aria: "Photo agrandie",
      lb_prev: "Précédente",
      lb_next: "Suivante",
      lb_close: "Fermer"
    },
    nl: {
      title: "Prolux & Co | Dakwerken in Zaventem",
      desc: "Prolux & Co SRL, dakwerken in Zaventem: bouw, renovatie, herstelling en spoeddienst. Meer dan 20 jaar in de bouw.",
      skip: "Ga naar de inhoud",
      brand_aria: "Prolux & Co, startpagina",
      nav_aria: "Hoofdmenu",
      nav_services: "Diensten",
      nav_work: "Ons werk",
      nav_about: "Wie zijn wij",
      nav_contact: "Contact",
      lang_label: "Taal",
      call: "Bellen",
      menu: "Menu",
      menu_close: "Sluiten",
      hero_h1: "Dakwerken",
      hero_lead: "Bouw, renovatie, herstelling en spoeddienst.",
      hero_cta2: "Bekijk onze diensten",
      alt_hero: "Een dakwerker op een ladder tegen een dak met rode dakpannen, ter hoogte van de nok, met een reinigingslans",
      services_title: "Diensten",
      s1: "Bouw, renovatie en herstelling",
      s2: "Platte daken, hellende daken, ecologische daken en groendaken",
      s2_note: "Met dakpannen en leien",
      s3: "Roofing en zinkwerk",
      s4: "Kroonlijst",
      s5: "Reiniging en ontmossing",
      s6: "Spoeddienst",
      work_title: "Ons werk",
      g1: "Reiniging en ontmossing",
      g2: "Kroonlijst en zinkwerk",
      video_aria: "Video van een werf waar een dak wordt gereinigd",
      video_pause: "Video pauzeren",
      video_play: "Video afspelen",
      cap_wash: "Dakreiniging",
      cap_cornice: "Kroonlijst",
      cap_zinc: "Zinkwerk",
      cap_cornice_zinc: "Kroonlijst en zinkwerk",
      alt_cheminee: "Een dakwerker reinigt een dak met dakpannen vanaf een ladder, naast een bakstenen schoorsteen",
      alt_fenetres: "Reiniging van een dak met dakpannen rond twee dakramen, het gereinigde deel is lichter",
      alt_corniche: "Kroonlijst op een muur van rode bakstenen, met een metalen afwerking bovenaan",
      alt_zinc_roof: "Dakrand met zwarte dakpannen, zinken afwerking en goot",
      alt_zinc_gutter: "Zinken goot langs een dak met zwarte dakpannen, van bovenaf gezien",
      about_pill: "Wie zijn wij",
      about_a: "Meer dan 20 jaar in de",
      about_b: "bouw.",
      about_text: "Een dak om te bouwen, te renoveren, te herstellen of te reinigen? Zeg ons wat u nodig hebt, wij regelen het.",
      write_us: "Mail ons",
      contact_title: "Contact",
      label_phone: "Telefoon",
      label_email: "E-mail",
      label_address: "Adres",
      copy_btn: "E-mailadres kopiëren",
      copied: "Adres gekopieerd",
      copy_failed: "Kopiëren is niet gelukt. Selecteer het adres handmatig.",
      lb_aria: "Vergrote foto",
      lb_prev: "Vorige",
      lb_next: "Volgende",
      lb_close: "Sluiten"
    },
    en: {
      title: "Prolux & Co | Roofing work in Zaventem",
      desc: "Prolux & Co SRL, roofing in Zaventem: construction, renovation, repair and emergency service. Over 20 years in construction.",
      skip: "Skip to content",
      brand_aria: "Prolux & Co, home",
      nav_aria: "Main navigation",
      nav_services: "Services",
      nav_work: "Our work",
      nav_about: "Who we are",
      nav_contact: "Contact",
      lang_label: "Language",
      call: "Call",
      menu: "Menu",
      menu_close: "Close",
      hero_h1: "Roofing work",
      hero_lead: "Construction, renovation, repair and emergency service.",
      hero_cta2: "See our services",
      alt_hero: "A roofer on a ladder against a red tile roof, at the ridge, holding a pressure washer lance",
      services_title: "Services",
      s1: "Construction, renovation and repair",
      s2: "Flat, pitched, ecological and green roofs",
      s2_note: "In tiles and slate",
      s3: "Roofing and zinc work",
      s4: "Cornice",
      s5: "Washing and moss removal",
      s6: "Emergency service",
      work_title: "Our work",
      g1: "Washing and moss removal",
      g2: "Cornice and zinc work",
      video_aria: "Video of a roof washing job site",
      video_pause: "Pause video",
      video_play: "Play video",
      cap_wash: "Roof washing",
      cap_cornice: "Cornice",
      cap_zinc: "Zinc work",
      cap_cornice_zinc: "Cornice and zinc work",
      alt_cheminee: "A roofer washes a tile roof from a ladder, next to a brick chimney",
      alt_fenetres: "Washing a tile roof around two roof windows, the washed part is lighter",
      alt_corniche: "Cornice on a red brick wall, with a metal finish on top",
      alt_zinc_roof: "Edge of a black tile roof with zinc finish and gutter",
      alt_zinc_gutter: "Zinc gutter along a black tile roof, seen from above",
      about_pill: "Who we are",
      about_a: "Over 20 years in",
      about_b: "construction.",
      about_text: "A roof to build, renovate, repair or clean? Tell us what you need and we'll take care of it.",
      write_us: "Email us",
      contact_title: "Contact",
      label_phone: "Phone",
      label_email: "Email",
      label_address: "Address",
      copy_btn: "Copy email address",
      copied: "Address copied",
      copy_failed: "Couldn't copy. Please select the address by hand.",
      lb_aria: "Enlarged photo",
      lb_prev: "Previous",
      lb_next: "Next",
      lb_close: "Close"
    }
  };

  var STORAGE_KEY = 'prolux-lang';
  var currentLang = 'fr';

  function t(key) {
    var dict = I18N[currentLang] || I18N.fr;
    return dict[key] !== undefined ? dict[key] : I18N.fr[key];
  }

  function setMeta(selector, value) {
    var el = document.querySelector(selector);
    if (el) el.setAttribute('content', value);
  }

  function applyLanguage(lang, remember) {
    if (!I18N[lang]) lang = 'fr';
    currentLang = lang;

    document.documentElement.lang = lang;
    document.title = t('title');
    setMeta('meta[name="description"]', t('desc'));

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-attrs]').forEach(function (el) {
      el.dataset.i18nAttrs.split(';').forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length === 2) {
          el.setAttribute(parts[0].trim(), t(parts[1].trim()));
        }
      });
    });

    document.querySelectorAll('[data-lang]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
    });

    if (remember) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage blocked */ }
    }

    document.dispatchEvent(new CustomEvent('languagechange'));
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-lang]');
    if (!button) return;
    applyLanguage(button.dataset.lang, true);
    setMenu(false);
  });

  /* ==========================================================
     Header and menu
     ========================================================== */

  var header = document.querySelector('.site-header');
  var nav = document.getElementById('site-nav');
  var menuButton = document.querySelector('.menu-toggle');

  function updateHeader() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  function updateMenuLabel() {
    if (!menuButton || !nav) return;
    menuButton.textContent = nav.classList.contains('is-open') ? t('menu_close') : t('menu');
  }

  function setMenu(open) {
    if (!nav || !menuButton) return;
    nav.classList.toggle('is-open', open);
    header.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    updateMenuLabel();
  }

  if (nav && menuButton) {
    menuButton.addEventListener('click', function () {
      setMenu(!nav.classList.contains('is-open'));
    });
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setMenu(false);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) setMenu(false);
    });
  }

  /* Footer year */
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ==========================================================
     Photo lightbox with previous / next
     ========================================================== */

  var dialog = document.querySelector('.lightbox');
  var shots = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));

  if (dialog && typeof dialog.showModal === 'function' && shots.length) {
    var dialogImg = dialog.querySelector('img');
    var dialogCaption = dialog.querySelector('figcaption');
    var current = 0;

    var show = function (index) {
      current = (index + shots.length) % shots.length;
      var button = shots[current];
      var img = button.querySelector('img');
      dialogImg.src = img.currentSrc || img.src;
      dialogImg.alt = img.alt;
      dialogCaption.textContent = button.dataset.caption || '';
    };

    shots.forEach(function (button, index) {
      button.addEventListener('click', function () {
        show(index);
        dialog.showModal();
      });
    });

    dialog.addEventListener('click', function (event) {
      if (event.target === dialog || event.target.closest('[data-close]')) {
        dialog.close();
      } else if (event.target.closest('[data-prev]')) {
        show(current - 1);
      } else if (event.target.closest('[data-next]')) {
        show(current + 1);
      }
    });

    dialog.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') {
        show(current - 1);
      } else if (event.key === 'ArrowRight') {
        show(current + 1);
      }
    });
  } else {
    /* Browsers without <dialog>: the photo buttons do nothing. */
    shots.forEach(function (button) {
      button.style.cursor = 'default';
    });
  }

  /* ==========================================================
     Site video: plays muted while on screen, with a pause button.
     Visitors who prefer reduced motion get a still image and press play.
     ========================================================== */

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var video = document.querySelector('.video video');
  var videoToggle = document.querySelector('.video__toggle');

  function updateVideoToggle() {
    if (!video || !videoToggle) return;
    videoToggle.textContent = video.paused ? t('video_play') : t('video_pause');
  }

  if (video && videoToggle) {
    var pausedByVisitor = prefersReducedMotion;

    var playVideo = function () {
      var attempt = video.play();
      if (attempt && typeof attempt.catch === 'function') {
        attempt.catch(function () { /* autoplay blocked, the button stays available */ });
      }
    };

    video.addEventListener('play', updateVideoToggle);
    video.addEventListener('pause', updateVideoToggle);

    videoToggle.addEventListener('click', function () {
      if (video.paused) {
        pausedByVisitor = false;
        playVideo();
      } else {
        pausedByVisitor = true;
        video.pause();
      }
    });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            if (!pausedByVisitor) playVideo();
          } else {
            video.pause();
          }
        });
      }, { threshold: 0.5 }).observe(video);
    }
  }

  /* ==========================================================
     Copy the e-mail address
     ========================================================== */

  var copyButton = document.querySelector('[data-copy]');
  var statusEl = document.querySelector('.contact__status');
  var statusTimer;

  function showStatus(message) {
    if (!statusEl) return;
    statusEl.textContent = message;
    clearTimeout(statusTimer);
    statusTimer = setTimeout(function () {
      statusEl.textContent = '';
    }, 2500);
  }

  if (copyButton) {
    copyButton.addEventListener('click', function () {
      var text = copyButton.dataset.copy;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(
          function () { showStatus(t('copied')); },
          function () { showStatus(t('copy_failed')); }
        );
      } else {
        showStatus(t('copy_failed'));
      }
    });
  }

  /* ==========================================================
     Start: restore the language the visitor picked last time
     ========================================================== */

  document.addEventListener('languagechange', function () {
    updateMenuLabel();
    updateVideoToggle();
    if (statusEl) statusEl.textContent = '';
  });

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* storage blocked */ }
  applyLanguage(I18N[saved] ? saved : 'fr', false);
})();