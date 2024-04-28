import React from 'react'
import "./Welcome.css"
import { useNavigate } from "react-router-dom"
import { HandiworkContext } from "../Context/HandiworkContext";
import { useContext } from "react";

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

export {Welcome, RejectedCustomer, RejectedProvider}
