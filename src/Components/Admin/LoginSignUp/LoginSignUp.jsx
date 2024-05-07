import React, {useState, useContext} from 'react'
import PHOTOS from '../../images'
import "./LoginSignUp.css"
import { PiEyeClosed } from "react-icons/pi";
import { RxEyeOpen } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { AdminSuccess } from '../../Success/Success';
import { HandiworkContext } from '../../Context/HandiworkContext';
import { AdminWelcome } from '../../Welcome/Welcome';



function AdminSignUp() {

    const{proceed} = useContext(HandiworkContext)

    const [eye, setEye] = useState(false)

    const handleEye =()=>{
        setEye(!eye)
    }

  return (
    <div className='admin-form'>
      <img src={PHOTOS.LOGO_B} alt="logo" />
      <form className='signUp'>
        <div className="long">
            <span className="col">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name='firstName' />
            </span>
            
            <span className="col">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name='lastName' />
            </span>
        </div>

        <div className="short">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' />
        </div>

        <div className="short">
            <label htmlFor="password">Password</label>
            <div className="password">
                <input type={eye ? "text" : "password"} name='password' />
                { eye ? <PiEyeClosed className="eye" onClick={handleEye} /> : 
                <RxEyeOpen className="eye" onClick={handleEye} /> }
            </div>
        </div>

        <div className="short">
            <label htmlFor="adminID">Admin ID</label>
            <input type="text" name='adminID' />
        </div>
        <button type="submit" className='signUpBtn'>Sign Up</button>

        <span className="oldUser">Already have an account? <Link to="/admin/login">Sign In</Link></span>
      </form>

      {proceed ? <AdminSuccess /> : ""}
    </div>
  )
}

function AdminLogin() {

    const [eye, setEye] = useState(false)

    const handleEye =()=>{
        setEye(!eye)
    }

    return (
      <div className='admin-form'>
        <img src={PHOTOS.LOGO_B} alt="logo" />
        <form className='login'>

            <div className="short">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' />
            </div>

            <div className="short">
                <label htmlFor="password">Password</label>
                <div className="password">
                    <input type={eye ? "text" : "password"} name='password' />
                    { eye ? <PiEyeClosed className="eye" onClick={handleEye} /> : 
                    <RxEyeOpen className="eye" onClick={handleEye} /> }
                </div>
            </div>

            <span className="forgot">forgot password?</span>
            <button type="submit" className='signUpBtn'>Sign In</button>

            <span className="oldUser">Don't have an account? <Link to="/admin/signup">Sign Up</Link></span>
        </form>
      </div>
    )
  }



export { AdminLogin, AdminSignUp, }
