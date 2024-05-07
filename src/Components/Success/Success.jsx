import React from 'react'
import "./Success.css"
import { useNavigate } from "react-router-dom"
import { HandiworkContext } from "../Context/HandiworkContext";
import { useContext, useState } from "react";
import { GoVerified } from "react-icons/go";
import { Link } from 'react-router-dom';

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
      <p>Registration successful!</p>
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
      <p>Registration successful!</p>
      <button onClick={closeLoginAndRefresh}>Ok</button>
    </div>
  )
}

function AdminSuccess() {

  const{handleProceed} = useContext(HandiworkContext)

  return (
    <div className='success'>
      {/* <img src={PHOTOS.thumb} alt="thumb" /> */}
      <GoVerified className='icon' />
      <p>Registration successful! Proceed to login</p>
      <Link to="/admin/login" onClick={handleProceed}>Ok</Link>
    </div>
  )
}

export { Success, Success2, AdminSuccess}
