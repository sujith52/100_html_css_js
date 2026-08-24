import React from "react";
import './style.css'
import reacts from './assets/react.svg'
function Util(){
    return(
        <div>
            <div className="nav">
            <img src={reacts} alt="" srcset="" className="imgs" />
            <h1>React facts:</h1>
            </div>
            <div className="main">
                <h1>Fun Facts on React !</h1>
                <ul>
                    <li>React is founded in 2014.</li>
                    <li>it was great freame work for webs to focus on.</li>
                    <li>Learning react makes you to look like a god.</li>
                    <li>It has 200K stars in Github</li>
                    <li>It is maintained by Meta</li>
                </ul>
            </div>
        </div>
    )
    
}

export default Util