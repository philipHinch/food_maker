
const Form = () => {
    return (
        <form className="formContainer">
            <div className="tomatoForm">
                <p className="ingredient">tomato</p>
                <button className="button">-</button><span className="number">1</span><button className="button">+</button>
            </div>
            <div className="lettuceForm">
                <p className="ingredient">lettuce</p>
                <button className="button">-</button><span className="number">1</span><button className="button">+</button>
            </div>
            <div className="cheeseForm">
                <p className="ingredient">cheese</p>
                <button className="button">-</button><span className="number">1</span><button className="button">+</button>
            </div>
            <div className="beefForm">
                <p className="ingredient">beef</p>
                <button className="button">-</button><span className="number">1</span><button className="button">+</button>
            </div>
            <div className="baconForm">
                <p className="ingredient">bacon</p>
                <button className="button">-</button><span className="number">1</span><button className="button">+</button>
            </div>
        </form>
    );
}

export default Form;