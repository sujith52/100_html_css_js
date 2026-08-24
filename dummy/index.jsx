

const {createRoot} = ReactDOM 
const dummy = document.getElementById('root')
const root = createRoot(dummy)
root.render(
    <>
        <h1>was it working</h1>
        <Main />
    </>
)

function Main(){
    const [books, setbooks] = React.useState([])
    const [input1, setinput1] = React.useState('')
    const [input2, setinput2] = React.useState('')
    

    function handle(){
        if(input1 === "" || input2 === ""){
            alert("this is was wrong bro !!")
            return
        }
        setbooks((prev)=>[...prev,{title : input1, genere : input2}])
        console.log(books);
        
        setinput1('')
        setinput2('')
    }

    return(
        <>
            <h1>This is title : <input type="text" value={input1}  onChange={(e)=> setinput1(e.target.value)}/></h1>
        <h1>This is genere : <input type="text" value={input2} onChange={(e)=> setinput2(e.target.value)} /></h1>
            <button type="submit" onClick={handle}>Submit</button>
            <h1>book list</h1>
            <ul>
            {
                books.map((book, index) =>(
                    <li key={index}>
                        <strong>{book.title} - {book.genere}</strong>
                    </li>
                )
            )}
            </ul>
        </>
    )
}