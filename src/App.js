//css
import './App.css';
// components
import TopBun from './components/TopBun';
import BottomBun from './components/BottomBun'
import Lettuce from './components/Lettuce'
import Cheese from './components/Cheese'
import Beef from './components/Beef'
import Tomato from './components/Tomato'
import Bacon from './components/Bacon'
import Form from './Form';
//hooks
import { useEffect, useState } from 'react';
//uuid
import { v4 as uuidv4 } from 'uuid';

function App() {

  // const [tomato, setTomato] = useState([])
  // const [lettuce, setLettuce] = useState([])
  // const [cheese, setCheese] = useState([])
  // const [beef, setBeef] = useState([])
  // const [bacon, setBacon] = useState([])

  const [burger, setBurger] = useState({
    tomato: 0,
    lettuce: 0,
    cheese: 0,
    beef: 1,
    bacon: 0
  })

  const { tomato, lettuce, cheese, beef, bacon } = burger

  const createBurgerUI = () => {
    let newBurger = []
    //handles amount of tomato
    for (let i = 0; i < tomato; i++) {
      newBurger.push(
        <Tomato key={uuidv4()} />
      )
    }
    //handles amount of lettuce
    for (let i = 0; i < lettuce; i++) {
      newBurger.push(
        <Lettuce key={uuidv4()} />
      )
    }
    //handles amount of cheese
    for (let i = 0; i < cheese; i++) {
      newBurger.push(
        <Cheese key={uuidv4()} />
      )
    }
    //handles amount of beef
    for (let i = 0; i < beef; i++) {
      newBurger.push(
        <Beef key={uuidv4()} />
      )
    }
    //handles amount of bacon
    for (let i = 0; i < bacon; i++) {
      newBurger.push(
        <Bacon key={uuidv4()} />
      )
    }
    return newBurger
  }

  return (
    <div className="App">
      <h1 className='pageTitle'>burger maker</h1>
      <Form burger={burger} setBurger={setBurger} createBurgerUI={createBurgerUI} />
      <div className="foodContainer">
        <div id="burst-8">
        </div>
        <TopBun />
        {createBurgerUI()}
        <BottomBun />
      </div>
      <h2 className='pageSubTitle'>enjoy your meal</h2>
      <footer>
        <small><a href="https://www.vecteezy.com/free-vector/burger-icon">Burger Icon Vectors by Vecteezy</a></small>
        <p>&copy; 2022<a href="https://github.com/philipHinch" target='_blank'>https://github.com/philipHinch</a></p>
      </footer>
    </div>
  );
}

export default App;
