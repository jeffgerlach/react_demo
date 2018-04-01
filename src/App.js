import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";

class App extends Component {
  state = {
    cats: [{ name: "Sox", age: 10 }, { name: "Babby", age: 1 }],
    otherState: "some other value",
    showPersons: false
  };

  switchNameHandler = newName => {
    // console.log('Was clicked!');
    this.setState({
      cats: [{ name: newName, age: 10 }, { name: "Babby", age: 1.5 }]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      cats: [{ name: "Sox", age: 10 }, { name: event.target.value, age: 1 }]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    const persons = (
      <div>
          <Person
            name={this.state.cats[0].name}
            age={this.state.cats[0].age}
            click={this.switchNameHandler.bind(this, "Sox!")}
          >
            My Hobbies: Eating
          </Person>
          <Person
            name={this.state.cats[1].name}
            age={this.state.cats[1].age}
            changed={this.nameChangedHandler}
          />
        </div>
    );

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is really working!</p>
        {/*  arrow function can be inefficient */}
        <button style={style} onClick={this.togglePersonsHandler}>
          Show Names
        </button>
        { this.state.showPersons && persons }
      </div>
    );
  }
}

export default App;
