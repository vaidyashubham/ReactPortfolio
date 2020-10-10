import React, { useState, useEffect } from 'react';
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from '../components/SEO'
import NewProject from '../components/StartAProject'
import projects from "../constants/projects"

export default ({ data }) => {

  const rss2json = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40shubhamvaidya604";
  const [myBlog, setMyBlog] = useState([]);

  useEffect(() => {
    fetch(rss2json)
      .then(res => res.json())
      .then(data => {
        setMyBlog(data.items.slice(0, 3))
      })
  }, [rss2json]);

  return (
    <Layout>
      <SEO title="Home" description="This is home page" />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={myBlog} title="blogs" showLink></Blogs>
      <NewProject />
    </Layout>
  )
}
