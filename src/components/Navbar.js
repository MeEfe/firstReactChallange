import React from "react";
import Logo from "../images/react_logo.png"
import "../style.css"


export default function Navbar(){
    return(
        <nav className="container-1">
            <img src={Logo} alt="Logo" className="img" />
            <h1 className="nav-titel">ReactFacts</h1>
            <p className="nav-titel-2">React Course - Projekt 1</p>
        </nav>
    )
}