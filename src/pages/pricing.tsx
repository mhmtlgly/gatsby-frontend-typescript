import React, { Fragment, useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"

import { Layout } from "../components"

const useStyles = makeStyles(theme => ({
  root: {},
}))

const Pricing = () => {
  const classes = useStyles()

  return (
    <Layout>
      <h2>Pricing</h2>
    </Layout>
  )
}

export default Pricing
