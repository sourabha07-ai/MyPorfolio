export function initializeNavigation() {
  const links = document.querySelectorAll('[data-nav-link]');
  const pages = document.querySelectorAll('[data-page]');

  links.forEach((link) => {
    link.addEventListener('click', () => {
      const pageName = link.dataset.navLink;
      pages.forEach((page) => page.classList.toggle('active', page.dataset.page === pageName));
      links.forEach((item) => {
        const selected = item === link;
        item.classList.toggle('active', selected);
        if (selected) item.setAttribute('aria-current', 'page');
        else item.removeAttribute('aria-current');
      });
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });
}
