import { PerspectiveCamera } from "three";

function createCamera(
  container,
  f = 35,
  cameraPosition,
  nearPlane = 0.1,
  farPlane = cameraPosition * 1.5
) {
  const fov =
    f === "htmlMap"
      ? 2 *
        (180 / Math.PI) *
        Math.atan(container.clientHeight / (2 * cameraPosition))
      : f;
  const aspectRatio = container.clientWith / container.clientHeight;
  const near = nearPlane;
  const far = farPlane;
  const camera = new PerspectiveCamera(fov, aspectRatio, near, far);

  return camera;
}

export { createCamera };
