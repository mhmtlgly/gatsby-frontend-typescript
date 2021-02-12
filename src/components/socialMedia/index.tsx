/* eslint-disable */

import React, { Fragment, useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Box, IconButton } from "@material-ui/core"
import styled from "styled-components"

import { socialMediaLinks } from "./data"

const SocialIcon = styled(({ props, ...other }) => <IconButton {...other} />)`
  color: ${props => props.clr};
  background: ${props => props.bg};
`

const useStyles = makeStyles(theme => ({
  root: {},
}))

export const SocialMedia = props => {
  const theme = useTheme()
  const classes = useStyles(props)

  return (
    <Box className={classes.root} {...props}>
      {socialMediaLinks.map(social => (
        <a key={social.id} href={social.url}>
          <SocialIcon
            // color="primary"
            clr={theme.palette.primary.dark}
            // bg={social.color}
            {...props}
          >
            {social.icon}
          </SocialIcon>
        </a>
      ))}
    </Box>
  )
}
