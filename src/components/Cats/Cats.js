import React, { Component } from "react";
import Cat from "./Cat/Cat";

class Cats extends Component {
  render() {
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
