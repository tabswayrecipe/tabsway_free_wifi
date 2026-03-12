// Get elements
const progressBar = document.getElementById("progressBar");
const connectBtn = document.getElementById("connectBtn");

// Function to simulate WiFi connection
function connectWifi() {
  connectBtn.disabled = true;              // prevent multiple clicks
  connectBtn.classList.add('pulse');       // add pulse animation
  progressBar.style.width = '0%';          // reset progress

  let width = 0;
  const interval = setInterval(() => {
    width += 1;                             // increment progress
    progressBar.style.width = width + '%';  // update bar width

    if (width >= 100) {                     // when full
      clearInterval(interval);              // stop interval
      connectBtn.classList.remove('pulse'); // stop pulse
      connectBtn.textContent = "Connected ✅";
      connectBtn.disabled = false;          // enable button if needed
      // Optional: redirect to $authUrl after full progress
       window.location.href = "$authUrl";
    }
  }, 30); // speed of progress (30ms per step)
}

