export function initializeProjectFilter() {
  const items = document.querySelectorAll('[data-filter-item]');
  const buttons = document.querySelectorAll('[data-filter-btn]');
  const select = document.querySelector('[data-select]');
  const value = document.querySelector('[data-select-value]');

  const closeSelect = () => {
    select?.classList.remove('active');
    select?.setAttribute('aria-expanded', 'false');
  };

  const filter = (category) => {
    items.forEach((item) => {
      item.classList.toggle('active', category === 'all' || item.dataset.category === category);
    });
    buttons.forEach((button) => {
      const selected = button.dataset.filterCategory === category;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
      if (selected && value) value.textContent = button.textContent.trim();
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.dataset.filterCategory;
      if (!category) return;
      if (value) value.textContent = button.textContent.trim();
      closeSelect();
      filter(category);
    });
  });

  select?.addEventListener('click', () => {
    select.classList.toggle('active');
    select.setAttribute('aria-expanded', String(select.classList.contains('active')));
  });

  document.querySelectorAll('[data-select-item]').forEach((item) => {
    item.addEventListener('click', (event) => {
      event.stopPropagation();
      const category = item.dataset.filterCategory;
      if (!category) return;
      if (value) value.textContent = item.textContent.trim();
      closeSelect();
      filter(category);
    });
  });

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target?.closest('.filter-select-box')) closeSelect();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !select?.classList.contains('active')) return;
    closeSelect();
    select.focus();
  });

  filter('all');
}
