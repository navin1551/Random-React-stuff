import React from "react";
import "./Selector.css";

export default class Selector extends React.Component {
  state = {
    updatedName: "",
    updatedAge: "",
    updatedCity: ""
  };

  updateSubmitHandler = e => {
    e.prevent.default();
    let { updatedName, updatedAge, updatedCity } = this.state;
    let newEntries = { updatedName, updatedAge, updatedCity };
    this.props.update(newEntries);
  };

  nameChangeHandler = e => {
    this.setState({
      updatedName: e.target.value
    });
  };

  ageChangeHandler = e => {
    this.setState({
      updatedAge: e.target.value
    });
  };

  cityChangeHandler = e => {
    this.setState({
      updatedCity: e.target.value
    });
  };

  render() {
    return (
      <div className="form-area">
        <form onSubmit={this.updateSubmitHandler}>
          <label>Update Name</label>
          <input type="text" onChange={this.nameChangeHandler} />
          <br />
          <label>Update Age</label>
          <input type="number" onChange={this.ageChangeHandler} />
          <br />
          <label>Update City</label>
          <input type="text" onChange={this.cityChangeHandler} />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}