 /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */
    // const isGoingOut = true
    // isGoingOut === true ? "Yes" : "no"
    // const [isGoingOut, setisGoingOut] = React.useState(true)
    // function change(){
    //     setisGoingOut((prev)=> !prev)
    // }



    































function Ternary() {
   const [Light, setLight] = React.useState([])
    function clicj(){
        setLight(()=> Light = Light +1)
    }
    return (
        <main>
            <h1 className="title">Click on to turn on the light</h1>
            <button className="value" onClick={clicj}>{setLight}</button>
        </main>
    )
}
window.Ternary = Ternary