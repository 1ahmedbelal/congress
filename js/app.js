import { initTimer } from './timer.js';
import { initSheets } from './sheets.js';
import { initModals } from './modals.js';
import { updateClock } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  initTimer();
  initSheets();
  initModals();

  updateClock();
  setInterval(updateClock, 1000);
});
