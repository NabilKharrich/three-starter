import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { loadAsset } from "../utils/loader";

function createMesh(res) {
  console.log(res);

  const [a, b, c, d] = res;
  const mesh = new Group();
  mesh.add(b.scene);
  mesh.frame = (time) => {
    mesh.rotation.x = time;
    mesh.rotation.y = time;
  };
  return mesh;
}

export { createMesh };
