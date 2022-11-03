import React from "react"
import TrollImage from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={TrollImage}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">built for fun</h4>
        </header>
    )
}