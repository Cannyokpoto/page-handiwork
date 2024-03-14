import React, { useContext } from 'react'
import { useParams } from "react-router-dom";
import './CSS/Provider.css'

import { HandiworkContext } from '../Components/Context/HandiworkContext'
import ProviderDetails from '../Components/ProviderDetails/ProviderDetails';
import ProviderMap from '../Components/ProviderMap/ProviderMap';

function Provider() {

    const {AllServiceProvidersData} = useContext(HandiworkContext);
    const {providerId} = useParams();
    const provider = AllServiceProvidersData.find((e)=> e.id===Number(providerId));

  return (
    <div className='provider-page'>
        <ProviderDetails provider ={provider} />
        <ProviderMap provider ={provider} />
    </div>
  )
}

export default Provider
