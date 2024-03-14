import React from 'react'
import "./CSS/Home.css"
import Hero from '../Components/Hero/Hero'
import TopCategory from '../Components/TopCategory/TopCategory'
import WhoWeAre from '../Components/WhoWeAre/WhoWeAre'



function Home() {
  return (
    <div className='home'>
      <Hero />
      <TopCategory />
      <WhoWeAre />
    </div>
  )
}

export default Home
