import React from "react"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from '../components/SEO'

const ComponentName = ({ data }) => {
  const { content, title, desc } = data.blog

  return (
    <Layout>
      <SEO title={title} description={desc} />

      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className="btn center-btn">blog</Link>
        </div>
      </section>
    </Layout>
  )
}

export default ComponentName
