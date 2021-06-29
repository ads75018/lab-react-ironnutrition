import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Button from './components/Button'

class App extends React.Component {

  state = {
    FieldsDisplay: false,
  };


  render() {
    return (
      <div className="App">
        {foods.map((food, i) => {
          const id = JSON.stringify(food);
          console.log(id);
          return <FoodBox key={id} food={foods[i]} />;
        })}
        <Button />
      </div>
    );

  }


}



// function App() {
//   return (
//     <div className="App">
//       {foods.map((food, i) => {
//         const id = JSON.stringify(food);
//         console.log(id);
//         return <FoodBox key={id} food={foods[i]} />;
//       })}
//       <Button />
//     </div>
//   );
// }

export default App;
