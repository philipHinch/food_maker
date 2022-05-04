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

function App() {
  return (
    <div className="App">
      <h1 className='pageTitle'>burger maker</h1>
      <Form />
      <div className="foodContainer">
        <TopBun />
        <Tomato />
        <Lettuce />
        <Cheese />
        <Beef />
        <Cheese />
        <Beef />
        <Bacon />
        <BottomBun />
      </div>
      <h2 className='pageSubTitle'>enjoy your meal</h2>
    </div>
  );
}

export default App;
