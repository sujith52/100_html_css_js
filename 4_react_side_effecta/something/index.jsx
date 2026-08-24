const {createRoot} = ReactDOM 
const mainroot = document.getElementById('root')
const root = createRoot(mainroot)
root.render(
    <>
        <h1>is this website is working now !!</h1>
        <Appsed />
    </>
)

function Appsed() {
    const [show, setshow] = React.useState(true)
    console.log(show);
    
    return (
        <main className="container">
            <button onClick={()=> {setshow(!show)}}>
                Toggle WindowTracker
            </button>
            {show === true ? <WindowTracker /> : null}
        </main>
    )
}

function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function watchWidth() {
            console.log('it is resizing');
            setWindowWidth(window.innerWidth)
        }
        
        
        window.addEventListener('resize', watchWidth)
        
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener('resize', watchWidth)
        }
    }, [])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}


function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    console.log("Rendered! outside from man")
    
    React.useEffect(function(){
        console.log('Inside this use effect')
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}