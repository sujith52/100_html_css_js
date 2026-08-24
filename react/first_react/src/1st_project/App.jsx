import React from "react";
import './App.css'
import image from './components/logo.png'


export default function project1(){
    return(
        <>
        <header className="head">
            <img src={image} alt="react image " className="image" />
            <h1 className="facts">Facts</h1>
        </header>
        <div className="body">
            <h1>Fun Facts on React :</h1>
            <ul className="list">
                <li>Was first realeased in 2013.</li>
                <li>Was originally created by the john</li>
                <li>It has 200K stars in github</li>
                <li>It was maintained by meta.</li>
                <li>React is a livelihood for most of the people in development.</li>
            </ul>
        </div>
        </>
    )
}