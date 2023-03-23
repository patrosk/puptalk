import React from 'react';
import pupsArray from './PupperImages.js';
import placeholder from './placeholderpuppy.jpg';

const randomNumber = Math.floor(Math.random() * pupsArray.length);
const randomPuppy = pupsArray[randomNumber];

export default function ImgWrapper() {

    return (
        <div className="img-wrapper">
            {randomPuppy ? 
            <img className="pup-img" src={randomPuppy} alt="puppy"></img>
            :
            <img className="pup-img" src={placeholder} alt="puppy"></img>
            }
        </div>
    )
}