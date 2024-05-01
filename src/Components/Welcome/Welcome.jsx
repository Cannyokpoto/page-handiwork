import React from 'react'
import "./Welcome.css"
import { useNavigate } from "react-router-dom"
import { HandiworkContext } from "../Context/HandiworkContext";
import { useContext, useState } from "react";

function Welcome() {

    // const navigate = useNavigate()
    const {toggleSignup} = useContext(HandiworkContext)

    function closeAndRefresh(){
        // toggleSignup()
        // navigate("/")
        window.location.reload();
      }

  return (
    <div className='welcome'>
      <p>Welcome back!</p>
      <button onClick={closeAndRefresh}>Ok</button>
    </div>
  )
}

function RejectedCustomer() {

  const {handleRejectedCustomer} = useContext(HandiworkContext)


return (
  <div className='welcome'>
    <p>Sorry, you're not registered as a customer.</p>
    <button onClick={handleRejectedCustomer}>Ok</button>
  </div>
)
}

function RejectedProvider() {

  const {handleRejectedProvider} = useContext(HandiworkContext)

  return (
    <div className='welcome'>
      <p>Sorry, you're not registered as a provider.</p>
      <button onClick={handleRejectedProvider}>Ok</button>
    </div>
  )
}

function UpdateSuccess() {

  const reload = () =>{
    window.location.reload(false)
  }

  return (
    <div className='welcome'>
      <p>Profile updated successfully. Please reload to see changes.</p>
      <button onClick={reload}>Ok</button>
    </div>
  )
}

function UpdateFailed() {

  const [hideMessage, setHideMessage] = useState(false)

  return (
    <div className={ hideMessage ? "hide-field" : 'welcome'}>
      <p>Failed to update profile. Please try again.</p>
      <button onClick={() =>setHideMessage(true)}>Ok</button>
    </div>
  )
}

export {Welcome, RejectedCustomer, RejectedProvider, UpdateSuccess, UpdateFailed}
