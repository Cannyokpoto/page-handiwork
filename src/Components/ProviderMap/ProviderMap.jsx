import React from 'react';
import { FaPhone } from "react-icons/fa";
import './ProviderMap.css'
import { Link } from "react-router-dom"

const ProviderMap = (props) => {

      // const latitude = 6.65494;
      // const  longitude = 3.32328;

      const {provider} = props;
  

  return (
    <div className='map-wrapper'>
          
        <iframe
          title="map"
          className="my-map"
          frameBorder="0"
          src={`https://maps.google.com/maps?q=${provider.latitude},${provider.longitude}&h1=es;&output=embed`}
          allowFullScreen
          ></iframe>

      
        <div className="cta">
          <div className="cta-wrapper">
              <div className="number-wrapper">contact no 1:  <span>{provider.phoneNumber.slice(0, 10)}</span> ****</div>
              <a href={`tel:${provider.phoneNumber}`} className="call-btn"><FaPhone className='phone' /></a>
          </div>
          <div className="cta-wrapper">
              <div className="number-wrapper">contact no 2:  <span>{provider.phoneNumber.slice(0, 10)}</span> ****</div>
              <a href={`tel:${provider.phoneNumber}`} className="call-btn"><FaPhone className='phone' /></a>
          </div>
        </div>

        <Link to="/market-place" className='category-page-btn'>Back to {provider.category.toLowerCase()} page</Link>
    </div>
  );
};

export default ProviderMap;