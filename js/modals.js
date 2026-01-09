export function initModals() {
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.onclick = () => {
      document.getElementById(btn.dataset.modal).classList.add('active');
    };
  });

  document.querySelectorAll('.close').forEach(btn => {
    btn.onclick = () => {
      btn.closest('.modal').classList.remove('active');
    };
  });

  window.onclick = e => {
    if (e.target.classList.contains('modal')) {
      e.target.classList.remove('active');
    }
  };
}
