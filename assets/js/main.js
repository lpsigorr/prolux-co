(function () {
  'use strict';

  /* ==========================================================
     Shared by every page (French and Dutch, home and services).
     Each page is written in its own language: the texts this script
     needs (menu, video, copy button) come from data-* attributes
     in the page itself.
     ========================================================== */

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

  function setMenu(open) {
    if (!nav || !menuButton || !header) return;
    nav.classList.toggle('is-open', open);
    header.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? menuButton.dataset.close : menuButton.dataset.open;
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
     Homepage: "What's the issue?" : the visitor picks a case and sees
     the solution. One case is always open. On wide screens the list
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
     Homepage: photo lightbox with previous / next
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
     Homepage video: plays muted while on screen, with a pause button.
     Visitors who prefer reduced motion get a still image and press play.
     ========================================================== */

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var video = document.querySelector('.video video');
  var videoToggle = document.querySelector('.video__toggle');

  function updateVideoToggle() {
    if (!video || !videoToggle) return;
    videoToggle.textContent = video.paused ? videoToggle.dataset.play : videoToggle.dataset.pause;
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

    updateVideoToggle();
  }

  /* ==========================================================
     Homepage: copy the e-mail address
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
          function () { showStatus(copyButton.dataset.copied); },
          function () { showStatus(copyButton.dataset.failed); }
        );
      } else {
        showStatus(copyButton.dataset.failed);
      }
    });
  }

  /* ==========================================================
     Cookie choice (Google Analytics consent)
     The Google tag in <head> starts with everything denied.
     Nothing is measured until the visitor accepts here.
     ========================================================== */

  var CONSENT_KEY = 'prolux-consent';
  var consentBanner = document.querySelector('[data-consent-banner]');

  function storedChoice() {
    try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }

  // Remove the Google Analytics cookies when a visitor refuses or withdraws.
  function clearAnalyticsCookies() {
    var host = location.hostname;
    var parts = host.split('.');
    var domains = ['', host, '.' + host];
    if (parts.length > 2) domains.push('.' + parts.slice(-2).join('.'));

    document.cookie.split(';').forEach(function (entry) {
      var name = entry.split('=')[0].trim();
      if (name.indexOf('_ga') !== 0) return;
      domains.forEach(function (domain) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' +
          (domain ? '; domain=' + domain : '');
      });
    });
  }

  function setChoice(value) {
    try { localStorage.setItem(CONSENT_KEY, value); } catch (e) {}
    if (typeof gtag === 'function') {
      gtag('consent', 'update', { analytics_storage: value });
    }
    if (value === 'denied') clearAnalyticsCookies();
    if (consentBanner) consentBanner.hidden = true;
  }

  if (consentBanner) {
    if (storedChoice() === null) consentBanner.hidden = false;

    consentBanner.addEventListener('click', function (event) {
      var button = event.target.closest('[data-consent]');
      if (button) setChoice(button.dataset.consent);
    });

    document.querySelectorAll('[data-consent-open]').forEach(function (opener) {
      opener.addEventListener('click', function () {
        consentBanner.hidden = false;
        var first = consentBanner.querySelector('[data-consent]');
        if (first) first.focus();
      });
    });
  }

  /* ==========================================================
     Call and email clicks, sent to Google Analytics as events
     (only measured when the visitor has accepted).
     ========================================================== */

  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[href^="tel:"], a[href^="mailto:"]');
    if (!link || typeof gtag !== 'function') return;
    var href = link.getAttribute('href');
    gtag('event', href.indexOf('tel:') === 0 ? 'phone_click' : 'email_click', {
      link_url: href
    });
  });
})();
