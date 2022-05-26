import React from 'react';
import { Joystick } from 'react-joystick-component';
let PrevRoll = 350
export default function RollJoyStick(props) {
  const mapValRoll = (input) => { 
    let output = 330 + ((370 - 330) / (400 - 300)) * (input - 300);
    return output
  }
  const handleMove = (event) => {
    let Roll = Math.round(event.x) + 350
    Roll =  Math.round(mapValRoll(Roll))
    if (PrevRoll === Roll) {
      return
    }
    let rand = (Math.random() * 10);
    if (rand > 8) {
        console.log("Roll:", Roll)
      fetch(`http://192.168.4.1/?${Roll}`, {
        mode: 'no-cors',
      })
      .then(() => PrevRoll === Roll)
    }
  }

  const handleStop = (event) => {
    fetch(`http://192.168.4.1/?350`, {
      mode: 'no-cors',
    })
    .then(() => {
        if (PrevRoll !== 350)
            handleStop(event)
        PrevRoll = 350
    })
  }

  return (
    <div>
        <h1>Roll</h1>
        <Joystick size={90} baseShape="triangle" stickShape="triangle" baseColor="green" stickColor="darkGreen" move={handleMove} stop={handleStop}  ></Joystick>
    </div>
  );
}