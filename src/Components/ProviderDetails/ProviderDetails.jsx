import React from 'react';
import './ProviderDetails.css'
import { IoLocationOutline } from "react-icons/io5";


function ProviderDetails(props) {

  const {provider} = props;

  return (
    

    <div class="provider">
        <div class='provider-hero'>
            <img src={provider.categoryImage} alt="cover" className='cover' />
            <img src={provider.image} alt="dp" className='dp' />
            <h4>{provider.name}</h4>
        </div>

        <div class="provider-details">
            <h5>About</h5>

            <p>{provider.about}</p>
            
            <h5>Contact Information</h5>

            <p><IoLocationOutline className='locate' /> {provider.address}</p>
        </div>
    </div>
  )
}

export default ProviderDetails;
