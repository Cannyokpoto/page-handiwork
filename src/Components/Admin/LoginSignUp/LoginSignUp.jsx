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
    const{errors} = useContext(HandiworkContext)
    const{handleAdminChange} = useContext(HandiworkContext)
    const{handleAdminSignUp} = useContext(HandiworkContext)

    const [eye, setEye] = useState(false)

    const handleEye =()=>{
        setEye(!eye)
    }

  return (
    <div className='admin-form'>
      <img src={PHOTOS.LOGO_B} alt="logo" />
      <form className='signUp' onSubmit={handleAdminSignUp}>
        <div className="long">
            
            <span className="col">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name='firstName' onChange={handleAdminChange}/>
                {errors.firstName && <span>{errors.firstName}</span>}
            </span>
            
            <span className="col">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name='lastName' onChange={handleAdminChange}/>
                {errors.lastName && <span>{errors.lastName}</span>}
            </span>
        </div>

        <div className="long">
            <span className="col">
                <label htmlFor="role">Role</label>
                <select name="role" id="" onChange={handleAdminChange}>
                  <option value="admin">Admin</option>
                  <option value="staff">Staff</option>
                  <option value="fieldStaff">Field Staff</option>
                  <option value="superAdmin">Super Admin</option>
                </select>
                {errors.role && <span>{errors.role}</span>}
            </span>
            
            <span className="col">
                <label htmlFor="adminId">Admin ID</label>
                <input type="text" name='adminId' onChange={handleAdminChange}/>
                {errors.adminId && <span>{errors.adminId}</span>}
            </span>
        </div>

        <div className="long">
            <span className="col">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' onChange={handleAdminChange}/>
                {errors.email && <span>{errors.email}</span>}
            </span>
            
            <span className="col">
                <label htmlFor="phone">Phone Number</label>
                <input type="number" name='phone' onChange={handleAdminChange}/>
                {errors.phone && <span>{errors.phone}</span>}
            </span>
        </div>






        <div className="long">
            <span className="col">
                <label htmlFor="password">Password</label>
                <div className="password">
                    <input type={eye ? "text" : "password"} name='password' onChange={handleAdminChange}/>
                    { eye ? <PiEyeClosed className="eye" onClick={handleEye} /> : 
                    <RxEyeOpen className="eye" onClick={handleEye} /> }
                </div>
                {errors.password && <span>{errors.password}</span>}
            </span>
            
            <span className="col">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="password">
                    <input type={eye ? "text" : "password"} name='confirmPassword' onChange={handleAdminChange}/>
                    { eye ? <PiEyeClosed className="eye" onClick={handleEye} /> : 
                    <RxEyeOpen className="eye" onClick={handleEye} /> }
                </div>
                {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
            </span>
        </div>
        

        <div className="short">
            
        </div>

        <div className="short">
            
        </div>
        <button type="submit" className='signUpBtn'>Sign Up</button>

        <span className="oldUser">Already have an account? <Link to="/admin/login">Sign In</Link></span>
      </form>

      {proceed ? <AdminSuccess /> : ""}
    </div>
  )
}

function AdminLogin() {

    const{handleEmailOrPhone} = useContext(HandiworkContext)
    const{handlePassword} = useContext(HandiworkContext)
    const{handleAdminLogin} = useContext(HandiworkContext)
    const{loginError} = useContext(HandiworkContext)
    

    const [eye, setEye] = useState(false)

    const handleEye =()=>{
        setEye(!eye)
    }

    return (
      <div className='admin-form'>
        <img src={PHOTOS.LOGO_B} alt="logo" />
        <form className='login' onSubmit={handleAdminLogin}>

            <div className="short">
                <label htmlFor="email">Phone number or email</label>
                <input type="text" name='email' onChange={handleEmailOrPhone}/>
            </div>

            <div className="short">
                <label htmlFor="password">Password</label>
                <div className="password">
                    <input type={eye ? "text" : "password"} 
                    name='password' onChange={handlePassword}/>
                    { eye ? <PiEyeClosed className="eye" onClick={handleEye} /> : 
                    <RxEyeOpen className="eye" onClick={handleEye} /> }
                </div>
                {loginError && <span>{loginError}</span>}
            </div>

            <span className="forgot">forgot password?</span>
            <button type="submit" className='signUpBtn'>Sign In</button>

            <span className="oldUser">Don't have an account? <Link to="/admin/signup">Sign Up</Link></span>
        </form>
      </div>
    )
  }



export { AdminLogin, AdminSignUp, }
