import React from 'react';
import { Joystick } from 'react-joystick-component';
let PrevThrottle = 550;

export default function ThrottlelJoyStick(props) {
  // const mapValThrottle = (input) => { 
  //   let output = 520 + ((590 - 520) / (595 - 505)) * (input - 505);
  //   return output
  // }
  
  const handleMove = (event) => {
    let Throttle = Math.round(event.y) + 550
    // Throttle = Math.round(mapValThrottle(Throttle))
    if (PrevThrottle === Throttle) {
      return;
    }
    let rand = (Math.random() * 10);
    if (rand > 8) {
      console.log("Throttle:",Throttle)
      if(Throttle > 550){
        fetch(`http://192.168.4.1/?u`, {
        mode: 'no-cors',
      })
        .then(() => PrevThrottle === Throttle)
      console.log(Throttle)
      }
        if(Throttle < 550){
        fetch(`http://192.168.4.1/?d`, {
        mode: 'no-cors',
      })
        .then(() => PrevThrottle === Throttle)
      console.log(Throttle)
      }
      
    }
  }

  const handleStop = (event) => {
    fetch(`http://192.168.4.1/?h`, {
      mode: 'no-cors',
    })
    .then(() => {
      if (PrevThrottle !== 550)
        handleStop(event)
      PrevThrottle = 550
    })
  }

return (
  <div>
    <h1>Throttle</h1>
    <Joystick size={90} baseShape="square" stickShape="squar" baseColor="DarkGrey" stickColor="Grey" move={handleMove} stop={handleStop}  ></Joystick>
  </div>
);
}