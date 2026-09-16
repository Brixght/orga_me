/* ORGA_ME — vanilla interactions. transform/opacity only, IntersectionObserver, no libs. */
(function () {
  'use strict';
  var EASE_LEAVE_MS = 180;

  /* Page enter */
  function enter() {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { document.body.classList.add('page-enter'); });
    });
  }

  /* Smooth outbound transition: fade+slide, then navigate */
  function outbound() {
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href]');
      if (!a) return;
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#' || a.target === '_blank' || a.hasAttribute('download')) return;
      if (a.hostname && a.hostname !== location.hostname) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      document.body.classList.remove('page-enter');
      document.body.classList.add('page-leave');
      closeMobile();
      setTimeout(function () { window.location.href = a.href; }, EASE_LEAVE_MS);
    });
  }

  /* Header shrink via sentinel observer (not scroll listener) */
  function header() {
    var bar = document.getElementById('siteHeader');
    if (!bar) return;
    var s = document.createElement('div');
    s.className = 'sentinel';
    s.setAttribute('aria-hidden', 'true');
    document.body.prepend(s);
    new IntersectionObserver(function (en) {
      bar.classList.toggle('shrunk', !en[0].isIntersecting);
    }, { threshold: 0 }).observe(s);
  }

  /* Reveal on scroll */
  function reveals() {
    var els = document.querySelectorAll('.reveal,.reveal-left,.zoom-in,.stagger');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* Count-up stats */
  function counters() {
    var nums = document.querySelectorAll('[data-count]');
    if (!nums.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        io.unobserve(el);
        var target = parseFloat(el.dataset.count);
        var dur = 1200, t0 = null;
        function tick(t) {
          if (!t0) t0 = t;
          var p = Math.min((t - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased);
          if (p < 1) requestAnimationFrame(tick);
        }
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = target; return; }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    nums.forEach(function (n) { io.observe(n); });
  }

  /* Dropdown (desktop) */
  function dropdown() {
    var wrap = document.querySelector('.drop-wrap');
    if (!wrap) return;
    var btn = wrap.querySelector('.drop-btn');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      wrap.classList.toggle('open');
      btn.setAttribute('aria-expanded', wrap.classList.contains('open'));
    });
    document.addEventListener('click', function () { wrap.classList.remove('open'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') wrap.classList.remove('open'); });
  }

  /* Mobile menu slide-in from right */
  function mobile() {
    var btn = document.getElementById('navToggle');
    var menu = document.getElementById('mobileMenu');
    if (!btn || !menu) return;
    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.querySelectorAll('[data-close]').forEach(function (el) {
      el.addEventListener('click', closeMobile);
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMobile(); });
  }
  function closeMobile() {
    var menu = document.getElementById('mobileMenu');
    var btn = document.getElementById('navToggle');
    if (menu && menu.classList.contains('open')) {
      menu.classList.remove('open');
      document.body.style.overflow = '';
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }
  }

  /* Skeleton -> fade when images load */
  function images() {
    document.querySelectorAll('img[data-fade]').forEach(function (img) {
      function done() {
        img.classList.add('is-loaded');
        var m = img.closest('.card-media');
        if (m) m.classList.remove('skel');
      }
      if (img.complete && img.naturalWidth) done();
      else { img.addEventListener('load', done); img.addEventListener('error', done); }
    });
  }

  /* Product quick-view modal (blur backdrop) */
  function modal() {
    var ov = document.getElementById('quickView');
    if (!ov) return;
    var img = ov.querySelector('[data-qv-img]');
    var tag = ov.querySelector('[data-qv-tag]');
    var title = ov.querySelector('[data-qv-title]');
    var desc = ov.querySelector('[data-qv-desc]');
    var link = ov.querySelector('[data-qv-link]');
    function open(card) {
      img.src = card.dataset.img || '';
      img.alt = card.dataset.title || '';
      tag.textContent = card.dataset.tag || 'Orga_ME';
      title.textContent = card.dataset.title || '';
      desc.textContent = card.dataset.desc || '';
      link.href = card.dataset.url || '#';
      ov.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function close() { ov.classList.remove('open'); document.body.style.overflow = ''; }
    document.querySelectorAll('[data-quickview]').forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.closest('a')) return; /* let direct links navigate */
        open(card);
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(card); }
      });
    });
    ov.addEventListener('click', function (e) { if (e.target === ov || e.target.closest('[data-close-ov]')) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { close(); closeLightbox(); } });
  }

  /* Video lightbox (no autoplay) */
  function lightbox() {
    var ov = document.getElementById('lightbox');
    if (!ov) return;
    var vid = ov.querySelector('video');
    document.querySelectorAll('[data-video-open]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var src = btn.dataset.videoSrc;
        if (src && !vid.querySelector('source')) {
          var s = document.createElement('source');
          s.src = src; s.type = 'video/mp4';
          vid.appendChild(s); vid.load();
        }
        ov.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });
    ov.addEventListener('click', function (e) {
      if (e.target === ov || e.target.closest('[data-close-ov]')) closeLightbox();
    });
  }
  function closeLightbox() {
    var ov = document.getElementById('lightbox');
    if (!ov) return;
    var vid = ov.querySelector('video');
    if (vid) vid.pause();
    ov.classList.remove('open');
    if (!document.getElementById('quickView')?.classList.contains('open')) document.body.style.overflow = '';
  }

  /* Gallery lightbox: reuse lightbox for images */
  function gallery() {
    document.querySelectorAll('[data-full]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var src = btn.dataset.full;
        var ov = document.getElementById('imgView');
        if (!ov) return;
        ov.querySelector('img').src = src;
        ov.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });
    var iv = document.getElementById('imgView');
    if (iv) {
      iv.addEventListener('click', function (e) {
        if (e.target === iv || e.target.closest('[data-close-ov]')) {
          iv.classList.remove('open'); document.body.style.overflow = '';
        }
      });
    }
  }

  /* Filter chips on products page */
  function chips() {
    var bar = document.querySelector('[data-chips]');
    if (!bar) return;
    var cards = document.querySelectorAll('[data-cat]');
    bar.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (!chip) return;
      bar.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      chip.setAttribute('aria-pressed', 'true');
      var f = chip.dataset.filter;
      cards.forEach(function (c) {
        c.hidden = !(f === 'all' || c.dataset.cat === f);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    enter(); outbound(); header(); reveals(); counters();
    dropdown(); mobile(); images(); modal(); lightbox(); gallery(); chips();
  });
})();
