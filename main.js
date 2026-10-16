(function () {
  'use strict';
  var cfg = window.MOMCARE_CONFIG || {};
  var apkUrl = (cfg.apkUrl || '').trim();
  var dashboardUrl = (cfg.dashboardUrl || '').trim();
  var available = apkUrl !== '' && cfg.status === 'available';

  // Download buttons: real link when available, disabled "Coming soon" otherwise.
  var meta = [];
  if (cfg.version) meta.push('Version ' + cfg.version);
  if (cfg.apkSizeMb) meta.push(cfg.apkSizeMb + ' MB');

  document.querySelectorAll('.js-download').forEach(function (slot) {
    var size = slot.getAttribute('data-size') === 'sm' ? ' btn--sm' : '';
    var el;
    if (available) {
      el = document.createElement('a');
      el.href = apkUrl;
      el.setAttribute('download', '');
      el.className = 'btn btn--primary' + size;
      el.textContent = 'Download for Android';
    } else {
      el = document.createElement('button');
      el.type = 'button';
      el.disabled = true;
      el.className = 'btn btn--primary' + size;
      el.textContent = 'Coming soon';
      el.setAttribute('aria-label', 'Download for Android, coming soon');
    }
    slot.replaceWith(el);
  });

  document.querySelectorAll('.js-download-note').forEach(function (note) {
    if (!available) {
      note.textContent = 'The Android download is not ready yet. It will be posted on this page.';
      return;
    }
    if (meta.length) note.appendChild(document.createTextNode(meta.join(' · ')));
    if (cfg.sha256) {
      var s = document.createElement('span');
      s.className = 'download-meta';
      s.appendChild(document.createTextNode('SHA-256: '));
      var c = document.createElement('code');
      c.textContent = cfg.sha256;
      s.appendChild(c);
      note.appendChild(s);
    }
  });

  // Staff sign-in: dashboard link, or disabled with a tooltip.
  document.querySelectorAll('.js-staff').forEach(function (a, i) {
    if (dashboardUrl) {
      a.href = dashboardUrl;
      a.target = '_blank';
      a.rel = 'noopener';
      return;
    }
    var id = 'staff-tip-' + i;
    a.removeAttribute('href');
    a.setAttribute('role', 'link');
    a.setAttribute('aria-disabled', 'true');
    a.setAttribute('tabindex', '0');
    a.setAttribute('aria-describedby', id);
    var tip = document.createElement('span');
    tip.className = 'tooltip';
    tip.id = id;
    tip.setAttribute('role', 'tooltip');
    tip.textContent = 'The staff dashboard link is not available yet.';
    a.appendChild(tip);
  });

  // Mobile menu
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a[href]')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
    });
  }

  // Screenshot carousel
  var track = document.getElementById('carousel-track');
  if (track) {
    var controls = document.querySelector('.carousel__controls');
    var prev = controls.querySelector('[data-dir="-1"]');
    var next = controls.querySelector('[data-dir="1"]');
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var update = function () {
      var max = track.scrollWidth - track.clientWidth;
      controls.hidden = max <= 2;
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max - 2;
    };
    controls.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-dir]');
      if (!btn) return;
      var item = track.querySelector('.shot');
      var step = item ? item.getBoundingClientRect().width + 20 : 240;
      track.scrollBy({ left: step * Number(btn.dataset.dir), behavior: reduce ? 'auto' : 'smooth' });
    });
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  // Entrance animation
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.05 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
