import React from "react";
import "./Selector.css";

export default class Selector extends React.Component {
  state = {
    updatedName: "",
    updatedAge: "",
    updatedCity: ""
  };

  updateSubmitHandler = e => {
    e.preventDefault();
    const { updatedName, updatedAge, updatedCity } = this.state;
    this.props.update(updatedName, updatedAge, updatedCity);
    this.setState({
      updatedName: "",
      updatedAge: "",
      updatedCity: ""
    });
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
          <input
            value={this.state.updatedName}
            type="text"
            onChange={this.nameChangeHandler}
          />
          <br />
          <label>Update Age</label>
          <input
            value={this.state.updatedAge}
            type="number"
            onChange={this.ageChangeHandler}
          />
          <br />
          <label>Update City</label>
          <input
            value={this.state.updatedCity}
            type="text"
            onChange={this.cityChangeHandler}
          />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
