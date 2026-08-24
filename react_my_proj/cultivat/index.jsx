

const {createRoot} = ReactDOM 
const dummy = document.getElementById('root')
const root = createRoot(dummy)
root.render(
    <>
        
        <Main />
    </>
)

function Main(){
    const [chars, setchars] = React.useState([])
    const [sear, setsear] = React.useState("")
    const [loading, setloading] = React.useState(true)
    React.useEffect(()=> {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => {
                setchars(data)
                setloading(false)
            })
            .catch(err => {
                console.log(err)
                setloading(false)
            })
    },[])
    const handlecultivate = (id) =>{
        const updated = chars.map((char)=>{
            if(char.id === id){
                return {...char, power: char.power + 1}
            }
            return char
        })
        setchars(updated)
    }
    if(loading){
        return <h2>Loading ....</h2>
    }
    return(
        <section className="mainpg">
            <h1>Sujith Cultivation Card System!</h1>
            <Searchcard sear={sear} setsear={setsear} />
            <div className="cards">
                {
                    chars
                    .filter(char => {
                        return char.name.toLowerCase().includes(sear.toLowerCase())
                    })
                    .map((char)=>(
                        <Charactercard 
                            key={char.id}
                            id={char.id}
                            name={char.name}
                            power={char.power}
                            oncultivate = {handlecultivate}
                        />
                    ))
                }
            </div>
            
        </section>
    )
}

function Searchcard({sear, setsear}){
return(
    <section className="search">
        <input type="text"
         placeholder="Search for your character !"
          
          value={sear}
          onChange={(e)=>setsear(e.target.value)}
          />
    </section>
)
}

function Charactercard({id,name, power, oncultivate}){
    let Rank;
    if (power < 30) Rank = "Soul Grandmaster";
    else if (power < 60) Rank = "Soul King";
    else if (power < 90) Rank = "Soul Douluo";
    else if (power < 95) Rank = "Titled Douluo";
    else if (power < 99) Rank = "Hyper Douluo";
    else if (power === 99) Rank = "Limit Douluo";
    else Rank = "Divine Officer / God";
return(
    <section className="character">
        <h1>Name : {name}</h1>
        <h3>Soul Power : {power}</h3>
        <h3>Rank : "{Rank}"</h3>
        <Cultivatebtn oncultivate ={()=> oncultivate(id)} />
    </section>
)
}

function Cultivatebtn({oncultivate}){
return(
    <section>
        <button onClick={oncultivate}>Cultivate</button>
    </section>
)
}