import React, { useContext } from 'react'
import AboutHero from '../Components/AboutHero/AboutHero';
import Benefits from '../Components/Benefits/Benefits';
import NewsLetters from '../Components/NewsLetters/NewsLetters';
import OurFeatures from '../Components/OurFeatures/OurFeatures';
import Testimonials from '../Components/Testimonials/Testimonials';
import './CSS/AboutPage.css';

function About() {

  return (
    <div className='about'>
      <AboutHero />
      <OurFeatures />
      <Benefits />
      <Testimonials />
      <NewsLetters />
    </div>
  )
}

export default About;
