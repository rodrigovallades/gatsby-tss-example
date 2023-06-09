import { ROOT_FONT_SIZE_IN_PX } from "./constants";

/**
 * Converts input pixel value to REM unit
 *
 * @param {Number} value - Input in pixels
 *
 * @returns {String} - Output in REM
 */
const pxToRem = (value) => {
  if (isNaN(value)) {
    throw new Error("[pxToRem] Only numbers please!");
  }

  return `${value / ROOT_FONT_SIZE_IN_PX}rem`;
};

export { pxToRem };
export default { pxToRem };
