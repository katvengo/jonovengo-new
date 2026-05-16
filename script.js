(() => {
  const toggle = document.querySelector('.navbar__toggle');
  const links  = document.querySelector('.navbar__links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a link is selected (useful on mobile)
  links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      links.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
