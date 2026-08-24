const {createRoot} = ReactDOM 
const root = createRoot(document.getElementById('root'))
root.render(
    <>
        
        <Main />
    </>
)

function Main(){
    return(
        <section className="allpage">
            <div className="input">
                <div className="first">
                    <input type="text" placeholder="Image Url input!"  />
                    <button>Upload</button>
                </div>
                <input type="text" placeholder="Screen direction input " />
            </div>
            <div className="image"><h1>Your scene will apper here !</h1></div>
            <div className="color">
                <div className="smallman"></div>
                <div className="smallman"></div>
                <div className="smallman"></div>
                <div className="smallman"></div>
                <div className="smallman"></div>
            </div>
        </section>
    )
}