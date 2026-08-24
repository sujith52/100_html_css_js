export function getdata(){
    return{
        name : "Sujith Tech",
        sym : "QTA",
        price : (Math.random()*2).toFixed(2),
        date : new Date().toLocaleTimeString()
    }
}