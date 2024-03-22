import React, { useState, useRef, useEffect } from "react";
import PHOTOS from "../images";
import "./LoginSignup.css";
import { HandiworkContext } from "../Context/HandiworkContext";
import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Success from "../Success/Success";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";



function Signup() {

    //States to manage office address
    const [myStateData, setMyStateData] = useState([]);
    const [stateCode, setStateCode] = useState("");
    const [myCityData, setMyCityData] = useState([]);
    // console.log(myStateData)
    // const [street, setStreet] = useState("");
    


    //To close form
    const [modal, setModal] = useState(true);
    const handleModal = () =>{
        setModal(!modal)
        setSuccess(!success)
    }


    if(modal) {
            document.body.classList.add('active-modal')
            } else {
            document.body.classList.remove('active-modal')
            }

    //To hide and show password
    const [eye, setEye] = useState(false);
    const myEye = document.getElementById("myEye");
    const myEye2 = document.getElementById("myEye2");
    const myEye3 = document.getElementById("myEye3");
    const myEye4 = document.getElementById("myEye4");
    const myEye5 = document.getElementById("myEye5");
    const myEye6 = document.getElementById("myEye6");

    const handleEye = () =>{
        setEye(!eye)

        if(eye=== true){
            myEye.setAttribute('type', 'password');
            myEye2.setAttribute('type', 'password');
        }
        else{
            myEye.setAttribute('type', 'text');
            myEye2.setAttribute('type', 'text');
        }
    }

    const handleEye2 = () =>{
        setEye(!eye)

        if(eye=== true){
            myEye3.setAttribute('type', 'password');
            myEye4.setAttribute('type', 'password');
        }
        else{
            myEye3.setAttribute('type', 'text');
            myEye4.setAttribute('type', 'text');
        }
    }

    const handleEye3 = () =>{
        setEye(!eye)

        if(eye=== true){
            myEye5.setAttribute('type', 'password');
        }
        else{
            myEye5.setAttribute('type', 'text');
        }
    }

    const handleEye4 = () =>{
        setEye(!eye)

        if(eye=== true){
            myEye6.setAttribute('type', 'password');
        }
        else{
            myEye6.setAttribute('type', 'text');
        }
    }



    //Success message
    const [success, setSuccess] = useState(false);
    const handleSuccess = () =>{
        setSuccess(!success)
    }


    //To switch between service provider and customer
    const [form, setForm] = useState("service provider");

    //To switch between Sign Up and Sign In
    const [switchToSignUp, setSwitchToSignUp] = useState("Sign Up");


     //Form validation
     const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        serviceType: '',
        subCategory: '',
        openingHour: '',
        referralCode: '',
        stateOfResidence: "", 
        city: "", 
        street: "", 
     })


     //To render certain input fields only when required
     const [other, setOther] = useState("");
 
     const HandleSetOther = (event) => {
         const getOther = event.target.value;
         const {name, value} = event.target;
         setOther(getOther);

         //to set state code
        //  const getStateCode = event.target.name;
        //  setStateCode(getStateCode);

        // console.warn('stateCode', stateCode)

         setFormData({
            ...formData, [name] : value
        })
     }

      //To get state code from selected state
 
      const HandleSetStateCode = (event) => {
        //   const getOther = event.target.value;
        //   const {name, value} = event.target;
        //   setOther(getOther);
 
          //to set state code
          const getStateCode = event.target.value;
          const {name, value} = event.target;
          setStateCode(getStateCode);
 
         console.warn('stateCode', stateCode)
 
          setFormData({
             ...formData, [name] : value
         })

         fetchCities()
      }



     //customized error messages
     const [errors, setErrors] = useState({})


     //funtion to grab inputs made by users

     const handleChange = (e) =>{
        const {name, value} = e.target;

        setFormData({
            ...formData, [name] : value
        })

        // setStateCode(formData.stateOfResidence)
        // console.log(stateCode)

        console.log(formData)

        // fetchCities();
     }


     //To fetch states in nigeria
    
    function fetchStates(){

            //To fetch states in nigeria
            fetch("https://nigeria-states-towns-lga.onrender.com/api/states")    
            .then((res) => res.json())
            .then((response) => setMyStateData(response))
            
            console.warn('myStateData', myStateData)


            //To fetch all cities in each state in nigeria
            // fetch(`https://nigeria-states-towns-lga.onrender.com/api/${stateCode}/towns`)    
            // .then((myRes) => myRes.json())
            // .then((myResponse) => setMyCityData(myResponse))
            
            // console.warn('myCityData', myCityData)

            
    }
    fetchStates();
        



     //To get all cities for the selected state
        function fetchCities(){
            fetch(`https://nigeria-states-towns-lga.onrender.com/api/${stateCode}/towns`)    
            .then((myRes) => myRes.json())
            .then((myResponse) => setMyCityData(myResponse))
            
            console.warn('myCityData', myCityData)
        }
        fetchCities()
        

        
     

     //funtion to handle service providers form submit

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

        if(!formData.phone.trim()){
            validationErrors.phone = "phone number is required"
        }
        else if(formData.phone.length < 11){
            validationErrors.phone = "phone number should be atleast 11 characters"
        }

        if(!formData.serviceType.trim()){
            validationErrors.serviceType = "please select service type"
        }

        if(!formData.openingHour.trim()){
            validationErrors.openingHour = "please specify your opening and closing hour"
        }


        console.log(validationErrors)

        

        //API Integration for Sign Up

    try {
        const result = await fetch("https://handiwork.cosmossound.com.ng/api/skill-providers/create", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        if(!result.ok){
            throw new Error("there is an existing user with this email")
        }


        const lastResult = await result.json()

        console.warn('lastResult', lastResult)


        //To store the data in the local storage
        localStorage.setItem("user-info", JSON.stringify(lastResult))


        //Retrieving service providers
        const userData = await fetch("https://handiwork.cosmossound.com.ng/api/skill-providers/skillproviders")

        const users = await userData.json()

        console.warn('users', users)
        


    }catch (dupError) {
        console.log(dupError)
        validationErrors.email = "there is an existing user with this email"
    }

    setErrors(validationErrors)


    if(Object.keys(validationErrors).length === 0 || validationErrors == {}){

        //To show success message
            handleSuccess()

        //To clear form
        e.target.reset();        
    }
        
        }

    //funtion to handle customers form submit

    async function handleCustomerSubmit(e){
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


    console.log(validationErrors)

    

    //API Integration for customer Sign Up

try {
    const result = await fetch("https://handiwork.cosmossound.com.ng/api/customers/create", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })

    if(!result.ok){
        throw new Error("there is an existing user with this email")
    }


    const newCustomer = await result.json()

    console.warn('lastResult', newCustomer)


    //To store the customers data in the local storage
    localStorage.setItem("user-info", JSON.stringify(newCustomer))


    //Retrieving all customers
    const customersData = await fetch("https://handiwork.cosmossound.com.ng/api/customers/customers")

    const allCustomers = await customersData.json()

    console.warn('users', allCustomers)
    


}catch (dupError) {
    console.log(dupError)
    validationErrors.email = "there is an existing user with this email"
}

setErrors(validationErrors)


if(Object.keys(validationErrors).length === 0 || validationErrors == {}){

    //To show success message
        handleSuccess()

    //To clear form
    e.target.reset();        
}
    
        }



    
    return(            
            

            <div className={ modal ? "modal" : "hide-field" }>
                <div className="overlay"></div>
                <div className="modal-content">
                    <IoMdClose onClick={handleModal} className="close-modal" />
                    
                   
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
                            <form>                              
                                <span className="tag">
                                <h5>Welcome back!</h5>
                                    <p>Sign in as a <span>{form}</span></p>
                                </span>

                                <div>
                                    <label htmlFor="email">Email Address</label>
                                    <input type='email' name="email" placeholder='Enter Email' onChange={handleChange} />
                                </div>

                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input type='password' name='password' id="myEye5" placeholder='Enter password' onChange={handleChange} />
                                    <section className="eyeCover" onClick={handleEye3}>{eye ? <FiEyeOff className="eye" /> : <FiEye className="eye" />}</section>
                                </div>

                                
                                <p className="forgot">Forgot Password?</p>
                            

                            <button type="submit">Sign In</button>


                        
                            <p className="account">Don't have an account? <span onClick={() => setSwitchToSignUp("Sign Up")}>Sign Up</span></p>
                            </form>
                            : "" }

                            
                            {/* Switch to customer Login */}

                            { switchToSignUp==="Sign In" && form==="customer" ?
                            <form>
                                
                                <span className="tag">
                                <h5>Welcome back!</h5>
                                    <p>Sign in as a <span>customer</span></p>
                                </span>

                                <div>
                                    <label htmlFor="email">Email Address</label>
                                    <input type='email' name="email" placeholder='Enter Email' onChange={handleChange} />
                                </div>

                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input type='password' name='password' id="myEye6" placeholder='Enter password' onChange={handleChange} />
                                    <section className="eyeCover" onClick={handleEye4}>{eye ? <FiEyeOff className="eye" /> : <FiEye className="eye" />}</section>
                                </div>

                                
                                <p className="forgot">Forgot Password?</p>
                            

                            <button type="submit">Sign In</button>


                        
                            <p className="account">Don't have an account? <span onClick={() => setSwitchToSignUp("Sign Up")}>Sign Up</span></p>
                            </form>
                            : "" }



                            {/* Switch to service provider signup */}

                            { switchToSignUp==="Sign Up" && form==="service provider"  ?

                            <form onSubmit={handleSubmit} className="service-provider">
                                
                                <span className="tag">
                                    <h5>Create an account</h5>
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
                                        <label htmlFor="email">Email</label>
                                        <input type='email' name="email" placeholder='Enter email' onChange={handleChange} />
                                        {errors.email && <span>{errors.email}</span>}
                                    </span>
                                    <span>
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type='number' name="phone" placeholder='070367***' onChange={handleChange} />
                                        {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
                                    </span>
                                </section>
                        

                            <div>
                                <label htmlFor="Address">State of Residence</label> 
                                    <select id="stateOfResidence" name="stateOfResidence" onChange={HandleSetStateCode}>
                                        <option value="">Select State</option>
                                        {
                                            myStateData.map(state => (<option  
                                                name={state.state_code} 
                                                key={state.state_code} 
                                                value={state.state_code}>{state.name}</option>))
                                        }
                                    </select>
                                {errors.address && <span>{errors.address}</span>}
                            </div>

                            <div>
                
                                <select name="city" id="city" onChange={handleChange}>
                                    <option value="">Select City</option>
                                        {
                                            myCityData.map(city => (
                                                <option  
                                                name={city.name}
                                                key={city.name} 
                                                value={city.name}>{city.name}</option>))
                                        }
                                </select>
                                {errors.address && <span>{errors.address}</span>}
                            </div>

                            <div>
                                <input type='text' name="street" 
                                placeholder='Enter office number and street name' onChange={handleChange} />
                                {errors.address && <span>{errors.address}</span>}
                            </div>
                            
                    
                        
                            <div>
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
            
                            
                            <div className={ other === "Other" ? "hide-field" : "" }>
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
                        


                            <div>
                                <label htmlFor="openingHour">Opening/Closing Hour</label>
                                <input type='text' name='openingHour' placeholder='7am - 5pm' onChange={handleChange} />
                                {errors.openingClosingHour && <span>{errors.openingClosingHour}</span>}
                            </div>

                            
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type='password' name='password' id="myEye" placeholder='Enter password' onChange={handleChange} />
                                {errors.password && <span>{errors.password}</span>}
                                <section className="eyeCover" onClick={handleEye}>{eye ? <FiEyeOff className="eye" /> : <FiEye className="eye" />}</section>
                            </div>

                            <div>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type='password' name='confirmPassword' id="myEye2" placeholder='confirm password' onChange={handleChange} />
                                {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                                <section className="eyeCover" onClick={handleEye}>{eye ? <FiEyeOff className="eye" /> : <FiEye className="eye" />}</section>
                            </div>


                            <div>
                                <label htmlFor="referralCode">Referral Code(optional)</label>
                                <input type='text' name='referralCode' placeholder='RBHGRE23' onChange={handleChange} />
                            </div>

                            <button type="submit">Sign Up</button>

                            <p className="account">Have an account? <span onClick={() => setSwitchToSignUp("Sign In")}>Sign In</span></p>
                            </form>
                            : "" }

                            {/* Switch to customer signup */}

                            { switchToSignUp==="Sign Up" && form==="customer"  ?

                            <form onClick={handleCustomerSubmit} className="customer">
                                
                                <span className="tag">
                                    <h5>Create an account</h5>
                                    <p>Sign up as a <span>customer</span></p>
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
                                        <input type='password' name="password" id="myEye3" placeholder='Enter password' onChange={handleChange} />
                                        {errors.password && <span>{errors.password}</span>}
                                        <section className="eyeCover" onClick={handleEye2}>{eye ? <FiEyeOff className="eye" /> : <FiEye className="eye" />}</section>
                                    </span>
                                    <span>
                                        <label htmlFor="confirmPassword">Confirm password</label>
                                        <input type='password' name="confirmPassword" id="myEye4" placeholder='Re-type password' onChange={handleChange} />
                                        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                                        <section className="eyeCover" onClick={handleEye2}>{eye ? <FiEyeOff className="eye" /> : <FiEye className="eye" />}</section>
                                    </span>
                                </section> 

                            

                            <button type="submit">Sign Up</button>

                            <p className="account">Have an account? <span onClick={() => setSwitchToSignUp("Sign In")}>Sign In</span></p>
                            </form>
                            : "" }
                        </div>
                    </div>
                </div>

                { success ? 
                    <div className='success'>
                        <img src={PHOTOS.thumb} alt="thumb" />
                        <h3>Registration successful!</h3>
                        <button onClick={handleModal}>Ok</button>
                    </div>
                : "" }
            </div>
            
    )
}

function Login() {

    //To close form
    const [modal, setModal] = useState(true);
    const handleModal = () =>{
        setModal(!modal)
    }

    if(modal) {
        document.body.classList.add('active-modal')
        } else {
        document.body.classList.remove('active-modal')
        }

    //Success message
    const [success, setSuccess] = useState(false);
    const handleSuccess = () =>{
        setSuccess(!success)
    }

    //To hide and show password
    const [eye, setEye] = useState(false);
    const myEye = document.getElementById("myEye");
    const myEye2 = document.getElementById("myEye2");
    const myEye3 = document.getElementById("myEye3");
    const myEye4 = document.getElementById("myEye4");
    const myEye5 = document.getElementById("myEye5");
    const myEye6 = document.getElementById("myEye6");

    const handleEye = () =>{
        setEye(!eye)

        if(eye=== true){
            myEye.setAttribute('type', 'password');
            myEye2.setAttribute('type', 'password');
        }
        else{
            myEye.setAttribute('type', 'text');
            myEye2.setAttribute('type', 'text');
        }
    }

    const handleEye2 = () =>{
        setEye(!eye)

        if(eye=== true){
            myEye3.setAttribute('type', 'password');
            myEye4.setAttribute('type', 'password');
        }
        else{
            myEye3.setAttribute('type', 'text');
            myEye4.setAttribute('type', 'text');
        }
    }

    const handleEye3 = () =>{
        setEye(!eye)

        if(eye=== true){
            myEye5.setAttribute('type', 'password');
        }
        else{
            myEye5.setAttribute('type', 'text');
        }
    }

    const handleEye4 = () =>{
        setEye(!eye)

        if(eye=== true){
            myEye6.setAttribute('type', 'password');
        }
        else{
            myEye6.setAttribute('type', 'text');
        }
    }

    //To switch between service provider and customer
    const [form, setForm] = useState("service provider");


    //To switch between Sign Up and Sign In
    const [switchToSignUp, setSwitchToSignUp] = useState("Sign In");

    //Form validation
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        password: '',
        confirmPassword: '',
        phone: '',
        serviceType: '',
        subCategory: '',
        openingHour: '',
        referralCode: '',
     })

    //To render certain fields only when required
    const [other, setOther] = useState("");

    const HandleSetOther = (event) => {
        const getOther = event.target.value;
        setOther(getOther);


         const {name, value} = event.target;

         setFormData({
            ...formData, [name] : value
        })
    }

    //customized error messages
    const [errors, setErrors] = useState({})


    //funtion to grab inputs made by users

    const handleChange = (e) =>{
       const {name, value} = e.target;

       setFormData({
           ...formData, [name] : value
       })

       console.log(formData)
    }



    //funtion to handle second service providers Reg form submit

    async function handleSubmit2(e){
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

        if(!formData.phone.trim()){
            validationErrors.phone = "phone number is required"
        }
        else if(formData.phone.length < 11){
            validationErrors.phone = "phone number should be atleast 11 characters"
        }

        if(!formData.serviceType.trim()){
            validationErrors.serviceType = "please select service type"
        }

        if(!formData.openingHour.trim()){
            validationErrors.openingHour = "please specify your opening and closing hour"
        }


        console.log(validationErrors)

        

        //API Integration for Sign Up

    try {
        const result = await fetch("https://handiwork.cosmossound.com.ng/api/skill-providers/create", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        if(!result.ok){
            throw new Error("there is an existing user with this email")
        }


        const lastResult = await result.json()

        console.warn('lastResult', lastResult)


        //To store the data in the local storage
        localStorage.setItem("user-info", JSON.stringify(lastResult))


        //Retrieving service providers
        const userData = await fetch("https://handiwork.cosmossound.com.ng/api/skill-providers/skillproviders")

        const users = await userData.json()

        console.warn('users', users)
        


    }catch (dupError) {
        console.log(dupError)
        validationErrors.email = "there is an existing user with this email"
    }

    setErrors(validationErrors)


    if(Object.keys(validationErrors).length === 0 || validationErrors == {}){

        //To show success message
            handleSuccess()

        //To clear form
        e.target.reset();        
    }
        
    }

    //funtion to handle second customers Reg form submit

    async function handleCustomerSubmit2(e){
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
    
    
        console.log(validationErrors)
    
        
    
        //API Integration for customer Sign Up
    
    try {
        const result = await fetch("https://handiwork.cosmossound.com.ng/api/customers/create", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
    
        if(!result.ok){
            throw new Error("there is an existing user with this email")
        }
    
    
        const newCustomer = await result.json()
    
        console.warn('lastResult', newCustomer)
    
    
        //To store the customers data in the local storage
        localStorage.setItem("user-info", JSON.stringify(newCustomer))
    
    
        //Retrieving all customers
        const customersData = await fetch("https://handiwork.cosmossound.com.ng/api/customers/customers")
    
        const allCustomers = await customersData.json()
    
        console.warn('users', allCustomers)
        
    
    
    }catch (dupError) {
        console.log(dupError)
        validationErrors.email = "there is an existing user with this email"
    }
    
    setErrors(validationErrors)
    
    
    if(Object.keys(validationErrors).length === 0 || validationErrors == {}){
    
        //To show success message
            handleSuccess()
    
        //To clear form
        e.target.reset();        
    }
        
        }
    
    return(  
        <div className={ modal ? "modal" : "hide-field"}>
            <div className="overlay"></div>
            <div className="modal-content">
                <IoMdClose onClick={handleModal} className="close-modal" />

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
                    <form>    
                        <span className="tag">
                            <h5>Welcome back!</h5>
                            <p>Sign in as a <span>service provider</span></p>
                        </span>

                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input type='email' name="email" placeholder='Enter Email' />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input type='password' name='password' id="myEye5" placeholder='Enter password' />
                            <section className="eyeCover" onClick={handleEye3}>{eye ? <FiEyeOff className="eye" /> : <FiEye className="eye" />}</section>
                        </div>

                        
                        <p className="forgot">Forgot Password?</p>
                       

                    <button type="submit">Sign In</button>


                
                    <p className="account">Don't have an account? <span onClick={() => setSwitchToSignUp("Sign Up")}>Sign Up</span></p>
                    </form>
                    : "" }

                    {/* Switch to customer Login */}

                    { switchToSignUp==="Sign In" && form==="customer" ?
                    <form>
                        
                        <span className="tag">
                        <h5>Welcome back!</h5>
                            <p>Sign in as a <span>customer</span></p>
                        </span>

                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input type='email' name="email" placeholder='Enter Email' />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input type='password' name='password' id="myEye6" placeholder='Enter password' />
                            <section className="eyeCover" onClick={handleEye4}>{eye ? <FiEyeOff className="eye" /> : <FiEye className="eye" />}</section>
                        </div>

                        
                        <p className="forgot">Forgot Password?</p>
                       

                    <button type="submit">Sign In</button>


                
                    <p className="account">Don't have an account? <span onClick={() => setSwitchToSignUp("Sign Up")}>Sign Up</span></p>
                    </form>
                    : "" }


                    {/* Switch to service provider signup */}

                    { switchToSignUp==="Sign Up" && form==="service provider" ?

                    <form onClick={handleSubmit2}>  
                        <span className="tag">
                            <h5>Create an account</h5>
                            <p>Sign up as a <span>service provider</span></p>
                        </span>

                        <section>
                            <span>
                                <label htmlFor="firstName">First Name</label>
                                <input type='text' name="firstName" placeholder='Your first name' onChange={handleChange} />
                                {errors.firstName && <span>{errors.firstName}</span>}
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
                                <input type='text' name="address" placeholder='Enter address' onChange={handleChange} />
                                {errors.address && <span>{errors.address}</span>}
                            </span>
                        </section>

                    <div className={ form==="customer" ? "hide-field" : "" }>
                        <label htmlFor="phone">Phone Number</label>
                        <input type='number' name="phone" placeholder='+23470367***' onChange={handleChange} />
                        {errors.phone && <span>{errors.phone}</span>}
                    </div>
            
                 
                    <div>
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
                        {errors.serviceType && <span>{errors.serviceType}</span>}
                    </div>
                      

                    <div className={ other === "Other" ? "" : "hide-field" }>
                        <input type='text' name='serviceType' placeholder='specify service type' onChange={handleChange} />
                    </div>
    
                    
                    <div>
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


                    <div>
                        <label htmlFor="openingHour">Opening/Closing Hour</label>
                        <input type='text' name='openingHour' placeholder='7am - 5pm' onChange={handleChange} />
                        {errors.openingHour && <span>{errors.openingHour}</span>}
                    </div>

                    
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type='password' name='password' id="myEye" placeholder='Enter password' onChange={handleChange} />
                        {errors.password && <span>{errors.password}</span>}
                        <section className="eyeCover" onClick={handleEye}>{eye ? <FiEyeOff className="eye" /> : <FiEye className="eye" />}</section>
                    </div>

                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type='password' name='confirmPassword' id="myEye2" placeholder='confirm password' onChange={handleChange} />
                        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                        <section className="eyeCover" onClick={handleEye}>{eye ? <FiEyeOff className="eye" /> : <FiEye className="eye" />}</section>
                    </div>


                    <div>
                        <label htmlFor="referralCode">Referral Code(optional)</label>
                        <input type='text' name='referralCode' placeholder='RBHGRE23' onChange={handleChange} />
                    </div>

                    <button type="submit">Sign Up</button>

                    <p className="account">Have an account? <span onClick={() => setSwitchToSignUp("Sign In")}>Sign In</span></p>
                    </form>
                    : "" }


                    {/* Switch to customer signup */}

                    { switchToSignUp==="Sign Up" && form==="customer" ?

                    <form>
                        
                        <span className="tag">
                            <h5>Create an account</h5>
                            <p>Sign up as a <span>customer</span></p>
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
                 

                        <section >
                            <span>
                                <label htmlFor="password">Password</label>
                                <input type='password' name="password" id="myEye3" placeholder='Enter password' />
                                <section className="eyeCover" onClick={handleEye2}>{eye ? <FiEyeOff className="eye" /> : <FiEye className="eye" />}</section>
                            </span>
                            <span>
                                <label htmlFor="confirmPassword">Confirm password</label>
                                <input type='password' name="confirmPassword" id="myEye4" placeholder='Re-type password' />
                                <section className="eyeCover" onClick={handleEye2}>{eye ? <FiEyeOff className="eye" /> : <FiEye className="eye" />}</section>
                            </span>
                        </section>

                    <button type="submit">Sign Up</button>

                    <p className="account">Have an account? <span onClick={() => setSwitchToSignUp("Sign In")}>Sign In</span></p>
                    </form>
                    : "" }
                </div>
                </div>
            </div>

            { success ?
                    <div className='success'>
                        <img src={PHOTOS.thumb} alt="thumb" />
                        <h3>Registration successful!</h3>
                        <button onClick={handleModal}>Ok</button>
                    </div>
            : "" }
        </div>         
    )
}

export { Signup, Login };