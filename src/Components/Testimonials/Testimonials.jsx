import './Testimonials.css'
import { TestimonialData } from '../Assets/Data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Client from '../Client/Client';
import TestimonialCarousel from '../TestimonialCarousel/TestimonialCarousel';
import React, { useEffect, useState } from 'react';

function Testimonials() {

  return (
        
    <div className="my-container">

        <h4 className="tag">What people say about us</h4>

        <TestimonialCarousel />
    </div>

  )
}

export default Testimonials
