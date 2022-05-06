const Circle = ({ numberLabel, imgSource, selectThis, count }) => {
  let circleStyle = {};

  if (count == numberLabel) {
    circleStyle = {
      "background-color": "hsl(25, 97%, 53%)",
      "color": "white"
    };
  }

  return (
    <div>
      {numberLabel ? (
        <div className="circleContainer" style={circleStyle}>
        <p   onClick={selectThis}>
          {numberLabel}
          </p>
          </div>
      ) : (
        <></>
      )}
      
        {imgSource ? <div className="starContainer"> <img className="circle_star" alt="star_symbol2" src={imgSource} /> 
      </div> : <></>}
    </div>
  );
}

export default Circle;
