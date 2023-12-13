import React from 'react'
import Banner from './Banner'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Footer from '../../components/Footer'

function About() {
  return (
    <div className='About'>
        <Banner />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
    </div>
  )
}

export default About