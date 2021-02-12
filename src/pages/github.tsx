import React, { Fragment, useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import { Box, Button } from "@material-ui/core"

import { Layout } from "../components"
import axios from "axios"

const useStyles = makeStyles(theme => ({
  root: {},
}))

const Account = ({ location }) => {
  const classes = useStyles()
  const [token, setToken] = useState(null)

  const code = location.search.split("=").pop()

  const getGithubToken = async () => {
    const response = await axios({
      method: "POST",
      url: "http://localhost:5000/api/github",
      data: {
        code,
      },
    })
      .then(res => {
        console.log(res)
        setToken(res.data.token)
      })
      .catch(err => console.log(err))
  }

  const gitHubAccess = async () => {
    const URL = "https://api.github.com/mhmtlgly"
    const AuthStr = `Bearer ${token}`

    const response = await axios
      .get(URL, { headers: { Authorization: AuthStr } })
      .then(response => {
        // If request is good...
        console.log(response.data)
      })
      .catch(error => {
        console.log("error 3 " + error)
      })
  }

  //   const lastStep = async (token: String) => {
  //     const URL = "https://api.github.com/mhmtlgly"
  //     const AuthStr = `Bearer ${token}`
  //     const response = await axios
  //       .get(URL, { headers: { Authorization: AuthStr } })
  //       .then(response => {
  //         // If request is good...
  //         console.log(response.data)
  //       })
  //       .catch(error => {
  //         console.log("error 3 " + error)
  //       })
  //   }

  useEffect(() => {
    code && getGithubToken() && gitHubAccess()
  }, [])

  useEffect(() => console.log(token), [token])
  useEffect(() => console.log(code), [code])

  return (
    <Layout>
      <h2>GitHub Authentication Page</h2>
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`}
      >
        github
      </a>
      {/* <Button onClick={getGithubToken}>get token</Button> */}
      <h1>TOKEN</h1>
      <pre>
        <h3>{JSON.stringify(token)} </h3>
      </pre>
    </Layout>
  )
}

export default Account
