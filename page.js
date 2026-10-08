/* Prolux & Co: small script for the service pages.
   Header shadow on scroll, mobile menu, footer year.
   The homepage keeps using script.js; this file does not touch the page
   title or description, so each page keeps its own. */
(function () {
  'use strict';

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

  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
