import React, { useState, useRef, useEffect } from "react";
import PHOTOS from "../images";
import "./LoginSignup.css";
import { HandiworkContext } from "../Context/HandiworkContext";
import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import 'react-toastify/dist/ReactToastify.css';
import {Welcome, RejectedCustomer, RejectedProvider} from "../Welcome/Welcome";
import {Success, Success2} from "../Success/Success";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { ServiceType, SubCategory } from "../ServAndSub/ServAndSub"
import { PiEyeClosed } from "react-icons/pi";
import { RxEyeOpen } from "react-icons/rx";




function Signup() {

    //imports from Context
    
    const{handleChange} = useContext(HandiworkContext)
    const{handleFileChange} = useContext(HandiworkContext)
    const{handleCustomerChange} = useContext(HandiworkContext)
    const{handleCustomerSignUp} = useContext(HandiworkContext)

    const{serviceType} = useContext(HandiworkContext)
    const{myStateData} = useContext(HandiworkContext)
    const{myCityData} = useContext(HandiworkContext)
    const{stateCode} = useContext(HandiworkContext)
    const{HandleSetStateCode} = useContext(HandiworkContext)
    const{handleEmailOrPhone} = useContext(HandiworkContext)
    const{handleProviderLogin} = useContext(HandiworkContext)
    const{loginError} = useContext(HandiworkContext)
    const{handleCustomerLogin} = useContext(HandiworkContext)
    const{handlePassword} = useContext(HandiworkContext)
    const{handleProviderSignUp} = useContext(HandiworkContext)
    const{errors} = useContext(HandiworkContext)
    const{success} = useContext(HandiworkContext)
    const{welcome} = useContext(HandiworkContext)
    const{justShow} = useContext(HandiworkContext)
    const{handleShow} = useContext(HandiworkContext)
    const{duplicateError} = useContext(HandiworkContext)
    const{duplicateEmail} = useContext(HandiworkContext)
    const{duplicateNumber} = useContext(HandiworkContext)
    const{handleServiceSearch} = useContext(HandiworkContext)
    const{serviceSearch} = useContext(HandiworkContext)
    const{openSelect} = useContext(HandiworkContext)
    const{selectedOption} = useContext(HandiworkContext)

    //To get loggedinUsers ID
    const {loggedinUser} = useContext(HandiworkContext)
    const {providerId} = useContext(HandiworkContext)
    const {customerId} = useContext(HandiworkContext)
    


    // To toggle Signup
    const {toggleSignup} = useContext(HandiworkContext)


    //To hide and show password
    const [eyeOpen, setEyeOpen] = useState(false);

    const handleEye = () =>{
        setEyeOpen(!eyeOpen)
    }



    //To switch between service provider and customer
    const [form, setForm] = useState("service provider");

    //To switch between Sign Up and Sign In
    const [switchToSignUp, setSwitchToSignUp] = useState("Sign Up");


    
    return(            
            

            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <IoMdClose onClick={toggleSignup} className="close-modal" />
                    
                   
                    <div className="my-form">
                        <div className="form-btns">
                            <button onClick={() => setForm("customer")} className={ form==="customer" ? "under" : ""}>Customer</button>
                            <span>|</span>
                            <button onClick={() => setForm("service provider")} className={ form==="service provider" ? "under" : ""}>Service Provider</button>
                        </div>

                        <div className={ switchToSignUp==="Sign In" ? "form-wrapper" : "form-wrapper rotate" } >
                            <div className="brand">
                                <img src={PHOTOS.LOGO} alt="" />
                                <p>Don’t crack, we’re always with you</p>
                            </div>


                            {/* Switch to service provider Login */}

                            { switchToSignUp==="Sign In" && form==="service provider" ?
                            <form onSubmit={handleProviderLogin}>                             
                                <span className="tag">
                                <h5>Welcome back!</h5>
                                    <p>Sign in as a <span>{form}</span></p>
                                </span>

                                <div className="my-div">
                                    <label htmlFor="emailOrPhone">Phone number or email</label>
                                    <input type='text' name="emailOrPhone" placeholder='Enter phone number or email' onChange={handleEmailOrPhone} />
                                </div>

                                <div className="my-div">
                                    <label htmlFor="password">Password</label>
                                    <input type={eyeOpen ? "text" : 'password'} name='password' id="myEye5" placeholder='Enter password' onChange={handlePassword} />
                                    <section className="eyeCover" onClick={handleEye}>{eyeOpen ? <PiEyeClosed className="eye" /> : <RxEyeOpen className="eye" />}</section>
                                </div>

                              <p className="loginError">{loginError}</p>
                               {/* <p className="loginError">loginError.message</p> */}


                                <p className="forgot">Forgot Password?</p>
                            

                            <button type="submit">Sign In</button>


                        
                            <p className="account">Don't have an account? <span onClick={() => setSwitchToSignUp("Sign Up")}>Sign Up</span></p>
                            </form>
                            : "" }

                            
                            {/* Switch to customer Login */}

                            { switchToSignUp==="Sign In" && form==="customer" ?
                            <form onSubmit={handleCustomerLogin}>
                                
                                <span className="tag">
                                <h5>Welcome back!</h5>
                                    <p>Sign in as a <span>customer</span></p>
                                </span>

                                <div className="my-div">
                                    <label htmlFor="emailOrPhone">Phone number or email</label>
                                    <input type='text' name="emailOrPhone" placeholder='Enter phone number or email' onChange={handleEmailOrPhone} />
                                </div>

                                <div className="my-div">
                                    <label htmlFor="password">Password</label>
                                    <input type={eyeOpen ? "text" : 'password'} name='password' id="myEye6" placeholder='Enter password' onChange={handlePassword} />
                                    <section className="eyeCover" onClick={handleEye}>{eyeOpen ? <PiEyeClosed className="eye" /> : <RxEyeOpen className="eye" />}</section>
                                </div>

                                <p className="loginError">{loginError}</p>

                                
                                <p className="forgot">Forgot Password?</p>
                            

                            <button type="submit">Sign In</button>


                        
                            <p className="account">Don't have an account? <span onClick={() => setSwitchToSignUp("Sign Up")}>Sign Up</span></p>
                            </form>
                            : "" }



                            {/* Switch to service provider signup */}

                            { switchToSignUp==="Sign Up" && form==="service provider"  ?

                            <form onSubmit={handleProviderSignUp} className="service-provider">
                                
                                <span className="tag">
                                    {/* <h5>Create an account</h5> */}
                                    <p>Sign up as a <span>service provider</span></p>
                                </span>

                                <section>
                                    <span>
                                        <label htmlFor="firstName">First Name</label>
                                        <input type='text' name="firstName" placeholder='Your first name' onChange={handleChange} />
                                        {errors.firstName ? <span>{errors.firstName}</span> : ""}
                                    </span>
                                    <span>
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type='text' name="lastName" placeholder='Your last name' onChange={handleChange} />
                                        {errors.lastName && <span>{errors.lastName}</span>}
                                    </span>
                                </section>
                                

                                <section>
                                    <span>
                                        <label htmlFor="phone">Phone1</label>
                                        <input type='number' name="phone" placeholder='070367***' onChange={handleChange} />
                                        {errors.phone && <span>{errors.phone}</span>}
                                        {duplicateNumber && <span>{duplicateNumber}</span>}
                                    </span>
                                    <span>
                                        <label htmlFor="phone">Phone2 (optional)</label>
                                        <input type='number' name="secondPhone" placeholder='070367***' onChange={handleChange} />
                                        {errors.secondPhone && <span>{errors.secondPhone}</span>}
                                    </span>
                                </section>
                        

                            <div className="my-div">
                                <label htmlFor="email">Email (optional)</label>
                                <input type='email' name="email" placeholder='Enter email' onChange={handleChange} />
                                {duplicateEmail && <span>{duplicateEmail}</span>}
                            </div>

                            <div className="my-div">
                                <label htmlFor="stateOfResidence">State of Residence</label> 
                                    <select id="stateOfResidence" name="stateOfResidence" onChange={HandleSetStateCode}>
                                        <option value="">--Select State--</option>
                                        {
                                            myStateData.map(state => (<option  
                                                name={state.state_code} 
                                                key={state.state_code} 
                                                value={state.state_code}>{state.name}</option>))
                                        }
                                    </select>
                                {errors.stateOfResidence && <span>{errors.stateOfResidence}</span>}
                            </div>

                            
                            <div className={stateCode==="" ? "hide-field" : "my-div"}>
                                <label htmlFor="city">City</label>
                                <select name="city" id="city" onChange={handleChange}>
                                    <option value="">--Select City--</option>
                                        {
                                            myCityData.map(city => (
                                                <option  
                                                name={city.name}
                                                key={city.name} 
                                                value={city.name}>{city.name}</option>))
                                        }
                                </select>
                                {errors.city && <span>{errors.city}</span>}
                            </div>

                            <div className={stateCode==="" ? "hide-field" : "my-div"}>
                                <label htmlFor="street">Office number and street name (E.g: 25 Adewale street)</label>
                                <input type='text' name="street" 
                                placeholder='Enter office number and street name' onChange={handleChange} />
                                {errors.street && <span>{errors.street}</span>}
                            </div>
                            
                    
                        
                            <div className="my-div">
                                <label htmlFor="serviceType">Service Type</label> 
                                <ServiceType />
                            </div>
                            
                            <div className={ serviceType === "Other" ? "my-div" : "hide-field" }>
                                <input type='text' name='serviceType' placeholder='specify service type' onChange={handleChange} />
                                {errors.serviceType && <span>{errors.serviceType}</span>}
                            </div>
            

                            <div className={ serviceType === "Other" || serviceType=="" ? "hide-field" : "my-div" }>
                                <label htmlFor="serviceType">Sub-category</label>
                                <SubCategory />
                            </div>
                        
                            <div className="my-div">
                                <div className="image-tag">Profile Image</div>
                                <label htmlFor="image" className="image-label" onClick={handleShow}>Upload Profile Image</label>
                                {
                                    justShow ?
                                <input 
                                type='file' id="image" name="image"
                                className="imagePath" 
                                accept="image/*"  
                                onChange={handleFileChange} /> : "" }
                                {errors.image && <span>{errors.image}</span>}
                                {/* <span>{profileImageUpload}</span> */}
                            </div>

                            <div className="my-div">
                                <label htmlFor="openingHour">Opening/Closing Hour</label>
                                <input type='text' name='openingHour' placeholder='7am - 5pm' onChange={handleChange} />
                                {errors.openingClosingHour && <span>{errors.openingClosingHour}</span>}
                            </div>

                            
                            <div className="my-div">
                                <label htmlFor="password">Password</label>
                                <input type={ eyeOpen ? "text" : 'password'} name='password' id="myEye" placeholder='Enter password' onChange={handleChange} />
                                {errors.password && <span>{errors.password}</span>}
                                <section className="eyeCover" onClick={handleEye}>{eyeOpen ? <PiEyeClosed className="eye" /> : <RxEyeOpen className="eye" />}</section>
                            </div>

                            <div className="my-div">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type={ eyeOpen ? "text" : 'password'} name='confirmPassword' id="myEye2" placeholder='confirm password' onChange={handleChange} />
                                {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                                <section className="eyeCover" onClick={handleEye}>{eyeOpen ? <PiEyeClosed className="eye" /> : <RxEyeOpen className="eye" />}</section>
                            </div>


                            <div className="my-div">
                                <label htmlFor="referralCode">Referral Code(optional)</label>
                                <input type='text' name='referralCode' placeholder='RBHGRE23' onChange={handleChange} />
                                
                                <span>{duplicateError}</span>
                            </div>

                            <button type="submit">Sign Up</button>

                            <p className="account">Have an account? <span onClick={() => setSwitchToSignUp("Sign In")}>Sign In</span></p>
                            </form>
                            : "" }

                            {/* Switch to customer signup */}

                            { switchToSignUp==="Sign Up" && form==="customer"  ?

                            <form onSubmit={handleCustomerSignUp} className="customer">
                                
                                <span className="tag">
                                    {/* <h5>Create an account</h5> */}
                                    <p>Sign up as a <span>customer</span></p>
                                </span>

                                <section>
                                    <span>
                                        <label htmlFor="firstName">First Name</label>
                                        <input type='text' name="firstName" placeholder='Enter first name' onChange={handleCustomerChange} />
                                        {errors.firstName ? <span>{errors.firstName}</span> : ""}
                                    </span>
                                    <span>
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type='text' name="lastName" placeholder='Enter last name' onChange={handleCustomerChange} />
                                        {errors.lastName && <span>{errors.lastName}</span>}
                                    </span>
                                </section>

                                <div className="my-div">
                                    <label htmlFor="phone">Phone</label>
                                    <input type='number' name="phone" placeholder='Enter phone no.' onChange={handleCustomerChange} />
                                    {errors.phone && <span>{errors.phone}</span>}
                                </div>
                                

                                <section>
                                    <span>
                                        <label htmlFor="email">Email</label>
                                        <input type='email' name="email" placeholder='Enter email' onChange={handleCustomerChange} />
                                    </span>
                                    <span>
                                        <label htmlFor="address">Address</label>
                                        <input type='text' name="address" placeholder='street name & house no.' onChange={handleCustomerChange} />
                                        {errors.address && <span>{errors.address}</span>}
                                    </span>
                                </section>
                        

                                <section className={ form==="service provider" ? "hide-field" : "" }>
                                    <span>
                                        <label htmlFor="password">Password</label>
                                        <input type={eyeOpen ? "text" : 'password'} name="password" id="myEye3" placeholder='Enter password' onChange={handleCustomerChange} />
                                        {errors.password && <span>{errors.password}</span>}
                                        <section className="eyeCover" onClick={handleEye}>{eyeOpen ? <PiEyeClosed className="eye" /> : <RxEyeOpen className="eye" />}</section>
                                    </span>

                                    <span>
                                        <label htmlFor="confirmPassword">Confirm password</label>
                                        <input type={eyeOpen ? "text" : 'password'} name="confirmPassword" id="myEye4" placeholder='confirm' onChange={handleCustomerChange} />
                                        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                                        <section className="eyeCover" onClick={handleEye}>{eyeOpen ? <PiEyeClosed className="eye" /> : <RxEyeOpen className="eye" />}</section>
                                    </span>
                                </section>

                                <span className="dupError">{duplicateError}</span>

                                <button type="submit">Sign Up</button>

                                <p className="account">Have an account? <span onClick={() => setSwitchToSignUp("Sign In")}>Sign In</span></p>
                            </form>
                            : "" }
                        </div>
                    </div>
                </div>

                {/* { success ? 
                    <Success />
                : "" }

                { welcome ? 
                <Welcome />
                : ""} */}
                
            </div>
            
    )
}

function Login() {

     //States to manage service provider's location
    
     const{myStateData} = useContext(HandiworkContext)
     const{myCityData} = useContext(HandiworkContext)
     const{stateCode} = useContext(HandiworkContext)
     const{HandleSetStateCode} = useContext(HandiworkContext)

     const{handleProviderSignUp} = useContext(HandiworkContext)
     const{errors} = useContext(HandiworkContext)
     const{success} = useContext(HandiworkContext)

     const{handleCustomerSignUp} = useContext(HandiworkContext)
    const{handleChange} = useContext(HandiworkContext)
    const{handleFileChange} = useContext(HandiworkContext)
    const{serviceType} = useContext(HandiworkContext)
    const{handleCustomerChange} = useContext(HandiworkContext)
    const{duplicateError} = useContext(HandiworkContext)

    const{handleEmailOrPhone} = useContext(HandiworkContext)
    const{handleProviderLogin} = useContext(HandiworkContext)
    const{loginError} = useContext(HandiworkContext)
    const{handleCustomerLogin} = useContext(HandiworkContext)
    const{handlePassword} = useContext(HandiworkContext)
    const{welcome} = useContext(HandiworkContext)
    const{justShow} = useContext(HandiworkContext)
    const{handleShow} = useContext(HandiworkContext)
    const{duplicateEmail} = useContext(HandiworkContext)
    const{duplicateNumber} = useContext(HandiworkContext)
    

    // To toggle Signup
    const {toggleLogin} = useContext(HandiworkContext)


    //To hide and show password
    const [eyeOpen, setEyeOpen] = useState(false);

    const handleEye = () =>{
        setEyeOpen(!eyeOpen)
    }

    //To switch between service provider and customer
    const [form, setForm] = useState("service provider");


    //To switch between Sign Up and Sign In
    const [switchToSignUp, setSwitchToSignUp] = useState("Sign In");



    
    return(  
        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <IoMdClose onClick={toggleLogin} className="close-modal" />

                <div className="my-form">
                <div className="form-btns">
                    <button onClick={() => setForm("customer")} className={ form==="customer" ? "under" : ""}>Customer</button>
                    <span>|</span>
                    <button onClick={() => setForm("service provider")} className={ form==="service provider" ? "under" : ""}>Service Provider</button>
                </div>

                <div className={ switchToSignUp==="Sign In" ? "form-wrapper" : "form-wrapper rotate" } >
                    <div className="brand">
                        <img src={PHOTOS.LOGO} alt="" />
                        <p>Don’t crack, we’re always with you</p>
                    </div>

                    {/* Switch to service provider Login */}

                    { switchToSignUp==="Sign In" && form==="service provider" ?
                    <form onSubmit={handleProviderLogin}>    
                        <span className="tag">
                            <h5>Welcome back!</h5>
                            <p>Sign in as a <span>service provider</span></p>
                        </span>

                        <div className="my-div">
                            <label htmlFor="emailOrPhone">Phone Number or email</label>
                            <input type='text' name="emailOrPhone" placeholder='Enter phone number or email' onChange={handleEmailOrPhone} />
                        </div>

                        <div className="my-div">
                            <label htmlFor="password">Password</label>
                            <input type={eyeOpen ? "text" : 'password'} name='password' id="myEye5" placeholder='Enter password' onChange={handlePassword} />
                            <section className="eyeCover" onClick={handleEye}>{eyeOpen ? <PiEyeClosed className="eye" /> : <RxEyeOpen className="eye" />}</section>
                        </div>

                        <p className="loginError">{loginError}</p>

                        
                        <p className="forgot">Forgot Password?</p>
                       

                    <button type="submit">Sign In</button>


                
                    <p className="account">Don't have an account? <span onClick={() => setSwitchToSignUp("Sign Up")}>Sign Up</span></p>
                    </form>
                    : "" }

                    {/* Switch to customer Login */}

                    { switchToSignUp==="Sign In" && form==="customer" ?
                    <form onSubmit={handleCustomerLogin}>
                        
                        <span className="tag">
                            <h5>Welcome back!</h5>
                            <p>Sign in as a <span>customer</span></p>
                        </span>

                        <div className="my-div">
                            <label htmlFor="emailOrPhone">Phone number or email</label>
                            <input type='text' name="emailOrPhone" placeholder='Enter phone number or email'
                            onChange={handleEmailOrPhone}
                            />
                        </div>

                        <div className="my-div">
                            <label htmlFor="password">Password</label>
                            <input type={eyeOpen ? "text" : 'password'} name='password' 
                            placeholder='Enter password' onChange={handlePassword}/>
                            <section className="eyeCover" onClick={handleEye}>{eyeOpen ? <PiEyeClosed className="eye" /> : <RxEyeOpen className="eye" />}</section>
                        </div>
                        <p className="loginError">{loginError}</p>

                        
                        <p className="forgot">Forgot Password?</p>
                       

                    <button type="submit">Sign In</button>


                
                    <p className="account">Don't have an account? <span onClick={() => setSwitchToSignUp("Sign Up")}>Sign Up</span></p>
                    </form>
                    : "" }


                    {/* Switch to service provider signup */}

                    { switchToSignUp==="Sign Up" && form==="service provider" ?

                    <form onSubmit={handleProviderSignUp} className="service-provider">
                                                    
                    <span className="tag">
                        {/* <h5>Create an account</h5> */}
                        <p>Sign up as a <span>service provider</span></p>
                    </span>

                    <section>
                        <span>
                            <label htmlFor="firstName">First Name</label>
                            <input type='text' name="firstName" placeholder='Your first name' onChange={handleChange} />
                            {errors.firstName ? <span>{errors.firstName}</span> : ""}
                        </span>
                        <span>
                            <label htmlFor="lastName">Last Name</label>
                            <input type='text' name="lastName" placeholder='Your last name' onChange={handleChange} />
                            {errors.lastName && <span>{errors.lastName}</span>}
                        </span>
                    </section>


                    <section>
                        <span>
                            <label htmlFor="phone">Phone1</label>
                            <input type='number' name="phone" placeholder='070367***' onChange={handleChange} />
                            {errors.phone && <span>{errors.phone}</span>}
                            {duplicateNumber && <span>{duplicateNumber}</span>}
                            
                        </span>
                        <span>
                            <label htmlFor="phone">Phone2 (optional)</label>
                            <input type='number' name="secondPhone" placeholder='070367***' onChange={handleChange} />
                            {errors.secondPhone && <span>{errors.secondPhone}</span>}
                        </span>
                    </section>


                    <div className="my-div">
                        <label htmlFor="email">Email (optional)</label>
                        <input type='email' name="email" placeholder='Enter email' onChange={handleChange} />
                        {duplicateEmail && <span>{duplicateEmail}</span>}
                    </div>

                    <div className="my-div">
                    <label htmlFor="stateOfResidence">State of Residence</label> 
                        <select id="stateOfResidence" name="stateOfResidence" onChange={HandleSetStateCode}>
                            <option value="">--Select State--</option>
                            {
                                myStateData.map(state => (<option  
                                    name={state.state_code} 
                                    key={state.state_code} 
                                    value={state.state_code}>{state.name}</option>))
                            }
                        </select>
                    {errors.stateOfResidence && <span>{errors.stateOfResidence}</span>}
                    </div>


                    <div className={stateCode==="" ? "hide-field" : "my-div"}>
                    <label htmlFor="city">City</label>
                    <select name="city" id="city" onChange={handleChange}>
                        <option value="">--Select City--</option>
                            {
                                myCityData.map(city => (
                                    <option  
                                    name={city.name}
                                    key={city.name} 
                                    value={city.name}>{city.name}</option>))
                            }
                    </select>
                    {errors.city && <span>{errors.city}</span>}
                    </div>

                    <div className={stateCode==="" ? "hide-field" : "my-div"}>
                        <label htmlFor="street">Office number and street name (E.g: 25 Adewale street)</label>
                        <input type='text' name="street" 
                        placeholder='Enter office number and street name' onChange={handleChange} />
                        {errors.street && <span>{errors.street}</span>}
                    </div>



                    <div className="my-div">
                        <label htmlFor="serviceType">Service Type</label>
                        <ServiceType />
                        {errors.serviceType && <span>{errors.serviceType}</span>}
                    </div>


                    <div className={ serviceType === "Other" ? "my-div" : "hide-field" }>
                    <input type='text' name='serviceType' placeholder='specify service type' onChange={handleChange} />
                    {errors.serviceType && <span>{errors.serviceType}</span>}
                    </div>


                    <div className={ serviceType === "Other" || serviceType=="" ? "hide-field" : "my-div" }>
                        <label htmlFor="serviceType">Sub-category</label>
                        <SubCategory />
                    </div>

                    <div className="my-div">
                        <div className="image-tag">Profile Image</div>
                        <label htmlFor="imagePath2" className="image-label" onClick={handleShow}>Upload Profile Image</label>
                       { justShow ? 
                        <input 
                        type='file' id="imagePath2" className="imagePath" name="imagePath" 
                        accept="image/*"  
                        onChange={handleFileChange} /> : ""}
                        {errors.imagePath && <span>{errors.imagePath}</span>}
                    </div>

                    <div className="my-div">
                    <label htmlFor="openingHour">Opening/Closing Hour</label>
                    <input type='text' name='openingHour' placeholder='7am - 5pm' onChange={handleChange} />
                    {errors.openingClosingHour && <span>{errors.openingClosingHour}</span>}
                    </div>


                    <div className="my-div">
                        <label htmlFor="password">Password</label>
                        <input type={ eyeOpen ? "text" : 'password'} name='password' id="myEye" placeholder='Enter password' onChange={handleChange} />
                        {errors.password && <span>{errors.password}</span>}
                        <section className="eyeCover" onClick={handleEye}>{eyeOpen ? <PiEyeClosed className="eye" /> : <RxEyeOpen className="eye" />}</section>
                    </div>

                    <div className="my-div">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type={ eyeOpen ? "text" : 'password'} name='confirmPassword' id="myEye2" placeholder='confirm password' onChange={handleChange} />
                    {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                    <section className="eyeCover" onClick={handleEye}>{eyeOpen ? <PiEyeClosed className="eye" /> : <RxEyeOpen className="eye" />}</section>
                    </div>


                    <div className="my-div">
                    <label htmlFor="referralCode">Referral Code(optional)</label>
                    <input type='text' name='referralCode' placeholder='RBHGRE23' onChange={handleChange} />
                    <span>{duplicateError}</span>
                    </div>

                    <button type="submit">Sign Up</button>

                    <p className="account">Have an account? <span onClick={() => setSwitchToSignUp("Sign In")}>Sign In</span></p>
                    </form>
                    : "" }


                    {/* Switch to customer signup */}

                    { switchToSignUp==="Sign Up" && form==="customer" ?

                    <form onSubmit={handleCustomerSignUp}>
                        
                        <span className="tag">
                            {/* <h5>Create an account</h5> */}
                            <p>Sign up as a <span>customer</span></p>
                        </span>

                        {/* <section>
                            <span>
                                <label htmlFor="firstName">First Name</label>
                                <input type='text' name="firstName" placeholder='Your Name' onChange={handleCustomerChange} />
                                {errors.firstName ? <span>{errors.firstName}</span> : ""}
                            </span>
                            <span>
                                <label htmlFor="lastName">Last Name</label>
                                <input type='text' name="lastName" placeholder='Your Name' onChange={handleCustomerChange}/>
                                {errors.lastName ? <span>{errors.lastName}</span> : ""}
                            </span>
                        </section>
                        

                        <section>
                            <span>
                                <label htmlFor="phone">Phone number</label>
                                <input type='number' name="phone" placeholder='Enter phone number' onChange={handleCustomerChange}/>
                                {errors.phone ? <span>{errors.phone}</span> : ""}
                            </span>
                            <span>
                                <label htmlFor="Address">Address</label>
                                <input type='text' name="address" placeholder='Enter location' onChange={handleCustomerChange}/>
                                {errors.address ? <span>{errors.address}</span> : ""}
                            </span>
                        </section>
                 

                        <section >
                            <span>
                                <label htmlFor="password">Password</label>
                                <input type={ eyeOpen ? "text" : 'password'} name="password" 
                                placeholder='Enter password' onChange={handleCustomerChange}/>
                                <section className="eyeCover" onClick={handleEye}>{eyeOpen ? <FiEyeOff className="eye" /> : <FiEye className="eye" />}</section>
                                {errors.password ? <span>{errors.password}</span> : ""}
                            </span>
                            <span>
                                <label htmlFor="confirmPassword">Confirm password</label>
                                <input  type={ eyeOpen ? "text" : 'password'} name="confirmPassword" 
                                placeholder='confirm' onChange={handleCustomerChange}/>
                                <section className="eyeCover" onClick={handleEye}>{eyeOpen ? <FiEyeOff className="eye" /> : <FiEye className="eye" />}</section>
                                {errors.confirmPassword ? <span>{errors.confirmPassword}</span> : ""}
                            </span>
                        </section> */}

                        <section>
                            <span>
                                <label htmlFor="firstName">First Name</label>
                                <input type='text' name="firstName" placeholder='Enter first name' onChange={handleCustomerChange} />
                                {errors.firstName ? <span>{errors.firstName}</span> : ""}
                            </span>
                            <span>
                                <label htmlFor="lastName">Last Name</label>
                                <input type='text' name="lastName" placeholder='Enter last name' onChange={handleCustomerChange} />
                                {errors.lastName && <span>{errors.lastName}</span>}
                            </span>
                        </section>

                        <div className="my-div">
                            <label htmlFor="phone">Phone</label>
                            <input type='number' name="phone" placeholder='Enter phone no.' onChange={handleCustomerChange} />
                            {errors.phone && <span>{errors.phone}</span>}
                        </div>
                                

                        <section>
                            <span>
                                <label htmlFor="email">Email</label>
                                <input type='email' name="email" placeholder='Enter email' onChange={handleCustomerChange} />
                            </span>
                            <span>
                                <label htmlFor="address">Address</label>
                                <input type='text' name="address" placeholder='street name & house no.' onChange={handleCustomerChange} />
                                {errors.address && <span>{errors.address}</span>}
                            </span>
                        </section>
                        

                        <section>
                            <span>
                                <label htmlFor="password">Password</label>
                                <input type={eyeOpen ? "text" : 'password'} name="password" id="myEye3" placeholder='Enter password' onChange={handleCustomerChange} />
                                {errors.password && <span>{errors.password}</span>}
                                <section className="eyeCover" onClick={handleEye}>{eyeOpen ? <PiEyeClosed className="eye" /> : <RxEyeOpen className="eye" />}</section>
                            </span>

                            <span>
                                <label htmlFor="confirmPassword">Confirm password</label>
                                <input type={eyeOpen ? "text" : 'password'} name="confirmPassword" id="myEye4" placeholder='confirm' onChange={handleCustomerChange} />
                                {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                                <section className="eyeCover" onClick={handleEye}>{eyeOpen ? <PiEyeClosed className="eye" /> : <RxEyeOpen className="eye" />}</section>
                            </span>
                        </section>

                        <span className="dupError">{duplicateError}</span>
                        

                        <button type="submit">Sign Up</button>

                        <p className="account">Have an account? <span onClick={() => setSwitchToSignUp("Sign In")}>Sign In</span></p>
                    </form>
                    : "" }
                </div>
                </div>
            </div>

            {/* { success ?
                    <Success2 />
            : "" } 


            { welcome ? 
                <Welcome />
                : ""} */}

        </div>         
    )
}

function VerificationForm() {
    
    const{handleShow} = useContext(HandiworkContext)
    const {toggleVerify} = useContext(HandiworkContext)
    const {justShow} = useContext(HandiworkContext)
    const {handleCacSubmit} = useContext(HandiworkContext)
    const{handleFileChange} = useContext(HandiworkContext)
    const {loggedinProvider} = useContext(HandiworkContext)
    const {viewProvider} = useContext(HandiworkContext)
    const {errors} = useContext(HandiworkContext)

    useEffect(()=>{
        viewProvider()
    }, [loggedinProvider])

    const [doc, setDoc] = useState("");

    const handleDoc = () =>{
        setDoc("cac")
    }

    const handlePhoto = () =>{
        setDoc("photo")
    }

    
    return(           
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <IoMdClose onClick={toggleVerify} className="close-modal" />                    
                   
                    <div className="verification">   
                        <form className="verification-form" onSubmit={handleCacSubmit}>                             
                            <div className="text">
                                <h3>Verify Account</h3>
                                <p>Select any of these documents and upload it:</p>
                                <span className="uploads">
                                    <div className="doc" onClick={handleDoc}>
                                        <input type="radio" id="cac" name="doc" value="cac" />
                                        <label htmlFor="cac" >Your CAC document (PDF)</label>
                                    </div>

                                    <div className="doc" onClick={handlePhoto}>
                                        <input type="radio" id="job" name="doc" value="job" />
                                        <label htmlFor="job" >A picture of you on a job</label>
                                    </div>

                                    <div className="doc" onClick={handlePhoto}>
                                        <input type="radio" id="staff" name="doc" value="staff" />
                                        <label htmlFor="staff" >A picture of you with our field staff</label>
                                    </div>
                                </span>
                            </div>

                            { doc ==="cac" ?
                            <div className="file">
                                <label htmlFor="cacImage" className="image-label" onClick={handleShow}>Select Document</label>
                            
                                <input 
                                type='file' id="cacImage" name="cacImage"
                                accept=".pdf" 
                                className={ justShow ? "" : "hide-field"}
                                onChange={handleFileChange}
                                />
                                {/* {errors.profileImage && <span>{errors.profileImage}</span>} */}
                            </div> : ""}

                            { doc ==="photo" ?
                            <div className="file">
                                <label htmlFor="cacImage" className="image-label" onClick={handleShow}>Select Image</label>

                                <input 
                                type='file' id="cacImage" name="cacImage"
                                accept="image/*" 
                                className={ justShow ? "" : "hide-field"}
                                onChange={handleFileChange}
                                />
                                {/* {errors.profileImage && <span>{errors.profileImage}</span>} */}
                            </div> : ""}
                                {errors.cacImage && <section className="error">{errors.cacImage}</section>}
                            { doc !=="" ? <button type="submit">Verify</button> : ""}
                        </form>
                    </div>
                </div>

                {/* { success ? 
                    <div className='success'>
                        <img src={PHOTOS.thumb} alt="thumb" />
                        <h3>Registration successful!</h3>
                        <button onClick={closeSignupAndRefresh}>Ok</button>
                    </div>
                : "" }

                { welcome ? 
                <Welcome />
                : ""} */}
            </div>
    )
}

export { Signup, Login, VerificationForm };