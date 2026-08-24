

const {createRoot} = ReactDOM
const rootelement = document.getElementById('root')
const root = createRoot(rootelement)
const {App, Joke} = window
root.render(
    <>
    <h1>Hello is it working bro</h1>
    <App />
    <Joke 
        set = "there is something on your face 😱"
        punch = "OMG ! it was beauty 😅"
    />
    <Joke set = "I’m calling the police to report you immediately."
            punch = "Because it’s illegal to look this stunning without a license! 👮‍♂️"
    />
    <Joke
        set = "i lost my flower, did you by any cahnce saw it ??"
        punch = "dont worry you are my flower 😅"
    />
    <h1><i><b>Even though these lines are not that good. <br />these are some what funny!!.</b></i></h1>
    </>
)