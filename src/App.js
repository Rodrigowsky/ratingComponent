import "./App.css";
import Circle from "./components/Circle";
import Button from "./components/Button";
import { useState } from 'react';
import Rating from "./components/Rating"

function App() {

  const [count, setCount] = useState(0);
  const [complete, setComplete] = useState(false);
  
  const changeSelection = (newState) => {
    setCount(newState);
  }

  const proccessRequest = () => {
    if (count !== 0) {
      setComplete(true)
    }
  }

  return (
    <div className="App">

      {complete ? 
      <div className="final_menu">
          <img src={`${process.env.PUBLIC_URL}/assets/images/illustration-thank-you.svg`} alt="certificate" />
          <Rating rating={count} />
          <h5 className="final_menu_title">Thank you!</h5>
          <p className="final_menu_subtitle">We appreciate you taking the time to give a rating</p>
          <p className="final_menu_subtitle">If you ever need more support, don't hesitate to get in touch!</p>
      </div>
        
        :
        <>
          <Circle imgSource={`${process.env.PUBLIC_URL}/assets/images/icon-star.svg`} />
      <h1 className="titleText">How did we do?</h1>
      <p className="subtitleText">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className="number_container">
      <Circle numberLabel="1" selectThis={() => changeSelection(1)} count={count}/>
      <Circle numberLabel="2" selectThis={() => changeSelection(2)}  count={count}/>
      <Circle numberLabel="3" selectThis={() => changeSelection(3)} count={count}/>
      <Circle numberLabel="4" selectThis={() => changeSelection(4)} count={count}/>
      <Circle numberLabel="5" selectThis={() => changeSelection(5)} count={count}/>
      </div>
      
          <Button onSubmit={() => proccessRequest()} textLabel="SUBMIT" />
        
        </>}

      
    </div>
  );
}

export default App;
