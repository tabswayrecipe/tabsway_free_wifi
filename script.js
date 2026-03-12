// Select elements
const connectBtn = document.querySelector('.connect');
const progressBar = document.querySelector('.progress-bar');

function connectWifi() {
  // Prevent multiple clicks
  connectBtn.disabled = true;

  // Add pulse animation
  connectBtn.classList.add('pulse');

  // Reset progress bar
  progressBar.style.width = '0%';

  let progress = 0;

  // Adjust speed: smaller number = slower loading
  const speed = 1; // % per interval
  const intervalTime = 30; // ms per step

  const interval = setInterval(() => {
    progress += speed;
    if (progress > 100) progress = 100;
    progressBar.style.width = progress + '%';

    if (progress >= 100) {
      clearInterval(interval);

      // Stop pulse animation
      connectBtn.classList.remove('pulse');

      // Update button text to show connected
      connectBtn.textContent = 'Connected ✅';

      // Optionally leave disabled to prevent extra clicks
      // connectBtn.disabled = false; // Uncomment if you want to re-enable
    }
  }, intervalTime);
}
