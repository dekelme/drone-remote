import React from 'react';
// import express from 'express';
import { Joystick } from 'react-joystick-component';
let PrevRoll = 350
let PrevPitch = 150

export default function PitchRollJoyStick(props) {
  const handleMove = (event) => {        
    let Roll = Math.round(event.x)+350
    let Pitch = Math.round(event.y)+150
 
    if(PrevRoll !== Roll){
      fetch(`http://192.168.4.1/?${Roll}`,)
      .then(() => PrevRoll = Roll)
    }
    if(PrevPitch !== Pitch){
      fetch(`http://192.168.4.1/?${Pitch}`,)
      .then(() => PrevPitch = Pitch)
    }
}

const handleStop = (event) => {
  let Roll = PrevRoll = 350
  let Pitch = PrevPitch = 150
  
  fetch(`http://192.168.4.1/?${Roll}`)
  .then(() => {
    fetch(`http://192.168.4.1/?${Pitch}`)
  }) 
}
  
    return (
      <div>
        <Joystick size={100} baseColor="#db830f" stickColor="#a35405" move={handleMove} stop={handleStop}  ></Joystick>
      </div>
    );
  }