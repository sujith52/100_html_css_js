function Joke({set,punch}){
    return(
        <div className="card">
            <h1><b>Setup:</b> <i>{set}</i></h1>
            <h1><b>Punchline:</b> <i>{punch}</i></h1>
        </div>
    )
}

window.Joke = Joke