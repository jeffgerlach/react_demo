import React, { Component } from "react";
import classes from "./Cat.css";

class Cat extends Component {
  constructor(props) {
    super(props);
    console.log("[Cat.js] inside constructor", props);
  }

  componentWillMount() {
    console.log("[Cat.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Cat.js] inside componentDidMount()");
  }

  render() {
    console.log("[Cat.js] inside render()");
    return (
      <div className={classes.Cat}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Cat;
