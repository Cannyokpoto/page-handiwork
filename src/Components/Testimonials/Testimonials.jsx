import React from 'react'
import './Testimonials.css'
import { TestimonialData } from '../Assets/Data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Client from '../Test/Client';

function Testimonials() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",

  };

  return (
        
    <div className="my-container">

        <h4 className="tag">What people say about us</h4>

        <Slider {...settings}>

          {
              TestimonialData.map((Testimonial, i) =>{
                  // const{ fName, lName, image, testimonial } = Testimonial;
                  return(
                    <Client 
                      key = {i}
                      image = {Testimonial.image}
                      testimonial = {Testimonial.testimonial}
                      fName = {Testimonial.fName}
                      lName = {Testimonial.lName}
                    />
                  )
              })
          }
        </Slider>
    </div>

  )
}

export default Testimonials
