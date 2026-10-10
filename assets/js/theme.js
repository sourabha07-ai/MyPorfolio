const THEME_STORAGE_KEY = 'portfolio-theme';

export function initializeTheme() {
  const toggle = document.querySelector('[data-theme-toggle]');
  if (!toggle) return;

  const icon = toggle.querySelector('ion-icon');
  const label = toggle.querySelector('[data-theme-label]');
  const themeColor = document.querySelector('[data-theme-color]');
  let theme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';

  const applyTheme = (nextTheme) => {
    theme = nextTheme === 'light' ? 'light' : 'dark';
    const lightMode = theme === 'light';

    document.documentElement.dataset.theme = theme;
    toggle.setAttribute('aria-checked', String(lightMode));
    toggle.title = `Switch to ${lightMode ? 'dark' : 'light'} theme`;
    if (icon) icon.setAttribute('name', lightMode ? 'sunny-outline' : 'moon-outline');
    if (label) label.textContent = lightMode ? 'Light' : 'Dark';
    if (themeColor) themeColor.setAttribute('content', lightMode ? '#eaf3fb' : '#071522');
  };

  applyTheme(theme);
  toggle.addEventListener('click', () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Theme switching still works for this visit when storage is disabled.
    }
  });
}
