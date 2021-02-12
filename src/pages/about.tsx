import React, { Fragment, useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"

import { Layout } from "../components"
import { FramerComponent } from "../components/framer"

const useStyles = makeStyles(theme => ({
  root: {},
}))

const About = () => {
  const classes = useStyles()

  return (
    <Layout>
      <h2>About</h2>
      <FramerComponent />
    </Layout>
  )
}

export default About
