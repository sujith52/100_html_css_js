

const {createRoot} = ReactDOM 
const dummy = document.getElementById('root')
const root = createRoot(dummy)
root.render(
    <>
        <h1>hello is it working !</h1>
        <Main />
        
    </>
)


function convertmorse(text){
    
    const MORSE_CODE = {
    A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
    G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
    M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
    S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
    Y: "-.--", Z: "--..",
    0: "-----", 1: ".----", 2: "..---", 3: "...--", 4: "....-",
    5: ".....", 6: "-....", 7: "--...", 8: "---..", 9: "----.",
    " ": "/"
  };
  return text
    .toUpperCase()
    .split("")
    .map(char => MORSE_CODE [char] || "")
    .join(" ")
    .trim()
  
}

function Main(){
    const [text, settext] = React.useState("")
    const [output, setoutput] = React.useState("")
    const [history, sethistory] = React.useState([])
    console.log()
    return(
        <section>
            <h1>Morse code Converter - sujith secret</h1>
            <p>Felling bored then just upload the text that you want to upload in the text box and <i>Create Mystery</i></p>
            <input type="text" placeholder="Enter the secret word !" value={text} onChange={(e)=> settext(e.target.value)} />
            <button onClick={()=>{let reult = convertmorse(text)
                setoutput(reult)
                sethistory(prev => [...prev,{text, reult}])
            }}>Convert to morse code</button>
            <p>currevt output : {output}</p>
            <h1>Previous outputs :</h1>
            <ul>{history.map((item, index)=>(
                <li key={index} >{item.text} to  {item.reult}</li>
            ))}</ul>
        </section>
    )
}