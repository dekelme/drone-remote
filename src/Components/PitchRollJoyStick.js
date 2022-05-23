import React from 'react';
// import express from 'express';
import { Joystick } from 'react-joystick-component';
// import Button from '@mui/material/Button';

// var app = express();

export default function PitchRollJoyStick(props) {
  const handleMove = (event) => {        
    let Roll = event.x
    let Pitch = event.y
    fetch(`http://192.168.4.1/?roll=${Roll}&pitch=${Pitch}`, {
      mode: 'no-cors',
    }) 
    .then(() => new Promise(resolve => setTimeout(resolve, 10)))
}
  
  // const handleStop = (event) => {
  //   event.type = 'stop'
  // }
  
    return (
      <div>
        <Joystick size={100} baseColor="#db830f" stickColor="#a35405" move={handleMove}  ></Joystick>
        {/* <Button variant="contained">Contained</Button> */}
      </div>
    );
  }