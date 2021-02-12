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
  Container,
  Typography,
  Grid,
  Link,
  TextField,
  Avatar,
  InputAdornment,
  IconButton,
  Button,
} from "@material-ui/core"

import { FaUserPlus, FaEyeSlash, FaEye } from "react-icons/fa"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export const SignUpForm = () => {
  const [data, setData] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const messageRef = useRef(null)
  const [responseStatus, setResponseStatus] = useState(null)

  const classes = useStyles()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setData({ ...data, [name]: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log("making sign up request...")
    console.log(data)
    try {
      axios
        .post("http://localhost:5000/api/authentication/signup", data)
        .then(response => {
          console.log(response)
          setResponseStatus(response.status)
        })
        .catch(error => {
          console.log(error)
          setResponseStatus(error.response.status)
        })
      setIsSubmitting(true)
    } catch (error) {
      console.log(`errör: ${error}`)
      setIsSubmitting(false)
    }
  }

  return (
    <Container maxWidth="xs">
      {/* <div>
        <h2>res status</h2>
        {responseStatus}
      </div> */}
      {/* {!isSubmitting && ( */}
      <div>
        <Avatar className={classes.avatar}>
          <FaUserPlus />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
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
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment style={{ order: 2 }} position="start">
            //       Password
            //       <IconButton onClick={() => setShowPassword(prev => !prev)}>
            //         {showPassword ? <FaEyeSlash /> : <FaEye />}
            //       </IconButton>
            //     </InputAdornment>
            //   ),
            // }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // disabled={data.email && data.password ? false : true}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link component={Gatsbylink} to="/signin" variant="body2">
                Already have an Account? Sign In
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* )} */}
      {/* {isSubmitting && <Fragment>loading user data...</Fragment>} */}
    </Container>
  )
}
