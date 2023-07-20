import React from "react"
import "./Footer1.css"
import whatsapp from './imgs/whatsapp.png'
import instagram from './imgs/instagram.png'
export default function Footer1(){
    
    return(
        <div>   
            <marquee direction="up" >
                <div class="footer">
                <a href="https://contate.me/contato-gm"> <img src={whatsapp} alt="whatsapp-logo"></img></a>
                <a href="https://www.instagram.com/gabrielmarks19/"><img className="instagramm" src={instagram} alt="instagram-logo"></img></a>
                </div> 
            </marquee>
        </div>
    )
}
