import React from 'react'
import "./Welcome.css"
import { HandiworkContext } from "../Context/HandiworkContext";
import { useContext } from "react";

function Welcome() {
    const {toggleSignup} = useContext(HandiworkContext)
    function closeAndRefresh(){
        toggleSignup()
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
