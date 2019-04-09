import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  idCounter = () => {
    let id = 0;
    return function() {
      return id++;
    };
  };

  addSmurf = e => {
    e.preventDefault();
    // add code to create the smurf using the api

    this.props.addSmurf(
      e,
      {
        age: this.state.age,
        height: `${this.state.height + 'cm'}`,
        name: this.state.name,
        id: this.idCounter()()
      }
    )
  }

  handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
