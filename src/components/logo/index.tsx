/* eslint-disable */

import React, { Fragment, useEffect, useState, useRef } from "react"
import { Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    margin: props => props.margin,
  },
}))

export const Logo = props => {
  const classes = useStyles(props)
  return (
    <Link id="logo" className={classes.root} to="/">
      <svg
        height="50px"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M128 160c0-8.832-7.168-16-16-16H16c-8.832 0-16 7.168-16 16s7.168 16 16 16h96c8.832 0 16-7.168 16-16zM112 208H48c-8.832 0-16 7.168-16 16s7.168 16 16 16h64c8.832 0 16-7.168 16-16s-7.168-16-16-16zM112 272H80c-8.832 0-16 7.168-16 16s7.168 16 16 16h32c8.832 0 16-7.168 16-16s-7.168-16-16-16z"
          fill="#ffc107"
        />
        <path
          d="M509.73 263.78l-48-80a15.964 15.964 0 00-13.728-7.776h-112c-8.832 0-16 7.168-16 16v160c0 8.832 7.168 16 16 16h160c8.832 0 16-7.168 16-16v-80c0-2.912-.768-5.76-2.272-8.224z"
          fill="#f44336"
        />
        <path fill="#fafafa" d="M384 208h54.94l38.4 64H384z" />
        <path
          d="M336 112H112c-8.832 0-16 7.168-16 16v224c0 8.832 7.168 16 16 16h240V128c0-8.832-7.168-16-16-16z"
          fill="#ffc107"
        />
        <circle cx={432} cy={352} r={32} fill="#fafafa" />
        <path
          d="M432 400c-26.464 0-48-21.536-48-48s21.536-48 48-48 48 21.536 48 48-21.536 48-48 48zm0-64c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z"
          fill="#455a64"
        />
        <path
          d="M352 368H112c-8.832 0-16-7.168-16-16v-48h256v64z"
          fill="#f44336"
        />
        <circle cx={208} cy={352} r={32} fill="#fafafa" />
        <path
          d="M208 400c-26.464 0-48-21.536-48-48s21.536-48 48-48 48 21.536 48 48-21.536 48-48 48zm0-64c-8.832 0-16 7.2-16 16s7.168 16 16 16 16-7.2 16-16-7.168-16-16-16z"
          fill="#455a64"
        />
      </svg>
    </Link>
  )
}
