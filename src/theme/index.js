/* eslint-disable */

import { createMuiTheme } from "@material-ui/core/styles"
import { purple } from "@material-ui/core/colors"

const gatsbyLila = "#6c2e9c"
const gatsbyOrange = "#ffaf1d"
const textColor = "#212121"

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          // margin: 0,
          // padding: 0,
          // fontSize: 18,
        },
        html: { minHeight: "100%" },
        "body, #___gatsby, #gatsby-focus-wrapper": { minHeight: "100vh" },
        body: {
          // fontFamily: "MuseoModerno",
          fontFamily: "system-ui",
        },
        "#gatsby-focus-wrapper": {
          display: "grid",
          gridTemplateRows: "1fr",
        },
        h1: {
          lineHeight: 2,
          color: gatsbyLila,
        },
        h2: {
          // lineHeight: 2,
          color: "#000",
        },
        a: {
          color: "black",
          textDecoration: "none",
          display: "flex",
        },
        p: {
          color: "black",
        },
        ul: { padding: 0 },
        li: { listStyle: "none" },
        pre: {
          backgroundColor: "aliceblue",
          overflow: "auto",
          // width: 'fit-content',
        },
      },
    },
  },
  palette: {
    primary: { main: purple.A700 },
    // secondary: { main: "#ffc400" },
  },
  spacing: 10,
})
