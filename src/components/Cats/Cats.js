import React, { Component } from "react";
import Cat from "./Cat/Cat";

class Cats extends Component {
  constructor(props) {
    super(props);
    console.log("[Cats.js] inside constructor", props);
  }

  componentWillMount() {
    console.log("[Cats.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Cats.js] inside componentDidMount()");
  }

  render() {
    console.log("[Cats.js] inside render()");
    return this.props.cats.map((cat, index) => {
      return (
        <Cat
          key={cat.id}
          click={() => this.props.clicked(index)}
          name={cat.name}
          age={cat.age}
          changed={event => this.props.changed(event, cat.id)}
        />
      );
    });
  }
}

export default Cats;
