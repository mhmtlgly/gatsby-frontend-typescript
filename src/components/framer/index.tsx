import React, { Fragment, useEffect, useState, useRef } from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Box, Button } from "@material-ui/core"
import styled from "styled-components"
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion"

const useStyles = makeStyles(theme => ({
  root: {},
}))

export const StyledButton = styled(({ props, ...other }) => (
  <Button component={motion.button} {...other} />
))`
  background-color: ${props => props.clr};
  color: ${props => props.text};
  &:hover {
    background-color: ${props => props.hover};
  }
`

export const FramerComponent = () => {
  const classes = useStyles()
  const {
    scrollYProgress,
    scrollXProgress,
    scrollX,
    scrollY,
  } = useViewportScroll()
  const scale = useMotionValue(1)
  const x = useMotionValue(0)
  const xRange = [-200, -100, 100, 200]
  const opacityRange = [0, 1, 1, 0]
  const opacity = useTransform(x, xRange, opacityRange)

  return (
    <Fragment>
      <h2>FRAMER</h2>
      <StyledButton
        variant="contained"
        color="secondary"
        drag
        dragConstraints={{
          top: "-10%",
          left: 0,
          right: 100,
          bottom: 100,
        }}
      >
        click me
      </StyledButton>
      <motion.div
        style={{ height: 200, width: 200, background: "red", opacity, x }}
        animate={{ x: 100 }}
      />
    </Fragment>
  )
}
