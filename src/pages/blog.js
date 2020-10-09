import React, { useState, useEffect } from 'react';
import Layout from "../components/Layout"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Blog = () => {

  const rss2json = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40shubhamvaidya604";
  const [myBlog, setMyBlog] = useState([]);

  useEffect(() => {
    fetch(rss2json)
      .then(res => res.json())
      .then(data => {
        setMyBlog(data.items)
        console.log(data.items)
      })
  }, [rss2json]);

  return (
    <Layout>
      <SEO title="Blogs" description="This is blogs page" />
      <section className="blog-page">
        <Blogs blogs={myBlog} title="blog"></Blogs>
      </section>
    </Layout>
  )
}

export default Blog
