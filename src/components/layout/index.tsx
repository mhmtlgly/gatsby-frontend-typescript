/* eslint-disable */

import React, { Fragment } from "react"
import { Box } from "@material-ui/core"
import { Router, useLocation } from "@reach/router"

import { Header, Footer } from "../"
import { Breadcrumb } from "../breadcrumb"

export const Layout = ({ children, ...props }) => {
  return (
    <Fragment>
      <Header />
      <Breadcrumb />
      <Box component="main" mt={6.4} mb={3} {...props}>
        {children}
      </Box>
      <Footer />
    </Fragment>
  )
}
