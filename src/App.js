import React from 'react';
import './App.css';
import Input from './Components/Input'

class App extends React.Component {
  handleNumberEntered = (event, value) => {
    event.preventDefault();
    console.log(value);
    if (!Number(value)) {
      alert("Please enter a number");
    }
    let numberPerHouse = value / 4;
    console.log(numberPerHouse);
  }
  handleNameEntered = (event, name) => {
    event.preventDefault();
    console.log(name);
  }
  render() {
    return (
      <div className="app">
        <h1>Harry Potter Sorting Hat</h1>
        <Input onSubmit={this.handleNumberEntered} />
        <Input onSubmitName={this.handleNameEntered} />
      </div>
    );
  }
}

export default App;
