import React from 'react'
import "./Success.css"
import { useNavigate } from "react-router-dom"
import { HandiworkContext } from "../Context/HandiworkContext";
import { useContext } from "react";
import { GoVerified } from "react-icons/go";

function Success() {
  // const {toggleSignup} = useContext(HandiworkContext)
  const{closeSignupAndRefresh} = useContext(HandiworkContext)

  
  // function closeAndRefresh(){
  //   toggleSignup()
  //   window.location.reload();
  // }

  return (
    <div className='success'>
      {/* <img src={PHOTOS.thumb} alt="thumb" /> */}
      <GoVerified className='icon' />
      <h3>Registration successful!</h3>
      <button onClick={closeSignupAndRefresh}>Ok</button>
    </div>
  )
}



function Success2() {
  const{closeLoginAndRefresh} = useContext(HandiworkContext)

  
  // function closeAndRefresh(){
  //   toggleSignup()
  //   window.location.reload();
  // }

  return (
    <div className='success'>
      {/* <img src={PHOTOS.thumb} alt="thumb" /> */}
      <GoVerified className='icon' />
      <h3>Registration successful!</h3>
      <button onClick={closeLoginAndRefresh}>Ok</button>
    </div>
  )
}

export { Success, Success2}
