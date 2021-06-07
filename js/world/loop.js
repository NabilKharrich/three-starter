import { Clock } from "three";

const clock = new Clock();

class Loop {
  constructor(scene, camera, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.animationStack = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.frame();
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  frame() {
    const elapsedTime = clock.getElapsedTime();

    for (const animation of this.animationStack) {
      animation.frame(elapsedTime);
    }
  }
}

const createLoop = (scene, camera, renderer) => {
  return new Loop(scene, camera, renderer);
};

export { createLoop };
