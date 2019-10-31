import React from "react";
import Selector from "./Selector/Selector";
import Name from "./Name/Name";
import Age from "./Age/Age";
import City from "./City/City";
import "./App.css";

export default class App extends React.Component {
  state = {
    name: [],
    age: [],
    city: []
  };

  fieldSubmitHandler = (name, age, city) => {
    console.log(name);
    let currentName = this.state.name;
    let currentAge = this.state.age;
    let currentCity = this.state.city;
    currentName.push(name);
    currentAge.push(age);
    currentCity.push(city);
    this.setState({
      name: currentName,
      age: currentAge,
      city: currentCity
    });
  };

  render() {
    console.log(this.state);
    let name = this.state.name.map((name, id) => (
      <Name name={this.state.name} key={id} />
    ));
    let age = this.state.age.map(age => <Age age={this.state.age} />);
    let city = this.state.city.map(city => <City city={this.state.city} />);
    return (
      <div className="app">
        <p>Random React Stuff</p>
        <div className="info-area">
          <span>Name:{name}</span>
          <span>Age:{age}</span>
          <span>City:{city}</span>
        </div>
        <div>
          <Selector update={this.fieldSubmitHandler} />
        </div>
      </div>
    );
  }
}
