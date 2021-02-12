/* eslint-disable */

import React, { Fragment, useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Router, useLocation } from "@reach/router"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Breadcrumbs } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {},
}))

export const Breadcrumb = () => {
  const classes = useStyles()
  const location = useLocation()
  const paths = location.pathname.split("/").filter(x => x)

  return (
    <Fragment>
      <Breadcrumbs maxItems={2}>
        {paths.length && <Link to="/">home</Link>}
        {paths &&
          paths.map((path, index) => {
            const route = paths.slice(0, index + 1).join("/")
            const isLast = index + 1 === paths.length
            return isLast ? (
              <h2 key={path}> {path} </h2>
            ) : (
              <Link key={path + index} to={`/${route}`}>
                {path}
              </Link>
            )
          })}
      </Breadcrumbs>
    </Fragment>
  )
}
