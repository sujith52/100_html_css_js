// import { getdata } from "./kake.js";

// console.log(getdata());

// setinterval(function(){
//     const stockdata = getdata()
//     render(stockdata)
// },1500)

// function render(stockdata){
//     const {name, sym, price, date} = stockdata
// }





// const speedwarning = (speedlimit,actualspeed) => {
//     if(speedlimit < actualspeed){
//         return `You are going to die with ${actualspeed}`
//     }else{
//         return `you are in heaven man `
//     }
// }

// console.log(speedwarning(150,120));


// const dis = [235,85,452,523,542,4852,542,542]

// const diskm = dis.map( distance => {return Math.round(distance * 1.6)})


// console.log(diskm);


// let arrof = [
//     {
//         name : 'inivisibele ink',
//         usd : 21,
//         desc : 'losperm useporm  what the heck!!'
//     },
//     {
//         name : 'ini hfk',
//         usd : 51,
//         desc : 'lospermoijbscd  what the heck!!'
//     }
// ]


// function calcu(arrof,dis){
//     const total = arrof.reduce((total, current) => 
//         total + current.usd,0
// )
// return total - dis
// }

// console.log(calcu(arrof,10));










































// const player = 3
// const correct = 3

// const message = player < correct ? "too high bro" 
// : player > correct ? "Too low bro" : "Exactly correct answer"

// console.log(message);

// function selectitem (item){
//     let price = 0

//     switch(item){
//         case 'coffee': 
//             price = 2
//             break
//         case 'sandwitches': 
//             price = 5
//             break
//         case 'salad': 
//             price = 4
//             break
//         case 'lemoncake': 
//             price = 3
//             break
//         default:
//             return `sorry we dont sell this ${item}`
//     }
//     return `you have selected ${item} and its price is $${price}`
// }

// console.log(selectitem('lemoncake'));




// object destructuring 

// const dreamHoliday = {
//     destination : "Tirumala",
//     activity : "going with favourite persion for blesssings from god",
//     accommodations : "well spleeing in the sheds where is no phone will be good",
//     companion : "only latha and sreeja will be come i think so"
// }

// const {destination,activity,accommodations,companion} = dreamHoliday

// console.log(`my fav destination is ${destination}, ${activity}, ${accommodations}, with companion ${companion}`);


// function logAnswer(){
//     console.log(`the answer is amaravathi, it 10 points for getting right!!`);
    
// }

// console.log(`what is capital of Andhra Pradesh??`)
// setTimeout(logAnswer,3000)


// let dater = new Date()
// console.log(dater.toDateString());

// console.log(dater.getFullYear());


