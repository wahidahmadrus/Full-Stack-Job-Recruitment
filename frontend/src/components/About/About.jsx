import React from 'react'
import './About.css'
const About = () => {
  return (
    <section className='about' id="about">
      <div>
        <span>Why teams use us</span>
        <h2>Recruitment that keeps momentum.</h2>
      </div>
      <div className='about-content'>
        <p>
          Job Recruitment helps candidates and employers move through hiring with less friction. Employers can publish roles, candidates can search openings quickly, and both sides get a simpler path to the right match.
        </p>
        <div className='about-grid'>
          <article>
            <strong>Focused search</strong>
            <p>Find roles by title, skill, description, or location.</p>
          </article>
          <article>
            <strong>Employer tools</strong>
            <p>Post openings and manage listings from one place.</p>
          </article>
          <article>
            <strong>Direct apply</strong>
            <p>Send candidates straight to the application destination.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
