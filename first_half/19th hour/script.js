// fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => {
//         const image = document.createElement('img')
//         image.src = data.message
//         image.alt = 'random image bro'
//         document.getElementById("img-cont").appendChild(image)
//     })




// async function getsugg() {
//     const response = await fetch("https://apis.scrimba.com/bored/api/activity")
//     const data = await response.json()
//     console.log(data);
// }
// getsugg()
    
// try{
//     const response = await fetch("https://apis.scrimba.com/bored/api/activity")
//     const data = await response.json()
//     console.log(data);
// }catch(err){
//     console.log('The error is ',err);
    
// }finally{
//     console.log("The operation was completed");
    
// }

// try{
//     const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
//         method : 'POST',
//         body : JSON.stringify({
//             title: 'Holiday Nightmares',
//             body: 'i had dream in my child hood which is a total nightmare i dremt of getting killed by a  pencillike jhon wick movie!!.',
//             userId: 101
//         }),
//         headers : {
//             'Content-Type' : 'application/json'
//         }
//     })
//     if(!response){
//         throw new Error("The api end point has a problem man");
//     }
//     const data = await response.json()
//     console.log(data)
    
// }catch(err){
//     console.log(err)
// }


// const promised = new Promise( (resolve,reject) => {
//     const succes = Math.random() > 0.5
//     if(succes){
//         resolve('The code is succes bro')
//     }else{
//         reject('This code looks like you hairs in armpit')
//     }
// })

// try{
//     const response = await promised
//     console.log(response);
    
// }catch(err){
//     console.log(err);
    
// }



function preloadimg(url) {
    return new Promise( (resolve,reject) => {
        const imgsrc = new Image()
        imgsrc.src = url
        imgsrc.alt = 'a beautiful scene'
        imgsrc.addEventListener('load', ()=> resolve(imgsrc))
        imgsrc.addEventListener('error', ()=> reject(imgsrc))

    })

}

try{
    const res = await preloadimg('https://th.bing.com/th/id/OIP.8m3oXGn447V7Skp11cldiAAAAA?w=80&h=80&c=12&rs=1&qlt=90&o=6&dpr=1.3&pid=23.1')
    console.log(res);
    document.getElementById('img-cont').appendChild(res)
}catch(err){
    console.log(err);
    
}