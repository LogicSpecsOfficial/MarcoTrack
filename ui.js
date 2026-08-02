// Gestures & Interaction Physics
document.addEventListener('DOMContentLoaded', () => {
  UIGestures.init();
});

const UIGestures = {
  init() {
    this.setupSheetSwipeToDismiss();
  },

  setupSheetSwipeToDismiss() {
    const sheet = document.getElementById('action-sheet');
    const overlay = document.getElementById('sheet-overlay');
    if (!sheet) return;

    let startY = 0;
    let currentY = 0;
    let isDragging = false;

    sheet.addEventListener('touchstart', (e) => {
      startY = e.touches[0].clientY;
      isDragging = true;
      sheet.style.transition = 'none';
    }, { passive: true });

    sheet.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      currentY = e.touches[0].clientY;
      const deltaY = currentY - startY;

      if (deltaY > 0) {
        sheet.style.transform = `translateY(${deltaY}px)`;
      }
    }, { passive: true });

    sheet.addEventListener('touchend', () => {
      if (!isDragging) return;
      isDragging = false;
      sheet.style.transition = '';

      const deltaY = currentY - startY;
      if (deltaY > 100) {
        sheet.classList.remove('visible');
        if (overlay) overlay.classList.remove('visible');
        sheet.style.transform = '';
      } else {
        sheet.style.transform = '';
      }
    });
  }
};
