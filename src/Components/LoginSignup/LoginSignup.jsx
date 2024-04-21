import React, { useState, useRef, useEffect } from "react";
import Select from "react-select"
import PHOTOS from "../images";
import "./LoginSignup.css";
import { HandiworkContext } from "../Context/HandiworkContext";
import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Welcome from "../Welcome/Welcome";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import {Success, Success2} from "../Success/Success";
import { serviceTypes, subCategories } from "../Assets/Data";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import "../ServAndSub/ServAndSub.css"




function Signup() {

    //States to manage service provider's location
    
    // const{handleChange} = useContext(HandiworkContext)
    const{handleFileChange} = useContext(HandiworkContext)
    const{handleCustomerChange} = useContext(HandiworkContext)
    const{handleCustomerSignUp} = useContext(HandiworkContext)

    const{other} = useContext(HandiworkContext)
    const{handleSetOther} = useContext(HandiworkContext)
    const{myStateData} = useContext(HandiworkContext)
    const{myCityData} = useContext(HandiworkContext)
    const{stateCode} = useContext(HandiworkContext)
    const{HandleSetStateCode} = useContext(HandiworkContext)
    const{handleEmailOrPhone} = useContext(HandiworkContext)
    const{handleProviderLogin} = useContext(HandiworkContext)
    const{loginError} = useContext(HandiworkContext)
    const{handleCustomerLogin} = useContext(HandiworkContext)
    const{handlePassword} = useContext(HandiworkContext)
    // const{handleProviderSignUp} = useContext(HandiworkContext)
    // const{errors} = useContext(HandiworkContext)
    const{success} = useContext(HandiworkContext)
    const{welcome} = useContext(HandiworkContext)
    const{justShow} = useContext(HandiworkContext)
    const{handleShow} = useContext(HandiworkContext)
    // const{duplicateEmail} = useContext(HandiworkContext)
    // const{duplicateNumber} = useContext(HandiworkContext)
    const{handleServiceSearch} = useContext(HandiworkContext)
    const{serviceSearch} = useContext(HandiworkContext)
    const{openSelect} = useContext(HandiworkContext)
    const{selectedOption} = useContext(HandiworkContext)
    


    // To toggle Signup
    const {toggleSignup} = useContext(HandiworkContext)


    
    // if(modal) {
    //     document.body.classList.add('active-modal')
    //     } else {
    //     document.body.classList.remove('active-modal')
    //     }

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
    const [switchToSignUp, setSwitchToSignUp] = useState("Sign Up");


     //Form validation
     const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        secondPhone: '',
        serviceType: "",
        subCategory: "",
        openingHour: '',
        referralCode: '',
        stateOfResidence: "", 
        city: "", 
        street: "", 
        imagePath: "",
     })


     //For service type custom dropdown
    const [serviceDD, setServiceDD] = useState(false);
    const [serviceValue, setServiceValue] = useState("");
    const [serviceType, setServiceType] = useState("");

    console.warn("serviceType:", serviceType)

    //to toggle service type custom dropdown
    const handleServiceDD = ()=>{
        setServiceDD(!serviceDD)
    }

    //to get search term from service type dropdown search box
    const handleServiceValue = (e)=>{
        setServiceValue(e.target.value.toLowerCase())
    }

    //to get selected value from service type dropdown
    const handleServiceSelect = (service)=>{
        setFormData({
            ...formData,
            serviceType: service
          });
    }


     //For subCategory custom dropdown
     const [subCategoryDD, setSubCategoryDD] = useState(false);
     const [subCategoryValue, setSubCategoryValue] = useState("");
     const [subCategory, setSubCategory] = useState("");
 
     console.warn("subCategory:", subCategory)


     //to toggle subCategory custom dropdown
    const handleSubCategoryDD = ()=>{
        setSubCategoryDD(!subCategoryDD)
    }

    //to get search term from subCategory dropdown search box
    const handleSubCategoryValue = (e)=>{
        setSubCategoryValue(e.target.value.toLowerCase())
    }

    //to get selected value from subCategory dropdown
    const handleSubCategorySelect = (category)=>{
        setFormData({
            ...formData,
            subCategory: category
          });
    }




     //to get input values from most  input fields
     const handleChange = (e) =>{
        const {name, value} = e.target;

        setFormData({
            ...formData, [name] : value
            // ...formData, [name]: name === 'imagePath' || 'imagePath2' ? files[0] : value
        })
      
        console.warn("formData", formData)
    }

    
    
    //funtion to handle service providers signUp

     //customized error messages
     const [errors, setErrors] = useState({})

     const [duplicateEmail, setDuplicateEmail] = useState("")
     const [duplicateNumber, setDuplicateNumber] = useState("")
     console.warn('duplicateEmail:', duplicateEmail)
     console.warn('duplicateNumber:', duplicateNumber)

    async function handleProviderSignUp(e){
      e.preventDefault()
      const validationErrors = {}


      //To ensure valid inputs
      if(!formData.firstName.trim()){
          validationErrors.firstName = "first name is required"
      }

      if(!formData.lastName.trim()){
          validationErrors.lastName = "last name is required"
      }

      // if(!formData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      //     validationErrors.email = "email is not valid"
      // }

      if (!formData.imagePath){
        validationErrors.imagePath = "profile image is required"
    }

      if(!formData.stateOfResidence.trim()){
          validationErrors.stateOfResidence = "please select state of residence"
      }

      if(!formData.city.trim()){
          validationErrors.city = "please select city"
      }

      if(!formData.street.trim()){
          validationErrors.street = "please provide office no. and street name"
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

      if(!formData.serviceType){
          validationErrors.serviceType = "please select service type"
      }

      if(!formData.openingHour.trim()){
          validationErrors.openingHour = "please specify your opening and closing hour"
      }

      setErrors(validationErrors)

      console.warn("validationErrors", validationErrors)

      const noError = Object.keys(validationErrors).length === 0;

      

      //API Integration for service providers Sign Up

  try {

    setLoading(true)

      const result = await fetch("https://handiworks.cosmossound.com.ng/api/skill-providers/create", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          }
      })

      if(result.ok && noError){
          handleSuccess()
    }
    else if(!result.ok){
      const errorMessage = await result.json();
      const lastError = errorMessage ? errorMessage.error : "";
      console.log("errorMessage:", lastError)
      throw new Error(lastError)
    }


      const lastResult = await result.json()

      console.warn('lastResult', lastResult)
      

      //To store the registered Provider in the local storage
      // localStorage.setItem("loggedinProvider", JSON.stringify(lastResult))



      //Retrieving service providers
      // const userData = await fetch("https://handiwork.cosmossound.com.ng/api/skill-providers/skillproviders")

      // const users = await userData.json()

      // console.warn('users', users)
      

  }catch (dupError) {
      console.log("myError:", dupError)

      if (dupError == 'Email already exists') {
        setDuplicateEmail(dupError);
      } else if (dupError == 'Phone number already exists') {
        setDuplicateNumber(dupError);
      }

      // if(dupError.includes("mail")){
      //   setDuplicateEmail(dupError)
      // }
      // else if(dupError.includes("phone")){
      //   setDuplicateNumber(dupError)
      // }
  }

  finally{
    setLoading(false)
  }

  


  // if(Object.keys(validationErrors).length === 0 || validationErrors == {}){

  //     //To show success message
  //         handleSuccess()

  //     //To clear form
  //     // e.target.reset();        
  // }
      
    }


     //To render certain input fields only when required
    //  const [other, setOther] = useState("");
 
    //  const HandleSetOther = (event) => {
    //      const getOther = event.target.value;
    //      const {name, value} = event.target;
    //      setOther(getOther);

    //      //to set state code
    //     //  const getStateCode = event.target.name;
    //     //  setStateCode(getStateCode);

    //     // console.warn('stateCode', stateCode)

    //      setFormData({
    //         ...formData, [name] : value
    //     })
    //  }

      //To get state code from selected state
 
    //   const HandleSetStateCode = (event) => {
    //     //   const getOther = event.target.value;
    //     //   const {name, value} = event.target;
    //     //   setOther(getOther);
 
    //       //to set state code
    //       const getStateCode = event.target.value;
    //       const {name, value} = event.target;
    //       setStateCode(getStateCode);
 
    //      console.warn('stateCode', stateCode)
 
    //       setFormData({
    //          ...formData, [name] : value
    //      })  
    //   }
      



     //customized error messages
    //  const [errors, setErrors] = useState({})

     //to grab the profile Image field for validation
    //  const displayPhoto = document.getElementById('imagePath');


     //funtion to grab inputs made by users

    //  const handleChange = (e) =>{
    //     const {name, value, files} = e.target;

    //     setFormData({
    //         // ...formData, [name] : value
    //         ...formData, [name]: name === 'profileImage' ? files[0] : value
    //     })

    //     console.log(formData)
    //  }


     //To fetch states in nigeria
    
    // function fetchStates(){

    //         //To fetch states in nigeria
    //         fetch("https://nigeria-states-towns-lga.onrender.com/api/states")    
    //         .then((res) => res.json())
    //         .then((response) => setMyStateData(response))
    //         .catch((stateErr) => console.log(stateErr))
            
    //         console.warn('myStateData', myStateData)

            
    // }
    // useEffect(() =>{
    //     fetchStates();
    //  }, [])


     //To get all cities for the selected state
        // function fetchCities(){
        //     fetch(`https://nigeria-states-towns-lga.onrender.com/api/${stateCode}/lgas`)    
        //     .then((myRes) => myRes.json())
        //     .then((myResponse) => setMyCityData(myResponse))
        //     .catch((cityErr) => console.log(cityErr))
            
        //     console.warn('myCityData', myCityData)
        // }
        // useEffect(() =>{
        //     fetchCities()
        //  }, [stateCode])
        

        
     

     //funtion to handle service providers form submit

    //  async function handleSubmit(e){
    //     e.preventDefault()
    //     const validationErrors = {}


    //     //To ensure valid inputs
    //     if(!formData.firstName.trim()){
    //         validationErrors.firstName = "first name is required"
    //     }

    //     if(!formData.lastName.trim()){
    //         validationErrors.lastName = "last name is required"
    //     }

    //     // if(!formData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    //     //     validationErrors.email = "email is not valid"
    //     // }

    //     // if(!formData.profileImage.file || profileImage.file.length === 0){
    //     //     validationErrors.profileImage = "profile image is required"
    //     // }

    //     if (!displayPhoto.files || displayPhoto.files.length === 0){
    //         validationErrors.imagePath = "profile image is required"
    //     }

    //     if(!formData.stateOfResidence.trim()){
    //         validationErrors.stateOfResidence = "please select state of residence"
    //     }

    //     if(!formData.city.trim()){
    //         validationErrors.city = "please select city"
    //     }

    //     if(!formData.street.trim()){
    //         validationErrors.street = "please provide office no. and street name"
    //     }

    //     if(!formData.password.trim()){
    //         validationErrors.password = "password is required"
    //     }
    //     else if(formData.password.length < 6){
    //         validationErrors.password = "password should be atleast 6 characters"
    //     }

    //     if(formData.confirmPassword !== formData.password){
    //         validationErrors.confirmPassword = "password not matched"
    //     }

    //     if(!formData.phone.trim()){
    //         validationErrors.phone = "phone number is required"
    //     }
    //     else if(formData.phone.length < 11){
    //         validationErrors.phone = "phone number should be atleast 11 characters"
    //     }

    //     if(!formData.serviceType.trim()){
    //         validationErrors.serviceType = "please select service type"
    //     }

    //     if(!formData.openingHour.trim()){
    //         validationErrors.openingHour = "please specify your opening and closing hour"
    //     }


    //     console.log(validationErrors)

        

    //     //API Integration for Sign Up

    // try {
    //     const result = await fetch("https://handiworks.cosmossound.com.ng/api/skill-providers/create", {
    //         method: "POST",
    //         body: JSON.stringify(formData),
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         }
    //     })

    //     if(!result.ok){
    //         throw new Error("Bad Response")
    //     }


    //     const lastResult = await result.json()

    //     console.warn('lastResult', lastResult)


    //     //To store the data in the local storage
    //     localStorage.setItem("user-info", JSON.stringify(lastResult))


    //     //Retrieving service providers
    //     const userData = await fetch("https://handiwork.cosmossound.com.ng/api/skill-providers/skillproviders")

    //     const users = await userData.json()

    //     console.warn('users', users)
        


    // }catch (dupError) {
    //     console.log(dupError)
    // }

    // setErrors(validationErrors)


    // if(Object.keys(validationErrors).length === 0 || validationErrors == {}){

    //     //To show success message
    //         handleSuccess()

    //     //To clear form
    //     e.target.reset();        
    // }
        
    //     }


    //funtion to handle customers signUp

    //     async function handleCustomerSubmit(e){
    //     e.preventDefault()
    //     const validationErrors = {}


    //     //To ensure valid inputs
    //     if(!formData.firstName.trim()){
    //         validationErrors.firstName = "first name is required"
    //     }

    //     if(!formData.lastName.trim()){
    //         validationErrors.lastName = "last name is required"
    //     }

    //     // if(!formData.email.trim()){
    //     //     validationErrors.email = "email is required"
    //     // }
    //     // else if(!formData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    //     //     validationErrors.email = "email is not valid"
    //     // }

    //     if(!formData.address.trim()){
    //         validationErrors.address = "address is required"
    //     }

    //     if(!formData.password.trim()){
    //         validationErrors.password = "password is required"
    //     }
    //     else if(formData.password.length < 6){
    //         validationErrors.password = "password should be atleast 6 characters"
    //     }

    //     if(formData.confirmPassword !== formData.password){
    //         validationErrors.confirmPassword = "password not matched"
    //     }


    //     console.log(validationErrors)

        

    //     //API Integration for customer Sign Up

    // try {
    //     const result = await fetch("https://handiwork.cosmossound.com.ng/api/customers/create", {
    //         method: "POST",
    //         body: JSON.stringify(formData),
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         }
    //     })

    //     if(!result.ok){
    //         throw new Error("could not complete registration")
    //     }


    //     const newCustomer = await result.json()

    //     console.warn('newCustomer', newCustomer)


    //     //To store the customers data in the local storage
    //     localStorage.setItem("loggedinCustomer", JSON.stringify(newCustomer))


    //     //Retrieving all customers
    //     // const customersData = await fetch("https://handiwork.cosmossound.com.ng/api/customers/customers")

    //     // const allCustomers = await customersData.json()

    //     // console.warn('users', allCustomers)
        


    // }catch (dupError) {
    //     console.log(dupError)
    // }

    // setErrors(validationErrors)


    // if(Object.keys(validationErrors).length === 0 || validationErrors == {}){

    //     //To show success message
    //         // handleSuccess()

    //     //To clear form
    //     e.target.reset();        
    // }
        
    // }


    
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

                                <div>
                                    <label htmlFor="emailOrPhone">Phone number</label>
                                    <input type='number' name="emailOrPhone" placeholder='Enter phone number' onChange={handleEmailOrPhone} />
                                </div>

                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input type='password' name='password' id="myEye5" placeholder='Enter password' onChange={handlePassword} />
                                    <section className="eyeCover" onClick={handleEye3}>{eye ? <FiEyeOff className="eye" /> : <FiEye className="eye" />}</section>
                                </div>

                               { loginError ? <p className="loginError">{loginError.message}</p> : "" }
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

                                <div>
                                    <label htmlFor="emailOrPhone">Email Address</label>
                                    <input type='number' name="emailOrPhone" placeholder='Enter phone number' onChange={handleEmailOrPhone} />
                                </div>

                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input type='password' name='password' id="myEye6" placeholder='Enter password' onChange={handlePassword} />
                                    <section className="eyeCover" onClick={handleEye4}>{eye ? <FiEyeOff className="eye" /> : <FiEye className="eye" />}</section>
                                </div>

                                
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
                                <div className={ serviceDD ? "service-dropdown" : "short"}>
                                    <span className="select" onClick={handleServiceDD}>
                                        <div
                                        className={serviceType ? "selected" : "my-grey"}
                                        >{ serviceType ? serviceType : "--Select service type--"}
                                        </div>
                                        <RiArrowDropDownLine  className={ serviceDD ? 'up' : "search-drop"} 
                                        onClick={handleServiceDD} />
                                    </span>

                                    <ul className={serviceDD ? "" : "hide-field"}>
                                        <span className="search">
                                            <IoSearchOutline className='lens' />
                                            <input type="text" className="text" placeholder="Search service type"
                                            onChange={handleServiceValue}
                                            />
                                        </span>
                                    {
                                        
                                        serviceTypes.map((service, i) =>(
                                        <li key={i} 
                                        className={service.toLowerCase().startsWith(serviceValue) ? "" : "hide-field"}
                                        onClick={() =>{
                                            if(service.toLowerCase() !== serviceType.toLowerCase()){
                                            setServiceType(service)
                                            handleServiceSelect(service)
                                            }

                                            setServiceDD(false)
                                            
                                        }}
                                        >{service}</li>
                                        ))
                                    }
                                    </ul>
                                </div>
                            </div>
                            
                            <div className={ serviceType === "Other" ? "my-div" : "hide-field" }>
                                <input type='text' name='serviceType' placeholder='specify service type' onChange={handleChange} />
                                {errors.serviceType && <span>{errors.serviceType}</span>}
                            </div>
            

                            <div className={ serviceType === "Other" || serviceType=="" ? "hide-field" : "my-div" }>
                                {/* <select name="subCategory" id="subCategory" onChange={handleChange}>
                                    <option value="">--Sub-category--</option>
                                    <option value="Automobile">Automobile</option>
                                    <option value="Domestic Services">Domestic Services</option>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Hospitality">Hospitality</option>
                                    <option value="Beautician">Beautician</option>
                                    <option value="Technician">Technician</option>
                                    <option value="Phone/Accessories repair">Phone/Accessories repair</option>
                                </select> */}
                                {/* <SubCategory /> */}

                                <label htmlFor="serviceType">Sub-category</label>
                                <div className={ subCategoryDD ? "service-dropdown" : "short"}>
                                    <span className="select" onClick={handleSubCategoryDD}>
                                        <div
                                        className={subCategory ? "selected" : "my-grey"}
                                        >{ subCategory ? subCategory : "sub-category"}
                                        </div>
                                        <RiArrowDropDownLine  className={ subCategoryDD ? 'up' : "search-drop"} 
                                        onClick={handleSubCategoryDD} />
                                    </span>

                                    <ul className={subCategoryDD ? "" : "hide-field"}>
                                        <span className="search">
                                            <IoSearchOutline className='lens' />
                                            <input type="text" className="text" placeholder="Search sub-category"
                                            onChange={handleSubCategoryValue}
                                            />
                                        </span>
                                    {
                                        
                                        subCategories.map((category, i) =>(
                                        <li key={i} 
                                        className={category.toLowerCase().startsWith(subCategoryValue) ? "" : "hide-field"}
                                        onClick={() =>{
                                            if(category.toLowerCase() !== subCategory.toLowerCase()){
                                            setSubCategory(category)
                                            handleSubCategorySelect(category)
                                            }

                                            setSubCategoryDD(false)
                                            
                                        }}
                                        >{category}</li>
                                        ))
                                    }
                                    </ul>
                                </div>
                            </div>
                        
                            <div className="my-div">
                                <div className="image-tag">Profile Image</div>
                                <label htmlFor="imagePath" className="image-label" onClick={handleShow}>Upload Profile Image</label>
                                {
                                    justShow ?
                                <input 
                                type='file' id="imagePath" name="imagePath"
                                className="imagePath" 
                                accept="image/*"  
                                onChange={handleFileChange} /> : "" }
                                {errors.imagePath && <span>{errors.imagePath}</span>}
                                {/* <span>{profileImageUpload}</span> */}
                            </div>

                            <div className="my-div">
                                <label htmlFor="openingHour">Opening/Closing Hour</label>
                                <input type='text' name='openingHour' placeholder='7am - 5pm' onChange={handleChange} />
                                {errors.openingClosingHour && <span>{errors.openingClosingHour}</span>}
                            </div>

                            
                            <div className="my-div">
                                <label htmlFor="password">Password</label>
                                <input type='password' name='password' id="myEye" placeholder='Enter password' onChange={handleChange} />
                                {errors.password && <span>{errors.password}</span>}
                                <section className="eyeCover" onClick={handleEye}>{eye ? <FiEyeOff className="eye" /> : <FiEye className="eye" />}</section>
                            </div>

                            <div className="my-div">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type='password' name='confirmPassword' id="myEye2" placeholder='confirm password' onChange={handleChange} />
                                {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                                <section className="eyeCover" onClick={handleEye}>{eye ? <FiEyeOff className="eye" /> : <FiEye className="eye" />}</section>
                            </div>


                            <div className="my-div">
                                <label htmlFor="referralCode">Referral Code(optional)</label>
                                <input type='text' name='referralCode' placeholder='RBHGRE23' onChange={handleChange} />
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

                                <div>
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
                                        <input type='password' name="password" id="myEye3" placeholder='Enter password' onChange={handleCustomerChange} />
                                        {errors.password && <span>{errors.password}</span>}
                                        <section className="eyeCover" onClick={handleEye2}>{eye ? <FiEyeOff className="eye" /> : <FiEye className="eye" />}</section>
                                    </span>

                                    <span>
                                        <label htmlFor="confirmPassword">Confirm password</label>
                                        <input type='password' name="confirmPassword" id="myEye4" placeholder='confirm' onChange={handleCustomerChange} />
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
                    <Success />
                : "" }

                { welcome ? 
                <Welcome />
                : ""}

                
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

     const{formData} = useContext(HandiworkContext)
    const{handleChange} = useContext(HandiworkContext)
    const{handleFileChange} = useContext(HandiworkContext)
    const{other} = useContext(HandiworkContext)
    const{handleSetOther} = useContext(HandiworkContext)
    const{closeLoginAndRefresh} = useContext(HandiworkContext)

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

    //To close form
    // const [modal, setModal] = useState(true);
    // const handleModal = () =>{
    //     setModal(!modal)
    // }

    // if(modal) {
    //     document.body.classList.add('active-modal')
    //     } else {
    //     document.body.classList.remove('active-modal')
    //     }

    //Success message
    // const [success, setSuccess] = useState(false);
    // const handleSuccess = () =>{
    //     setSuccess(!success)
    // }

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
    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    //     phone: '',
    //     serviceType: '',
    //     subCategory: '',
    //     openingHour: '',
    //     referralCode: '',
    //     stateOfResidence: "", 
    //     city: "", 
    //     street: "",
    //  })

    //To render certain fields only when required
    // const [other, setOther] = useState("");

    // const handleSetOther = (event) => {
    //     const getOther = event.target.value;
    //     setOther(getOther);


    //      const {name, value} = event.target;

    //      setFormData({
    //         ...formData, [name] : value
    //     })
    // }

    //customized error messages
    // const [errors, setErrors] = useState({})


    //funtion to grab inputs made by users

    // const handleChange = (e) =>{
    //    const {name, value} = e.target;

    //    setFormData({
    //        ...formData, [name] : value
    //    })

    //    console.log(formData)
    // }



    //funtion to handle second service providers Reg form submit

    // async function handleSubmit2(e){
    //     e.preventDefault()
    //     const validationErrors = {}


    //     //To ensure valid inputs
    //     if(!formData.firstName.trim()){
    //         validationErrors.firstName = "first name is required"
    //     }

    //     if(!formData.lastName.trim()){
    //         validationErrors.lastName = "last name is required"
    //     }

    //     if(!formData.email.trim()){
    //         validationErrors.email = "email is required"
    //     }
    //     else if(!formData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    //         validationErrors.email = "email is not valid"
    //     }

    //     if(!formData.stateOfResidence.trim()){
    //         validationErrors.stateOfResidence = "please select state of residence"
    //     }

    //     if(!formData.city.trim()){
    //         validationErrors.city = "please select city"
    //     }

    //     if(!formData.street.trim()){
    //         validationErrors.street = "please provide office no. and street name"
    //     }

    //     if(!formData.password.trim()){
    //         validationErrors.password = "password is required"
    //     }
    //     else if(formData.password.length < 6){
    //         validationErrors.password = "password should be atleast 6 characters"
    //     }

    //     if(formData.confirmPassword !== formData.password){
    //         validationErrors.confirmPassword = "password not matched"
    //     }

    //     if(!formData.phone.trim()){
    //         validationErrors.phone = "phone number is required"
    //     }
    //     else if(formData.phone.length < 11){
    //         validationErrors.phone = "phone number should be atleast 11 characters"
    //     }

    //     if(!formData.serviceType.trim()){
    //         validationErrors.serviceType = "please select service type"
    //     }

    //     if(!formData.openingHour.trim()){
    //         validationErrors.openingHour = "please specify your opening and closing hour"
    //     }


    //     console.log(validationErrors)

        

    //     //API Integration for Sign Up

    // try {
    //     const result = await fetch("https://handiwork.cosmossound.com.ng/api/skill-providers/create", {
    //         method: "POST",
    //         body: JSON.stringify(formData),
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         }
    //     })

    //     if(!result.ok){
    //         throw new Error("there is an existing user with this email")
    //     }


    //     const lastResult = await result.json()

    //     console.warn('lastResult', lastResult)


    //     //To store the data in the local storage
    //     localStorage.setItem("user-info", JSON.stringify(lastResult))


    //     //Retrieving service providers
    //     const userData = await fetch("https://handiwork.cosmossound.com.ng/api/skill-providers/skillproviders")

    //     const users = await userData.json()

    //     console.warn('users', users)
        


    // }catch (dupError) {
    //     console.log(dupError)
    //     validationErrors.email = "there is an existing user with this email"
    // }

    // setErrors(validationErrors)


    // if(Object.keys(validationErrors).length === 0 || validationErrors == {}){

    //     //To show success message
    //         handleSuccess()

    //     //To clear form
    //     e.target.reset();        
    // }
        
    // }

    //funtion to handle second customers Reg form submit

    // async function handleCustomerSubmit2(e){
    //     e.preventDefault()
    //     const validationErrors = {}
    
    
    //     //To ensure valid inputs
    //     if(!formData.firstName.trim()){
    //         validationErrors.firstName = "first name is required"
    //     }
    
    //     if(!formData.lastName.trim()){
    //         validationErrors.lastName = "last name is required"
    //     }
    
    //     if(!formData.email.trim()){
    //         validationErrors.email = "email is required"
    //     }
    //     else if(!formData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    //         validationErrors.email = "email is not valid"
    //     }
    
    //     if(!formData.address.trim()){
    //         validationErrors.address = "address is required"
    //     }
    
    //     if(!formData.password.trim()){
    //         validationErrors.password = "password is required"
    //     }
    //     else if(formData.password.length < 6){
    //         validationErrors.password = "password should be atleast 6 characters"
    //     }
    
    //     if(formData.confirmPassword !== formData.password){
    //         validationErrors.confirmPassword = "password not matched"
    //     }
    
    
    //     console.log(validationErrors)
    
        
    
    //     //API Integration for customer Sign Up
    
    // try {
    //     const result = await fetch("https://handiwork.cosmossound.com.ng/api/customers/create", {
    //         method: "POST",
    //         body: JSON.stringify(formData),
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         }
    //     })
    
    //     if(!result.ok){
    //         throw new Error("there is an existing user with this email")
    //     }
    
    
    //     const newCustomer = await result.json()
    
    //     console.warn('lastResult', newCustomer)
    
    
    //     //To store the customers data in the local storage
    //     localStorage.setItem("user-info", JSON.stringify(newCustomer))
    
    
    //     //Retrieving all customers
    //     const customersData = await fetch("https://handiwork.cosmossound.com.ng/api/customers/customers")
    
    //     const allCustomers = await customersData.json()
    
    //     console.warn('users', allCustomers)
        
    
    
    // }catch (dupError) {
    //     console.log(dupError)
    //     validationErrors.email = "there is an existing user with this email"
    // }
    
    // setErrors(validationErrors)
    
    
    // if(Object.keys(validationErrors).length === 0 || validationErrors == {}){
    
    //     //To show success message
    //         handleSuccess()
    
    //     //To clear form
    //     e.target.reset();        
    // }
        
    //     }
    
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

                        <div>
                            <label htmlFor="emailOrPhone">Phone Number</label>
                            <input type='number' name="emailOrPhone" placeholder='Enter phone number' onChange={handleEmailOrPhone} />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input type='password' name='password' id="myEye5" placeholder='Enter password' onChange={handlePassword} />
                            <section className="eyeCover" onClick={handleEye3}>{eye ? <FiEyeOff className="eye" /> : <FiEye className="eye" />}</section>
                        </div>

                        { loginError ? <p className="loginError">{loginError.message}</p> : "" }

                        
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
                        </span>
                    </section>


                    <div>
                        <label htmlFor="email">Email (optional)</label>
                        <input type='email' name="email" placeholder='Enter email' onChange={handleChange} />
                        {duplicateEmail && <span>{duplicateEmail}</span>}
                    </div>

                    <div>
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


                    <div className={stateCode==="" ? "hide-field" : ""}>
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

                    <div className={stateCode==="" ? "hide-field" : ""}>
                        <label htmlFor="street">Office number and street name (E.g: 25 Adewale street)</label>
                        <input type='text' name="street" 
                        placeholder='Enter office number and street name' onChange={handleChange} />
                        {errors.street && <span>{errors.street}</span>}
                    </div>



                    <div>
                        <label htmlFor="serviceType">Service Type</label>
                        <select name="serviceType" id="serviceType2" 
                        onChange={(e) => (handleSetOther(e))}>
                            <option value="">--Service Type--</option>
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


                    <div className={ form==="service provider" && other === "Other" ? "" : "hide-field" }>
                    <input type='text' name='serviceType' placeholder='specify service type' onChange={handleChange} />
                    {errors.serviceType && <span>{errors.serviceType}</span>}
                    </div>


                    <div className={ other === "Other" ? "hide-field" : "" }>
                        <select name="subCategory" id="subCategory" onChange={handleChange}>
                            <option value="">--Sub-category--</option>
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
                        <div className="image-tag">Profile Image</div>
                        <label htmlFor="imagePath2" className="image-label" onClick={handleShow}>Upload Profile Image</label>
                       { justShow ? 
                        <input 
                        type='file' id="imagePath2" className="imagePath" name="imagePath" 
                        accept="image/*"  
                        onChange={handleFileChange} /> : ""}
                        {errors.imagePath && <span>{errors.imagePath}</span>}
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

                    { switchToSignUp==="Sign Up" && form==="customer" ?

                    <form>
                        
                        <span className="tag">
                            {/* <h5>Create an account</h5> */}
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
                                <input type='password' name="confirmPassword" id="myEye4" placeholder='confirm' />
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
                    <Success2 />
            : "" } 


            { welcome ? 
                <Welcome />
                : ""}

        </div>         
    )
}

function VerificationForm() {

    //States to manage service provider's location
    
    const{handleChange} = useContext(HandiworkContext)
    const {toggleVerify} = useContext(HandiworkContext)
    const {justShow} = useContext(HandiworkContext)
    



    
    return(           
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <IoMdClose onClick={toggleVerify} className="close-modal" />                    
                   
                    <div className="verification">   
                        <form className="verification-form">                             
                            <div className="text">
                                <h3>Verify Account</h3>
                                <p>Upload any of these documents:</p>
                                <ul>
                                    <li>Your CAC document</li>
                                    <li>A picture of you on a job</li>
                                    <li>A picture of you with our field staff</li>
                                </ul>
                            </div>

                            <div className="file">
                                <label htmlFor="imagePath" className="image-label">Upload Document</label>
                                {
                                    justShow ?
                                <input 
                                type='file' id="imagePath" name="imagePath"
                                accept="image/*" /> : "" }
                                {/* {errors.profileImage && <span>{errors.profileImage}</span>} */}
                            </div>

                            <button type="submit">Verify</button>
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