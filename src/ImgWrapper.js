import React from 'react';
import pupsArray from './PupperImages';

const randomNumber = Math.floor(Math.random() * 23);
const randomPuppy = pupsArray[randomNumber];

export default function ImgWrapper() {

    return (
        <div className="img-wrapper">
            <img className="pup-img" src={randomPuppy} alt="puppy"></img>
        </div>
    )
}