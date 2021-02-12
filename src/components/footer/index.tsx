/* eslint-disable */

import React, { Fragment, useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Divider, useMediaQuery } from "@material-ui/core"

import { Copyright } from "./copyright"
import { SocialMedia } from "../"

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: `solid 10px ${theme.palette.primary.light}`,
    borderTopWidth: "medium",
    "& .MuiIconButton-root": {
      paddingLeft: 0,
    },
  },
}))

export const Footer = props => {
  const displaySize = useMediaQuery("(min-width:600px)")
  const classes = useStyles()

  return (
    <Box
      {...props}
      component="footer"
      className={classes.root}
      p={{ xs: 0.5, sm: 2 }}
    >
      {/* <Divider variant="middle" /> */}
      <h2>FOOTER</h2>
      <SocialMedia display="flex" m="0 -5px" />
      <Copyright />
    </Box>
  )
}
