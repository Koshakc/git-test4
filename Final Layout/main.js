
document.addEventListener('DOMContentLoaded', () => {


  const burgerBtn    = document.getElementById('burgerBtn');
  const sidebar      = document.getElementById('sidebar');
  const sidebarClose = document.getElementById('sidebarClose');
  const navOverlay   = document.getElementById('navOverlay');

  function openMenu() {
    sidebar.classList.add('sidebar--open');
    sidebar.setAttribute('aria-hidden', 'false');
    navOverlay.classList.add('nav-overlay--active');
    document.body.style.overflow = 'hidden';
    if (burgerBtn) burgerBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    sidebar.classList.remove('sidebar--open');
    sidebar.setAttribute('aria-hidden', 'true');
    navOverlay.classList.remove('nav-overlay--active');
    document.body.style.overflow = '';
    if (burgerBtn) burgerBtn.setAttribute('aria-expanded', 'false');
  }

  if (burgerBtn)    burgerBtn.addEventListener('click', openMenu);
  if (sidebarClose) sidebarClose.addEventListener('click', closeMenu);
  if (navOverlay)   navOverlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });



  const tabItems = document.querySelectorAll('.tabs__item');
  tabItems.forEach(tab => {
    tab.addEventListener('click', () => {
      tabItems.forEach(t => t.classList.remove('tabs__item--active'));
      tab.classList.add('tabs__item--active');
    });
  });



  function initShowMore(btnId, extraSelector, labelExpand = 'Показать все', labelCollapse = 'Скрыть') {
    const btn = document.getElementById(btnId);
    if (!btn) return;

    const extras = document.querySelectorAll(extraSelector);
    let expanded = false;

    btn.addEventListener('click', () => {
      expanded = !expanded;

      extras.forEach(el => {
        if (expanded) {
          el.classList.add('brand-card--visible', 'device-card--visible');
        } else {
          el.classList.remove('brand-card--visible', 'device-card--visible');
        }
      });

      btn.classList.toggle('show-more-btn--expanded', expanded);
      const labelEl = btn.querySelector('.show-more-btn__label');
      if (labelEl) labelEl.textContent = expanded ? labelCollapse : labelExpand;
    });
  }

  initShowMore('showMoreBrands',  '.brand-card--extra');
  initShowMore('showMoreDevices', '.device-card--extra');

});
