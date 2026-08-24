

// let age = 20 +3

// if(age <= 21){
//     console.log("Damm boy you are still a boy not man 😑");
    
// } else if ()

// else{
//     console.log("Welcome to club, damm my whole life is single sinthakaya😩");
    
// }

let player = {
    name : "Sujith",
    chips : 105
}
let cards = []
let sum = 0
let isblackjack = false
let isalive = true
let msg = ""

let msGel = document.getElementById("msgel")
let sumGel = document.getElementById("sumel")
let cardsEL = document.getElementById("cardsel")
let playerEl = document.getElementById("playerel")

playerEl.textContent = player.name +" : $"+player.chips


function startgame() {
    isalive = true
    let firstcard = random()
    let secondcard = random()
    cards = [firstcard+secondcard]
    sum = firstcard+secondcard
    rendergame()
}

function random() {
    let randnum = Math.floor(Math.random()*13)+1
    if(randnum > 10 ){
        return 10
    }else if(randnum === 1){
        return 11
    }else{
        return randnum
    }
}


function rendergame() {
    cardsEL.textContent = "Cards : "+cards[0]+", "+cards[1]
    for(let i = 0; i < cards.length; i++){
        cardsEL.textContent += cards[i] + ","
    }
    sumGel.textContent = "Sum : "+ sum 
    if(sum <= 20){
        msg = ("Do you wnat to draw a card bro 😒");
    
    }else if(sum === 21){
        msg = ("Congrajulations shit you got money 🤑");
        isblackjack = true
    
    }else if(sum > 21){
        msg = ("You are out of the game man 😭")
        isalive = false
    
}
msGel.textContent = msg
console.log(msg);
}

function newgame() {
    let newcard = random()
    sum = sum + newcard
    cards.push(sum)
    startgame()
}
