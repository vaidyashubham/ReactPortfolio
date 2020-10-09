import React from "react"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
import allProjects from "../constants/allprojects.js"

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projects" description="This is project page" />
      <section className="projects-page">
        <Projects projects={allProjects} title="all projects"></Projects>
      </section>
    </Layout>
  )
}

export default ProjectsPage
