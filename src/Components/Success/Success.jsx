import React from 'react'
import "./Success.css"
import { useNavigate } from "react-router-dom"
import { HandiworkContext } from "../Context/HandiworkContext";
import { useContext, useState } from "react";
import { GoVerified } from "react-icons/go";
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";

function Success() {
  // const {toggleSignup} = useContext(HandiworkContext)
  const{closeSignupAndRefresh} = useContext(HandiworkContext)


  return (
    <div className='success'>
      {/* <img src={PHOTOS.thumb} alt="thumb" /> */}
      <GoVerified className='icon' />
      <p>Registration successful!</p>
      <button onClick={closeSignupAndRefresh}>Ok</button>
    </div>
  )
}

function CustomerJourney() {
  const {handleCustomerJourney} = useContext(HandiworkContext)
  const{firstTimeCustomer} = useContext(HandiworkContext)

  function closeAndRefresh(){
    window.location.reload(false)
  }

  //To handle Logout customer
  const navigate = useNavigate()
  const edit = () =>{
    navigate(`/customer/${firstTimeCustomer ? firstTimeCustomer.customer.id : ""}`)
    window.location.reload()
  }


  return (
    <div className='customerJourney'>
      <IoMdClose className='close' onClick={closeAndRefresh}/>
      <h3>Hello, {firstTimeCustomer ? firstTimeCustomer.customer.firstName : ""}</h3>
      <p>What would you like to do today?</p>
      
      <div className='journey'>
        <div className="top">
          <Link to="/market-place" className='engage-p' 
          onClick={handleCustomerJourney}>Engage a Service provider</Link>
          
          <Link to="" className='fund-w'
           onClick={handleCustomerJourney}
          >Fund Wallet</Link>
        </div>

        <div className="bottom">
          <Link 
          // to={`/customer/${firstTimeCustomer ? firstTimeCustomer.customer.id : ""}`}
           onClick={edit}
          className='edit-p'>Edit Profile</Link>
          
          <Link to="/about" className='learn-m'
           onClick={handleCustomerJourney}
          >Learn more</Link>
        </div>
      </div>
    </div>
  )
}

function NewAdminCreation() {

  return (
    <div className='success'>
      {/* <img src={PHOTOS.thumb} alt="thumb" /> */}
      <GoVerified className='icon' />
      <p>New Admin Added Successfully!</p>
      <button>Close</button>
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

function CacSuccess() {

  const{toggleCac} = useContext(HandiworkContext)


  return (
    <div className='success'>
      {/* <GoVerified className='icon' /> */}
      <span className='cac-paragraph'>Verification file submitted successfully. 
        Your verification status will change within 48 hours, 
        if the submitted file meets our verification criteria.</span>
      <button onClick={toggleCac}>Close</button>
    </div>
  )
}

export { Success, Success2, AdminSuccess, 
  CacSuccess, NewAdminCreation, CustomerJourney}
