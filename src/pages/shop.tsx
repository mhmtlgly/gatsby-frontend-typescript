import React, { Fragment, useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"

import { Layout, ProductCard } from "../components"

const useStyles = makeStyles(theme => ({
  root: {},
}))

const Shop = () => {
  const classes = useStyles()

  return (
    <Layout>
      <h2>Shop</h2>
      <ProductCard width={300} />
    </Layout>
  )
}

export default Shop
