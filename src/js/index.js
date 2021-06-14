import World from "./world";
import { createMesh } from "./components/mesh";
import { getResources } from "./assets/resources";

const container = document.querySelector(".world-container");

async function App() {
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

  const resources = await getResources();

  const mesh = createMesh(resources);

  world.addToScene(mesh);
  // world.addToAnimationStack(mesh);
}

App();
