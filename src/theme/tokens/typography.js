import { pxToRem } from "../utils";
import fontWeights from "./font-weights";

const typography = {
  h1: {
    fontSize: pxToRem(64),
    lineHeight: 1.2,
    fontWeight: fontWeights.fontWeightBold,
  },
  h2: {
    fontSize: pxToRem(48),
    lineHeight: 1.16,
    fontWeight: fontWeights.fontWeightBold,
  },
  h3: {
    fontSize: pxToRem(32),
    lineHeight: 1.25,
    fontWeight: fontWeights.fontWeightBold,
  },
  h4: {
    fontSize: pxToRem(24),
    lineHeight: 1.33,
    fontWeight: fontWeights.fontWeightBold,
  },
  h5: {
    fontSize: pxToRem(20),
    lineHeight: 1.6,
    fontWeight: fontWeights.fontWeightSemibold,
  },
  h6: {
    fontSize: pxToRem(16),
    lineHeight: 1.5,
    fontWeight: fontWeights.fontWeightSemibold,
  },
  subtitle1: {
    fontSize: pxToRem(32),
    lineHeight: 1.5,
    fontWeight: fontWeights.fontWeightMedium,
  },
  subtitle2: {
    fontSize: pxToRem(24),
    lineHeight: 1.16,
    fontWeight: fontWeights.fontWeightMedium,
  },
  subtitle3: {
    fontSize: pxToRem(20),
    lineHeight: 1.4,
    fontWeight: fontWeights.fontWeightMedium,
  },
  body1: {
    fontSize: pxToRem(18),
    lineHeight: 1.33,
    fontWeight: fontWeights.fontWeightRegular,
  },
  body2: {
    fontSize: pxToRem(16),
    lineHeight: 1.5,
    fontWeight: fontWeights.fontWeightRegular,
  },
  body3: {
    fontSize: pxToRem(14),
    lineHeight: 1.42,
    fontWeight: fontWeights.fontWeightRegular,
  },
  button: {
    fontSize: pxToRem(14),
    lineHeight: 1.42,
    fontWeight: fontWeights.fontWeightSemibold,
    textTransform: "none", // disable default uppercase button
  },
  button1: {
    fontSize: pxToRem(24),
    lineHeight: 1.33,
    fontWeight: fontWeights.fontWeightSemibold,
    textTransform: "none", // disable default uppercase button
  },
  button2: {
    fontSize: pxToRem(14),
    lineHeight: 1.42,
    fontWeight: fontWeights.fontWeightRegular,
    textTransform: "none", // disable default uppercase button
  },
  caption: {
    fontSize: pxToRem(12),
    lineHeight: 1.33,
    fontWeight: fontWeights.fontWeightRegular,
  },
};

export default typography;
