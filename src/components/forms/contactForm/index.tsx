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
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { MdMailOutline } from "react-icons/md"

import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"

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
  heading: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export const ContactForm = () => {
  const [formData, setFormData] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const messageRef = useRef(null)

  const classes = useStyles()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log(formData)
    try {
      axios.post("http://localhost:5000/api/contact", formData)
      setIsSubmitting(true)
    } catch (error) {
      console.log(error)
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    isSubmitting &&
      gsap.fromTo(messageRef.current, {}, { opacity: 1, duration: 1 })
  })

  // useEffect(() => {
  //   isSubmitting &&
  //     gsap.to(messageRef.current, {
  //       transform: "scale(1)",
  //       autoAlpha: 1,
  //       duration: 0.3,
  //     })
  // })

  // useEffect(() => {
  //   isSubmitting && gsap.set(messageRef.current, { display: "none" })
  // })

  return (
    <Container maxWidth="xs">
      {!isSubmitting && (
        <Fragment>
          <div className={classes.heading}>
            <Avatar className={classes.avatar}>
              <MdMailOutline />
            </Avatar>
            <Typography component="h1" variant="h5">
              Contact Us
            </Typography>
          </div>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Name"
              id="name"
              autoComplete="name"
            />
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
            />
            <TextField
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="subject"
              label="Subject"
              id="subject"
              autoComplete="subject"
            />
            <TextField
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              id="message"
              label="Your Message"
              name="message"
              autoComplete="message"
              rows={4}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              send
            </Button>
          </form>
        </Fragment>
      )}
      {isSubmitting && (
        <Fragment>
          <h2 style={{ opacity: 0 }} ref={messageRef}>
            Your form was submitted. Thank you.
          </h2>
        </Fragment>
      )}
    </Container>
  )
}
