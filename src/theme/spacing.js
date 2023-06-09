const baseMultiplier = 2;
const baseSpacing = 4;
const factorThreshold = 7;
const unit = "px";

/**
 * Outputs a spacing measure in pixels based on the factor.
 * Up to factorThreshold, the spacing increases by a factor of baseMultiplier.
 * After that, the spacing increases by a factor of 2 * baseMultipler.
 *
 * @param {Number} factor - @mui/material spacing factor
 *
 * @returns {String} - Output in pixels
 */
const createSpacing = (factor) => {
  let result;
  const addUnitToResult = (result) => `${result}${unit}`;

  if (factor === 0) return addUnitToResult(baseSpacing);

  // for lower values, spacing increases by a factor of baseMultiplier
  if (factor < factorThreshold) {
    result = baseMultiplier * baseSpacing * factor;
  } else {
    // for higher values, spacing increases by a factor of 2 * baseMultipler
    result = baseMultiplier * baseSpacing * (2 * factor - factorThreshold + 1);
  }

  return addUnitToResult(result);
};

export { createSpacing };
