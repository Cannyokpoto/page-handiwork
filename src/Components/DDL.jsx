import React from 'react'
import { HandiworkContext } from './Context/HandiworkContext'
import { serviceTypes } from "./Assets/Data";


function DDL() {

  return (
    <div>
        <label htmlFor="serviceType">Service Type</label> <br />
        <input type="text" placeholder="Search service type" 
        list="serviceType" /> <br />
                                
        <datalist id="serviceType">
            <option value="">--Service Type--</option>
            
            {
                serviceTypes.map((option, i) =>(
                    <option key={i} value={option}>{option}</option>
                ))
            }
            <option value="Other">Other</option>
        </datalist>
    </div>
  )
}

export default DDL
