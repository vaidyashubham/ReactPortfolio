import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import jobs from "../constants/jobs"
import Fade from 'react-reveal/Fade';

const Jobs = () => {

  const [value, setValue] = React.useState(0)
  const { company, position, date, description } = jobs[value]

  return (
    <section className="section jobs" id="jobs">
      <Title title="experience"></Title>
      <div className="jobs-center">
        {/* Btn container */}
        <Fade left>
          <div className="btn-container">
            {jobs.map((item, index) => {
              return (<button key={item.id} onClick={() => setValue(index)} className={`job-btn ${index === value && "active-btn"}`}>{item.company}</button>)
            })}
          </div>
        </Fade>

        {/* job info */}
        <Fade right>
          <article className="job-info">
            <h3>{position}</h3>
            <h4>{company}</h4>
            <p className="job-date">{date}</p>
            {description.map((item) => {
              return (
                <div key={item.id} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{item.name}</p>
                </div>
              )
            })}
          </article>
        </Fade>
      </div>
      <Link to="/about" className="btn center-btn">more info</Link>
    </section>
  )
}

export default Jobs
