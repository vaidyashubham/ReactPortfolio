import React from "react"
import { Helmet } from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  // const { site } = useStaticQuery(query)
  // const { siteTitle, siteDesc, image } = site.siteMetadata

  return <Helmet htmlAttributes={{ lang: "en" }} title={`${title}`}>
    <meta name="description" content={description} />
    <meta name="image"  />
  </Helmet>
}

export default SEO
