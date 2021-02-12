/* eslint-disable */

import React, { Fragment, useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"

import { gsap } from "gsap"
import { CSSRulePlugin } from "gsap/CSSRulePlugin"
import { Draggable } from "gsap/Draggable"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { TextPlugin } from "gsap/TextPlugin"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(
  CSSRulePlugin,
  Draggable,
  MotionPathPlugin,
  TextPlugin,
  ScrollToPlugin,
  ScrollTrigger
)

const useStyles = makeStyles(theme => ({
  root: {},
}))

export const Newsletter = () => {
  const classes = useStyles()

  return <Fragment>Newsletter</Fragment>
}
