const colors = [
"#CC4034",
"#FFC526",
"#6AA121",
"#E4BC91"
]

function createBubble(){

const bubble = document.createElement("div")

bubble.classList.add("bubble")

document.body.appendChild(bubble)

const size = Math.random()*60

bubble.style.width = size + "px"
bubble.style.height = size + "px"

bubble.style.left = Math.random()*window.innerWidth + "px"

bubble.style.background =
colors[Math.floor(Math.random()*colors.length)]

bubble.style.animationDuration =
6 + Math.random()*5 + "s"

setTimeout(()=>{
bubble.remove()
},8000)

}

function connectWifi(){

window.location.href="https://google.com"

}


setInterval(createBubble,700)
