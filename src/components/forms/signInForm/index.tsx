/* eslint-disable */

import React, {
  useState,
  useEffect,
  useRef,
  Fragment,
  FormEvent,
  ChangeEvent,
} from "react"
import axios from "axios"
import { Link as Gatsbylink } from "gatsby"
import {
  Avatar,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
  Container,
  Box,
  CircularProgress,
} from "@material-ui/core"
import { MdLockOutline } from "react-icons/md"
import { makeStyles } from "@material-ui/core/styles"
import { useSelector, useDispatch } from "react-redux"

import { getUser } from "../../../state/actions"

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(2, "auto"),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
    paddingBottom: 32,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export const SignInForm = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log("sending request...")
    console.log(formData)

    setIsSubmitting(true)
    axios
      .post("http://localhost:5000/api/authentication/signin", formData, {
        withCredentials: true,
        timeout: 5000,
      })
      .then(response => {
        console.log(response)
        dispatch(getUser())
      })

      .catch(error => {
        console.log(error)
        console.log(error.response)
      })
  }

  return (
    <Container maxWidth="xs">
      {!isSubmitting && (
        <div>
          <Avatar className={classes.avatar}>
            <MdLockOutline />
          </Avatar>
          <Typography align="center" component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={
                formData !== null && formData.email && formData.password
                  ? false
                  : true
              }
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={Gatsbylink} to="/signup" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      )}
    </Container>
  )
}
