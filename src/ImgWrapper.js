import React from 'react';
import pupsArray from './PupperImages.js';

const randomNumber = Math.floor(Math.random() * pupsArray.length);
const randomPuppy = pupsArray[randomNumber];

export default function ImgWrapper() {

    return (
        <div className="img-wrapper">
            <img className="pup-img" src={randomPuppy} alt="puppy"></img>
        </div>
    )
}