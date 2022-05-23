import React from 'react';
import { Joystick } from 'react-joystick-component';
let PrevThrottle =  550;

export default function PitchRollJoyStick(props) {
  const handleMove = (event) => {
    let Throttle = Math.round(event.y)+550
   
    console.log('throttle',Throttle);
   if(PrevThrottle !== Throttle) {
    fetch(`http://192.168.4.1/?T=${Throttle}`, {
      mode: 'no-cors',
    })
    .then(() => PrevThrottle = Throttle)
   }

    
  }

  const handleStop = (event) => {
    let Throttle = 550
    fetch(`http://192.168.4.1/?T=${Throttle}`, {
      mode: 'no-cors',
    })
    .then(() => PrevThrottle =  550)
  }



  return (
    <div>
      <Joystick size={90} baseShape="square" stickShape="squar" baseColor="DarkGrey" stickColor="Grey" move={handleMove} stop={handleStop} ></Joystick>
    </div>
  );
}