import React, { Fragment, useEffect, useState, useRef } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Button } from "@material-ui/core"

import { Layout } from "../components"

const useStyles = makeStyles(theme => ({
  root: {},
}))

const Service = () => {
  const classes = useStyles()

  return (
    <Layout>
      <h2>Service</h2>
    </Layout>
  )
}

export default Service
