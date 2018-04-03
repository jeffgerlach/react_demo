import React, { Component } from "react";
import classes from "./App.css";
import Cockpit from "../components/Cockpit/Cockpit";
import Cats from "../components/Cats/Cats";

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

    if (this.state.showCats) {
      cats = (
        <Cats
          cats={this.state.cats}
          clicked={this.deleteCatHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          cats={this.state.cats}
          showCats={this.state.showCats}
          clicked={this.toggleCatsHandler}
        />
        {cats}
      </div>
    );
  }
}

export default App;
