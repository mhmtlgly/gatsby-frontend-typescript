import React, { Fragment, useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"

import { ContactForm, Layout } from "../components"

const useStyles = makeStyles(theme => ({
  root: {},
}))

const Contact = () => {
  const classes = useStyles()

  return (
    <Layout>
      <ContactForm />
    </Layout>
  )
}

export default Contact
