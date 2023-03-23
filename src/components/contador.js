import React from "react";
import '../styles/contador.css';

function Contador({ numClicks }) {
    return (
        <div className='counter'>
            {numClicks}
        </div>
    );
};

export default Contador;