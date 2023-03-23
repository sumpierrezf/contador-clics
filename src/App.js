import './App.css';
import Boton from './components/boton';
import Contador from './components/contador';
import clicksCounter from './images/hand-finger-click.png';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const addClick = () => {
    setNumClicks(numClicks + 1);
  };

  const resetCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='container-title'>
        <h2>Mi contador de clics</h2>
      </div>
      <div className='container-image'>
        <img className='hand'
        src={clicksCounter}
        alt='Imágen de una manito haciendo clic'/>
      </div>
      <div className='container-counter'>
        <Contador numClicks={numClicks}/>
        <Boton 
          text='Clic' 
          isClickButton={true}
          handleClick={addClick}/>
        <Boton
          text='Resetear'
          isClickButton={false}
          handleClick={resetCounter}/>
      </div>
    </div>
  );
}

export default App;
