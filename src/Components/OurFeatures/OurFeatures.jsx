import React from 'react';
import './OurFeatures.css';
import { TiTick } from "react-icons/ti";


function OurFeatures() {
  return (
    <div className='our-features'>
        <div className='left'>
            <span>
                <h4>Handiwork</h4>
                <p>Empowering service providers with digital opportunities</p>
            </span>

            <p>
            In a world driven by technology and digital innovation, traditional service providers often find it challenging to connect with potential customers and secure consistent work. However, Handiwork, a groundbreaking platform, has emerged as a bridge between skilled service providers and those seeking their unique talents. 
            </p>
            <p>Handiwork is not just a job-matching platform; it's a community 
            that celebrates and preserves traditional craftsmanship while providing service providers 
            with a sustainable source of income.</p>
        </div>

        <div className='center'>
            <span className='red'></span>
            <hr />
            <span></span>
            <hr />
            <span></span>
        </div>

        <div className='right'>
            <h4>Our Features</h4>
            <span>
                <TiTick className='grey' />
                <p>Handiwork allows service providers to create detailed profiles showcasing their skills, experience, and a portfolio of their work.  </p>
            </span>

            <span>
                <TiTick className='grey' />
                <p>Businesses and individuals seeking service providers can post job listings on Handiwork. </p>
            </span>

            <span>
                <TiTick className='grey' />
                <p>Handiwork employs a sophisticated skill-matching algorithm that pairs service providers with suitable job listings based on their expertise. </p>
            </span>
        </div>
    </div>
  )
}

export default OurFeatures;
