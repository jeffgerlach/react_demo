import React from "react";
import classes from "./Cat.css";

const cat = props => {
  return (
    <div className={classes.Cat}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default cat;