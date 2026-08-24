let converbtn = document.getElementById("btn")
let valuedis = document.getElementById("value")
let displaybars = document.querySelectorAll(".bar p")

converbtn.addEventListener("click", function(){
    let input = prompt("Enter the number to convert :")
    let num = parseFloat(input)
    if(isNaN(num)){
        alert("please enter valid number!!")
        return
    }
    valuedis.textContent = num
    const mtof = (num * 3.281).toFixed(3)
    const ftom = (num / 3.281).toFixed(3)
    displaybars[0].textContent = `${num} meters = ${mtof} feet | ${num} feet = ${ftom} meters`

    const ltog = (num * 0.264).toFixed(3)
    const gtol = (num / 0.264).toFixed(3)
    displaybars[1].textContent = `${num} liters = ${ltog} gallons | ${num} gallons = ${gtol} liters`

    const ktop = (num * 2.204).toFixed(3)
    const ptok = (num / 2.204).toFixed(3)
    displaybars[2].textContent = `${num} kilos = ${ktop} pounds | ${num} pounds = ${ptok} kilos`
})

// i created this on 07-01-2026 i think a new begining bro.