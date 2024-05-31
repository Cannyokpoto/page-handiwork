import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import './CSS/Provider.css'
import { HandiworkContext } from '../Components/Context/HandiworkContext'
import ProviderDetails from '../Components/ProviderDetails/ProviderDetails';
import ProviderMap from '../Components/ProviderMap/ProviderMap';
import axios from 'axios';


function Provider() {

    // const {AllServiceProvidersData} = useContext(HandiworkContext);

    // const [serviceProviderData, setServiceProviderData] = useState({})
    // console.warn("serviceProviderData:", serviceProviderData)

    // const { providerId } = useParams();
    // const provider = serviceProviderData.id;


     //To fetch provider
  // const url = `https://handiworks.cosmossound.com.ng/api/skill-providers/view/${providerId}`

  //To fetch All Poviders
  // useEffect(()=>{
  //       axios.get(url)
  //       .then(res => {
  //         setServiceProviderData(res.data.skillProvider)
  //       })
  //       .catch(dupError=> console.log("caughtError:", dupError))

  // },[providerId])

    

  return (
    <div className='provider-page'>
        <ProviderDetails 
        // provider ={ serviceProviderData } 
        />
        <ProviderMap 
        // provider ={provider} 
        />
        {/* Params: {JSON.stringify(params)} */}
    </div>
  )
}

export default Provider
