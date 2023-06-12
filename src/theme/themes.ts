// import "@mui/material/styles/createPalette";

import { ThemeOptions, useTheme } from "@mui/material";
import { createMakeAndWithStyles } from "tss-react";

import { makeMuiCache } from "./cache";
import * as components from "./components";
import palette from "./palette";
import { createSpacing } from "./spacing";
import typography from "./typography";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    inverse: Palette["primary"];
  }
  interface PaletteOptions {
    inverse: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  export interface ButtonPropsColorOverrides {
    inverse: true;
  }

  export interface ButtonPropsSizeOverrides {
    xlarge: true;
  }
}

declare module "@mui/material/Typography" {
  export interface TypographyPropsVariantOverrides {
    subtitle3: true;
  }
}

export const darkTheme: ThemeOptions = {
  components: {
    ...components,
  },
  palette,
  spacing: createSpacing,
  typography,
};

export const muiCache = makeMuiCache();

export const { makeStyles, withStyles } = createMakeAndWithStyles({
  useTheme,
  /*
  OR, if you have extended the default mui theme adding your own custom properties:
  Let's assume the myTheme object that you provide to the <ThemeProvider /> is of
  type MyTheme then you'll write:
  */
  // "useTheme": useTheme as (()=> MyTheme)
});
