import { createScene } from "./scene";
import { createCamera } from "./camera";
import { createRenderer } from "./renderer";

import { resizeScene } from "./resize-scene";
import { createLoop } from "./loop";

import { createControls } from "./controls";
import { createHelper } from "./helpers";

export default class World {
  constructor(
    container,
    {
      sceneColor = 0x000000,

      enableControls = false,
      enableHelpers = false,

      cameraPosition = 10,
      cameraFov = 35,

      hasAntialias = true,
    } = {}
  ) {
    this.container = container;
    this.scene = createScene(sceneColor);

    this.fov = cameraFov;
    this.camera = createCamera(this.container, this.fov, cameraPosition);
    this.camera.position.z = cameraPosition;

    this.renderer = createRenderer(hasAntialias);

    this.loop = createLoop(this.scene, this.camera, this.renderer);

    this.setSize();
    this.container.append(this.renderer.domElement);

    enableControls && this.enableControls();
    enableHelpers && this.enableHelpers();
  }

  enableControls() {
    const controls = createControls(this.camera, this.container);
    this.loop.animationStack.push(controls);
  }

  enableHelpers() {
    const helpers = createHelper(this.fov);
    this.scene.add(...helpers);
  }

  addToScene(element) {
    this.scene.add(element);
  }

  addToAnimationStack(element) {
    this.loop.animationStack.push(element);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }

  setSize() {
    resizeScene(this.container, this.camera, this.renderer);
  }
}
