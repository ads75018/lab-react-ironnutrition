import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  return (
    <div className="App">
      {foods.map((food, i) => {
        const id = JSON.stringify(food);
        console.log(id);
        return <FoodBox key={id} food={foods[i]} />;
      })}
    </div>
  );
}

export default App;
