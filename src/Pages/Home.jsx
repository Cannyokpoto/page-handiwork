import React, { useEffect, useContext } from 'react'
import "./CSS/Home.css"
import Hero from '../Components/Hero/Hero'
import PopularCategory from '../Components/PopularCategory/PopularCategory'
import WhoWeAre from '../Components/WhoWeAre/WhoWeAre'
import {CategoryBox} from '../Components/CategoryBox/CategoryBox'


function Home() {

  return (
    <div className='home'>
      <Hero />
      <PopularCategory />
      <CategoryBox />
      <WhoWeAre />
    </div>
  )
}

export default Home
