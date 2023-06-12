import { Theme } from "@mui/material/styles";

import { makeStyles } from "../../theme/themes";

const useStyles = makeStyles()((theme: Theme) => ({
  mainContainer: {
    alignItems: "center",
    backgroundImage:
      "url('http://galena.com/wp-content/uploads/2022/12/Gradient.png')",
    backgroundPosition: "bottom center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "0px 0px 48px 0px",
    color: theme.palette.grey[50],
    display: "flex",
    textAlign: "center",

    [theme.breakpoints.up("md")]: {
      borderRadius: "0px 0px 80px 0px",
      minHeight: 800,
    },
  },
  investorsContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",

    img: {
      [theme.breakpoints.only("xs")]: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
      },
    },

    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  brandsContainer: {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.grey[50],
  },
  lastContainer: {
    alignItems: "center",
    backgroundImage:
      "url('http://galena.com/wp-content/uploads/2022/12/Frame-852.jpg')",
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: theme.palette.grey[50],
    display: "flex",

    [theme.breakpoints.up("md")]: {
      minHeight: 512,
    },
  },
  sectionContainer: {
    paddingBottom: theme.spacing(5),
    paddingTop: theme.spacing(5),

    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing(8),
      paddingTop: theme.spacing(8),
    },
  },
  actionButton: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.grey[50],
  },
}));

export default useStyles;
