import React, { createContext, useState } from 'react';
import { AllServiceProvidersData } from '../Assets/Data';


export const HandiworkContext = createContext(null);
//Remember to import useParams in the child component; where you're going to use this context.

function HandiworkContextProvider(props) {
    
    const contextValue = { AllServiceProvidersData }

  return (
    <HandiworkContext.Provider value= {contextValue}>
        {props.children}
    </HandiworkContext.Provider>
  )
}

export default HandiworkContextProvider;
