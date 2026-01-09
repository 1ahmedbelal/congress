let startTime = null;
let elapsed = 0;
let running = false;
let interval;

export function initTimer() {
  const panel = document.getElementById('timerPanel');
  panel.innerHTML = renderTimer();

  panel.querySelector('#start').onclick = start;
  panel.querySelector('#stop').onclick = stop;
  panel.querySelector('#reset').onclick = reset;

  restore();
}

function start() {
  if (running) return;
  startTime = Date.now() - elapsed;
  interval = setInterval(tick, 10);
  running = true;
  persist();
}

function stop() {
  running = false;
  clearInterval(interval);
  persist();
}

function reset() {
  stop();
  elapsed = 0;
  updateDisplay(0);
  persist();
}

function tick() {
  elapsed = Date.now() - startTime;
  updateDisplay(elapsed);
}

function updateDisplay(ms) {
  const t = new Date(ms);
  document.getElementById('display').textContent =
    t.toISOString().substr(11, 11);
}

function persist() {
  localStorage.setItem('timerState', JSON.stringify({ elapsed, running }));
}

function restore() {
  const saved = JSON.parse(localStorage.getItem('timerState') || '{}');
  elapsed = saved.elapsed || 0;
  updateDisplay(elapsed);
  if (saved.running) start();
}

function renderTimer() {
  return `
    <div class="timer">
      <div id="display">00:00:00.00</div>
      <button id="start">Start</button>
      <button id="stop">Stop</button>
      <button id="reset">Reset</button>
    </div>
  `;
}
