import { loadPages } from './page-loader.js';
import { initializeContactForm } from './contact-form.js';
import { initializeNavigation } from './navigation.js';
import { initializeProjectFilter } from './project-filter.js';
import { initializeSidebar } from './sidebar.js';
import { initializeTheme } from './theme.js';

initializeTheme();

try {
  await loadPages();
  initializeSidebar();
  initializeProjectFilter();
  initializeContactForm();
  initializeNavigation();
} catch (error) {
  const container = document.querySelector('[data-page-container]');
  if (container) {
    container.textContent = 'Portfolio content could not be loaded. Run this site through a local web server.';
  }
  console.error(error);
}
