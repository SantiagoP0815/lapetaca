document.documentElement.classList.add('js');

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const siteHeader = document.querySelector('[data-header]');
const business = window.BUSINESS;

const presentationMotion = new URLSearchParams(window.location.search).get('motion') === 'on';
if (presentationMotion) document.documentElement.classList.add('motion-demo');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches && !presentationMotion;
const requestFrame = window.requestAnimationFrame || ((callback) => window.setTimeout(callback, 16));

if (!reducedMotion) {
  const revealItems = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const parallaxItems = document.querySelectorAll('[data-parallax]');
  const hero = document.querySelector('.hero');
  let parallaxFrame = null;

  const updateParallax = () => {
    parallaxFrame = null;
    if (!hero || window.scrollY > hero.offsetHeight) return;
    const distance = Math.min(window.scrollY, hero.offsetHeight);
    parallaxItems.forEach((item) => {
      const speed = Number(item.dataset.parallax) || 0;
      item.style.setProperty('--parallax-y', `${distance * speed}px`);
    });
  };

  window.addEventListener('scroll', () => {
    if (parallaxFrame === null) parallaxFrame = requestFrame(updateParallax);
  }, { passive: true });
  updateParallax();
} else {
  document.querySelectorAll('[data-reveal]').forEach((item) => item.classList.add('is-visible'));
}

if (business) {
  document.querySelectorAll('[data-business-name]').forEach((element) => {
    element.textContent = business.name;
  });
  document.querySelectorAll('[data-business-type]').forEach((element) => {
    element.textContent = business.type;
  });
  document.querySelectorAll('[data-business-location]').forEach((element) => {
    element.textContent = `${business.city} · ${business.department} · ${business.country}`;
  });
  document.querySelectorAll('[data-business-location-short]').forEach((element) => {
    element.textContent = `${business.city}, ${business.department}`;
  });
  if (business.phone) {
    const phoneDisplay = `+57 ${business.phone.slice(0, 3)} ${business.phone.slice(3, 6)} ${business.phone.slice(6)}`;
    document.querySelectorAll('[data-business-phone]').forEach((element) => {
      element.textContent = phoneDisplay;
    });
    document.querySelectorAll('[data-phone-link]').forEach((element) => {
      element.href = `tel:+57${business.phone}`;
    });
  }
  if (business.whatsapp) {
    const message = encodeURIComponent('Hola, quisiera obtener información sobre La Petaca Club Campestre.');
    document.querySelectorAll('[data-whatsapp-link]').forEach((element) => {
      element.href = `https://wa.me/${business.whatsapp}?text=${message}`;
    });
  }
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    siteNav.classList.toggle('is-open', !isOpen);
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('is-open');
    });
  });
}

if (siteHeader) {
  const updateHeader = () => siteHeader.classList.toggle('is-scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
