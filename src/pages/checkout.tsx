import React, { Fragment, useEffect, useState, useRef, FormEvent } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import { Box, Card, Button, IconButton, Dialog } from "@material-ui/core"
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdClose,
} from "react-icons/md"
import { useSelector, useDispatch } from "react-redux"

import axios from "axios"

import { Layout } from "../components"
import { amountToEuro } from "../utils"

import { StripePayment } from "../stripe"
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../state/actions"

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, 300px)",
    "& img": {
      objectFit: "contain",
    },
  },
}))

const Checkout = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { shop } = useSelector(state => state)
  const [dialogOpen, setDialogOpen] = useState(false)
  const amount = shop.cart.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity
  }, 0)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log("making payment request...")
    console.log(amount)
    try {
      axios
        .post("http://localhost:5000/stripe", { amount })
        .then(response => {
          console.log(response)
          // setResponseStatus(response.status)
        })
        .catch(error => {
          console.log(error)
          // setResponseStatus(error.response.status)
        })
      // setIsSubmitting(true)
    } catch (error) {
      console.log(`errör: ${error}`)
      // setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <Box className={classes.root}>
        {shop.cart.length < 1 && (
          <Fragment>
            <Button
              component={Link}
              to="/shop"
              variant="contained"
              color="secondary"
            >
              visit shop
            </Button>
          </Fragment>
        )}
        {shop.cart.map(item => {
          const { id, name, price, img, quantity } = item
          return (
            <Box key={id} component={Card}>
              <h4>{name}</h4>
              <img src={img} alt="" height={50} width={50} />
              <p>{price} € </p>
              <p>qty: {quantity} </p>
              <IconButton onClick={() => dispatch(decreaseQuantity(item))}>
                <MdRemoveCircleOutline />
              </IconButton>
              <IconButton onClick={() => dispatch(increaseQuantity(item))}>
                <MdAddCircleOutline />
              </IconButton>
              <IconButton onClick={() => dispatch(removeFromCart(item))}>
                <MdClose />
              </IconButton>
            </Box>
          )
        })}
      </Box>
      {shop.cart.length > 0 && (
        <Fragment>
          <Button color="secondary" onClick={() => dispatch(clearCart())}>
            CLEAR CART
          </Button>
          <h2>your total</h2>
          <p>
            {amountToEuro(
              shop.cart.reduce((accumulator, item) => {
                return accumulator + item.price * item.quantity
              }, 0)
            )}
          </p>
        </Fragment>
      )}
      {shop.cart.length > 0 && (
        // <Button variant="contained" color="primary" onClick={handleSubmit}>
        //   buy now
        // </Button>

        <Fragment>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setDialogOpen(true)}
          >
            buy now
          </Button>
          <Dialog
            fullScreen
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
          >
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setDialogOpen(false)}
              aria-label="close"
            >
              <MdClose />
            </IconButton>
            <StripePayment />
          </Dialog>
        </Fragment>
      )}
    </Layout>
  )
}

export default Checkout
