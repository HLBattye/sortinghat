import React from 'react';
import './App.css';
import Input from './Components/Input';
import SchoolRoster from './Components/SchoolRoster';
import hat from './images/hat.jpg';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInitialSetup: true,
      personName: '',
      houseName: '',
      numberPerHouse: 0,
      houses: [
        { name: "Griffindor", students: [] },
        { name: "Ravenclaw", students: [] },
        { name: "Slytherin", students: [] },
        { name: "Hufflepuff", students: [] },
      ]
    };
  }

  handleNumberEntered = (event, value) => {
    event.preventDefault();

    console.log(value);
    if (!Number(value)) {
      alert("Please enter a number");
    }
    let numberPerHouse = Math.ceil(value / 4);
    console.log(numberPerHouse);
    this.setState({
      showInitialSetup: false,
      numberPerHouse: numberPerHouse
    });
  }

  handleNameEntered = (event, name) => {
    <Button variant="primary" disabled>
      Primary button
  </Button>
    event.preventDefault();
    console.log(name);
    let randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);

    let house = this.state.houses[randomNumber];
    house.students.push(name);
    this.setState({
      personName: name,
      houseName: house.name,
    });
  }
  render() {
    return (
      <div className="app">
        <h1>Harry Potter Sorting Hat</h1>
        <Input onSubmit={this.handleNumberEntered} label={"Number of people to be sorted?"} hidden={!this.state.showInitialSetup} />
        <Input onSubmit={this.handleNameEntered} label={"Name?"} hidden={this.state.showInitialSetup} />
        <div id="stage">
          <img id="hat" src={hat} />
        </div>
        <p> {this.state.personName + " you are in " + this.state.houseName}</p>
        <SchoolRoster students={this.state.students} students1={this.state.students1} houses={this.state.houses} numberPerHouse={this.state.numberPerHouse} />
      </div>
    );
  }
}

export default App;
