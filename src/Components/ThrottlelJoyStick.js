import React from 'react';
import { Joystick } from 'react-joystick-component';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './style.css';
let PrevThrottle = 550;

export default function ThrottlelJoyStick(props) {
  const handleMove = (event) => {
    let Throttle = Math.round(event.y) + 550
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
  <div className="throttle">
    <KeyboardArrowUpIcon style={{color:"Grey"}}></KeyboardArrowUpIcon>
    <div className="hArrows">
      <Joystick size={50} baseColor="Grey" stickColor="Grey" move={handleMove} stop={handleStop}  ></Joystick>
    </div>
    <KeyboardArrowDownIcon style={{color:"Grey"}}></KeyboardArrowDownIcon>
  </div>
  
);
}