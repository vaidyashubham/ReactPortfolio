import React from "react"
import { Link } from 'react-router-dom'
import SocialLinks from "../constants/socialLinks"
import HeroImg from "../assets/dark-hero.svg"
import DarkModeToggle from "./DarkModeToggle"

const Hero = () => {

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h2>Hi</h2>
            <div className="underline"></div>
            <h1>I'm Shubham</h1>
            <h3>A proud Web Designer <br />& Developer</h3>
            <DarkModeToggle />
            <Link to="/contact" className="btn">Contact Me</Link>
            <SocialLinks />
          </div>
        </article>
        <img className="hero-img" src={HeroImg} alt="" />
      </div>
    </header>
  )
}

export default Hero