

const {createRoot} = ReactDOM
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
    <>
    
    <Contact
        img= "https://tse1.explicit.bing.net/th/id/OIP.ae-O-_6Yie6FuiY30F2BqAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
        name = "sujith"
        phone = "652356"
        email= "sujith@gmail.com"
    />
    <Contact
        img = "https://wallpapercave.com/wp/wp14196909.jpg"
        name = "latha"
        phone = "1234568"
        email = "cat@gmail.com"
    />
    <Contact 
        img = "https://wallpaperbat.com/img/14503184-beautiful-cat-kitty-kitten.jpg"
        name = "sreeja"
        phone = "1234568"
        email = "cat@gmail.com"
    />
    <Contact 
        img = "https://wallpaperbat.com/img/14503218-wallpaper-cat-art-flowers-black.jpg"
        name = "sweety"
        phone = "1234568"
        email = "cat@gmail.com"
    />
    </>
)

function App(){
    const firatname = "Sujith Kumar"
    const lastname = "Gavathakatla"
    return(
        <h1 style={{color: 'red', backgroundColor: 'whitesmoke'}}>Welcome to this dark computer world man ! <br /> <b>{firatname} {lastname}</b> !!</h1>
    )
}