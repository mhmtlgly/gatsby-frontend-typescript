/* eslint-disable */

import React, { useState, Fragment, useEffect } from "react"
import { Link, navigate } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Button, Card, CircularProgress } from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"

import SEO from "../components/seo"
import { Layout } from "../components"
import StepperComponent from "../components/stepper"
import { useScript, useAxios, useConsole } from "../hooks"

const IndexPage = props => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const url = "https://jsonplaceholder.typicode.com/todos/1"
  const { callAPI, error, response, loading, status } = useAxios(url)

  const payPalScript = useScript(
    `https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`
  )

  useEffect(() => {
    callAPI()
  }, [])

  return (
    <Layout>
      <Box>
        <h1>HOME</h1>
        {/* <StepperComponent /> */}
        <h2>Error Message</h2>
        {JSON.stringify(error, null, 3)}
        <h2>Response Data</h2>
        <pre>{JSON.stringify(response, null, 3)}</pre>
        <h2>Loading Status</h2>
        {!loading && JSON.stringify(loading, null, 3)}
        {loading && <CircularProgress />}
        <h2>Response Status</h2>
        {JSON.stringify(status, null, 3)}
        <Button color="secondary" variant="contained" onClick={() => callAPI()}>
          fetch data
        </Button>
      </Box>
    </Layout>
  )
}

export default IndexPage
