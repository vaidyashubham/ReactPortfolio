import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import jobs from "../constants/jobs"

const Jobs = () => {

  const [value, setValue] = React.useState(0)
  const { company, position, date, description } = jobs[value]

  return (
    <section className="section jobs" id="jobs">
      <Title title="experience"></Title>
      <div className="jobs-center">
        {/* Btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (<button key={item.id} onClick={() => setValue(index)} className={`job-btn ${index === value && "active-btn"}`}>{item.company}</button>)
          })}
        </div>

        {/* job info */}
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
      </div>
      <Link to="/about" className="btn center-btn">more info</Link>
    </section>
  )
}

export default Jobs
