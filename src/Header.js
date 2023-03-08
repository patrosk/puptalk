import React from 'react';
import img from './img/love.png';

export default function Header() {
    return(
    <header>
        <img className="logo" src={img} alt="Puptalk logo"></img>
        <h1>Puptalk</h1>
    </header>
    )
}
