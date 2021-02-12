/* eslint-disable */

import React from "react"
import styled from "styled-components"

import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"

// const useStyles = makeStyles(theme => ({
//   root: {
//     // background: ({ bgImg, contain, cover }: TProps) =>
//     //   `url(${bgImg}) center center / ${
//     //     contain ? "contain" : cover ? "cover" : "auto"
//     //   } no-repeat`,
//     background: ({ bgImg, size }: TProps2) =>
//       `url(${bgImg}) center center / ${size} no-repeat`,
//   },
// }))

const useStyles = makeStyles(theme => ({
  root: {
    background: props =>
      `url(${props.bgimg}) center center / ${props.size} no-repeat`,
    color: props => props.clr,
    height: props => props.bgheight,
    background: props => props.bg,
  },
}))

// const Imgbox = styled(({ props, ...other }) => <Box {...other} />)({
//   background: props => `url(${props.img}) center center / contain no-repeat`,
// })

export const ImageContainer = props => {
  const classes = useStyles(props)
  return <Box className={classes.root} {...props}></Box>
  //   return <Imgbox {...props}></Imgbox>
}

export const ImageContainerExample = props => {
  const classes = useStyles(props)
  return (
    <ImageContainer
      bg={`linear-gradient(
    0deg,
    rgba(221, 255, 0, 0.3),
    rgba(196, 227, 255, 0.3)
  ),
  url(${gatsbyAstronaut}) center center / contain no-repeat`}
    ></ImageContainer>
  )
}
