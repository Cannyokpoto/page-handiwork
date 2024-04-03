import React, {useContext} from 'react';
import { FaPhone } from "react-icons/fa";
import './ProviderMap.css'
import { Link, useParams } from "react-router-dom"
import { HandiworkContext } from '../Context/HandiworkContext'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

                      //remember to replace props as argument
const ProviderMap = (props) => {

      // const {provider} = useContext(HandiworkContext);

      const {provider} = props;

      const {providerId} = useParams();



      // const {AllServiceProvidersData} = useContext(HandiworkContext);
    // const {profileId} = useParams();
    // const providerProfile = AllServiceProvidersData.find((e)=> e.id===Number(profileId));
    // const provider = AllServiceProvidersData.find((e)=> e.id===Number(providerId));
  


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
              <div className="number-wrapper">Contact no 1:  <span>{provider.phoneNumber.slice(0, 10)}</span> ****</div>
              <a href={`tel:${provider.phoneNumber}`} className="call-btn"><FaPhone className='phone' /></a>
          </div>
          <div className="cta-wrapper">
              <div className="number-wrapper">Contact no 2:  <span>{provider.phoneNumber.slice(0, 10)}</span> ****</div>
              <a href={`tel:${provider.phoneNumber}`} className="call-btn"><FaPhone className='phone' /></a>
          </div>
        </div>

        <div className="social-handles">
            <h5>Social Handles</h5>
            <div className="handles">
              <Link to="/"><FaFacebook className="facebook" /></Link>
              <Link to="/"><IoLogoInstagram className="instagram" /></Link>
              <Link to="/"><FaXTwitter className="witter" /></Link>
            </div>
        </div>

        <Link to={`/market-place/${provider.category}`} className='category-page-btn'>Back to {provider.category.toLowerCase()} page</Link>

        <Link to={`/market-place/profile/${providerId}`} className='category-page-btn' key={props.id}>Edit my page</Link>

    </div>
  );
};

export default ProviderMap;