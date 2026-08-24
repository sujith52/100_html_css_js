window.Header = Header;
const { createRoot, useState } = ReactDOM;
const MyHeader = window.Header; 
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <MyHeader />
        <Bookform />
    </React.StrictMode>
);



function Header() {
    return (
        <section className="header">
            <h1>Sujith's Immortal Diary</h1>
        </section>
    );
}

function Bookform (){
    const [book, setbook] = React.useState([])
    const [inpt1, setinpt1] = React.useState("")
    const [inpt2, setinpt2] = React.useState("")
    function handle(){
        if(inpt1 == "" || inpt2 == ""){
            alert("This is wrong man !")
            return
        }
        setbook((prev) => [...prev,{title : inpt1, genere : inpt2}])
        console.log(book);
        setinpt1("")
        setinpt2("")
    }

    return(
        <section className="bookform">
            <h1>Book Title Name : <input type="text" className="inpt" id="title" placeholder="Enter the Title man !" value={inpt1} onChange={(e)=> setinpt1(e.target.value)} /></h1>
            <h1>Book Genere  : <input type="text" className="inpt" placeholder="Enter the genere man !" value={inpt2} onChange={(e)=> setinpt2(e.target.value)} /></h1>
            <button type="submit" className="add" onClick={handle} >Add</button>
            <div className="collection">
                <h2>My collection :</h2>
                <ul>
                    {
                        book.map((item, index)=>(
                            <li key={index}>
                                <strong>{item.title}</strong> - <em>{item.genere}</em>
                            </li>
                        ))
                        
                    }
                </ul>
            </div>
        </section>
    )
}