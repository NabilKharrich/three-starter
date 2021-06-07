import { BoxGeometry, Mesh, MeshNormalMaterial } from "three";

function createMesh() {
  const geometry = new BoxGeometry(1, 1, 1, 20, 20, 20);
  const material = new MeshNormalMaterial();
  const mesh = new Mesh(geometry, material);

  mesh.frame = (time) => {
    // mesh.rotation.x = time;
    // mesh.rotation.y = time;
  };
  return mesh;
}

export { createMesh };
