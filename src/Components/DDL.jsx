import React from 'react'
import './DDL.css'
import { serviceTypes } from "./Assets/Data";


function DDL() {

  return (
    <div className="dropdown-container">
        <label htmlFor="serviceType">Service Type</label> <br />
        <input type="text" placeholder="Search service type" 
        list="serviceType" className="custom-input" /> <br />
                                
        <datalist id="serviceType">            
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
