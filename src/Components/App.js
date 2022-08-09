import React from 'react';
import ToolBar from './ToolBar';
import ThrottlelJoyStick from './ThrottlelJoyStick'
import RollPitchJoyStick from './RollPitchJoyStick'
import Button from '@mui/material/Button';
import './style.css';
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
    <div className="main">
      <ToolBar></ToolBar>
      <div>  
        <div className="stick">
          <ThrottlelJoyStick></ThrottlelJoyStick>
          <RollPitchJoyStick></RollPitchJoyStick>
        </div>
        <div className="buttonDiv">
            <Button style={{border:"2px solid #EB7500" , variant:"outlined", color:"#EB7500", marginLeft:"1%", marginRight:"1%"}} onClick={takeOff}>TakeOff</Button>
            <Button style={{border:"2px solid #EB7500" , variant:"outlined", color:"#EB7500", marginLeft:"1%"}} onClick={land}>Land</Button>
        </div>
        </div>

    </div>
  );
}
