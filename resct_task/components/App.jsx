

function App(){
    const [values, setvalue] = React.useState('')
    const [list , setlist] = React.useState(['hell','man'])
    
    function pushed(event){
        setvalue(event.target.value)
    }

    const push = ()=>{
        setlist([...list, values])
        setvalue('')
    }
    function remove(iddelete){
        const updatedlist = list.filter(item => item.id !== iddelete)
        setlist(updatedlist)
    }
    return(
        <div className="todo">
            <div className="box">
                <input type="text"
                        value={values}
                        className="inputbox"
                        onChange={pushed} />
                <button onClick={push}>
                    Add
                </button>
            </div>
            <div>
                {list.map((item, index)=> (
                    <h1 key={index}>{item}<button onClick={remove}>delete</button></h1>
                ))}
            </div>
        </div>
    )
}