import './App.css';
import ToolBar from './ToolBar';
import JoyStick from './JoyStick'

export default function App(props) {
  const [pictures, setPictures] = null
  
  return (
    <div>
      <ToolBar></ToolBar>
      <div>
        <JoyStick></JoyStick>
        <JoyStick></JoyStick>
      </div>
    </div>
  );
}
