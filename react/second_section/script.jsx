// import React from "react";
// import {CreateRoot} from  'react/client'

const {createRoot} = ReactDOM
const root = createRoot(document.getElementById('root'))
root.render(
    <>
        
        <div className="header">
            <img src="globe.png" alt="" srcset="" className="globe" />
            <h1>My Journal</h1>
        </div>
    </>
)