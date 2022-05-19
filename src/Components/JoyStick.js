import { JoystickControls } from 'three-joystick';

export default function JoyStick(props) {
    const joystickControls = new JoystickControls(
        camera,
        scene,
      );
    function animate() {
        requestAnimationFrame(animate);
      
        /**
         * Updates a callback function with the delta x and delta y of the users
         * movement
         */
        joystickControls.update((movement) => {
          if (movement) {
            /**
             * The values reported back might be too large for your scene.
             * In that case you will need to control the sensitivity.
             */
            const sensitivity = 0.0001;
      
            /**
             * Do something with the values, for example changing the position
             * of the object
             */
            this.target.position.x += movement.moveX * sensitivity;
            this.target.position.y += movement.moveY * sensitivity;
          }
        });
      
        renderer.render(scene, camera);
      }
      
      animate();
    return (
      <div>
          
       
      </div>
    );
  }