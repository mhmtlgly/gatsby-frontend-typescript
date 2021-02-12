import React, { Fragment, useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery, Link, navigate } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Button } from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"

export const SellerDashboard = props => {
  const { authentication } = useSelector((state: any) => state)
  const dispatch = useDispatch()
  if (Object.entries(authentication).length !== 0) {
    const { user } = authentication
    const { role, email } = user
    return (
      <Fragment>
        <h1>SELLER DASHBOARD</h1>
        <Button variant="contained" color="secondary">
          logout
        </Button>
      </Fragment>
    )
  } else {
    navigate("/account")
    return null
  }
}
