let num1 = 8
let num2 = 5
document.getElementById("num1el").textContent = num1
document.getElementById("num2el").textContent = num2
sum =  document.getElementById("sumel")

function add(){
    sum.textContent = num1 + num2
}

function sub(){
    sum.textContent = num1 - num2
}

function mul(){
    sum.textContent = num1 * num2
}

function div(){
    sum.textContent = num1 / num2
}