// let sujith = [
//     "G Sujith Kumar",
//     "madanapalle",
//     "Chittor",
//     "Andhra Pradesh"
// ]
// console.log(sujith);


// let primitive= [
//     "Sujith",
//     21,
//     false
// ]

// for(let i = 10; i <=100; i +=10){
//     let arr = []
//     console.log(i);
//     console.log("Thats pretty good num man"+i);
//     arr.push(i)
//     console.log(arr);
    
// }

// let cards = [5,8,3,4]
// for(let i=0; i < cards.length; i += 1){
//     console.log(cards[i]);
    
// }

// let series = true
// let startup = true

// if ( series === true || startup === true){
//     serieswat()
// }

// function serieswat(){
//     console.log("The frye series is ammazing per");
    
// }

// let castle= {
//     name : "Nordan ccastle",
//     age : "200BC",
//     location : "dunik,eastren front, europe",
//     peoplekilled : 61000,
//     blamedgov : false
// }

// date 17-12-2025 at 07:52am in yoyube video at10hrs 16min

// let  person = {
//     name : "G Sujith Kumar",
//     age : 21,
//     country : "India (Barath)"
// }
// console.log(person);


// function logdata() {
//     let print = person.name+ " is "+ person.age +" years old and lives in "+person.country
//     console.log(print);
    
// }
// logdata()

// let age = 68

// if (age < 6){
//     console.log("Free");
// } else if (age > 6 && age < 17){
//     console.log("Child discount");
    
// }else if (age > 18 && age < 26){
//     console.log("student discount");
    
// }else if (age => 27 && age > 66){
//     console.log("full price");
    
// }else if (age <= 66){
//     console.log("Senior citizen discount");
    
// }


// let countries = ["India","China","Russia","germany","Italy"]

// for (let i =0; i < countries.length; i ++){
//     console.log(countries[i]);
    
// }

// countries.pop(4)
// countries.push("Mynamar")
// countries.unshift("UK")
// countries.shift()

// console.log(countries);


// let hands = ["Rock","Paper", "Scissor"]

// function game() {
//     let random = hands[Math.floor(Math.random()* hands.length)]
//     console.log(random);
    
// }
// game()

// let fighters = ["🐕","🐈","🐂","🐄","🐁"]

// let stageEl = document.getElementById("stage")
// let fightEl = document.getElementById("fight")

// fightEl.addEventListener("click",function(){
//     let random1 = Math.floor(Math.random()*fighters.length)
//     let random2 = Math.floor(Math.random()*fighters.length)
//     stageEl.textContent = fighters[random1]+" VS "+fighters[random2]
// })