import React, { useEffect, useState } from 'react'
import { FeaturedData, CategoryData } from '../Assets/Data'
import './FeaturedProviders.css'
import ServiceProvider from '../ServiceProvider/ServiceProvider'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

function FeaturedProviders() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,

    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

   //To fetch All providers
   const [AllProvidersData, setAllProvidersData] = useState([])
 
      //Filter Poviders based on selected service type
   const url = `https://handiworks.cosmossound.com.ng/api/skill-providers/skillproviders`
 
   //To fetch All Poviders
   useEffect(()=>{
         axios.get(url)
         .then(res => {
             setAllProvidersData(res.data.skillProviders)
         })
         .catch(dupError=> console.log("caughtError:", dupError))
   },[])


   //to get 3 fashion designer
   const featuredData = AllProvidersData ? AllProvidersData.slice(0, 9) : "";
   console.warn("featuredData:", featuredData)


  return (
    <div className="slider-container">
      <h4>Featured Service Providers</h4>
      <Slider {...settings} className="slider">
            {
                featuredData.map((provider, i) =>{
                    // const{id, image, name, skill, no_off_jobs} = featured;
                    return(
                        
                            <ServiceProvider
                                key={i}
                                id= {provider.id}
                                imagePath={provider.imagePath}
                                firstName={provider.firstName.charAt(0).toUpperCase() + provider.firstName.slice(1)+" "}
                                lastName={provider.lastName.charAt(0).toUpperCase() + provider.lastName.slice(1)}
                                serviceType={provider.serviceType}
                                isVerified={provider.isVerified}
                            />

                    )
                })
            }
      </Slider>
    </div>
  )
};

export default FeaturedProviders;