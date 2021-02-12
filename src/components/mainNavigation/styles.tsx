/* eslint-disable */

import { makeStyles } from "@material-ui/core/styles"

export const mainNavStyles = makeStyles(theme => ({
  root: {
    // borderBottom: "1px solid",
    // borderTop: "1px solid",
    "& ul": {
      listStyle: "none",
    },
    "& li": {
      display: "flex",
      alignItems: "center",
    },
    "& a": {
      textDecoration: "none",
      textTransform: "capitalize",
      // [theme.breakpoints.up("md")]: {
      //   display: "grid",
      //   justifyItems: "center",
      //   color: "white",
      //   marginLeft: 20,
      // },
    },
    "& svg": {
      // color: "gold",
    },
    "& .MuiListItem-gutters": {
      paddingLeft: 0,
    },
  },
}))
