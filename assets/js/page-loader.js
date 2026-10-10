'use strict';

const PAGE_NAMES = ['about', 'resume', 'portfolio', 'blog', 'contact'];

export async function loadPages() {
  const container = document.querySelector('[data-page-container]');
  if (!container) throw new Error('Page content container is missing.');

  const pages = await Promise.all(PAGE_NAMES.map(async (name) => {
    const response = await fetch(new URL(`../../pages/${name}.html`, import.meta.url));
    if (!response.ok) throw new Error(`Could not load the ${name} page (${response.status}).`);
    return response.text();
  }));

  container.innerHTML = pages.join('\n');
}
