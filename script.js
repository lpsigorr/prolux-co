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
      title: "Couvreur à Zaventem | Prolux & Co, travaux de toiture",
      desc: "Couvreur à Zaventem\u00a0: dépannage urgent, réparation, démoussage, corniche, zinguerie et rénovation de toiture. Plus de 20 ans dans le bâtiment.",
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
      hero_h1a: "Un problème de toiture\u00a0?",
      hero_h1b: "On s’en occupe.",
      hero_lead: "Fuite, mousse, corniche, zinc, rénovation\u00a0: trouvez votre solution en quelques secondes.",
      hero_find: "Choisir mon problème",
      hero_trust: "Plus de 20 ans dans le bâtiment",
      alt_hero: "Un couvreur sur une échelle posée contre une toiture en tuiles rouges, au niveau du faîte, avec une lance de lavage",
      services_kicker: "Services",
      picker_title: "Quel est votre souci\u00a0?",
      picker_hint: "Cliquez sur votre cas, la solution s’affiche aussitôt.",
      urgent_label: "Appelez-nous maintenant",
      c1_tab: "Fuite, dégâts, urgence",
      c1_svc: "Dépannage urgent",
      c1_text: "Une fuite, des tuiles arrachées par une tempête\u00a0: ne laissez pas l’eau s’installer. Appelez-nous, nous intervenons en urgence.",
      c2_tab: "Mousse, toit sale",
      c2_svc: "Lavage et démoussage",
      c2_text: "La mousse et les salissures retiennent l’humidité et abîment les tuiles. Nous lavons et démoussons votre toiture pour lui redonner tout son éclat.",
      c3_tab: "Tuiles cassées, toit abîmé",
      c3_svc: "Réparation de toiture",
      c3_text: "Tuiles cassées ou déplacées, toit fatigué par le temps ou la météo\u00a0: nous réparons avant que le problème ne s’aggrave.",
      c4_tab: "Corniche abîmée",
      c4_svc: "Corniche",
      c4_text: "Une corniche abîmée laisse l’eau s’infiltrer. Nous réalisons vos travaux de corniche avec une finition soignée.",
      c5_tab: "Gouttière, zinc, toit plat",
      c5_svc: "Roofing et zinguerie",
      c5_text: "Gouttière ou chéneau qui fuit, zinc abîmé, toit plat qui prend l’eau\u00a0: nous faisons le roofing et la zinguerie pour garder votre toit étanche.",
      c6_tab: "Rénover ou construire un toit",
      c6_svc: "Construction et rénovation",
      c6_text: "Un toit entier à refaire ou à construire\u00a0? Plat, incliné, écologique ou végétal, en tuiles ou en ardoises\u00a0: nous le construisons et le rénovons.",
      work_title: "Nos travaux",
      g1: "Lavage et démoussage",
      g2: "Corniche et zinguerie",
      video_aria: "Vidéo d’un chantier de lavage de toiture",
      video_pause: "Mettre en pause",
      video_play: "Lire la vidéo",
      cap_wash: "Lavage de toiture",
      cap_cornice: "Corniche",
      cap_zinc: "Zinguerie",
      cap_cornice_zinc: "Corniche et zinguerie",
      alt_cheminee: "Un couvreur lave une toiture en tuiles depuis une échelle, à côté d’une cheminée en briques",
      alt_fenetres: "Lavage d’une toiture en tuiles autour de deux fenêtres de toit, la partie lavée est plus claire",
      alt_corniche: "Corniche sur un mur en briques rouges, avec une finition métallique sur le dessus",
      alt_zinc_roof: "Bord de toiture en tuiles noires avec finition en zinc et chéneau",
      alt_zinc_gutter: "Chéneau en zinc le long d’une toiture en tuiles noires, vu d’en haut",
      alt_ridge: "Un couvreur assis sur le faîte d’une toiture en tuiles, avec une échelle posée à côté de lui",
      about_pill: "Qui sommes-nous",
      about_h2: "Plus de 20 ans dans le bâtiment.",
      about_text: "Une toiture à construire, rénover, réparer ou nettoyer\u00a0? Dites-nous ce qu’il vous faut, nous nous en occupons.",
      p1_title: "Toutes les toitures",
      p1_text: "Plates, inclinées, écologiques, végétales, en tuiles ou en ardoises.",
      p2_title: "Quand c’est urgent",
      p2_text: "Un dépannage urgent pour les fuites qui ne peuvent pas attendre.",
      p3_title: "Dans votre langue",
      p3_text: "Nous vous répondons en français, en néerlandais ou en anglais.",
      write_us: "Nous écrire",
      contact_title: "Contact",
      contact_lead: "Parlez-nous de votre toit\u00a0: appelez ou écrivez-nous.",
      label_email: "E-mail",
      label_address: "Adresse",
      copy_btn: "Copier l’adresse",
      copied: "Adresse copiée",
      copy_failed: "Copie impossible. Sélectionnez l’adresse à la main.",
      lb_aria: "Photo agrandie",
      lb_prev: "Précédente",
      lb_next: "Suivante",
      lb_close: "Fermer"
    },
    nl: {
      title: "Prolux & Co | Dakwerken in Zaventem",
      desc: "Een probleem met uw dak? Prolux & Co, Zaventem: spoeddienst, herstelling, ontmossing, kroonlijst, zinkwerk, renovatie. Meer dan 20 jaar in de bouw.",
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
      hero_h1a: "Een probleem met uw dak?",
      hero_h1b: "Wij regelen het.",
      hero_lead: "Lek, mos, kroonlijst, zink, renovatie: vind uw oplossing in enkele seconden.",
      hero_find: "Kies mijn probleem",
      hero_trust: "Meer dan 20 jaar in de bouw",
      alt_hero: "Een dakwerker op een ladder tegen een dak met rode dakpannen, ter hoogte van de nok, met een reinigingslans",
      services_kicker: "Diensten",
      picker_title: "Wat is het probleem?",
      picker_hint: "Klik op uw situatie, de oplossing verschijnt meteen.",
      urgent_label: "Bel ons nu",
      c1_tab: "Lek, schade, spoed",
      c1_svc: "Spoeddienst",
      c1_text: "Een lek, dakpannen die door een storm zijn weggewaaid: laat het water niet binnendringen. Bel ons, wij komen dringend ter plaatse.",
      c2_tab: "Mos, vuil dak",
      c2_svc: "Reiniging en ontmossing",
      c2_text: "Mos en vuil houden vocht vast en beschadigen de dakpannen. Wij reinigen en ontmossen uw dak, zodat het er weer als nieuw uitziet.",
      c3_tab: "Gebroken pannen, beschadigd dak",
      c3_svc: "Dakherstelling",
      c3_text: "Gebroken of verschoven dakpannen, een dak dat geleden heeft onder de tijd of het weer: wij herstellen het voordat het probleem erger wordt.",
      c4_tab: "Beschadigde kroonlijst",
      c4_svc: "Kroonlijst",
      c4_text: "Een beschadigde kroonlijst laat water binnendringen. Wij voeren uw kroonlijstwerken uit met een verzorgde afwerking.",
      c5_tab: "Goot, zink, plat dak",
      c5_svc: "Roofing en zinkwerk",
      c5_text: "Een lekkende goot, beschadigd zink, een plat dak dat water doorlaat: wij doen het roofing- en zinkwerk om uw dak waterdicht te houden.",
      c6_tab: "Een dak renoveren of bouwen",
      c6_svc: "Bouw en renovatie",
      c6_text: "Een volledig dak om te vernieuwen of te bouwen? Plat, hellend, ecologisch of groen, met dakpannen of leien: wij bouwen en renoveren het.",
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
      alt_ridge: "Een dakwerker zit op de nok van een dak met dakpannen, met een ladder naast zich",
      about_pill: "Wie zijn wij",
      about_h2: "Meer dan 20 jaar in de bouw.",
      about_text: "Een dak om te bouwen, te renoveren, te herstellen of te reinigen? Zeg ons wat u nodig hebt, wij regelen het.",
      p1_title: "Alle daken",
      p1_text: "Plat, hellend, ecologisch, groen, met dakpannen of leien.",
      p2_title: "Als het dringend is",
      p2_text: "Een spoeddienst voor lekken die niet kunnen wachten.",
      p3_title: "In uw taal",
      p3_text: "Wij antwoorden u in het Frans, Nederlands of Engels.",
      write_us: "Mail ons",
      contact_title: "Contact",
      contact_lead: "Vertel ons over uw dak: bel of mail ons.",
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
      desc: "A problem with your roof? Prolux & Co, Zaventem: emergency service, repair, moss removal, cornice, zinc work, renovation. Over 20 years in construction.",
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
      hero_h1a: "A problem with your roof?",
      hero_h1b: "We’ll deal with it.",
      hero_lead: "Leak, moss, cornice, zinc, renovation: find your solution in seconds.",
      hero_find: "Pick my problem",
      hero_trust: "Over 20 years in construction",
      alt_hero: "A roofer on a ladder against a red tile roof, at the ridge, holding a pressure washer lance",
      services_kicker: "Services",
      picker_title: "What’s the issue?",
      picker_hint: "Pick your case and the solution appears right away.",
      urgent_label: "Call us now",
      c1_tab: "Leak, damage, emergency",
      c1_svc: "Emergency service",
      c1_text: "A leak, tiles torn off by a storm: don’t let the water settle in. Call us, we step in urgently.",
      c2_tab: "Moss, dirty roof",
      c2_svc: "Washing and moss removal",
      c2_text: "Moss and grime hold moisture and wear down the tiles. We wash and de-moss your roof so it looks its best again.",
      c3_tab: "Broken tiles, damaged roof",
      c3_svc: "Roof repair",
      c3_text: "Broken or slipped tiles, a roof worn by time or weather: we repair it before the problem gets worse.",
      c4_tab: "Damaged cornice",
      c4_svc: "Cornice",
      c4_text: "A damaged cornice lets water in. We carry out your cornice work with a careful finish.",
      c5_tab: "Gutter, zinc, flat roof",
      c5_svc: "Roofing and zinc work",
      c5_text: "A leaking gutter, damaged zinc, a flat roof taking on water: we handle roofing and zinc work to keep your roof watertight.",
      c6_tab: "Renovate or build a roof",
      c6_svc: "Construction and renovation",
      c6_text: "A whole roof to redo or build? Flat, pitched, ecological or green, in tiles or slate: we build and renovate it.",
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
      alt_ridge: "A roofer sitting on the ridge of a tile roof, with a ladder beside him",
      about_pill: "Who we are",
      about_h2: "Over 20 years in construction.",
      about_text: "A roof to build, renovate, repair or clean? Tell us what you need and we’ll take care of it.",
      p1_title: "Every kind of roof",
      p1_text: "Flat, pitched, ecological, green, in tiles or slate.",
      p2_title: "When it’s urgent",
      p2_text: "Emergency service for leaks that can’t wait.",
      p3_title: "In your language",
      p3_text: "We answer in French, Dutch or English.",
      write_us: "Email us",
      contact_title: "Contact",
      contact_lead: "Tell us about your roof: call or email us.",
      label_email: "Email",
      label_address: "Address",
      copy_btn: "Copy email address",
      copied: "Address copied",
      copy_failed: "Couldn’t copy. Please select the address by hand.",
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
     "What's the issue?" : the visitor picks a case and sees the
     solution. One case is always open. On wide screens the list
     sits next to the answer, on phones the answer opens under
     the case that was tapped.
     ========================================================== */

  var caseButtons = Array.prototype.slice.call(document.querySelectorAll('.case__button'));

  function openCase(button, scrollToIt) {
    caseButtons.forEach(function (other) {
      var isOpen = other === button;
      var panel = document.getElementById(other.getAttribute('aria-controls'));
      other.setAttribute('aria-expanded', String(isOpen));
      other.closest('.case').classList.toggle('is-active', isOpen);
      if (panel) panel.hidden = !isOpen;
    });

    if (scrollToIt && window.matchMedia('(max-width: 900px)').matches) {
      /* the list reflows when another case closes: keep the tapped one in view */
      var top = button.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: top });
    }
  }

  caseButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
      openCase(button, true);
    });

    button.addEventListener('keydown', function (event) {
      var target = null;
      if (event.key === 'ArrowDown') target = caseButtons[(index + 1) % caseButtons.length];
      if (event.key === 'ArrowUp') target = caseButtons[(index - 1 + caseButtons.length) % caseButtons.length];
      if (event.key === 'Home') target = caseButtons[0];
      if (event.key === 'End') target = caseButtons[caseButtons.length - 1];
      if (target) {
        event.preventDefault();
        target.focus();
      }
    });
  });

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