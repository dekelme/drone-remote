import React from 'react';
import { Joystick } from 'react-joystick-component';

export default function PitchRollJoyStick(props) {
  const handleMove = (event) => {
    let Throttle = event.y
    // let Force = event.distance
    fetch(`http://192.168.4.1/?throttle=${Throttle}}`, {
      mode: 'no-cors',
    })
    .then(() => new Promise(resolve => setTimeout(resolve, 10)))
  }

  // handleStop

  return (
    <div>
      <Joystick size={90} baseShape="square" stickShape="squar" baseColor="DarkGrey" stickColor="Grey" move={handleMove} ></Joystick>
    </div>
  );
}