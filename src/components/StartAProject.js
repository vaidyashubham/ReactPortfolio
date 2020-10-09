import React from 'react'
import { Link } from "react-router-dom"

const StartAProject = () => {
  return (
    <section className="section new-projects">
      <div className="section-center blogs-center">
        <h2>Any new project?</h2>
        <span>Interested in working together? We should queue up a chat. I’ll buy the coffee.</span>
        <Link to="/contact" className="btn contact-me">Contact Me</Link>
      </div>
    </section>
  )
}

export default StartAProject
