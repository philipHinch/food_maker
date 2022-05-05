//icon
import { Icon } from '@iconify/react';

const Form = ({ burger, setBurger, createBurgerUI }) => {

    // add ingredient to burger 
    const addIngredient = (ingredient) => {
        //set max amount of ingredients
        if (burger[ingredient] === 5) {
            return
        }
        let amount = burger[ingredient]
        let newBurger = {
            ...burger,
            [ingredient]: amount + 1
        }
        setBurger(newBurger)
    }
    //remove ingredient from burger
    const removeIngredient = (ingredient) => {
        //check if no ingredient
        if (burger[ingredient] === 0) {
            return
        }
        let amount = burger[ingredient]
        let newBurger = {
            ...burger,
            [ingredient]: amount - 1
        }
        setBurger(newBurger)
    }

    const handleReset = () => {
        setBurger({
            tomato: 0,
            lettuce: 0,
            cheese: 0,
            beef: 1,
            bacon: 0
        })
    }

    return (
        <div className="formContainer">
            <div className="tomatoForm">
                <p className="ingredient">tomato</p>
                <button className="button" id='tomato' onClick={(e) => removeIngredient(e.target.id)}>-</button><span className="number">{burger.tomato}</span><button className="button" id='tomato' onClick={(e) => addIngredient(e.target.id)}>+</button>
            </div>
            <div className="lettuceForm">
                <p className="ingredient">lettuce</p>
                <button className="button" id='lettuce' onClick={(e) => removeIngredient(e.target.id)}>-</button><span className="number">{burger.lettuce}</span><button className="button" id='lettuce' onClick={(e) => addIngredient(e.target.id)}>+</button>
            </div>
            <div className="cheeseForm">
                <p className="ingredient">cheese</p>
                <button className="button" id='cheese' onClick={(e) => removeIngredient(e.target.id)}>-</button><span className="number">{burger.cheese}</span><button className="button" id='cheese' onClick={(e) => addIngredient(e.target.id)}>+</button>
            </div>
            <div className="beefForm">
                <p className="ingredient">beef</p>
                <button className="button" id='beef' onClick={(e) => removeIngredient(e.target.id)}>-</button><span className="number">{burger.beef}</span><button className="button" id='beef' onClick={(e) => addIngredient(e.target.id)}>+</button>
            </div>
            <div className="baconForm">
                <p className="ingredient">bacon</p>
                <button className="button" id='bacon' onClick={(e) => removeIngredient(e.target.id)}>-</button><span className="number">{burger.bacon}</span><button className="button" id='bacon' onClick={(e) => addIngredient(e.target.id)}>+</button>
            </div>
            <button className="resetBtn" title='Reset Burger' onClick={handleReset}><Icon className='resetIcon' icon="bx:reset" />
            </button>
        </div>
    );
}

export default Form;