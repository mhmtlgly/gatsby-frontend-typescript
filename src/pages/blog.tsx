import React, { Fragment, useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Router, useLocation } from "@reach/router"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Breadcrumbs } from "@material-ui/core"

import { Layout } from "../components"

const useStyles = makeStyles(theme => ({
  root: {},
}))

const Blog = props => {
  const classes = useStyles()

  return (
    <Layout>
      <h2>Blog</h2>
    </Layout>
  )
}

export default Blog
