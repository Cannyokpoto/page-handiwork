import React, { useContext, useEffect, useState } from 'react';
import './ServiceProvider.css';
import { MdVerified } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { HandiworkContext } from '../Context/HandiworkContext';
import axios from 'axios';



function ServiceProvider(provider) {

    const {adminAction} = useContext(HandiworkContext)
    const {loggedinProvider} = useContext(HandiworkContext)
    const {fetchedProvider} = useContext(HandiworkContext)

    //To fetch verified provider details
    const [verificationStatus, setVerificationStatus] = useState("")
    
    
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
    }, []);

  return (
      <Link to={`/market-place/provider/${provider.id}`}  className="category" key={provider.id}>
          <div className='photo'>
              <img src={`https://handiworks.cosmossound.com.ng/${provider.imagePath}`} alt="profile-photo" />
              { provider.isVerified=="accept" ? <MdVerified className='ver-badge' /> : ""}
          </div>

          <div className="details">
              <h5>{provider.firstName} 
              
              {provider.lastName}</h5>

              <h6>{provider.serviceType}</h6>
              {/* <h3>{props.no_off_jobs}+</h3> */}
              {provider.isVerified== "accept" ? 
              <p className='verified'>Verified</p> : <p className='notVerified'>Not Verified</p>}
          
              {/* <div className="stars">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
              </div> */}
          </div>
      </Link>
  )
}

export default ServiceProvider;
