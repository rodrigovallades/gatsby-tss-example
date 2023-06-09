import { ROOT_FONT_SIZE_IN_PX } from "./constants";
import {
  fontWeights as fontWeightPrinciples,
  typography as typographyPrinciples,
} from "./tokens";

const typography = {
  fontFamily: "Atkinson Hyperlegible",
  fontSize: ROOT_FONT_SIZE_IN_PX,
  h1: typographyPrinciples.h1,
  h2: typographyPrinciples.h2,
  h3: typographyPrinciples.h3,
  h4: typographyPrinciples.h4,
  h5: typographyPrinciples.h5,
  h6: typographyPrinciples.h6,
  subtitle1: typographyPrinciples.subtitle1,
  subtitle2: typographyPrinciples.subtitle2,
  subtitle3: typographyPrinciples.subtitle3,
  body1: typographyPrinciples.body1,
  body2: typographyPrinciples.body2,
  body3: typographyPrinciples.body3,
  button: typographyPrinciples.button,
  button1: typographyPrinciples.button1,
  button2: typographyPrinciples.button2,
  caption: typographyPrinciples.caption,
  ...fontWeightPrinciples,
};

export default typography;
