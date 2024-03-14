import React from 'react'
import { FeaturedData, CategoryData } from '../Assets/Data'
import './FeaturedProviders.css'
import ServiceProvider from '../ServiceProvider/ServiceProvider'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <h4>Featured Service Providers</h4>
      <Slider {...settings} className="slider">
            {
                CategoryData.map((featured, i) =>{
                    // const{id, image, name, skill, no_off_jobs} = featured;
                    return(
                        
                            <ServiceProvider
                                key={i}
                                id= {featured.id}
                                image={featured.image}
                                name={featured.name}
                                skill={featured.skill}
                                no_off_jobs={featured.no_off_jobs}
                            />

                    )
                })
            }
      </Slider>
    </div>
  )
};

export default FeaturedProviders;