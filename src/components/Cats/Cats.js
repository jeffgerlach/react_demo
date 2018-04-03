import React from "react";
import Cat from "./Cat/Cat";

const cats = props =>
  props.cats.map((cat, index) => {
    return (
      <Cat
        key={cat.id}
        click={() => props.clicked(index)}
        name={cat.name}
        age={cat.age}
        changed={event => props.changed(event, cat.id)}
      />
    );
  });

export default cats;
