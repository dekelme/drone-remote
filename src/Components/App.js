import React from 'react';
import ToolBar from './ToolBar';
import PitchJoyStick from './PitchJoyStick'
import ThrottlelJoyStick from './ThrottlelJoyStick'
import RollJoyStick from './RollJoyStick'
import Button from '@mui/material/Button';

export default function App(props) {
  const takeOff = (event) => {
    fetch(`http://192.168.4.1/?t`, {
        mode: 'no-cors',
      })
  }

  const land = (event) => {
    fetch(`http://192.168.4.1/?s`, {
        mode: 'no-cors',
      })
  }
  
  return (
    <div  style={{height: '100%'}}>
      <ToolBar></ToolBar>
      <div>  
      <div style={{display:"flex", justifyContent:'space-around',alignItems: 'center',    minHeight: '280px'}}>
        <ThrottlelJoyStick></ThrottlelJoyStick>
        <PitchJoyStick></PitchJoyStick>
        <RollJoyStick></RollJoyStick>
        </div>
 
        <div style={{display:"flex",justifyContent: 'center'}}>
          <Button variant="outlined" onClick={takeOff}>TakeOff</Button>
          <Button variant="outlined" onClick={land}>Land</Button>
        </div>
        </div>

    </div>
  );
}
