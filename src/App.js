import React from 'react';
import Input from './Components/Input';
import Hat from './Components/Hat';
import SchoolRoster from './Components/SchoolRoster';
import hat from './images/hat.jpg';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInitialSetup: true,
      personName: '',
      houseName: '',
      numberPerHouse: 0,
      hatHidden: true,
      hatClass: '',
      houses: [
        { name: "Gryffindor", students: [] },
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
    event.preventDefault();
    console.log(name);

    let randomNumber = 0;
    do {
      randomNumber = Math.floor(Math.random() * 4);
      console.log(randomNumber);
    }
    while (this.state.houses[randomNumber].students.length >= this.state.numberPerHouse)
    console.log(this.state.houses[randomNumber].students.length);
    let house = this.state.houses[randomNumber];
    house.students.push(name);
    this.playAudio();
    this.setState({
      personName: name,
      houseName: house.name,
      hatClass: "spinner"
    });
  }

  playAudio() {
    let audioNumber = Math.floor(Math.random() * 5) + 1;
    if (audioNumber === 1) {
      this.playSound('audio/ahright.wav');
    }
    else if (audioNumber === 2) {
      this.playSound('audio/difficult.wav');
    }
    else if (audioNumber === 3) {
      this.playSound('audio/itsallhere.wav');
    }
    else if (audioNumber === 4) {
      this.playSound('audio/rightok.wav');
    }
    else {
      this.playSound('audio/wheretoputyou.wav');
    }
  }

  playSound(fileName) {
    const audio = new Audio(fileName);
    audio.play();
    audio.addEventListener('ended', () => {
      this.setState({
        hatHidden: false
      })
      window.setTimeout(() => {
        let soundFile = 'audio/' + this.state.houseName.toLowerCase() + '.wav';
        let audio2 = new Audio(soundFile);
        audio2.play();
        audio2.addEventListener('ended', () => {
          this.setState({
            hatClass: "",
            personName: "",
            hatHidden: true
          });
        });
      }, 2000);
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Harry Potter Sorting Hat</h1>
        <Input onSubmit={this.handleNumberEntered} label={"Number of people to be sorted? "} hidden={!this.state.showInitialSetup} />
        <Input onSubmit={this.handleNameEntered} label={"Name? "} hidden={this.state.showInitialSetup} />
        <div id="stage" className={this.state.hatClass}>
          <img id="hat" src={hat} />
        </div>
        <Hat isHidden={this.state.hatHidden} personName={this.state.personName} houseName={this.state.houseName} />
        <SchoolRoster houses={this.state.houses} numberPerHouse={this.state.numberPerHouse} />
      </div>
    );
  }
}

export default App;
