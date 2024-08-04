import React, {useContext, useEffect, useState} from 'react';
import { FaPhone } from "react-icons/fa";
import './ProviderMap.css'
import { Link, useParams } from "react-router-dom"
import { HandiworkContext } from '../Context/HandiworkContext'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
import axios from 'axios';



const ProviderMap = (props) => {

      // const {provider} = useContext(HandiworkContext);

      const {provider} = props;

      const {providerId} = useParams();

      const latitude = 6.65494;
      const longitude = 3.32328;

      //To fetch verified provider details
  const [eachPovider, setEachPovider] = useState(null)
  
  const [showOne, setShowOne] = useState(false)
  const handleShowOne = ()=>{
    setShowOne(!showOne)
  }


  const [showTwo, setShowTwo] = useState(false)
  const handleShowTwo = ()=>{
    setShowTwo(!showTwo)
  }


    //To fetch provider
    const url = `https://handiworks.cosmossound.com.ng/api/skill-providers/view/${providerId}`

    useEffect(()=>{
          axios.get(url)
          .then(res => {
            setEachPovider(res.data.skillProvider)
          })
          .catch(dupError=> console.log("caughtError:", dupError))
  
    },[providerId])




    // const providerProfile = AllServiceProvidersData.find((e)=> e.id===Number(profileId));
    // const provider = AllServiceProvidersData.find((e)=> e.id===Number(providerId));
  


  return (
    <div className='map-wrapper'>

        <div className="desktop-cta">
                  <div className="cta-wrapper">
                      <div className="number-wrapper">Contact 1:  
                        {
                          showOne ? 
                          <span>
                            {eachPovider !==null ? eachPovider.phone : ""}
                          </span> : ""
                        }
                        {showOne ? "" : <span>***********</span>}
                      </div>
                      <div className="call-btn" onClick={handleShowOne}>
                        <FaPhone className='phone' /> {showOne ? "Hide" : "Show"} contact
                      </div>
                  </div>

                  { eachPovider !==null && eachPovider.secondPhone !=="" && eachPovider.secondPhone !==null ?
                  <div className="cta-wrapper">
                      <div className="number-wrapper">Contact 2:  
                        {
                          showTwo ?
                          <span>
                          {eachPovider !==null ? eachPovider.secondPhone : ""}
                          </span> : ""
                        }
                        
                        { showTwo ? "" :
                          <span>***********</span> 
                        }
                      </div>
                      <div className="call-btn" onClick={handleShowTwo}>
                        <FaPhone className='phone' /> {showTwo ? "Hide" : "Show"} contact
                      </div>
                  </div> : "" }

        </div>

        <div className="cta">
                  <div className="cta-wrapper">
                      <div className="number-wrapper">Contact 1:  
                        <span>{eachPovider !==null ? eachPovider.phone.slice(0, 7) : ""}</span>
                        ****
                      </div>
                      <a href={`tel:${eachPovider && eachPovider.phone}`} className="call-btn"><FaPhone className='phone' /></a>
                  </div>

                  { eachPovider !==null && eachPovider.secondPhone !=="" && eachPovider.secondPhone !==null ?
                  <div className="cta-wrapper">
                      <div className="number-wrapper">Contact 2:  
                        <span>{eachPovider !==null ? eachPovider.secondPhone.slice(0, 7) : ""}</span>
                        ****
                      </div>
                      <a href={`tel:${eachPovider && eachPovider.secondPhone}`} className="call-btn"><FaPhone className='phone' /></a>
                  </div> : "" }

        </div>

        <div className="social-handles">
            <h5>Social Handles</h5>
            <div className="handles">
              <Link to="/"><FaFacebook className="facebook" /></Link>
              <Link to="/"><IoLogoInstagram className="instagram" /></Link>
              <Link to="/"><FaXTwitter className="witter" /></Link>
            </div>
        </div>

          
        <iframe
          title="map"
          className="my-map"
          frameBorder="0"
          src={`https://maps.google.com/maps?q=${latitude},${longitude}&h1=es;&output=embed`}
          allowFullScreen
          ></iframe>


        {/* <Link to={`/market-place/${provider.category}`} className='category-page-btn'><GoArrowLeft className='arrow-left' /> Back to {provider.category.toLowerCase()} page</Link> */}

        <Link to={`/market-place`} className='category-page-btn'><GoArrowLeft className='arrow-left' /> Back to market place</Link>

    </div>
  );
};

export default ProviderMap;