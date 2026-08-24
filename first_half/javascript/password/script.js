let constants = [
    // Lowercase letters a-z
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    // Numbers 0-9
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    // Common special characters/symbols (assuming "special numbs" means special symbols)
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-',
    '=', '[', ']', '{', '}', '|', ';', ':', '"', "'", ',', '.', '/',
    '<', '>', '?', '`', '~'
];





function passwords() {
    let pass = ''
    let length = 12
    
    for( let i = 0; i < length; i++){
        let random = Math.floor(Math.random()*constants.length)
        pass += constants[random]
    }
    document.getElementById("pass1").textContent = pass
    
}

passwords()


