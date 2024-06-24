import React from 'react';
import AllServiceProviders from '../Components/AllServiceProviders/AllServiceProviders';
import { SecondCategoryBox } from '../Components/CategoryBox/CategoryBox';
// import FeaturedProviders from '../Components/FeaturedProviders/FeaturedProviders';
// import SearchBar from '../Components/SearchBar/SearchBar';
import './CSS/MarketPlace.css';

function MarketPlace() {
  return (
    <div className='market-place'>
      <SecondCategoryBox />
      <AllServiceProviders />
    </div>
  )
}

export default MarketPlace;
