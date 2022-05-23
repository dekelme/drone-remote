import React from 'react';
import ToolBar from './ToolBar';
import PitchRollJoyStick from './PitchRollJoyStick'
import ThrottlelJoyStick from './ThrottlelJoyStick'
import Button from '@mui/material/Button';

export default function App(props) {
  
  
  return (
    <div  style={{height: '100%'}}>
      <ToolBar></ToolBar>
      <div>  
      <div style={{display:"flex", justifyContent:'space-around',alignItems: 'center',    minHeight: '280px'}}>
            <ThrottlelJoyStick></ThrottlelJoyStick>
        <PitchRollJoyStick></PitchRollJoyStick>
        </div>
 
        <div style={{display:"flex",justifyContent: 'center'}}>
          <Button variant="outlined">TakeOff</Button>
          <Button variant="outlined">Land</Button>
        </div>
        </div>

    </div>
  );
}
