import React from 'react'
import Banner from './Banner'
import Footer from '../../components/Footer'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'

function About() {
  return (
    <div className='About'>
        <Banner />
        <Skills />
        <Projects />
        <Experience />
        <Footer />
    </div>
  )
}

export default About