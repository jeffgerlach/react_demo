import React from "react";
import "./Cat.css";
import Radium from "radium";

const cat = props => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };
  
  return (
    <div className="Cat" style={style}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(cat);
