(() => {
  try {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      document.documentElement.dataset.theme = savedTheme;
      const themeColor = document.querySelector('[data-theme-color]');
      if (themeColor) themeColor.setAttribute('content', savedTheme === 'light' ? '#eaf3fb' : '#071522');
    }
  } catch {
    // The dark theme remains available when browser storage is disabled.
  }
})();
