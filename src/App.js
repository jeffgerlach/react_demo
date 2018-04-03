import React, { Component } from "react";
import classes from "./App.css";
import Cat from "./Cat/Cat";

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
    let cats = null;
    let btnClass = "";

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
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.cats.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.cats.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React app!</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        {/*  arrow function can be inefficient */}
        <button className={btnClass} onClick={this.toggleCatsHandler}>
          Show Names
        </button>
        {cats}
      </div>
    );
  }
}

export default App;
