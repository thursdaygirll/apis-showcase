import React, { useState } from 'react';
import MarsWeather from './components/MarsWeather';
import RandomMeal from './components/RandomMeal';
import YodaTranslator from './components/YodaTranslator';
import './style.css';

const App = () => {
  const [component, setComponent] = useState('home');

  return (
    <div className="App">
      <header>
        <h1>API Component Page</h1>
        <nav>
          <button onClick={() => setComponent('marsWeather')}>Mars Weather</button>
          <button onClick={() => setComponent('randomMeal')}>Random Meal</button>
          <button onClick={() => setComponent('yodaTranslator')}>Yoda Translator</button>
        </nav>
      </header>

      <main>
        {component === 'marsWeather' && <MarsWeather />}
        {component === 'randomMeal' && <RandomMeal />}
        {component === 'yodaTranslator' && <YodaTranslator />}
      </main>
    </div>
  );
};

export default App;
