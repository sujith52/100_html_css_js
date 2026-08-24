
function App(){
    const { JokeData, Joke } = window;
    const JokeDialogue = JokeData.map(({punchline,setup},index)=>{
        return(
            <Joke 
            key = {index}
            set = {setup}
            punch = {punchline}
        />
        )
    })
    return(
        <main>
            {JokeDialogue}
        </main>
    )
}

window.App = App