import React, { useContext, useState } from 'react'
import { HandiworkContext } from '../Context/HandiworkContext'
import "./DefaultUser.css"


function DefaultUser() {

    const {loggedinUser} = useContext(HandiworkContext)
    const {handleUserDropDown} = useContext(HandiworkContext)

  return (
    <div className='user' onClick={handleUserDropDown}>
      <h6>{loggedinUser.firstName[0]}{loggedinUser.lastName[0]}</h6>
    </div>
  )
}

export default DefaultUser
