import React from "react";
import Selector from "./Selector/Selector";
import "./App.css";

export default class App extends React.Component {
  state = {
    name: "",
    age: "",
    city: ""
  };

  fieldSubmitHandler = newEntries => {
    this.setState({
      name: newEntries
    });
  };

  render() {
    return (
      <div className="app">
        <p>Random React Stuff</p>
        <div className="info-area">
          <span>Name:{this.state.name}</span>
          <span>Age:{this.state.age}</span>
          <span>City:{this.state.city}</span>
        </div>
        <div>
          <Selector update={this.fieldSubmitHandler} />
        </div>
      </div>
    );
  }
}
