import React from "react"
import Title from "./Title"
import services from "../constants/services"
import Zoom from 'react-reveal/Zoom';

const Services = () => {
  return (
    <section className="section bg-gray services">
      <Title title="services" />
      <div className="section-center services-center">
        {services.map(service => {
          const { id, icon, title, text } = service
          return (
            <Zoom>
              <article key={id} className="service">
                {icon}
                <h4>{title}</h4>
                <div className="underline"></div>
                <p>{text}</p>
              </article>
            </Zoom>
          )
        })}
      </div>
    </section>
  )
}

export default Services
