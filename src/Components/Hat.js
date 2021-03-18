import React from 'react';

class Hat extends React.Component {
    constructor(props) {
        super(props);
        playSound = (sound1, houseName, personName, houseNumber, houses) => {
            let audio1 = new Audio(sound1);
            audio1.play();
            audio1.addEventListener('ended', function () {
                window.setTimeout(function () {
                    showHouse(houseName, nameInput, houseNumber, houseArray);
                    let soundFile = 'audio/' + houseName.toLowerCase() + '.wav';
                    let audio2 = new Audio(soundFile);
                    audio2.play();
                    audio2.addEventListener('ended', function () {
                        this.setState({
                            // document.getElementById('nameEntered').disabled = false;
                            hatClass: "stage"
                        });
                    }, 1000);
                });


            }
            playAudio = (houseName, nameInput, houseNumber, houseArray) => {
                    audioNumber = Math.floor(Math.random() * 5) + 1;
                    if (audioNumber === 1) {
                        playSound('audio/ahright.wav', houseName, nameInput, houseNumber, houseArray);
                    }
                    else if (audioNumber === 2) {
                        playSound('audio/difficult.wav', houseName, nameInput, houseNumber, houseArray);
                    }
                    else if (audioNumber === 3) {
                        playSound('audio/itsallhere.wav', houseName, nameInput, houseNumber, houseArray);
                    }
                    else if (audioNumber === 4) {
                        playSound('audio/rightok.wav', houseName, nameInput, houseNumber, houseArray);
                    }
                    else {
                        playSound('audio/wheretoputyou.wav', houseName, nameInput, houseNumber, houseArray);
                    }
                }
    }

        render() {
            return <p className={this.props.personName.length === 0 ? "hidden1" : "fadeText"
            } >
                {this.props.personName + " you are in " + this.props.houseName}</p >
        }
    }

    export default Hat;