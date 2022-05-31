import React from 'react';
import { Joystick } from 'react-joystick-component';
let PrevPitch = 150
export default function PitchJoyStick(props) {
  // const mapValPitch = (input) => { 
  //   let output = 130 + ((170 - 130) / (200 - 100)) * (input - 100);
  //   return output
  // }
  const handleMove = (event) => {
    let Pitch = Math.round(event.y) + 150
    // Pitch =  Math.round(mapValPitch(Pitch))
    if (PrevPitch === Pitch) {
      return
    }
    let rand = (Math.random() * 10);
    if (rand > 8) {
      if(Pitch > 150){
        console.log("Pitch:", Pitch)
      fetch(`http://192.168.4.1/?f`, {
        mode: 'no-cors',
      })
      .then(() => PrevPitch === Pitch)
    }
    if(Pitch < 150){
      console.log("Pitch:", Pitch)
      fetch(`http://192.168.4.1/?b`, {
        mode: 'no-cors',
      })
      .then(() => PrevPitch === Pitch)
    }
  }
} 
  
      

  const handleStop = (event) => {
    fetch(`http://192.168.4.1/?h`, {
      mode: 'no-cors',
    })
    .then(() => {
      if (PrevPitch !== 150)
        handleStop(event)
      PrevPitch = 150
    })
  }

  return (
    <div>
      <h1>Pitch</h1>
      <Joystick size={100} baseColor="#db830f" stickColor="#a35405" move={handleMove} stop={handleStop}  ></Joystick>
    </div>
  );
}