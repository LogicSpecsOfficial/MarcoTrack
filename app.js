// Application Logic & Navigation State Controller
document.addEventListener('DOMContentLoaded', () => {
  AppController.init();
});

const AppController = {
  init() {
    this.setupNavigation();
    this.setupActionSheet();
    this.checkPWAStatus();
  },

  setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view-section');

    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetView = item.getAttribute('data-view');

        navItems.forEach(nav => nav.classList.remove('active'));
        views.forEach(view => view.classList.remove('active'));

        item.classList.add('active');
        const activeView = document.getElementById(`view-${targetView}`);
        if (activeView) {
          activeView.classList.add('active');
        }
      });
    });
  },

  setupActionSheet() {
    const openBtns = document.querySelectorAll('[data-action="open-sheet"]');
    const closeBtns = document.querySelectorAll('[data-action="close-sheet"]');
    const overlay = document.getElementById('sheet-overlay');
    const sheet = document.getElementById('action-sheet');

    openBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (overlay) overlay.classList.add('visible');
        if (sheet) sheet.classList.add('visible');
      });
    });

    closeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (overlay) overlay.classList.remove('visible');
        if (sheet) sheet.classList.remove('visible');
      });
    });

    if (overlay) {
      overlay.addEventListener('click', () => {
        overlay.classList.remove('visible');
        if (sheet) sheet.classList.remove('visible');
      });
    }
  },

  checkPWAStatus() {
    const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const pwaBanner = document.getElementById('pwa-install-banner');
    const closeBannerBtn = document.querySelector('[data-action="close-banner"]');

    if (isIOS && !isStandalone && pwaBanner) {
      pwaBanner.classList.remove('hidden');
    }

    if (closeBannerBtn && pwaBanner) {
      closeBannerBtn.addEventListener('click', () => {
        pwaBanner.classList.add('hidden');
      });
    }
  }
};
