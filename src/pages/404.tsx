import React, { Fragment } from "react"

import { graphql, useStaticQuery, Link } from "gatsby"

import SEO from "../components/seo"

import { Layout } from "../components"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <Link to="/">Back to Homepage</Link>
  </Layout>
)

export default NotFoundPage
