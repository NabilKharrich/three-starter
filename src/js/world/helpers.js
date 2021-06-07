import { AxesHelper, GridHelper } from "three";

function createHelper(f) {
  const axesLength = f === "htmlMap" ? 300 : 2;
  const gridSize = f === "htmlMap" ? 800 : 10;
  const axesHelper = new AxesHelper(axesLength);
  const gridHelper = new GridHelper(gridSize);

  return [axesHelper, gridHelper];
}

export { createHelper };
