import React from 'react'
import "./Welcome.css"
import { useNavigate } from "react-router-dom";
import { HandiworkContext } from "../Context/HandiworkContext";
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import PHOTOS from '../images';


function Welcome() {

    const navigate = useNavigate()
    const {toggleSignup} = useContext(HandiworkContext)

    function closeAndRefresh(){
        // toggleSignup()
        navigate("/")
        window.location.reload(false)
      }

  return (
    <div className='welcome'>
      <p>Welcome back!</p>
      <button onClick={closeAndRefresh}>Ok</button>
    </div>
  )
}

function WelcomeBackAdmin() {

  const navigate = useNavigate()

  function closeAndRefresh(){
      navigate("/admin/dashboard")
      window.location.reload(false)
    }

return (
  <div className='welcome'>
    <p>Welcome back!</p>
    <button onClick={closeAndRefresh}>Close</button>
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

// function AdminWelcome() {

//   const {handleProceed} = useContext(HandiworkContext)

//   function closeAndRefresh(){
//       // toggleSignup()
//       // navigate("/")
//       window.location.reload();
//     }

// return (
//   <div className='welcome'>
//     <p>Welcome back!</p>
//     <button onClick={handleProceed}>Ok</button>
//   </div>
// )
// }

function AdminWelcome() {

  const{handleProceed} = useContext(HandiworkContext)

  return (
    <div className='admin-welcome'>
      <img className='photo' src={PHOTOS.hospitality} alt="photo" />
      
      <p className="hello">Hello Admin,</p>

      <span className="greet">Welcome to your dashboard</span>
      <button>Get started</button>
    </div>
  )
}

export {Welcome, RejectedCustomer, RejectedProvider, 
  UpdateSuccess, UpdateFailed, AdminWelcome, WelcomeBackAdmin}
