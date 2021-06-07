import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function createControls(camera, domElement) {
  const controls = new OrbitControls(camera, domElement);
  controls.enableDamping = true;
  controls.frame = () => controls.update();

  return controls;
}

export { createControls };
