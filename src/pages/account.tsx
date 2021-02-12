import React, { Fragment, useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery, Link, navigate } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Button } from "@material-ui/core"
import { Router } from "@reach/router"
import { useSelector, useDispatch } from "react-redux"

import { VerifyAccount, VerifyAccount2 } from "../components/verifyAccount"
import {
  Layout,
  SignInForm,
  SignUpForm,
  AdminDashboard,
  BuyerDashboard,
  SellerDashboard,
} from "../components"

const useStyles = makeStyles(theme => ({
  root: {},
}))

const Account = () => {
  const classes = useStyles()
  const { authentication } = useSelector((state: any) => state)
  console.log(authentication)

  return (
    <Layout>
      <Router basepath="/account">
        <VerifyAccount path="verify" />
        <VerifyAccount2 path="verify/nested" />
      </Router>

      {/* {Object.entries(authentication).length === 0 ? (
        <Fragment>
          <h2>Account</h2>
          <Link to="/account/verify">verify</Link>
          <Link to="/account/verify/nested">verify Nested</Link>
          <SignInForm />
          <SignUpForm />
        </Fragment>
      ) : authentication.user.role === "admin" ? (
        <AdminDashboard />
      ) : authentication.user.role === "buyer" ? (
        <BuyerDashboard />
      ) : (
        <SellerDashboard />
      )}
      <Router basepath="/account">
        <VerifyAccount path="verify" />
        <VerifyAccount2 path="verify/nested" />
      </Router> */}

      {/* {Object.entries(authentication).length === 0 ? (
        <Fragment>
          <h2>Account</h2>
          <SignInForm />
          <SignUpForm />
        </Fragment>
      ) : authentication.user.role === "admin" ? (
        navigate("/account/admin")
      ) : authentication.user.role === "buyer" ? (
        navigate("/account/buyer")
      ) : (
        navigate("/account/seller")
      )}
      <Router basepath="/account">
        <AdminDashboard path="/admin" />
        <BuyerDashboard path="/buyer" />
        <SellerDashboard path="/seller" />
        <VerifyAccount path="/verify" />
      </Router> */}
    </Layout>
  )
}

export default Account
