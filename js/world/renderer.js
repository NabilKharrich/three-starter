import { WebGLRenderer } from "three";

function createRenderer(hasAntialias) {
  const renderer = new WebGLRenderer({ antialias: hasAntialias });
  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
