export function initializeSidebar() {
  const sidebar = document.querySelector('[data-sidebar]');
  const button = document.querySelector('[data-sidebar-btn]');
  const label = button?.querySelector('span');

  button?.addEventListener('click', () => {
    const isExpanded = sidebar?.classList.toggle('active') ?? false;
    button.setAttribute('aria-expanded', String(isExpanded));
    button.setAttribute('aria-label', isExpanded ? 'Hide contacts' : 'Show contacts');
    if (label) label.textContent = isExpanded ? 'Hide Contacts' : 'Show Contacts';
  });
}
