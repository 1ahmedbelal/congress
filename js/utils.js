export function updateClock() {
  const now = new Date();
  const format = localStorage.getItem('timeFormat') || '12';

  let time;
  if (format === '24') {
    time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } else {
    time = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  }

  document.getElementById('currentTime').textContent = time;
}
