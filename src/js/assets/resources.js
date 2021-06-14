import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { loadAsset } from "../utils/loader";

let current;
let total;

async function getResources() {
  const array = await loadAsset(
    GLTFLoader,
    [
      "./static/630cfe7e8388bff5bfda6692ce4ca40b.glb",
      "./static/aec2442e73d93a2bf23860c3720f74e0.glb",
      "./static/fd427e0835cd0a0538a1b09757c112d6.glb",
      "./static/8a3e8361a6d8c75f6299dd106f9a2.glb",
    ],
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("./static/draco/");
      loader.setDRACOLoader(dracoLoader);
    }
  );
  return array;
}

export { getResources };
