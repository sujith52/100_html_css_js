let transfer = document.getElementById("nuke")
let explode = document.getElementById("canvasexp")
let domm = explode.querySelector("h1")

function clearexp() {
    explode.querySelectorAll('img').forEach(img => img.remove())
}

transfer.addEventListener('click', function(){
    clearexp()
    let explodel = document.createElement('img')
    explodel.src = "explode-earth.webp"
    explodel.style.width = "100%"
    explodel.style.height = "100%"
    explodel.style.objectFit = "cover"
    explode.appendChild(explodel)

    explodel.onload = () => {
        console.log("You did it")
        domm.textContent = "Damm you Exploded the earth  in 2025 broo😮😱"
    }
    
})

let txtel = document.getElementById("tnt")

txtel.addEventListener('click', function(){
    clearexp()
    let tntexplode = document.createElement('img')
    tntexplode.src = 'tnt-exp.gif'
    tntexplode.style.height = '100%'
    tntexplode.style.width = '100%'
    tntexplode.style.objectFit = 'cover'
    explode.appendChild(tntexplode)

    tntexplode.onload = () => {
        console.log("You damm fool why did you did that??")
        domm.textContent = "You fool why use TNT use NUKE man 😮😒"
    }
})

let grand = document.getElementById("granade")

grand.addEventListener('click', function(){
    clearexp()
    let grandexp = document.createElement('img')
    grandexp.src = "granade-exp.gif"
    grandexp.style.width = '100%'
    grandexp.style.height = '100%'
    grandexp.style.objectFit = 'cover'
    explode.appendChild(grandexp)

    grandexp.onload = () => {
        domm.textContent = "You are not miltaay so do not use the granade man😑💣"
    }
})

