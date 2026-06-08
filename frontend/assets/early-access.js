(function () {
  var modalId = 'earlyAccessModal';
  var styleId = 'earlyAccessStyles';

  function waitlistHref() {
    return window.location.pathname.indexOf('/frontend/') !== -1 ? 'waitlist.html' : 'frontend/waitlist.html';
  }

  function ensureStyles() {
    if (document.getElementById(styleId)) return;

    var style = document.createElement('style');
    style.id = styleId;
    style.textContent = [
      /* Final Selected Style (Variant B - Premium Micro-Pill Tag) - Using CSS Variables for exact matching */
      '.logo-badge.alpha-badge{display:inline-flex!important;align-items:center!important;justify-content:center!important;font-size:9px!important;font-weight:700!important;letter-spacing:0.08em!important;text-transform:uppercase!important;color:var(--primary, #059669)!important;background:rgba(5, 150, 105, 0.08)!important;border:1px solid rgba(5, 150, 105, 0.25)!important;padding:2px 7px!important;border-radius:6px!important;margin-left:6.5px!important;line-height:1.2!important;cursor:pointer;box-shadow:0 1px 2px rgba(5, 150, 105, 0.05)!important;transition:all 0.2s ease!important;height:auto!important;width:auto!important;min-width:auto!important;vertical-align:middle!important;}',
      '.logo-badge.alpha-badge:hover,.logo-badge.alpha-badge:focus{background:var(--pl, #D1FAE5)!important;border-color:var(--primary, #059669)!important;transform:translateY(-1.5px)!important;color:var(--phov, #047857)!important;outline:none!important;}',

      /* Modal and Overlay Styles */
      '.ea-modal-bg{position:fixed;inset:0;z-index:300;display:none;align-items:center;justify-content:center;padding:22px;background:rgba(15, 23, 42, .52);backdrop-filter:blur(8px);opacity:0;transition:opacity .2s;}',
      '.ea-modal-bg.show{display:flex;opacity:1;}',
      '.ea-modal{position:relative;width:min(100%,520px);background:#fff;border:1px solid #E2E8F0;border-radius:18px;padding:34px;box-shadow:0 24px 70px rgba(15, 23, 42, .22);transform:translateY(8px) scale(.98);transition:transform .2s;font-family:Inter,system-ui,sans-serif;color:#0F172A;}',
      '.ea-modal-bg.show .ea-modal{transform:translateY(0) scale(1);}',
      '.ea-close{position:absolute;top:14px;right:14px;width:34px;height:34px;border-radius:999px;border:1px solid #E2E8F0;background:#F8FAFC;color:#64748B;font-size:18px;line-height:1;cursor:pointer;font-family:Inter,system-ui,sans-serif;}',
      '.ea-close:hover,.ea-close:focus{background:rgba(5, 150, 105, 0.08);color:var(--primary, #059669);border-color:rgba(5, 150, 105, 0.2);outline:none;}',
      '.ea-kicker{display:inline-flex;align-items:center;gap:7px;margin-bottom:14px;padding:6px 10px;border-radius:999px;background:rgba(5, 150, 105, 0.08);border:1px solid rgba(5, 150, 105, 0.2);color:var(--primary, #059669);font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;}',
      '.ea-kicker span{width:18px;height:18px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;background:var(--primary, #059669);color:#fff;font-size:12px;text-transform:none;letter-spacing:0;}',
      '.ea-modal h2{margin:0 0 10px;font-size:24px;line-height:1.18;font-weight:800;letter-spacing:0;color:#0F172A;}',
      '.ea-modal p{margin:0 0 20px;font-size:14px;line-height:1.65;color:#475569;}',
      '.ea-benefits{display:grid;gap:10px;margin:0 0 24px;}',
      '.ea-benefit{padding:12px 14px;border-radius:12px;background:#F8FAFC;border:1px solid #E2E8F0;}',
      '.ea-benefit strong{display:block;margin-bottom:3px;font-size:13px;color:#0F172A;}',
      '.ea-benefit span{display:block;font-size:13px;line-height:1.5;color:#64748B;}',
      '.ea-cta{display:inline-flex;width:100%;align-items:center;justify-content:center;min-height:46px;border-radius:999px;background:var(--primary, #059669);color:#fff;text-decoration:none;font-size:14px;font-weight:800;box-shadow:0 8px 22px rgba(5, 150, 105, .22);transition:background .2s,transform .15s;}',
      '.ea-cta:hover,.ea-cta:focus{background:var(--phov, #047857);transform:translateY(-1px);outline:none;}',

      '@media(max-width:640px){.ea-modal{padding:28px 22px 24px;border-radius:16px;}.ea-modal h2{font-size:21px;}.logo-badge.alpha-badge{font-size:8px!important;padding:2px 5px!important;}}'
    ].join('');
    document.head.appendChild(style);
  }

  function ensureModal() {
    var existing = document.getElementById(modalId);
    if (existing) return existing;

    var modal = document.createElement('div');
    modal.id = modalId;
    modal.className = 'ea-modal-bg';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = [
      '<div class="ea-modal" role="dialog" aria-modal="true" aria-labelledby="eaTitle">',
      '<button type="button" class="ea-close" aria-label="Close Early Access info">&times;</button>',
      '<div class="ea-kicker"><span>&alpha;</span> Aptova Alpha</div>',
      '<h2 id="eaTitle">What is Aptova Early Access?</h2>',
      '<p>Aptova is currently in Alpha. We are onboarding users in small, controlled batches to optimize our matching engine and opportunities before public release.</p>',
      '<div class="ea-benefits">',
      '<div class="ea-benefit"><strong>Guaranteed Priority Spot</strong><span>Skip the public waiting list. Registered users are onboarded first, in chronological order.</span></div>',
      '<div class="ea-benefit"><strong>Personalized Support</strong><span>Work directly with the builders to customize your matched opportunities and get setup guidance.</span></div>',
      '<div class="ea-benefit"><strong>First-mover Access</strong><span>Explore and test 135+ pre-researched, zero-capital, and part-time opportunities before they are widely released.</span></div>',
      '</div>',
      '<a class="ea-cta" href="' + waitlistHref() + '">Join the community</a>',
      '</div>'
    ].join('');

    modal.addEventListener('click', function (event) {
      if (event.target === modal) closeEarlyAccessModal();
    });
    modal.querySelector('.ea-close').addEventListener('click', closeEarlyAccessModal);
    document.body.appendChild(modal);
    return modal;
  }

  function openEarlyAccessModal(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    ensureStyles();
    var modal = ensureModal();
    modal.style.display = 'flex';
    requestAnimationFrame(function () {
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
    });
    document.body.style.overflow = 'hidden';
    var close = modal.querySelector('.ea-close');
    if (close) close.focus();
  }

  function closeEarlyAccessModal() {
    var modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    setTimeout(function () {
      modal.style.display = 'none';
    }, 200);
    document.body.style.overflow = '';
  }

  function wireBadges() {
    ensureStyles();
    document.querySelectorAll('.logo-badge').forEach(function (badge) {
      badge.textContent = 'ALPHA';
      badge.classList.add('alpha-badge');
      badge.setAttribute('role', 'button');
      badge.setAttribute('tabindex', '0');
      badge.setAttribute('aria-label', 'What is Aptova Early Access?');
      badge.setAttribute('title', 'Aptova Alpha: Early Access');
      badge.addEventListener('click', openEarlyAccessModal);
      badge.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          openEarlyAccessModal(event);
        }
      });
    });
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeEarlyAccessModal();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireBadges);
  } else {
    wireBadges();
  }

  window.openEarlyAccessModal = openEarlyAccessModal;
  window.closeEarlyAccessModal = closeEarlyAccessModal;
})();
