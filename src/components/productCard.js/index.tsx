/* eslint-disable */

import React, { Fragment, useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import {
  Box,
  Card,
  Button,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"

import { products } from "../../siteMetaData"
import { amountToEuro } from "../../utils"
import { addToCart } from "../../state/actions"

const useStyles = makeStyles(theme => ({
  root: {
    "& img": {
      objectFit: "contain",
    },
  },
}))

const Imgbox = styled(({ props, ...other }) => <Box {...other} />)({
  background: props => `url(${props.img}) center center / contain no-repeat`,
})

export const ProductCard = props => {
  const classes = useStyles(props)
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <Box
      className={classes.root}
      display="grid"
      gridTemplateColumns="repeat(auto-fill,300px)"
      gridGap={30}
      justifyContent="center"
    >
      {products.map(product => {
        const { id, name, price, stock, img } = product
        return (
          <Box key={id} component={Card} {...props} p={1}>
            <h2>{name}</h2>
            <Imgbox img={img} height={200}>
              {stock < 1 && (
                <Box width="100%" height="100%">
                  <Typography
                    align="center"
                    color="error"
                    component="p"
                    variant="h2"
                  >
                    out of stock
                  </Typography>
                </Box>
              )}
            </Imgbox>
            {/* <img width="100%" src={img} height="200" alt="" /> */}
            <p>{amountToEuro(price)}</p>
            <Button
              variant="contained"
              color="primary"
              onClick={() => dispatch(addToCart(product))}
              disabled={stock < 1 && true}
              aria-label="add to cart"
            >
              add to cart
            </Button>
            <code
              style={{
                marginTop: 5,
                display: "block",
                color: stock > 0 ? "green" : "red",
                fontWeight: stock < 1 && 900,
                fontSize: stock < 1 && 24,
                borderBottom: stock > 0 && "3px solid green",
              }}
            >
              {stock > 0 ? `stock: ${stock}` : "sold out"}
            </code>
          </Box>
        )
      })}
    </Box>
  )
}
