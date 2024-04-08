import React, { useEffect, useContext } from 'react'
import "./CSS/Home.css"
import Hero from '../Components/Hero/Hero'
import PopularCategory from '../Components/PopularCategory/PopularCategory'
import WhoWeAre from '../Components/WhoWeAre/WhoWeAre'
import { HandiworkContext } from '../Components/Context/HandiworkContext'




function Home() {

  return (
    <div className='home'>
      <Hero />
      <PopularCategory />
      <WhoWeAre />
    </div>
  )
}

export default Home
