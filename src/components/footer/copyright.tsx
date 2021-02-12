import React, { Fragment, useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {},
}))

export const Copyright = () => {
  const classes = useStyles()
  const date = new Date()

  return <Box>&copy; copyright {date.getFullYear()}</Box>
}
