import React from 'react';
import img from './love.png';

export default function Header() {
    return(
    <header>
        <div className="banner">
        <img className="logo" src={img} alt="Pup talk logo"></img>
        <h1>Pup talk</h1>
        </div>
        <h2>• having a ruff day? let these cute puppers give you a pup talk •</h2>
    </header>
    )
}
