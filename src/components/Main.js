import React from "react";
import "../style.css"
import backgroundLogo from "../images/backgroundLogo.png"

export default function Main(){
    return(
        <div className="container-2">
            <h1 className="class-titel">Fun facts about React</h1>
            <ul className="unorder_list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li> 
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <div id="background-Logo">
                <img src={backgroundLogo} alt="Logo" className="img-2" />
            </div>
        </div>
    )
}