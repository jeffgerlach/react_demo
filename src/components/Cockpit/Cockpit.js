import React from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = "";
  if (props.showCats) {
    btnClass = classes.Red;
  }

  if (props.cats.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.cats.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      {/*  arrow function can be inefficient */}
      <button className={btnClass} onClick={props.clicked}>
        Show Names
      </button>
    </div>
  );
};

export default cockpit;
