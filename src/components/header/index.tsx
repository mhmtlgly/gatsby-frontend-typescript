/* eslint-disable */

import React, { Fragment, useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery, Link, navigate } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import {
  AppBar,
  Toolbar,
  SwipeableDrawer,
  IconButton,
  Badge,
  Dialog,
} from "@material-ui/core"
import { AiOutlineMenu } from "react-icons/ai"
import { FaUserPlus } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import { RiShoppingCartLine } from "react-icons/ri"
import { useSelector, useDispatch } from "react-redux"

import { Logo, MainNavigation, ShoppingCart, SignInForm } from "../"

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    background: "white",
    "& .MuiIconButton-root": {
      // marginLeft: "auto",
      color: theme.palette.primary.light,
      "& svg": {
        fontSize: 26,
      },
    },
  },
  drawer: {
    "& .MuiDrawer-paper": {
      padding: "20px 20px 20px 10px",
      minWidth: 300,
    },
    "& .MuiListItemIcon-root": {
      color: theme.palette.primary.light,
      fontSize: 40,
    },
    "& #closeDrawer": {
      position: "absolute",
      top: 5,
      right: 5,
      color: theme.palette.primary.light,
      // border: `2px solid ${theme.palette.primary.light}`,
    },
  },
}))

export const Header = props => {
  const classes = useStyles(props)

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const { authentication, shop } = useSelector(state => state)

  return (
    <AppBar className={classes.root}>
      {/* <ShoppingCart /> */}
      <Toolbar>
        <Logo margin="0 auto 0 0" />
        <Link to="/checkout">
          <IconButton>
            <Badge
              badgeContent={shop.cart.reduce((accumulator, item) => {
                return accumulator + item.quantity
              }, 0)}
              color="primary"
            >
              <RiShoppingCartLine />
            </Badge>
          </IconButton>
        </Link>
        <Link to="/account">
          <IconButton>
            <FaUserPlus />
          </IconButton>
        </Link>
        <IconButton onClick={() => setIsDrawerOpen(true)}>
          {/* <AiOutlineMenu className={classes.menuIcon} /> */}
          <AiOutlineMenu />
        </IconButton>
      </Toolbar>
      <SwipeableDrawer
        className={classes.drawer}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpen={() => setIsDrawerOpen(true)}
        anchor="right"
        // iconSize={70}
      >
        <IconButton id="closeDrawer" onClick={() => setIsDrawerOpen(false)}>
          <MdClose />
        </IconButton>
        <Logo margin="0 auto" />
        <MainNavigation />
      </SwipeableDrawer>
    </AppBar>
  )
}
