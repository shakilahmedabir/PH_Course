// Digital clock + date
function updateClock() {
  const now = new Date();
  document.getElementById('clock')?.innerText = now.toLocaleTimeString();
  document.getElementById('date')?.innerText  = now.toLocaleDateString(undefined, {weekday:'short', year:'numeric', month:'short', day:'numeric'});
}
setInterval(updateClock, 1000);
updateClock();

// Year in footer
document.getElementById('year')?.innerText = new Date().getFullYear();

// Simple progress update (placeholder logic)
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress');
if (progressBar && progressText) {
  progressBar.addEventListener('click', () => {
    let value = parseInt(progressBar.value);
    value = (value + 10) % 110;
    progressBar.value = value;
    progressText.innerText = value + '%';
  });
}