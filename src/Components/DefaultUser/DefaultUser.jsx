import React, { useContext, useState, useEffect } from 'react'
import { HandiworkContext } from '../Context/HandiworkContext'
import "./DefaultUser.css"


function DefaultUser() {

    const {loggedinProvider} = useContext(HandiworkContext)
    const {handleUserDropDown} = useContext(HandiworkContext)
    const {dropDownRef} = useContext(HandiworkContext)
    const {closeUserDropDown} = useContext(HandiworkContext)
    
    

  return (
    <div ref={dropDownRef} className='user' onClick={handleUserDropDown}>
      <h6>{loggedinProvider ? loggedinProvider.skillProvider.firstName.toUpperCase().charAt(0) + loggedinProvider.skillProvider.lastName.toUpperCase().charAt(0) : ""}</h6>
    </div>
  )
}

export default DefaultUser
