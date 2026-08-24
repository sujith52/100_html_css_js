



function Main(){
    const [meme, setmeme] = React.useState({
        topText : 'One does not simply',
        bottomText : 'Walk into Mordor' ,
        imgurl : 'http://i.imgflip.com/1bij.jpg'
    })
    const [allmemes, setallmemes] = React.useState([])

    React.useEffect(()=>{
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res =>res.json())
            .then(data => setallmemes(data.data.memes))
    }, [])
    
   function getrandom() {
   
    const randomnum = Math.floor(Math.random() * allmemes.length)
    
   
    const memeurl = allmemes[randomnum].url
  
    setmeme(prevMeme => ({
        ...prevMeme,
        imgurl: memeurl
    }))
}

    function handlelistener(event){
        const {value, name} = event.currentTarget
        setmeme((prevmem)=>({
            ...prevmem,
            [name]: value
        }))
        
    }

    return(
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handlelistener}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handlelistener}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getrandom}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imgurl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}

window.Main = Main