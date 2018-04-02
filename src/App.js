import React, { Component } from "react";
import "./App.css";
import Cat from "./Cat/Cat";
import Radium, { StyleRoot } from "radium";

class App extends Component {
  state = {
    cats: [{ id: 0, name: "Sox", age: 10 }, { id: 1, name: "Babby", age: 1 }],
    otherState: "some other value",
    showCats: false
  };

  nameChangedHandler = (event, id) => {
    const catIndex = this.state.cats.findIndex(p => {
      return p.id === id;
    });
    const cat = {
      ...this.state.cats[catIndex]
    };
    cat.name = event.target.value;
    const cats = [...this.state.cats];
    cats[catIndex] = cat;

    this.setState({ cats });
  };

  deleteCatHandler = catIndex => {
    // const cats = this.state.cats.slice();
    const cats = [...this.state.cats];
    cats.splice(catIndex, 1);
    this.setState({ cats });
  };

  toggleCatsHandler = () => {
    const doesShow = this.state.showCats;
    this.setState({ showCats: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };
    let cats = null;
    if (this.state.showCats) {
      cats = (
        <div>
          {this.state.cats.map((cat, index) => {
            return (
              <Cat
                key={cat.id}
                click={() => this.deleteCatHandler(index)}
                name={cat.name}
                age={cat.age}
                changed={event => this.nameChangedHandler(event, cat.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }

    const classes = [];
    if (this.state.cats.length <= 2) {
      classes.push("red");
    }
    if (this.state.cats.length <= 1) {
      classes.push("bold");
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React app!</h1>
          <p className={classes.join(" ")}>This is really working!</p>
          {/*  arrow function can be inefficient */}
          <button style={style} onClick={this.toggleCatsHandler}>
            Show Names
          </button>
          {cats}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
