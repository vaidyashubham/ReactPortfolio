import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import SEO from '../components/SEO'
import about from "../constants/about.js"
import Fade from 'react-reveal/Fade';

const About = () => {
  const { info, projectStack, title, img } = about;
  console.log(about)
  return (
    <Layout>
      <SEO title="About" description="This is home page" />
      <section className="about-page">
        <div className="section-center about-center">
          <Fade left>
            <img src={img} className="about-img" alt="" />
          </Fade>
          <Fade right>
            <article className="about-text">
              <Title title={title} />
              <p>{info}</p>
              <div className="about-stack">
                {projectStack.map((item) => {
                  return (
                    <span key={item.id} >{item.title}</span>
                  )
                })}
              </div>
            </article>
          </Fade>
        </div>
      </section>
    </Layout>
  )
}

export default About
