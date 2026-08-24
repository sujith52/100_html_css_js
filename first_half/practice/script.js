const recepent = "Sujith"

// const email = "Hey "+recepent+" How are you doing ??"

// const email = `<h1>Hey ${recepent} how are you doing bro</h1>`
const sender = "Kumar"
const email = `hey bro ${recepent}
 how are you, yours lovely
  ${sender}`
console.log(email);

console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean(100));
console.log(Boolean(null));
console.log(Boolean([0]));
console.log(Boolean(-0));


let paral = document.getElementById("para")

function greeting(greet,name,emoji) {
    paral.textContent = `hello ${greet} ${name} bro !! ${emoji}`
}

greeting("welcome","sujith","😱")

let paral = document.getElementById("para")

function add(a,b) {
    paral.textContent = `${a+b}`
}

add(2,3)

let paral = document.getElementById("para")



function getfirst(arr) {
    return arr[0]
    
}

let hi = getfirst([1,23,98])
console.log(hi);


const player = "sujith"
const opp = "sreej"
const game = "latha game "
let points = 0
let won = false

points += 100


if(won){
    console.log(`${player} got ${points} points and won ${game} the game!`);
}else{
    console.log(`${opp} got ${points} points and won ${game} the game!`);
}

let arr = ["sujith", "latha","sreeja"]

function sup(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

sup(arr)

let arr = 21
let arr = localStorage.setItem("arr")

console.log(arr);

let data = [
    {
        player : "sujith",
        score : 25
    },
    {
        player : "latha",
        score : 29
    },
    {
        player : "sreeja",
        score : 30
    },

]
let paras = document.getElementById("para")
paras.addEventListener("click", function(){
    console.log(data[0]);
    
})


function gene(desc, arr){
    let bs = `thw ${arr.length} ${desc} are `
    for (let i = 0; i < arr.length; i++) {
        bs += arr[i]  
    } 
    return bs
}
let secs = gene("higgest mountains", ["india","mounteversr"])
console.log(secs);

