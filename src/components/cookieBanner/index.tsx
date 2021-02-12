/* eslint-disable */

import React, { Fragment, useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"

// import { gsap } from "gsap"
// import { CSSRulePlugin } from "gsap/CSSRulePlugin"
// import { Draggable } from "gsap/Draggable"
// import { MotionPathPlugin } from "gsap/MotionPathPlugin"
// import { TextPlugin } from "gsap/TextPlugin"
// import { ScrollToPlugin } from "gsap/ScrollToPlugin"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

import { gsap } from "gsap/dist/gsap"
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin"
import { Draggable } from "gsap/dist/Draggable"
import { MotionPathPlugin } from "gsap//dist/MotionPathPlugin"
import { TextPlugin } from "gsap/dist/TextPlugin"
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(
  CSSRulePlugin,
  Draggable,
  MotionPathPlugin,
  TextPlugin,
  ScrollToPlugin,
  ScrollTrigger
)

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
  },
}))

export const CookieBanner = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <h2>Cookie</h2>
    </Fragment>
  )
}
