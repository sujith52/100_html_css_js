function Header(){
    return(
        <section className="header">
            <div className="main">
                <img className="imgheader" src="https://play-lh.googleusercontent.com/vt2wc4prQf722DV4jqkY6C-D1oDnmXVIoXusprEATlBIn3Pul0eSqcDJLoR0VODrgw" alt="task_logo"  />
                <h1><span style={{color: 'darkblue', marginLeft: '20px'}}>Task</span> <span style={{color: "orange"}}>Visualizer</span></h1>
            </div>
            <div className="listcompo">
                <a href="">Home</a>
                <a href="">Task List</a>
                <a href="">End Tasks</a>
            </div>
        </section>
        
    )
}

window.Header = Header