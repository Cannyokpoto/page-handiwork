import React, { useContext, useState } from 'react'
import { HandiworkContext } from '../Context/HandiworkContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router'
import { Route } from 'react-router-dom';
import "./Protected.css"



function Alert(){
    const {toggleLogin} = useContext(HandiworkContext)

    return (
        <div className='alert'>
            <p>Please sign in to contact a service provider</p>
            <button onClick={toggleLogin}>Sign In</button>
        </div>
    )
}


function Protected() {

    const authenticatedProvider = localStorage.getItem("loggedinProvider") !== null;
    const authenticatedCustomer = localStorage.getItem("loggedinCustomer") !== null;
    
  return(
    authenticatedProvider || authenticatedCustomer ? <Outlet /> : <Navigate to="/authentication" /> 
  )
}

export { Protected, Alert}
