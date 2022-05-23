import React from 'react';
// import express from 'express';
import { Joystick } from 'react-joystick-component';
let PrevRoll = 350
let PrevPitch = 150

export default function PitchRollJoyStick(props) {
  const handleMove = (event) => {        
    let Roll = Math.round(event.x)+350
    
    console.log('roll',Roll);
    let Pitch = Math.round(event.y)+150
    console.log('pitch',Pitch);
    if(PrevRoll !== Roll){
      fetch(`http://192.168.4.1/?R=${Roll}`, {
        mode: 'no-cors',
      })
      .then(() => PrevRoll = Roll)
    }
    if(PrevPitch !== Pitch){
      fetch(`http://192.168.4.1/?P=${Pitch}`, {
        mode: 'no-cors',
      })
      .then(() => PrevPitch = Pitch)
    }
}

const handleStop = (event) => {
  console.log('handleStop')
  let Roll = PrevRoll = 350
  let Pitch = PrevPitch = 150
  fetch(`http://192.168.4.1/?R=${Roll}`, {
    mode: 'no-cors',
  })
  .then(() => {
    fetch(`http://192.168.4.1/?P=${Pitch}`, {
    mode: 'no-cors',
    })
  }) 
}
  
  // const handleStop = (event) => {
  //   event.type = 'stop'
  // }
  
    return (
      <div>
        <Joystick size={100} baseColor="#db830f" stickColor="#a35405" move={handleMove} stop={handleStop}  ></Joystick>
      </div>
    );
  }