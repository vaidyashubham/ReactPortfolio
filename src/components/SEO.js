import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title, description }) => {

  return <Helmet htmlAttributes={{ lang: "en" }} title={`${title}`}>
    <meta name="description" content={description} />
    <meta name="image" />
  </Helmet>
}

export default SEO
