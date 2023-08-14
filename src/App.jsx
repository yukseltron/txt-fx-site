import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextFX from 'txt-fx'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
	const element1 = document.querySelector('#headline');
const element2 = document.querySelector('#headline2');
const element3 = document.querySelector('#headline3');

const fx1 = new TextFX.Scrambler();
const fx2 = new TextFX.Randomizer();
const fx3 = new TextFX.Redacter();



// fx1.scramble(element1, 100, 10, true);
// fx2.randomize(element2, 200, 10, true);
// fx3.censor(element3, 100, "█", true);
fx1.scramble(element1);
fx2.randomize(element2);
fx3.censor(element3, 100, false, ['*', '%']);
	}, []);

  return (
    <>
  <div id="container">
    <div>
      <p>Scramble</p>
      <h1 id="headline">HELLO WORLD</h1>
    </div>
    <div>
      <p>Randomize</p>
      <h1 id="headline2">A..BRAVE__NEW___WORLD</h1>
    </div>
    <div>
      <p>Censor</p>
      <h1 id="headline3">EVENING SUN NEVER STOPS TO IMPOSE ON YOU MY LOVE</h1>
    </div>
  </div>
    </>
  )
}

export default App
