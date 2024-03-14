import React from 'react';
import './OurFeatures.css';
import { TiTick } from "react-icons/ti";


function OurFeatures() {
  return (
    <div className='our-features'>
        <div className='left'>
            <span>
                <h4>Handiwork</h4>
                <p>Empowering artisans with digital opportunities</p>
            </span>

            <p>
            In a world driven by technology and digital innovation, traditional artisans often find it challenging to connect with potential customers and secure consistent work. However, Handiwork, a groundbreaking platform, has emerged as a bridge between skilled artisans and those seeking their unique talents. 
            </p>
            <p>Handiwork is not just a job-matching platform; it's a community 
            that celebrates and preserves traditional craftsmanship while providing artisans 
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
            <h4>Features:</h4>
            <span>
                <TiTick className='grey' />
                <p>Handiwork allows artisans to create detailed profiles showcasing their skills, experience, and a portfolio of their work.  </p>
            </span>

            <span>
                <TiTick className='grey' />
                <p>Businesses and individuals seeking artisanal services can post job listings on Handiwork. </p>
            </span>

            <span>
                <TiTick className='grey' />
                <p>Handiwork employs a sophisticated skill-matching algorithm that pairs artisans with suitable job listings based on their expertise. </p>
            </span>
        </div>
    </div>
  )
}

export default OurFeatures;
