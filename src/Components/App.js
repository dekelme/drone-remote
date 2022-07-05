import React from 'react';
import ToolBar from './ToolBar';
import ThrottlelJoyStick from './ThrottlelJoyStick'
import RollPitchJoyStick from './RollPitchJoyStick'
import Button from '@mui/material/Button';

export default function App(props) {
  const takeOff = (event) => {
    fetch(`http://192.168.4.1/?t`, {
        mode: 'no-cors',
      })
  }
  // const reduce = (event) => {
  //   fetch(`http://192.168.4.1/?R`, {
  //       mode: 'no-cors',
  //     })
  // }
  const land = (event) => {
    fetch(`http://192.168.4.1/?s`, {
        mode: 'no-cors',
      })
  }
  // const test = (event) => {
  //   fetch(`http://192.168.4.1/?T`, {
  //       mode: 'no-cors',
  //     })
  // }
  // const pulse = (event) => {
  //   fetch(`http://192.168.4.1/?P`, {
  //       mode: 'no-cors',
  //     })
  // }
  
  return (
    <div  style={{height: '100%'}}>
      <ToolBar></ToolBar>
      <div>  
      <div style={{display:"flex", justifyContent:'space-around',alignItems: 'center',    minHeight: '280px'}}>
        <ThrottlelJoyStick></ThrottlelJoyStick>
        <RollPitchJoyStick></RollPitchJoyStick>
        </div>
        <div style={{display:"flex",justifyContent: 'center'}}>
          {/* <Button style={{border:"2px solid #EB7500" , variant:"outlined", color:"#EB7500", marginRight:"1%"}} onClick={test}>Test</Button> */}
          <Button style={{border:"2px solid #EB7500" , variant:"outlined", color:"#EB7500", marginLeft:"1%", marginRight:"1%"}} onClick={takeOff}>TakeOff</Button>
          {/* <Button style={{border:"2px solid #EB7500" , variant:"outlined", color:"#EB7500", marginLeft:"1%"}} variant="outlined" onClick={reduce}>-10</Button> */}
          <Button style={{border:"2px solid #EB7500" , variant:"outlined", color:"#EB7500", marginLeft:"1%"}} variant="outlined" onClick={land}>Land</Button>
          {/* <Button style={{border:"2px solid #EB7500" , variant:"outlined", color:"#EB7500", marginLeft:"1%"}} variant="outlined" onClick={pulse}>Pulse</Button> */}

        </div>
        </div>

    </div>
  );
}
