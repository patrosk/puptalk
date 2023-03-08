import React from 'react';
import img from './img/love.png';

export default function Header() {
    return(
    <header>
        <div className="banner">
        <img className="logo" src={img} alt="Puptalk logo"></img>
        <h1>Puptalk</h1>
        </div>
        <h2>• having a ruff day? let these cute puppers give you a pup talk •</h2>
    </header>
    )
}
