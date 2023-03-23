import React from "react";
import '../styles/boton.css';

function Boton({text, isClickButton, handleClick}) {
    return (
        <button 
            className={isClickButton ? 'click-button' : 'reset-button'}
            onClick={handleClick}>
            {text}
        </button>
    )
};

export default Boton;