(function () {
  'use strict';

  /* Footer year */
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* Photo lightbox */
  var dialog = document.querySelector('.lightbox');

  if (dialog && typeof dialog.showModal === 'function') {
    var dialogImg = dialog.querySelector('img');
    var dialogCaption = dialog.querySelector('figcaption');

    document.querySelectorAll('[data-lightbox]').forEach(function (button) {
      button.addEventListener('click', function () {
        var img = button.querySelector('img');
        dialogImg.src = img.currentSrc || img.src;
        dialogImg.alt = img.alt;
        dialogCaption.textContent = button.dataset.caption || '';
        dialog.showModal();
      });
    });

    dialog.addEventListener('click', function (event) {
      var clickedBackdrop = event.target === dialog;
      var clickedClose = event.target.closest('[data-close]');
      if (clickedBackdrop || clickedClose) {
        dialog.close();
      }
    });
  } else {
    /* Browsers without <dialog>: the photo buttons do nothing. */
    document.querySelectorAll('[data-lightbox]').forEach(function (button) {
      button.style.cursor = 'default';
    });
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
