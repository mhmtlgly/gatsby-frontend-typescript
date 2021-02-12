import React, { Fragment, useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery, Link, navigate } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Button } from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"

export const AdminDashboard = props => {
  const { authentication } = useSelector(state => state)
  const dispatch = useDispatch()
  if (Object.entries(authentication).length !== 0) {
    const { user } = authentication
    const { role, email } = user
    return (
      <Fragment>
        <h1>ADMIN DASHBOARD</h1>
        <h3>hello {email} </h3>
        <p>
          Your role in this company is: <strong> {role} </strong>
        </p>
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
