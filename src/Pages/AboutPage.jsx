import React, { useContext } from 'react'
import AboutHero from '../Components/AboutHero/AboutHero';
import Benefits from '../Components/Benefits/Benefits';
import NewsLetters from '../Components/NewsLetters/NewsLetters';
import OurFeatures from '../Components/OurFeatures/OurFeatures';
import Testimonials from '../Components/Testimonials/Testimonials';
import './CSS/AboutPage.css';
import Carousel from '../Components/TestimonialCarousel/TestimonialCarousel';

function About() {

  return (
    <div className='about'>
      <AboutHero />
      <OurFeatures />
      <Benefits />
      <Testimonials />
      {/* <Carousel /> */}
      <NewsLetters />
    </div>
  )
}

export default About;
