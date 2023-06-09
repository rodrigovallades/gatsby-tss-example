import { colors } from "./tokens";

export default {
  primary: {
    main: colors.primary[500],
  },
  secondary: {
    main: colors.secondary[500],
  },
  inverse: {
    contrastText: colors.primary[500],
    dark: colors.grey[50],
    light: colors.grey[50],
    main: colors.grey[50],
  },
  error: {
    main: colors.red[500],
  },
  success: {
    main: colors.green[500],
  },
  warning: {
    main: colors.yellow[500],
  },
  text: {
    primary: colors.grey[800],
    contrastText: colors.grey[100],
  },
  grey: {
    main: colors.grey[100],
  },
};
