/* eslint-disable */

import React, { Fragment } from "react"
import styled from "styled-components"

import { makeStyles } from "@material-ui/core/styles"
import { Button, TextField } from "@material-ui/core"

type TProps = {
  display: string
}

const useStyles = makeStyles(theme => ({
  button: {
    // display: (props: TProps) => props.display,
    display: ({ display }: TProps) => display,
  },
}))

export const CustomButton = props => {
  const classes = useStyles(props)
  const { children, content } = props
  return (
    <Fragment>
      {/* <Button {...props}>{children ? children : "button"} </Button> */}
      <Button className={classes.button} {...props}>
        {content}
      </Button>
    </Fragment>
  )
}

export const StyledButton = styled(({ props, ...other }) => (
  <Button {...other} />
))`
  background-color: ${props => props.clr};
  color: ${props => props.text};
  &:hover {
    background-color: ${props => props.hover};
  }
`
