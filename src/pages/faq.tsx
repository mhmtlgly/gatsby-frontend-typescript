import React, { Fragment, useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"

import { Layout } from "../components"

const useStyles = makeStyles(theme => ({
  root: {},
}))

const Faq = () => {
  const classes = useStyles()

  return (
    <Layout>
      <h2>FAQ</h2>
    </Layout>
  )
}

export default Faq
