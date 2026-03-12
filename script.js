function connectWifi() {

window.location.href="$authUrl";

}

let progressBar=document.getElementById("progressBar");
let connectBtn=document.getElementById("connectBtn");

let width=0;

let interval=setInterval(function(){

width++;

progressBar.style.width=width+"%";

if(width>=100){

clearInterval(interval);
connectBtn.disabled=false;

}

},100);
