import React, { PureComponent } from "react";
import Cat from "./Cat/Cat";

class Cats extends PureComponent {
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

  componentWillReceiveProps(nextProps) {
    console.log("[UPDATE Cats.js] inside componentWillReceiveProps", nextProps);
  }

  // built into PureComponent:
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[UPDATE Cats.js] inside shouldComponentUpdate",
  //     nextProps,
  //     nextState
  //   );
  //   return nextProps.cats !== this.props.cats ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Cats.js] inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("[UPDATE Cats.js] inside componentDidUpdate()");
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
