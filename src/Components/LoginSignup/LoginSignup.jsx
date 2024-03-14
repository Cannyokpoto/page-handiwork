import React, { useState } from "react";
import PHOTOS from "../images";
import "./LoginSignup.css";



function Signup() {

    //To switch between service provider and customer
    const [form, setForm] = useState("service provider");

    //To switch between Sign Up and Sign In
    const [switchToSignUp, setSwitchToSignUp] = useState("Sign Up");

 
     //To render certain input fields only when required
     const [other, setOther] = useState("");
 
     const HandleSetOther = (event) => {
         const getOther = event.target.value;
         setOther(getOther);
     }

     //Form validation
     const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        serviceType: '',
        subCategory: '',
        location: '',
        openingClosingHour: '',
     })

     //customized error messages
     const [errors, setErrors] = useState({})


     //funtion to grab inputs made by users

     const handleChange = (e) =>{
        const {name, value} = e.target;

        setFormData({
            ...formData, [name] : value
        })
     }

     

     //funtion to handle form submit

     async function handleSubmit(e){
        e.preventDefault()
        const validationErrors = {}


        //To ensure valid inputs
        if(!formData.firstName.trim()){
            validationErrors.firstName = "first name is required"
        }

        if(!formData.lastName.trim()){
            validationErrors.lastName = "last name is required"
        }

        if(!formData.email.trim()){
            validationErrors.email = "email is required"
        }
        else if(!formData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            validationErrors.email = "email is not valid"
        }

        if(!formData.address.trim()){
            validationErrors.address = "address is required"
        }

        if(!formData.password.trim()){
            validationErrors.password = "password is required"
        }
        else if(formData.password.length < 6){
            validationErrors.password = "password should be atleast 6 characters"
        }

        if(formData.confirmPassword !== formData.password){
            validationErrors.confirmPassword = "password not matched"
        }

        if(!formData.phoneNumber.trim()){
            validationErrors.phoneNumber = "phone number is required"
        }
        else if(formData.phoneNumber.length < 11){
            validationErrors.phoneNumber = "phone number should be atleast 11 characters"
        }

        if(!formData.serviceType.trim()){
            validationErrors.serviceType = "please select service type"
        }

        if(!formData.subCategory.trim()){
            validationErrors.subCategory = "sub-category required"
        }

        if(!formData.location.trim()){
            validationErrors.location = "location is required"
        }

        if(!formData.openingClosingHour.trim()){
            validationErrors.openingClosingHour = "please specify your opening and closing hour"
        }



        setErrors(validationErrors)

        if(Object.keys(validationErrors).length === 0){
            alert("form submitted successfully")
        }

        e.target.reset();

        //API Integration for Sign Up
        let result = await fetch("https://handiwork.cosmossound.com.ng/api/skill-providers/create", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        let lastResult = await result.json()

        console.warn('lastResult', lastResult)


        //To store the data in the local storage
        localStorage.setItem("user-info", JSON.stringify(lastResult))
        
        
     }



    
    return(            
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

                    {/* Switch to Login */}

                    { switchToSignUp==="Sign In" ?
                    <form onSubmit={handleSubmit}>
                        
                        <span className="tag">
                        <h5>Welcome back!</h5>
                            <p>Sign in as a <span>{form}</span></p>
                        </span>

                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input type='email' name="email" placeholder='Enter Email' onChange={handleChange} />
                            {errors.email ? <span>{errors.email}</span> : ""}
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input type='password' name='password' placeholder='Enter password' onChange={handleChange} />
                            {errors.password ? <span>{errors.password}</span> : ""}
                        </div>

                        
                        <p className="forgot">Forgot Password?</p>
                       

                    <button type="submit">Sign In</button>


                
                    <p className="account">Don't have an account? <span onClick={() => setSwitchToSignUp("Sign Up")}>Sign Up</span></p>
                    </form>
                    : "" }

                    {/* Switch to signup */}

                    { switchToSignUp==="Sign Up" ?

                    <form onSubmit={handleSubmit}>
                        
                        <span className="tag">
                            <h5>Create an account</h5>
                            <p>Sign up as a <span>{form}</span></p>
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
                                <label htmlFor="email">Email</label>
                                <input type='email' name="email" placeholder='Enter email' onChange={handleChange} />
                                {errors.email && <span>{errors.email}</span>}
                            </span>
                            <span>
                                <label htmlFor="Address">Address</label>
                                <input type='text' name="address" placeholder='Enter location' onChange={handleChange} />
                                {errors.address && <span>{errors.address}</span>}
                            </span>
                        </section>
                 

                        <section className={ form==="service provider" ? "hide-field" : "" }>
                            <span>
                                <label htmlFor="password">Password</label>
                                <input type='password' name="password" placeholder='Enter password' onChange={handleChange} />
                                {errors.password && <span>{errors.password}</span>}
                            </span>
                            <span>
                                <label htmlFor="confirmPassword">Confirm password</label>
                                <input type='password' name="confirmPassword" placeholder='Re-type password' onChange={handleChange} />
                                {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                            </span>
                        </section>

                    <div className={ form==="customer" ? "hide-field" : "" }>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type='number' name="phoneNumber" placeholder='070367***' onChange={handleChange} />
                        {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
                    </div>
                    
                
                    {/* <div className={ form==="customer" ? "hide-field" : "" } >
                        <label htmlFor="email">Email Address</label>
                        <input type='email' name="email" placeholder='Enter Email' onChange={handleChange} />
                        {errors.email && <span>{errors.email}</span>}
                    </div> */}
            
                 
                    <div className={ form==="customer" ? "hide-field" : "" }>
                        <label htmlFor="serviceType">Service Type</label>
                        <select name="serviceType" id="serviceType" 
                        onChange={(e) => (HandleSetOther(e))}>
                            <option value="">Service Type</option>
                            <option value="Automobile">Automobile</option>
                            <option value="Domestic Services">Domestic Services</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Hospitality">Hospitality</option>
                            <option value="Beautician">Beautician</option>
                            <option value="Technician">Technician</option>
                            <option value="Phone/Accessories repair">Phone/Accessories repair</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                      

                    <div className={ form==="service provider" && other === "Other" ? "" : "hide-field" }>
                        <input type='text' name='serviceType' placeholder='specify service type' onChange={handleChange} />
                        {errors.serviceType && <span>{errors.serviceType}</span>}
                    </div>
    
                    
                    <div className={ form==="customer" ? "hide-field" : "" }>
                        <select name="subCategory" id="subCategory" onChange={handleChange}>
                            <option value="">Sub-category</option>
                            <option value="Automobile">Automobile</option>
                            <option value="Domestic Services">Domestic Services</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Hospitality">Hospitality</option>
                            <option value="Beautician">Beautician</option>
                            <option value="Technician">Technician</option>
                            <option value="Phone/Accessories repair">Phone/Accessories repair</option>
                        </select>
                    </div>
                   


                    <div className={ form==="customer" ? "hide-field" : "" }>
                        <label htmlFor="openingClosingHour">Opening/Closing Hour</label>
                        <input type='text' name='openingClosingHour' placeholder='7am - 5pm' onChange={handleChange} />
                        {errors.openingClosingHour && <span>{errors.openingClosingHour}</span>}
                    </div>

                    
                    <div className={ form==="customer" ? "hide-field" : "" }>
                        <label htmlFor="password">Password</label>
                        <input type='password' name='password' placeholder='Enter password' onChange={handleChange} />
                        {errors.password && <span>{errors.password}</span>}
                    </div>

                    <div className={ form==="customer" ? "hide-field" : "" }>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type='password' name='confirmPassword' placeholder='confirm password' onChange={handleChange} />
                        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                    </div>


                    <div className={ form==="customer" ? "hide-field" : "" }>
                        <label htmlFor="referralCode">Referral Code(optional)</label>
                        <input type='text' name='referralCode' placeholder='RBHGRE23' />
                    </div>

                    <button type="submit">Sign Up</button>

                    <p className="account">Have an account? <span onClick={() => setSwitchToSignUp("Sign In")}>Sign In</span></p>
                    </form>
                    : "" }
                </div>
            </div>
    )
}

function Login() {

    //To switch between service provider and customer

    const [form, setForm] = useState("service provider");

    //To switch between Sign Up and Sign In

    const [switchToSignUp, setSwitchToSignUp] = useState("Sign In");

    //To render certain fields only when required

    const [other, setOther] = useState("");

    const HandleSetOther = (event) => {
        const getOther = event.target.value;
        setOther(getOther);
    }
    
    return(            
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

                    {/* Switch to Login */}

                    { switchToSignUp==="Sign In" ?
                    <form>
                        
                        <span className="tag">
                        <h5>Welcome back!</h5>
                            <p>Sign in as a <span>{form}</span></p>
                        </span>

                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input type='email' name="email" placeholder='Enter Email' />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input type='password' name='password' placeholder='Enter password' />
                        </div>

                        
                        <p className="forgot">Forgot Password?</p>
                       

                    <button type="submit">Sign In</button>


                
                    <p className="account">Don't have an account? <span onClick={() => setSwitchToSignUp("Sign Up")}>Sign Up</span></p>
                    </form>
                    : "" }

                    {/* Switch to signup */}

                    { switchToSignUp==="Sign Up" ?

                    <form>
                        
                        <span className="tag">
                            <h5>Create an account</h5>
                            <p>Sign up as a <span>{form}</span></p>
                        </span>

                        <section>
                            <span>
                                <label htmlFor="firstName">First Name</label>
                                <input type='text' name="serviceType" placeholder='Your Name' />
                            </span>
                            <span>
                                <label htmlFor="lastName">Last Name</label>
                                <input type='text' name="serviceType" placeholder='Your Name' />
                            </span>
                        </section>
                        

                        <section>
                            <span>
                                <label htmlFor="email">Email</label>
                                <input type='email' name="email" placeholder='Enter email' />
                            </span>
                            <span>
                                <label htmlFor="Address">Address</label>
                                <input type='text' name="address" placeholder='Enter location' />
                            </span>
                        </section>
                 

                        <section className={ form==="service provider" ? "hide-field" : "" }>
                            <span>
                                <label htmlFor="password">Password</label>
                                <input type='password' name="password" placeholder='Enter password' />
                            </span>
                            <span>
                                <label htmlFor="confirmPassword">Confirm password</label>
                                <input type='password' name="confirmPassword" placeholder='Re-type password' />
                            </span>
                        </section>

                    <div className={ form==="customer" ? "hide-field" : "" }>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type='number' name="phoneNumber" placeholder='+23470367***' />
                    </div>
                    
                
                    {/* <div className={ form==="customer" ? "hide-field" : "" } >
                        <label htmlFor="email">Email Address</label>
                        <input type='email' name="email" placeholder='Enter Email' />
                    </div> */}
            
                 
                    <div className={ form==="customer" ? "hide-field" : "" }>
                        <label htmlFor="serviceType">Service Type</label>
                        <select name="serviceType" id="serviceType" onChange={(e) => (HandleSetOther(e))}>
                            <option value="">Service Type</option>
                            <option value="Automobile">Automobile</option>
                            <option value="Domestic Services">Domestic Services</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Hospitality">Hospitality</option>
                            <option value="Beautician">Beautician</option>
                            <option value="Technician">Technician</option>
                            <option value="Phone/Accessories repair">Phone/Accessories repair</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                      

                    <div className={ form==="service provider" && other === "Other" ? "" : "hide-field" }>
                        <input type='text' name='serviceType' placeholder='specify service type' />
                    </div>
    
                    
                    <div className={ form==="customer" ? "hide-field" : "" }>
                        <select name="subCategory" id="subCategory">
                            <option value="">Sub-category</option>
                            <option value="Automobile">Automobile</option>
                            <option value="Domestic Services">Domestic Services</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Hospitality">Hospitality</option>
                            <option value="Beautician">Beautician</option>
                            <option value="Technician">Technician</option>
                            <option value="Phone/Accessories repair">Phone/Accessories repair</option>
                        </select>
                    </div>


                    <div className={ form==="customer" ? "hide-field" : "" }>
                        <label htmlFor="openingClosingHour">Opening/Closing Hour</label>
                        <input type='text' name='openingClosingHour' placeholder='7am - 5pm' />
                    </div>

                    
                    <div className={ form==="customer" ? "hide-field" : "" }>
                        <label htmlFor="password">Password</label>
                        <input type='password' name='password' placeholder='Enter password' />
                    </div>


                    <div className={ form==="customer" ? "hide-field" : "" }>
                        <label htmlFor="referralCode">Referral Code(optional)</label>
                        <input type='text' name='referralCode' placeholder='RBHGRE23' />
                    </div>

                    <button type="submit">Sign Up</button>

                    <p className="account">Have an account? <span onClick={() => setSwitchToSignUp("Sign In")}>Sign In</span></p>
                    </form>
                    : "" }
                </div>
            </div>
    )
}

export { Signup, Login };