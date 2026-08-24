
import houses  from './data.js'
console.log(houses);


function render(arrays){
    const cont = document.getElementById("cards")

    cont.innerHTML = ''

    arrays.forEach(item => {
        const cardhtml = `
            <img src="${item.image}" class="image" alt="image bro">
            <div class="info">
                <h1 >${item.name}</h1>
                <h3>$ ${item.price}</h3>
                <p>${item.desc}</p>
                <h3>${item.squ} squarefeets.</h3>
            </div>
        `
        cont.innerHTML += cardhtml
    });
    
}


function rendringbro(houses) {
    return houses.map(property => {
        const {name, price, desc, squ} = property
        return `
            <img src="image.png" class="image" alt="image bro">
            <div class="info">
                <h1 >${name}</h1>
                <h3>$ ${price}</h3>
                <p>${desc}</p>
                <h3>${squ} squarefeets.</h3>
            </div>
        `
    })
}

document.getElementById("cards").innerHTML = rendringbro(houses)

























































// function print(admin, ...rest){
//     rest.forEach((rest) => console.log(`${rest} has granted ${admin} level permission!`))
// }

// print("Admin","SUjith","Sreeja","Latha")


// function getlabel(text,sender, ...name){
//     const labelhtml = name.map(name => `
//         <div    class="divid">
//             <p>Dear  ${name.name}</p>
//             <p>${text} best wishes <br> ${sender}</p>
//         </div>`).join("")
//         return labelhtml
    
// }




// let text = 'Thanks man for comming here'
// let sender = 'Sujith'

// document.getElementById('divid').innerHTML = getlabel(
//     text,
//     sender,
//     {name : "Sreej"},
//     {name : "LALitha"},
//     {name : "Sujith"}
// )


















