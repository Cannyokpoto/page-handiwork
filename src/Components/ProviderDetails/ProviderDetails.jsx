import React, { useContext, useState, useEffect } from 'react';
import './ProviderDetails.css'
import { IoLocationOutline } from "react-icons/io5";
import { HandiworkContext } from '../Context/HandiworkContext';
import { useParams } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import axios from 'axios';
import { GoArrowLeft } from "react-icons/go";



function ProviderDetails({ provider }) {

  const {adminAction} = useContext(HandiworkContext)
  const {fetchedProvider} = useContext(HandiworkContext)
  // const {provider} = props;

  const { providerId } = useParams();

  // const {provider} = useContext(HandiworkContext);

  //To fetch verified provider details
  const [eachPovider, setEachPovider] = useState({})
  console.warn("eachPovider:", eachPovider)

  const [verificationStatus, setVerificationStatus] = useState("")
  console.warn("verificationStatus:", verificationStatus)


    //To fetch provider

    const url = `https://handiworks.cosmossound.com.ng/api/skill-providers/view/${providerId}`


    useEffect(()=>{
          axios.get(url)
          .then(res => {
            setEachPovider(res.data.skillProvider)
          })
          .catch(dupError=> console.log("caughtError:", dupError))
  
    },[providerId])
    
    //To fetch provider's verification status
    
  useEffect(()=>{
      async function fetchVerifiedPovider(){
  
          const url = `https://handiworks.cosmossound.com.ng/api/skill-providers/view/${provider.id}`
        
          try {
              
             const response = await axios.get(url)
             if(response.status >= 200 && response.status < 300){
              setVerificationStatus(response.data.skillProvider.isVerified)
            }
        
          }catch (dupError) {
              console.log("caughtError:", dupError.message)
        
          }
        
      }
  
      fetchVerifiedPovider()
  }, [])

  return (
    <div className="provider">
        <div className='provider-hero'>
            { eachPovider.isVerified=="accept" ? 
            <p className='verified'>Verified</p> : <p>Not Verified</p> }
            
            <GoArrowLeft className='back' />
            
            <div className="namePhoto">
              <img 
              src={`https://handiworks.cosmossound.com.ng/${eachPovider.imagePath}`} 
              alt="display photo" className='dp' />

              { eachPovider.isVerified=="accept" ? 
              <MdVerified className='my-badge' /> : ""}

              <h4 className='name'>{eachPovider.firstName} {eachPovider.lastName}</h4>
            </div>
        </div>

        <div className="provider-details">
            <h5>About</h5>

             <p>{typeof eachPovider.about==="string" ? eachPovider.about.charAt(0).toUpperCase() + eachPovider.about.slice(1) : "Anything"}</p> 
            
            <h5>Contact Information</h5>

            <p><IoLocationOutline className='locate' /> {eachPovider.address}</p>
        </div>
    </div>
  )
}

export default ProviderDetails;
