import React from 'react';
import AllServiceProviders from '../Components/AllServiceProviders/AllServiceProviders';
import CategoryBox from '../Components/CategoryBox/CategoryBox';
import FeaturedProviders from '../Components/FeaturedProviders/FeaturedProviders';
import LSearchBar from '../Components/LSearchBar/LSearchBar';
import './CSS/MarketPlace.css';

function MarketPlace() {
  return (
    <div className='market-place'>
      <CategoryBox />
      <FeaturedProviders />
      <LSearchBar />
      <AllServiceProviders />
      {/* <IndividualCategory /> */}
    </div>
  )
}

export default MarketPlace;
