import React from 'react';
import { Joystick } from 'react-joystick-component';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
let PrevRoll = 350
let PrevPitch = 150
export default function RollJoyStick(props) {
  // const mapValRoll = (input) => { 
  //   let output = 330 + ((370 - 330) / (400 - 300)) * (input - 300);
  //   return output
  // }
  const handleMove = (event) => {
    let Roll = Math.round(event.x) + 350
    let Pitch = Math.round(event.y) + 150
    // Roll =  Math.round(mapValRoll(Roll))
    if (PrevRoll === Roll || PrevPitch === Pitch) {
      return
    }
    let rand = (Math.random() * 10);
    if (rand > 8) {
      if (Roll > 350) {
        console.log("Roll:", Roll)
        fetch(`http://192.168.4.1/?r`, {
          mode: 'no-cors',
        })
          .then(() => PrevRoll === Roll)
      }
      if (Roll < 350) {
        console.log("Roll:", Roll)
        fetch(`http://192.168.4.1/?l`, {
          mode: 'no-cors',
        })
          .then(() => PrevRoll === Roll)
      }
      if (Pitch > 150) {
        console.log("Pitch:", Pitch)
        fetch(`http://192.168.4.1/?f`, {
          mode: 'no-cors',
        })
          .then(() => PrevPitch === Pitch)
      }
      if (Pitch < 150) {
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
        if (PrevRoll !== 350 || PrevPitch !== 150)
          handleStop(event)
        PrevRoll = 350
        PrevPitch = 150
      })
  }

  return (
    <div style={{display: "flex", alignItems:"center"}}>
      <ChevronLeftIcon style={{color: "grey"}}></ChevronLeftIcon>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <KeyboardArrowUpIcon style={{color: "grey"}}></KeyboardArrowUpIcon>
      <Joystick size={90} baseColor="lightGrey" stickColor="Grey" move={handleMove} stop={handleStop}  ></Joystick>
      <KeyboardArrowDownIcon style={{color: "grey"}}></KeyboardArrowDownIcon>
      </div>
      <ChevronRightIcon style={{color: "grey"}}></ChevronRightIcon>
    </div>
    
  );
}