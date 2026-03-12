let progressBar = document.getElementById("progressBar");
let connectBtn = document.getElementById("connectBtn");

let width = 0;

// Progress bar animation
let interval = setInterval(function(){
  width++;
  progressBar.style.width = width + "%";
  if(width >= 100){
    clearInterval(interval);
    connectBtn.disabled = false;
    connectBtn.classList.remove("pulse");
  }
}, 100);

// Connect button function
function connectWifi() {
  window.location.href = "$authUrl"; // replace with your actual $authUrl
}
