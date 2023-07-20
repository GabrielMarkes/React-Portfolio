import React from "react"
import "./Footer2.css"
import Logo from "./imgs/logo192.png"
export default function Footer2(){
    return(
        <div id="contact" className="footer">
            <div className="logop">
            <img src={Logo} className="rotate-image" alt="react-img"></img>
            <p>100% Built with ReactJS</p>
            </div>
        </div>
    )
}