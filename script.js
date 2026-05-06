(() => {
  'use strict';

  const navbar = document.querySelector('.navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navAnchors = document.querySelectorAll('.nav-links a');

  const onScroll = () => {
    if (window.scrollY > 24) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
  navAnchors.forEach((a) => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  document
    .querySelectorAll('.timeline-item, .project-card')
    .forEach((el) => observer.observe(el));

  const sections = document.querySelectorAll('section[id]');
  const linkMap = new Map();
  navAnchors.forEach((a) => {
    const id = a.getAttribute('href').slice(1);
    if (id) linkMap.set(id, a);
  });

  const setActive = (id) => {
    navAnchors.forEach((a) => a.classList.remove('active'));
    const link = linkMap.get(id);
    if (link) link.classList.add('active');
  };

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach((s) => sectionObserver.observe(s));
})();
