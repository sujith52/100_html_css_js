function App(){
    function add(){
        return (console.log(`bloody helll`))
    }
    return(
        <div className="canvas">

            
            <div className="plus" onClick={add}></div>
            <div className="main"></div>
            <div className="minus"></div>
        </div>
    )
}

window.App = App