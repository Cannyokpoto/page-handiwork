import React from 'react';
import './Benefits.css'
import { FaGlobeAmericas } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { BsTools } from "react-icons/bs";

function Benefits() {
  return (
    <div className='our-benefits'>
        <h4>Benefits</h4>

        <div className="benefits">
            <span>
                <FaGlobeAmericas className='icon' />
                <h4>Global Reach</h4>
                <p>Handiwork provides service providers with the opportunity to showcase their work to a global audience, breaking down geographical barriers and expanding their client base.</p>
            </span>

            <span>
                <FaRegLightbulb className='icon' />
                <h4>Leverage Technology</h4>
                <p>By leveraging technology, Handiwork empowers service providers to adapt to the digital age, opening up new avenues for them to thrive in a competitive market.</p>
            </span>

            <span>
                <BsTools className='icon' />
                <h4>Preservation Of Crafts</h4>
                <p>Handiwork plays a crucial role in preserving traditional crafts by connecting service providers to individuals who value and appreciate their skills.</p>
            </span>
        </div>
    </div>
  )
}

export default Benefits
