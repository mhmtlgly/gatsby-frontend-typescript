import React, { Fragment, useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery, Link, navigate } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Button } from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { useAxios } from "../../hooks/useAxios"

export const VerifyAccount = props => {
  const url = "http://localhost:5000/api/authentication/verify"
  const { callAPI, error, status, loading, response } = useAxios(url)
  useEffect(() => {
    console.log("making request")
    callAPI()
  }, [])
  return <h2>Verify Account</h2>
}

export const VerifyAccount2 = props => {
  const url = "http://localhost:5000/api/authentication/verify"
  const { callAPI, error, status, loading, response } = useAxios(url)
  useEffect(() => {
    console.log("making request")
    callAPI()
  }, [])
  return <h2>Verify Account nested</h2>
}
