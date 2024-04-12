import React, { useEffect, useContext } from 'react'
import "./CSS/Home.css"
import Hero from '../Components/Hero/Hero'
import PopularCategory from '../Components/PopularCategory/PopularCategory'
import WhoWeAre from '../Components/WhoWeAre/WhoWeAre'
import VerificationReminder from '../Components/VerificationReminder/VerificationReminder'




function Home() {

  return (
    <div className='home'>
      <Hero />
      <VerificationReminder />
      <PopularCategory />
      <WhoWeAre />
    </div>
  )
}

export default Home
