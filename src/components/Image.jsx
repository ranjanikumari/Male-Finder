import React from 'react';
import "./image.css";

function Image(props) {
  return (
    <div className="itm">
      <img className='img' src={props.ele.strMealThumb} alt="" />
      <div className="flex-container">
        <h1 className="title">{props.ele.strMeal}</h1>
        <a className="view-btn" href={props.ele.strSource} target="_blank">
          View Recipe
        </a>
      </div>
    </div>
  );
}

export default Image;