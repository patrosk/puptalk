import React from 'react';

export default function Button() {

    return(
        <button id="refresh-btn" type="button" onClick={(() => {window.location.reload()})}>
            Give me a puptalk!
        </button>
    )
}