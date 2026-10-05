(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Header: gets a soft background once the page scrolls */
  var header = document.querySelector('.site-header');
  var nav = document.getElementById('site-nav');
  var menuButton = document.querySelector('.menu-toggle');

  function updateHeader() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  /* Menu on small screens */
  function setMenu(open) {
    if (!nav || !menuButton) return;
    nav.classList.toggle('is-open', open);
    header.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? 'Fermer' : 'Menu';
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

  /* Photo lightbox with previous / next */
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

  /* Site video: plays muted while on screen, with a pause button.
     Visitors who prefer reduced motion get a still image and press play. */
  var video = document.querySelector('.video video');
  var videoToggle = document.querySelector('.video__toggle');

  if (video && videoToggle) {
    var pausedByVisitor = prefersReducedMotion;

    var updateToggle = function () {
      videoToggle.textContent = video.paused ? 'Lire la vidéo' : 'Mettre en pause';
    };

    var playVideo = function () {
      var attempt = video.play();
      if (attempt && typeof attempt.catch === 'function') {
        attempt.catch(function () { /* autoplay blocked, the button stays available */ });
      }
    };

    video.addEventListener('play', updateToggle);
    video.addEventListener('pause', updateToggle);
    updateToggle();

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

  /* Copy the e-mail address */
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
          function () { showStatus('Adresse copiée'); },
          function () { showStatus('Copie impossible. Sélectionnez l\'adresse à la main.'); }
        );
      } else {
        showStatus('Copie impossible. Sélectionnez l\'adresse à la main.');
      }
    });
  }
})();