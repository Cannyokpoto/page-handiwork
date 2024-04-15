import React from 'react'
import "./Welcome.css"
import { useNavigate } from "react-router-dom"
import { HandiworkContext } from "../Context/HandiworkContext";
import { useContext } from "react";

function Welcome() {

    const navigate = useNavigate()
    const {toggleSignup} = useContext(HandiworkContext)

    function closeAndRefresh(){
        toggleSignup()
        navigate("/")
        window.location.reload();
      }

  return (
    <div className='welcome'>
      <h3>Welcome back!</h3>
      <button onClick={closeAndRefresh}>Ok</button>
    </div>
  )
}

export default Welcome
