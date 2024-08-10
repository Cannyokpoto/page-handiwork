import React, { useContext } from 'react'
import AboutHero from '../Components/AboutHero/AboutHero';
import Benefits from '../Components/Benefits/Benefits';
import NewsLetters from '../Components/NewsLetters/NewsLetters';
import OurFeatures from '../Components/OurFeatures/OurFeatures';
import Testimonials from '../Components/Testimonials/Testimonials';
import './CSS/AboutPage.css';
import Carousel from '../Components/TestimonialCarousel/TestimonialCarousel';
import { WelcomeBackCustomer, WelcomeBackProvider } from '../Components/Welcome/Welcome';
import ProviderWallet from '../Components/Wallet/Wallet';
import { NumberInputWithCommas } from '../Components/Test/Test';





function About() {

  return (
    <div className='about'>
      <AboutHero />
      <OurFeatures />
      <NumberInputWithCommas />
      <Benefits />
      <Testimonials />
      <NewsLetters />
    </div>
  )
}

export default About;
