

const {createRoot,useState} = ReactDOM 
const mainroot = document.getElementById('root')
const root = createRoot(mainroot)
root.render(
    <>
        <h1 >Form action form practice</h1>
        <Messg />
       
    </>
)

function Messg(){
    const [msg, setmsg] = React.useState(['a','b','c'])
    return(
        <>
           {msg.length === 0 ?  <h1>you have zero messages</h1> : null}
            {msg.length === 1 ?  <h1>you have 1 message</h1> : null}
           {msg.length >= 2 ?  <h1>you have {msg.length} messages</h1> : null}
        </>
    )
}


function Messages(){
    const [messg,  setmessg] = React.useState([])
    return(
        <>
           {
            messg.length > 0 &&
            <h1>You have this messages {messg.length}</h1>
            }
            {
                messg.length === 0 &&
                <p>You have {messg.length} messages mans</p>
            }
        </>
    )
}







function Toggle(){
    const [ison, setison] = React.useState(false)
    return(
        <>
            <button onClick={()=> setison(!ison)}>{ison ? "ON": "OFF"}</button>
        </>
    )
}









function Add(){
    const [count, setcount] = React.useState(0)
    console.log(count);
    
    return(
        <>
            <h1>{count}</h1>
            <button onClick={() => setcount(count + 1)}>Add this man</button>
        </>
    )
}




function Main(){
    const [isshown, setisshown] = React.useState(false)
    function logic(){

    }
    console.log(setisshown);
    return(
        <>
            <br /><hr /><br />
            <h1>Isthis main was working good man!!</h1><br />
            <h1>You are a good man {isshown} </h1>
            
            
        </>
    )
}