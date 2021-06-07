import World from "./world";
import { createMesh } from "./components/mesh";

const container = document.querySelector(".world-container");

const world = new World(container, {
  sceneColor: 0x13141c,
  enableControls: true,
  enableHelpers: true,
  cameraPosition: 20,
  //   set environment map
});
world.start();

window.addEventListener("resize", () => {
  world.setSize();
});

const mesh = createMesh();
console.log(mesh);

world.addToScene(mesh);
world.addToAnimationStack(mesh);
