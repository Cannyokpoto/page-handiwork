import React, { createContext, useState } from 'react';
import { AllServiceProvidersData } from '../Assets/Data';


export const HandiworkContext = createContext(null);
//Remember to import useParams in the child component; where you're going to use this context.

function HandiworkContextProvider(props) {

  //function to retrieve states and cities

async function fetchStates(){
  // e.preventDefault()

  //API Integration for states

try {
  const response = await fetch("https://nigeria-states-towns-lga.onrender.com/api/states")

  if(!response.ok){
      throw new Error("can't get states at the moment")
  }


  let stateData = await response.json()

  // console.warn('States', stateData)
  


}catch (stateError) {
  // console.log(stateError)
}

//API Integration for cities
  
}
// fetchStates();


    
  const contextValue = { AllServiceProvidersData }

    

  return (
    <HandiworkContext.Provider value= { contextValue }>
        {props.children}
    </HandiworkContext.Provider>
  )
}

export default HandiworkContextProvider;
