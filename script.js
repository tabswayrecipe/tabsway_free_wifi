// Connect to UniFi guest WiFi in a new tab
function connectWifi() {
    window.open("$authUrl", "_blank");
}

// 10-second countdown progress bar
let progressBar = document.getElementById("progressBar");
let connectBtn = document.getElementById("connectBtn");
let width = 0;
let interval = setInterval(function() {
    width += 1;
    progressBar.style.width = width + '%';
    if (width >= 100) {
        clearInterval(interval);
        connectBtn.disabled = false;
    }
}, 100); // 100ms per 1% → 10 seconds total
