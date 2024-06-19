import React from 'react';
import AllServiceProviders from '../Components/AllServiceProviders/AllServiceProviders';
import CategoryBox from '../Components/CategoryBox/CategoryBox';
import FeaturedProviders from '../Components/FeaturedProviders/FeaturedProviders';
import SearchBar from '../Components/SearchBar/SearchBar';
import './CSS/MarketPlace.css';

function MarketPlace() {
  return (
    <div className='market-place'>
      <AllServiceProviders />
    </div>
  )
}

export default MarketPlace;
