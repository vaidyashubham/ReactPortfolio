import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Zoom from 'react-reveal/Zoom';

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="This is contact page" />
      <section className="contact-page">
        <Zoom>
          <article className="contact-form">
            <h3>I’m excited to learn about your project. Ready to get started?</h3>
            <form action="https://formspree.io/mwkrlbev" method="POST">
              <div className="form-group">
                <input type="text" name="name" placeholder="name" className="form-control" />
                <input type="email" name="email" placeholder="email" className="form-control" />
                <textarea className="form-control" name="message" rows="5" placeholder="Additional Details"></textarea>
              </div>
              <button type="submit" className="submit-btn btn">Submit here!</button>
            </form>
          </article>
        </Zoom>
      </section>
    </Layout>
  )
}

export default contact
