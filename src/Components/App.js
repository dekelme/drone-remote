import './App.css';
import ToolBar from './ToolBar';
import JoyStick from './JoyStick'
import Slider from './Slider';

export default function App(props) {
  const [pictures, setPictures] = null
  
  return (
    <div>
      <ToolBar></ToolBar>
      <div>
        <Slider></Slider>
        <JoyStick></JoyStick>
      </div>
    </div>
  );
}
