import React from 'react'
import PHOTOS from '../images'
import "./Success.css"
import { HandiworkContext } from "../Context/HandiworkContext";
import { useContext } from "react";

function Success() {
  const {toggleSignup} = useContext(HandiworkContext)
  return (
    <div className='success'>
      <img src={PHOTOS.thumb} alt="thumb" />
      <h3>Registration successful!</h3>
      <button onClick={toggleSignup}>Ok</button>
    </div>
  )
}

export default Success
