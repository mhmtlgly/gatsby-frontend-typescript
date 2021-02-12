/* eslint-disable */

import React, { Fragment, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { navigate } from "gatsby"
import { Button, TextField, Box } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {},
}))

export const PasswordCounter = props => {
  const classes = useStyles(props)
  const [passwordAttempt, setPasswordAttempt] = useState(5)
  const [inputPassword, setInputPassword] = useState(null)
  const password = "qwertzu123"

  const handleChange = e => {
    e.preventDefault()
    setInputPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (inputPassword !== password) {
      setPasswordAttempt(prev => prev - 1)
    }
    // passwordAttempt === 0 && navigate("/shop")
    console.log(inputPassword)
  }

  return (
    <Fragment>
      <TextField label="Password" onChange={handleChange} />
      {/* {passwordAttempt < 3 && <p>Password attempts left: {passwordAttempt} </p>} */}
      <pre>
        {passwordAttempt < 3 && `Password attempts left: ${passwordAttempt}`}
      </pre>
      <Box>
        <Button
          disabled={passwordAttempt === 0}
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          sign in
        </Button>
      </Box>
    </Fragment>
  )
}
