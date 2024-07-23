import "./CSS/CustomerProfile.css"
import React, { useContext, useEffect, useState } from 'react'
import { HandiworkContext } from "../Components/Context/HandiworkContext";
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineFileUpload } from "react-icons/md";
import { LuCopy } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { PiEyeClosed } from "react-icons/pi";
import { RxEyeOpen } from "react-icons/rx";
import { UpdatingBtn } from "../Components/Loading/Loading";
import { UpdateFailed, UpdateSuccess } from "../Components/Welcome/Welcome";
import { ServiceType, SubCategory } from "../Components/ServAndSub/ServAndSub";



function CustomerProfile(props) {

    const{handleUpdateChange} = useContext(HandiworkContext)
    const{expectedChanges} = useContext(HandiworkContext)
    const{handleFileChange} = useContext(HandiworkContext)

    const{serviceDD} = useContext(HandiworkContext)
    const{subCategoryDD, firstTimeCustomer} = useContext(HandiworkContext)

    //to toggle eye
    const [eye, setEye] = useState(false);
    const handleEye = ()=>{
        setEye(!eye)
    }

    //to set character limit for providers about info
    const [charCount, setCharCount] = useState(0);
    const charLimit = 300;

    //To handle Provider Logout

    const navigate = useNavigate()
    const logoutCustomer = () =>{
        localStorage.removeItem("loggedinCustomer")
        localStorage.removeItem("fetchedCustomer")
        localStorage.removeItem("firstTimeCustomer")
        navigate("/")
        window.location.reload(false)
      }

      //Updated Data
      const [newFirstName, setNewFirstName] = useState("")
      const [newLastName, setNewLastName] = useState("")
     const [newEmail, setNewEmail] = useState("")
     const [newPassword, setNewPassword] = useState("")
     const [newPhone, setNewPhone] = useState("")
     const [newSecondPhone, setNewSecondPhone] = useState("")
    const{newServiceType} = useContext(HandiworkContext)
    const{newSubCategory} = useContext(HandiworkContext)
     const [newAddress, setNewAddress] = useState("")
     const{newStateOfResidence} = useContext(HandiworkContext)
     const [newCity, setNewCity] = useState("")
     const [newStreet, setNewStreet] = useState("")
     const{newImage} = useContext(HandiworkContext)
     const{selectedImageName} = useContext(HandiworkContext)

    //functions to update service provider details

    const [updatingFirstName, setUpdatingFirstName] = useState(false)
    const [updatingLastName, setUpdatingLastName] = useState(false)
    const [updatingEmail, setUpdatingEmail] = useState(false)
    const [updatingPassword, setUpdatingPassword] = useState(false)
    const [updatingPhone, setUpdatingPhone] = useState(false)
    const [updatingSecondPhone, setUpdatingSecondPhone] = useState(false)
    const [updatingAddress, setUpdatingAddress] = useState(false)
    const [updatingSubCategory, setUpdatingSubCategory] = useState(false)
    const [updatingOpeningHour, setUpdatingOpeningHour] = useState(false)
    // const [updatingStateOfResidence, setUpdatingStateOfResidence] = useState(false)
    // const [updatingCity, setUpdatingCity] = useState(false)
    // const [updatingStreet, setUpdatingStreet] = useState(false)
    const [updatingLocation, setUpdatingLocation] = useState(false)
    const [updatingImage, setUpdatingImage] = useState(false)


    const [updateSuccess, setUpdateSuccess] = useState(false)
    const [updateFailed, setUpdateFailed] = useState(false)

    //customized error messages
    const [errors, setErrors] = useState({})

  async function chageFirstName(e){
    e.preventDefault()

    const validationErrors = {}

    if(!newFirstName.trim()){
        validationErrors.firstName = "first name is required"
    }

    setErrors(validationErrors)
    console.warn("validationErrors:", validationErrors)

    const noError = Object.keys(validationErrors).length === 0;

    if(noError){
        try {
            handleFirstName()
            setUpdatingFirstName(true)
    
            const formData = new FormData();
            formData.append("firstName", newFirstName);
    
             const response = await axios.patch(url, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
             })    
    
            if(response.status >= 200 && response.status < 300){
                setUpdateSuccess(true)
            }
    
          }
          catch (dupError) {
              console.log("caughtError:", dupError.message)
    
              if(dupError.message === "Network Error"){
                // setDuplicateError("Email or phone number already exists.")
                setUpdateFailed(true)
              }
            //   else{
            //     setDuplicateError("Unknown error. Please check your internet connection and retry.")
            //   }
      
          }
        
          finally{
            setUpdatingFirstName(false)
          }
    }
    
}

async function changeLastName(e){
    e.preventDefault()

    const validationErrors = {}

    if(!newLastName.trim()){
        validationErrors.lastName = "last name is required"
    }

    setErrors(validationErrors)
    console.warn("validationErrors:", validationErrors)

    const noError = Object.keys(validationErrors).length === 0;

    if(noError){
        try {
            handleLastName()
            setUpdatingLastName(true)
    
            const formData = new FormData();
            formData.append("lastName", newLastName);
    
             const response = await axios.patch(url, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
             })    
    
            if(response.status >= 200 && response.status < 300){
                setUpdateSuccess(true)
            }
    
          }
          catch (dupError) {
              console.log("caughtError:", dupError.message)
    
              if(dupError.message === "Network Error"){
                // setDuplicateError("Email or phone number already exists.")
                setUpdateFailed(true)
              }
            //   else{
            //     setDuplicateError("Unknown error. Please check your internet connection and retry.")
            //   }
      
          }
        
          finally{
            setUpdatingLastName(false)
          }
    }
    
}

async function changeEmail(e){
    e.preventDefault()

    const validationErrors = {}

    if(!newEmail.trim()){
        validationErrors.email = "Email is required"
    }

    setErrors(validationErrors)
    console.warn("validationErrors:", validationErrors)

    const noError = Object.keys(validationErrors).length === 0;

    if(noError){
        try {
            handleEmail()
            setUpdatingEmail(true)
    
            const formData = new FormData();
            formData.append("email", newEmail);
    
             const response = await axios.patch(url, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
             })    
    
            if(response.status >= 200 && response.status < 300){
                setUpdateSuccess(true)
            }
    
          }
          catch (dupError) {
              console.log("caughtError:", dupError.message)
    
              if(dupError.message === "Network Error"){
                // setDuplicateError("Email or phone number already exists.")
                setUpdateFailed(true)
              }
            //   else{
            //     setDuplicateError("Unknown error. Please check your internet connection and retry.")
            //   }
      
          }
        
          finally{
            setUpdatingEmail(false)
          }
    }

      
    
}

async function changePhone(e){
    e.preventDefault()
    const validationErrors = {}

    if(!newPhone.trim()){
        validationErrors.phone = "phone number is required"
    }
    else if(newPhone.length < 11){
        validationErrors.phone = "phone number should be atleast 11 digits"
    }

    else if(newPhone.length > 11){
        validationErrors.phone = "phone number should not be more than 11 digits"
    }

    else if(newPhone === oldPhone){
        validationErrors.phone = "This phone number already exists in your profile"
    }


    setErrors(validationErrors)
    console.warn("validationErrors:", validationErrors)

    const noError = Object.keys(validationErrors).length === 0;

    if(noError){
        try {
            handlePhone()
            setUpdatingPhone(true)
    
            const formData = new FormData();
            formData.append("phone", newPhone);
    
             const response = await axios.patch(url, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
             })    
    
            if(response.status >= 200 && response.status < 300){
                setUpdateSuccess(true)
            }
    
        }

        catch (dupError) {
            console.log("caughtError:", dupError.message)
  
            if(dupError.message === "Network Error"){
              setUpdateFailed(true)
            }
    
        }
      
        finally{
          setUpdatingPhone(false)
        }
    }
    
}



async function changeAddress(e){
    e.preventDefault()

    const validationErrors = {}

    if(!newAddress){
        validationErrors.address = "please enter address"
    }

    setErrors(validationErrors)
    console.warn("validationErrors:", validationErrors)

    const noError = Object.keys(validationErrors).length === 0;

    if(noError){
        try {
            handleAddress()
            setUpdatingAddress(true)
    
            const formData = new FormData();
            formData.append("address", newAddress);
    
             const response = await axios.patch(url, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
             })    
    
            if(response.status >= 200 && response.status < 300){
                setUpdateSuccess(true)
            }
    
          }
          catch (dupError) {
              console.log("caughtError:", dupError.message)
    
              if(dupError.message === "Network Error"){
                setUpdateFailed(true)
              }
      
          }
        
          finally{
            setUpdatingAddress(false)
          }
    }
    
}


async function changeSubCategory(e){
    e.preventDefault()

    const validationErrors = {}

    if(!newSubCategory){
        validationErrors.subCategory = "please select sub-category"
    }

    setErrors(validationErrors)
    console.warn("validationErrors:", validationErrors)

    const noError = Object.keys(validationErrors).length === 0;

    if(noError){
        try {
            handleSubCategory()
            setUpdatingSubCategory(true)
    
            const formData = new FormData();
            formData.append("subCategory", newSubCategory);
    
             const response = await axios.patch(url, formData, {
                headers: {
                    'Authorization' : authToken
                }
             })    
    
            if(response.status >= 200 && response.status < 300){
                setUpdateSuccess(true)
            }
    
          }
          catch (dupError) {
              console.log("caughtError:", dupError.message)
    
              if(dupError.message === "Network Error"){
                // setDuplicateError("Email or phone number already exists.")
                setUpdateFailed(true)
              }
            //   else{
            //     setDuplicateError("Unknown error. Please check your internet connection and retry.")
            //   }
      
          }
        
          finally{
            setUpdatingSubCategory(false)
          }
    }
    
}

async function changeLocation(e){
    e.preventDefault()

    const validationErrors = {}

    if(!newStateOfResidence){
        validationErrors.stateOfResidence = "please select state of residence"
    }

    if(!newCity){
        validationErrors.city = "please select city"
    }

    if(!newStreet){
        validationErrors.street = "provide street name and office number"
    }

    setErrors(validationErrors)
    console.warn("validationErrors:", validationErrors)

    const noError = Object.keys(validationErrors).length === 0;

    if(noError){
        try {
            handleLocation()
            setUpdatingLocation(true)
    
            const formData = new FormData();
            formData.append("stateOfResidence", newStateOfResidence);
            formData.append("city", newCity);
            formData.append("street", newStreet);
    
             const response = await axios.patch(url, formData, {
                headers: {
                    'Authorization' : authToken
                }
             })    
    
            if(response.status >= 200 && response.status < 300){
                setUpdateSuccess(true)
            }
    
          }
          catch (dupError) {
              console.log("caughtError:", dupError.message)
    
              if(dupError.message === "Network Error"){
                // setDuplicateError("Email or phone number already exists.")
                setUpdateFailed(true)
              }
            //   else{
            //     setDuplicateError("Unknown error. Please check your internet connection and retry.")
            //   }
      
          }
        
          finally{
            setUpdatingLocation(false)
          }
    }
    
}

async function changeOpeningHour(e){
    e.preventDefault()

    const validationErrors = {}

    if(!newOpeningHour){
        validationErrors.openingHour = "opening/closing time is required"
    }

    setErrors(validationErrors)
    console.warn("validationErrors:", validationErrors)

    const noError = Object.keys(validationErrors).length === 0;

    if(noError){
        try {
            handleOpeningHour()
            setUpdatingOpeningHour(true)
    
            const formData = new FormData();
            formData.append("openingHour", newOpeningHour);
    
             const response = await axios.patch(url, formData, {
                headers: {
                    'Authorization' : authToken
                }
             })    
    
            if(response.status >= 200 && response.status < 300){
                setUpdateSuccess(true)
            }
    
          }
          catch (dupError) {
              console.log("caughtError:", dupError.message)
    
              if(dupError.message === "Network Error"){
                // setDuplicateError("Email or phone number already exists.")
                setUpdateFailed(true)
              }
            //   else{
            //     setDuplicateError("Unknown error. Please check your internet connection and retry.")
            //   }
      
          }
        
          finally{
            setUpdatingOpeningHour(false)
          }
    }
    
}

async function changeImage(e){
    e.preventDefault()

    const validationErrors = {}

    if(!newImage){
        validationErrors.image = "an image is required"
    }

    setErrors(validationErrors)
    console.warn("validationErrors:", validationErrors)

    const noError = Object.keys(validationErrors).length === 0;

    if(noError){
        try {
            // handleImage()
            setUpdatingImage(true)
    
            const formData = new FormData();
            formData.append("image", newImage, selectedImageName);
    
             const response = await axios.put(photoUrl, formData, {
                headers: {
                    'Authorization' : authToken,
                    'Content-Type': 'multipart/form-data'
                }
             })    
    
            if(response.status >= 200 && response.status < 300){
                setUpdateSuccess(true)
            }
    
          }
          catch (dupError) {
              console.log("caughtError:", dupError.message)
    
              if(dupError.message === "Network Error" || dupError.message==="Request failed with status code 500"){
                // setDuplicateError("Email or phone number already exists.")
                setUpdateFailed(true)
              }
            //   else{
            //     setDuplicateError("Unknown error. Please check your internet connection and retry.")
            //   }
      
          }
        
          finally{
            setUpdatingImage(false)
          }
    }
    
}



    const{fetchedCustomer} = useContext(HandiworkContext)
    const {loggedinCustomer} = useContext(HandiworkContext)

    let customerId = fetchedCustomer ? fetchedCustomer.customer.id : "";
    let oldPhone = fetchedCustomer ? fetchedCustomer.customer.phone : "";
    let authToken = loggedinCustomer ? loggedinCustomer.token : "";
    const url = ` https://handiworks.cosmossound.com.ng/api/customers/updateCustomerRecord/${customerId}`

    //To toggle edit mode
    const [editFirstName, setEditFirstName] = useState(false);
    const handleFirstName = ()=>{
        setEditFirstName(!editFirstName)
        setErrors({})
    }

    const [editLastName, setEditLastName] = useState(false);
    const handleLastName = ()=>{
        setEditLastName(!editLastName)
        setErrors({})
    }

    const [editEmail, setEditEmail] = useState(false);
    const handleEmail = ()=>{
        setEditEmail(!editEmail)
        setErrors({})
    }

    const [editPhone, setEditPhone] = useState(false);
    const handlePhone = ()=>{
        setEditPhone(!editPhone)
        setErrors({})
    }

    const [editSecondPhone, setEditSecondPhone] = useState(false);
    const handleSecondPhone = ()=>{
        setEditSecondPhone(!editSecondPhone)
        setErrors({})
    }

    const [editAddress, setEditAddress] = useState(false);
    const handleAddress = ()=>{
        setEditAddress(!editAddress)
        setErrors({})
    }

    const [editSubCategory, setEditSubCategory] = useState(false);
    const handleSubCategory = ()=>{
        setEditSubCategory(!editSubCategory)
        setErrors({})
    }

    const [editOpeningHour, setEditOpeningHour] = useState(false);
    const handleOpeningHour = ()=>{
        setEditOpeningHour(!editOpeningHour)
        setErrors({})
    }


    const [editLocation, setEditLocation] = useState(false);
    const handleLocation = ()=>{
        setEditLocation(!editLocation)
        setErrors({})
    }

    const [editAbout, setEditAbout] = useState(false);

    const handleAbout = (e)=>{
        e.preventDefault()
        setEditAbout(!editAbout)
        setErrors({})
    }

    const [editFb, setEditFb] = useState(false);

    const handleFb = ()=>{
        setEditFb(!editFb)
        setErrors({})
    }

    const [editX, setEditX] = useState(false);

    const handleX = ()=>{
        setEditX(!editX)
        setErrors({})
    }

    const [editGram, setEditGram] = useState(false);

    const handleGram = ()=>{
        setEditGram(!editGram)
        setErrors({})
    }


    //to switch between profile sections

    const [fields, setFields] = useState("basic");


    //To copy profile link to clipboard
    const [copyText, setCopyText] = useState("");
    const handleCopy = () =>{
        navigator.clipboard.writeText(copyText)
        alert("link copied to clipboard")
    }


  return (
    <div className="provider-profile">
      <Link to="/">Back to home</Link>

      <div className="edit-wrapper">
            <div className="switch">
                <button onClick={() => setFields("basic")} className={fields==="basic" ? "active-fields" : ""}>Basic information</button>
                {/* <button onClick={() => setFields("about")} className={fields==="about" ? "active-fields" : ""}>About me</button> */}
                {/* <button onClick={() => setFields("socials")} className={fields==="socials" ? "active-fields" : ""}>Social links</button> */}
                <button onClick={() => setFields("password")} className={fields==="password" ? "active-fields" : ""}>Change password</button>
                {/* <button>{providerId}</button> */}
                {/* <button>{oldPhone2}</button> */}
            </div>

            <form className={fields==="password" ? "hide-field" : "edit"}>
                <div className="fields">
                    {/* <div className="dp">
                        <h6 className="">
                            {fetchedCustomer ? fetchedCustomer.customer.firstName
                            .charAt(0).toUpperCase() + fetchedCustomer.customer.lastName
                            .charAt(0).toUpperCase() : ""}
                        </h6>
                    </div> */}

                    <hr />

                    {/* For regular customers */}
                    { !firstTimeCustomer && fields==="basic" ? 
                    <div className="basic">
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <div className="data">
                                <input type="text" 
                                defaultValue={fetchedCustomer ? fetchedCustomer.customer.firstName.charAt(0).toUpperCase() + fetchedCustomer.customer.firstName.slice(1) : ""} 
                                className={editFirstName ? "" : "hide-field" }
                                onChange={(e) => setNewFirstName(e.target.value)}
                                name="firstName"
                                />
                                <span className={editFirstName ? "hide-field" : "old-data"}>{fetchedCustomer ? fetchedCustomer.customer.firstName.charAt(0).toUpperCase() + fetchedCustomer.customer.firstName.slice(1) : ""}</span>
                                <CiEdit className={editFirstName || updatingFirstName ? "hide-field" : "pen"} onClick={handleFirstName} />
                                <div className={editFirstName ? "save-btn" : "hide-field"} onClick={chageFirstName}>save</div>
                                <div className={editFirstName ? "cancel-btn" : "hide-field"} onClick={handleFirstName}>cancel</div>
                                { updatingFirstName ? <UpdatingBtn /> : ""}
                            </div>
                            <p>{errors && errors.firstName}</p>
                        </div>

                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <div className="data">
                                <input type="text" 
                                defaultValue={fetchedCustomer ? fetchedCustomer.customer.lastName.charAt(0).toUpperCase() + fetchedCustomer.customer.lastName.slice(1) : ""} 
                                className={editLastName ? "" : "hide-field" }
                                onChange={(e)=> setNewLastName(e.target.value)}
                                name="lastName"
                                />
                                <span className={editLastName ? "hide-field" : "old-data"}>{fetchedCustomer ? fetchedCustomer.customer.lastName.charAt(0).toUpperCase() + fetchedCustomer.customer.lastName.slice(1) : ""}</span>
                                <CiEdit className={editLastName || updatingLastName ? "hide-field" : "pen"} onClick={handleLastName} />
                                <div className={editLastName ? "save-btn" : "hide-field"} 
                                onClick={changeLastName}>save</div>
                                <div className={editLastName ? "cancel-btn" : "hide-field"} 
                                onClick={handleLastName}>cancel</div>
                                { updatingLastName ? <UpdatingBtn /> : ""}
                            </div>
                            <p>{errors && errors.lastName}</p>
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <div className="data">
                                <input type="text" 
                                defaultValue={fetchedCustomer ? fetchedCustomer.customer.email : ""} 
                                className={editEmail ? "" : "hide-field" }
                                onChange={(e) =>setNewEmail(e.target.value)}
                                name="email"
                                />
                                <span className={editEmail ? "hide-field" : "old-data"}>{fetchedCustomer ? fetchedCustomer.customer.email : ""}</span>
                                <CiEdit className={editEmail || updatingEmail ? "hide-field" : "pen"} onClick={handleEmail} />
                                <div className={editEmail ? "save-btn" : "hide-field"}
                                onClick={changeEmail}
                                >save</div>
                                <div className={editEmail ? "cancel-btn" : "hide-field"} 
                                onClick={handleEmail}>cancel</div>
                                { updatingEmail ? <UpdatingBtn /> : ""}
                            </div>
                            <p>{errors && errors.email}</p>
                        </div>

                        <div>
                            <label htmlFor="phone">Phone</label>
                            <div className="data">
                                <input type="number" 
                                defaultValue={fetchedCustomer ? fetchedCustomer.customer.phone : ""} 
                                className={editPhone ? "" : "hide-field" }
                                onChange={(e) =>setNewPhone(e.target.value)}
                                name="phone"
                                />
                                <span className={editPhone ? "hide-field" : "old-data"}>{fetchedCustomer ? fetchedCustomer.customer.phone : ""}</span>
                                <CiEdit className={editPhone || updatingPhone ? "hide-field" : "pen"} onClick={handlePhone} />
                                <div className={editPhone ? "save-btn" : "hide-field"}
                                onClick={changePhone}
                                >save</div>
                                <div className={editPhone ? "cancel-btn" : "hide-field"} 
                                onClick={handlePhone}>cancel</div>
                                { updatingPhone ? <UpdatingBtn /> : ""}
                            </div>
                            <p>{errors && errors.phone}</p>
                        </div>

                        <div>
                            <label htmlFor="street">Address</label>
                            <div className="data">
                                <input type='text' name="street" 
                                defaultValue={fetchedCustomer ? fetchedCustomer.customer.address : ""} 
                                className={editAddress ? "" : "hide-field" }
                                onChange={(e) => setNewAddress(e.target.value)}
                                placeholder="E.g: 25 Adewale street"
                                />
                                <span className={editAddress ? "hide-field" : "old-data"}>{fetchedCustomer ? fetchedCustomer.customer.address : ""}</span>
                                <CiEdit className={editAddress || updatingAddress ? "hide-field" : "pen"} onClick={handleAddress} />
                                <div className={editAddress ? "save-btn" : "hide-field"} 
                                onClick={changeAddress}
                                >save</div>
                                <div className={editAddress ? "cancel-btn" : "hide-field"} 
                                onClick={handleAddress}>cancel</div>
                                { updatingAddress ? <UpdatingBtn /> : ""}
                            </div>
                            <p>{errors && errors.address}</p>
                        </div>

                    </div> : "" }
                    
                    {/* For firstTimeCustomer */}
                    
                    { firstTimeCustomer && fields==="basic" ? 
                    <div className="basic">
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <div className="data">
                            <input type="text" 
                            defaultValue={fetchedCustomer ? fetchedCustomer.customer.firstName.charAt(0).toUpperCase() + fetchedCustomer.customer.firstName.slice(1) : ""} 
                            className={editFirstName ? "" : "hide-field" }
                            onChange={(e) => setNewFirstName(e.target.value)}
                            name="firstName"
                            />
                            <span className={editFirstName ? "hide-field" : "old-data"}>{fetchedCustomer ? fetchedCustomer.customer.firstName.charAt(0).toUpperCase() + fetchedCustomer.customer.firstName.slice(1) : ""}</span>
                            <CiEdit className={editFirstName || updatingFirstName ? "hide-field" : "pen"} onClick={handleFirstName} />
                            <div className={editFirstName ? "save-btn" : "hide-field"} onClick={chageFirstName}>save</div>
                            <div className={editFirstName ? "cancel-btn" : "hide-field"} onClick={handleFirstName}>cancel</div>
                            { updatingFirstName ? <UpdatingBtn /> : ""}
                        </div>
                        <p>{errors && errors.firstName}</p>
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <div className="data">
                            <input type="text" 
                            defaultValue={fetchedCustomer ? fetchedCustomer.customer.lastName.charAt(0).toUpperCase() + fetchedCustomer.customer.lastName.slice(1) : ""} 
                            className={editLastName ? "" : "hide-field" }
                            onChange={(e)=> setNewLastName(e.target.value)}
                            name="lastName"
                            />
                            <span className={editLastName ? "hide-field" : "old-data"}>{fetchedCustomer ? fetchedCustomer.customer.lastName.charAt(0).toUpperCase() + fetchedCustomer.customer.lastName.slice(1) : ""}</span>
                            <CiEdit className={editLastName || updatingLastName ? "hide-field" : "pen"} onClick={handleLastName} />
                            <div className={editLastName ? "save-btn" : "hide-field"} 
                            onClick={changeLastName}>save</div>
                            <div className={editLastName ? "cancel-btn" : "hide-field"} 
                            onClick={handleLastName}>cancel</div>
                            { updatingLastName ? <UpdatingBtn /> : ""}
                        </div>
                        <p>{errors && errors.lastName}</p>
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <div className="data">
                            <input type="text" 
                            defaultValue={fetchedCustomer ? fetchedCustomer.customer.email : ""} 
                            className={editEmail ? "" : "hide-field" }
                            onChange={(e) =>setNewEmail(e.target.value)}
                            name="email"
                            />
                            <span className={editEmail ? "hide-field" : "old-data"}>{fetchedCustomer ? fetchedCustomer.customer.email : ""}</span>
                            <CiEdit className={editEmail || updatingEmail ? "hide-field" : "pen"} onClick={handleEmail} />
                            <div className={editEmail ? "save-btn" : "hide-field"}
                            onClick={changeEmail}
                            >save</div>
                            <div className={editEmail ? "cancel-btn" : "hide-field"} 
                            onClick={handleEmail}>cancel</div>
                            { updatingEmail ? <UpdatingBtn /> : ""}
                        </div>
                        <p>{errors && errors.email}</p>
                    </div>

                    <div>
                        <label htmlFor="phone">Phone</label>
                        <div className="data">
                            <input type="number" 
                            defaultValue={fetchedCustomer ? fetchedCustomer.customer.phone : ""} 
                            className={editPhone ? "" : "hide-field" }
                            onChange={(e) =>setNewPhone(e.target.value)}
                            name="phone"
                            />
                            <span className={editPhone ? "hide-field" : "old-data"}>{fetchedCustomer ? fetchedCustomer.customer.phone : ""}</span>
                            <CiEdit className={editPhone || updatingPhone ? "hide-field" : "pen"} onClick={handlePhone} />
                            <div className={editPhone ? "save-btn" : "hide-field"}
                            onClick={changePhone}
                            >save</div>
                            <div className={editPhone ? "cancel-btn" : "hide-field"} 
                            onClick={handlePhone}>cancel</div>
                            { updatingPhone ? <UpdatingBtn /> : ""}
                        </div>
                        <p>{errors && errors.phone}</p>
                    </div>

                    <div>
                        <label htmlFor="street">Address</label>
                        <div className="data">
                            <input type='text' name="street" 
                            defaultValue={fetchedCustomer ? fetchedCustomer.customer.address : ""} 
                            className={editAddress ? "" : "hide-field" }
                            onChange={(e) => setNewAddress(e.target.value)}
                            placeholder="E.g: 25 Adewale street"
                            />
                            <span className={editAddress ? "hide-field" : "old-data"}>{fetchedCustomer ? fetchedCustomer.customer.address : ""}</span>
                            <CiEdit className={editAddress || updatingAddress ? "hide-field" : "pen"} onClick={handleAddress} />
                            <div className={editAddress ? "save-btn" : "hide-field"} 
                            onClick={changeAddress}
                            >save</div>
                            <div className={editAddress ? "cancel-btn" : "hide-field"} 
                            onClick={handleAddress}>cancel</div>
                            { updatingAddress ? <UpdatingBtn /> : ""}
                        </div>
                        <p>{errors && errors.address}</p>
                    </div>

                    </div> : "" }
                </div>

                {/* { editMode ? <button type="submit" className="">Save Changes</button> : <button onClick={handleEditMode}>Edit Profile</button>} */}
            </form>

            <button className={fields==="password" ? "hide-field" : "logout"} onClick={logoutCustomer}
            ><AiOutlineLogout /> Logout</button>

            <hr className={fields==="password" ? "myHr" : "hide-field"} />
            <form className={fields==="password" ? "password" : "hide-field"}>
                <h6><RiLockPasswordLine className="padLock" /> Change Password</h6>
                <div className="change">
                    <div className="current">
                        <input type={eye ? "text" : "password"} placeholder="Current Password"/>
                        { eye ? <PiEyeClosed className="eye" onClick={handleEye} /> : 
                        <RxEyeOpen className="eye" onClick={handleEye} /> }
                    </div>
                    <div className="new">
                        <input type={eye ? "text" : "password"} placeholder="New Password"/>
                        { eye ? <PiEyeClosed className="eye" onClick={handleEye} /> : 
                        <RxEyeOpen className="eye" onClick={handleEye} /> }
                    </div>
                    <div className="confirm">
                        <input type={eye ? "text" : "password"} placeholder="Confirm Password"/>
                        { eye ? <PiEyeClosed className="eye" onClick={handleEye} /> : 
                        <RxEyeOpen className="eye" onClick={handleEye} /> }
                    </div>
                </div>
                <button type="submit" className="changeBtn">Change password</button>
            </form>
      </div>

        { updateSuccess ? <UpdateSuccess /> : "" }
      
      { updateFailed ? <UpdateFailed /> : "" }
        
        
    </div>
  )
}

export default CustomerProfile
