import "./CSS/ProviderProfile.css"
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



function ProviderProfile(props) {

    const{handleUpdateChange} = useContext(HandiworkContext)
    const{expectedChanges} = useContext(HandiworkContext)
    const{handleFileChange} = useContext(HandiworkContext)

    //to toggle eye
    const [eye, setEye] = useState(false);
    const handleEye = ()=>{
        setEye(!eye)
    }

    //To handle Provider Logout

    const navigate = useNavigate()
    const logoutProvider = () =>{
        localStorage.clear()
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
     const [newServiceType, setNewServiceType] = useState("")
     const [newSubCategory, setNewSubCategory] = useState("")
     const [newOpeningHour, setNewOpeningHour] = useState("")
     const [newStateOfResidence, setNewStateOfResidence] = useState("")
     const [newCity, setNewCity] = useState("")
     const [newStreet, setNewStreet] = useState("")
     const [newImage, setNewImage] = useState(null)
    

    //functions to update service provider details

    const [updatingFirstName, setUpdatingFirstName] = useState(false)
    const [updatingLastName, setUpdatingLastName] = useState(false)
    const [updatingEmail, setUpdatingEmail] = useState(false)
    const [updatingPassword, setUpdatingPassword] = useState(false)
    const [updatingPhone, setUpdatingPhone] = useState(false)
    const [updatingSecondPhone, setUpdatingSecondPhone] = useState(false)
    const [updatingServiceType, setUpdatingServiceType] = useState(false)
    const [updatingSubCategory, setUpdatingSubCategory] = useState(false)
    const [updatingOpeningHour, setUpdatingOpeningHour] = useState(false)
    const [updatingStateOfResidence, setUpdatingStateOfResidence] = useState(false)
    const [updatingCity, setUpdatingCity] = useState(false)
    const [updatingStreet, setUpdatingStreet] = useState(false)
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

    else if(newPhone === oldPhone1){
        validationErrors.phone = "phone number already exists in your profile"
    }

    else if(newPhone === oldPhone2){
        validationErrors.phone = "phone number already exists in your profile"
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
          setUpdatingPhone(false)
        }
    }
    
}

async function changeSecondPhone(e){
    e.preventDefault()

    const validationErrors = {}

    if(!newSecondPhone.trim()){
        validationErrors.secondPhone = "phone number is required"
    }
    else if(newSecondPhone.length < 11){
        validationErrors.secondPhone = "phone number should be atleast 11 digits"
    }

    else if(newSecondPhone.length > 11){
        validationErrors.secondPhone = "phone number should not be more than 11 digits"
    }

    else if(newSecondPhone === oldPhone1){
        validationErrors.secondPhone = "phone number already exists in your profile"
    }

    else if(newSecondPhone === oldPhone2){
        validationErrors.secondPhone = "phone number already exists in your profile"
    }

    setErrors(validationErrors)
    console.warn("validationErrors:", validationErrors)

    const noError = Object.keys(validationErrors).length === 0;

    if(noError){
        try {
            handleSecondPhone()
            setUpdatingSecondPhone(true)
    
            const formData = new FormData();
            formData.append("secondPhone", newSecondPhone);
    
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
            setUpdatingSecondPhone(false)
          }
    }
    
}

    const{fetchedProvider} = useContext(HandiworkContext)
    // const{viewProvider} = useContext(HandiworkContext)


    const{myStateData} = useContext(HandiworkContext)
    const{myCityData} = useContext(HandiworkContext)
    const{stateCode} = useContext(HandiworkContext)
    const{HandleSetStateCode} = useContext(HandiworkContext)
    const {loggedinProvider} = useContext(HandiworkContext)
    const {dp} = useContext(HandiworkContext)
    const {preview} = useContext(HandiworkContext)

    let providerId = fetchedProvider ? fetchedProvider.skillProvider.id : "";
    let oldPhone1 = fetchedProvider ? fetchedProvider.skillProvider.phone : "";
    let oldPhone2 = fetchedProvider ? fetchedProvider.skillProvider.secondPhone : "";
    let authToken = loggedinProvider ? loggedinProvider.token : "";
    const url = `https://handiworks.cosmossound.com.ng/api/skill-providers/updateSkillParam/${providerId}`

    // const [formData, setFormData] = useState({
    //     image: "",
    //  })


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

    const [editServiceType, setEditServiceType] = useState(false);
    const handleServiceType = ()=>{
        setEditServiceType(!editServiceType)
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

    const [editStateOfResidence, setEditStateOfResidence] = useState(false);
    const handleStateOfResidence = ()=>{
        setEditStateOfResidence(!editStateOfResidence)
        setErrors({})
    }

    const [editCity, setEditCity] = useState(false);
    const handleCity = ()=>{
        setEditCity(!editCity)
        setErrors({})
    }

    const [editStreet, setEditStreet] = useState(false);
    const handleStreet = ()=>{
        setEditStreet(!editStreet)
        setErrors({})
    }

    const [editAbout, setEditAbout] = useState(false);

    const handleAbout = ()=>{
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

    //To save changes to provider-profile
    // const saveChanges = (e) =>{
    //     e.preventDefault()
    //     setEditMode(false)
        
    // }

  return (
    <div className="provider-profile">
      <Link to="/">Back to home</Link>

      <div className="edit-wrapper">
            <div className="switch">
                <button onClick={() => setFields("basic")} className={fields==="basic" ? "active-fields" : ""}>Basic information</button>
                <button onClick={() => setFields("about")} className={fields==="about" ? "active-fields" : ""}>About me</button>
                <button onClick={() => setFields("socials")} className={fields==="socials" ? "active-fields" : ""}>Social links</button>
                <button onClick={() => setFields("password")} className={fields==="password" ? "active-fields" : ""}>Change password</button>
                {/* <button>{oldPhone1}</button> */}
                {/* <button>{oldPhone2}</button> */}
            </div>

            <form className={fields==="password" ? "hide-field" : "edit"}>
                <div className="fields">
                    <div className="dp">
                        <h6 className={fetchedProvider && fetchedProvider.skillProvider.imagePath !== null || preview===true ? "hide-field" : ""}>
                            {fetchedProvider ? fetchedProvider.skillProvider.firstName
                            .charAt(0).toUpperCase() + fetchedProvider.skillProvider.lastName
                            .charAt(0).toUpperCase() : ""}
                        </h6>

                        <img src={`https://handiworks.cosmossound.com.ng/${fetchedProvider ? fetchedProvider.skillProvider.imagePath : ""}`} 
                        alt="Dp"
                        className={fetchedProvider && fetchedProvider.skillProvider.imagePath !== null && preview===false ? "" : "hide-field"}
                        />
                        <img src={dp} 
                        alt="preview" 
                        className={preview ? "" : "hide-field"}
                        />
                        <input type="file" name="image" id="image" accept="image/*"
                        onChange={handleFileChange}
                        className="dp-input"
                        />
                        <label htmlFor="image"><MdOutlineFileUpload className="upload" />Replace photo</label>
                        <span className={preview ? "save-dp" : "hide-field"}>Save photo</span>
                    </div>

                    <hr />
                    
                    { fields==="basic" ? 
                    <div className="basic">
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <div className="data">
                                <input type="text" 
                                defaultValue={fetchedProvider ? fetchedProvider.skillProvider.firstName.charAt(0).toUpperCase() + fetchedProvider.skillProvider.firstName.slice(1) : ""} 
                                className={editFirstName ? "" : "hide-field" }
                                onChange={(e) => setNewFirstName(e.target.value)}
                                name="firstName"
                                />
                                <span className={editFirstName ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.firstName.charAt(0).toUpperCase() + fetchedProvider.skillProvider.firstName.slice(1) : ""}</span>
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
                                defaultValue={fetchedProvider ? fetchedProvider.skillProvider.lastName.charAt(0).toUpperCase() + fetchedProvider.skillProvider.lastName.slice(1) : ""} 
                                className={editLastName ? "" : "hide-field" }
                                onChange={(e)=> setNewLastName(e.target.value)}
                                name="lastName"
                                />
                                <span className={editLastName ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.lastName.charAt(0).toUpperCase() + fetchedProvider.skillProvider.lastName.slice(1) : ""}</span>
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
                                defaultValue={fetchedProvider ? fetchedProvider.skillProvider.email : ""} 
                                className={editEmail ? "" : "hide-field" }
                                onChange={(e) =>setNewEmail(e.target.value)}
                                name="email"
                                />
                                <span className={editEmail ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.email : ""}</span>
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
                            <label htmlFor="phone">Phone1</label>
                            <div className="data">
                                <input type="number" 
                                defaultValue={fetchedProvider ? fetchedProvider.skillProvider.phone : ""} 
                                className={editPhone ? "" : "hide-field" }
                                onChange={(e) =>setNewPhone(e.target.value)}
                                name="phone"
                                />
                                <span className={editPhone ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.phone : ""}</span>
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
                            <label htmlFor="secondPhone">Phone2</label>
                            <div className="data">
                                <input type="number" 
                                defaultValue={fetchedProvider ? fetchedProvider.skillProvider.secondPhone : ""} 
                                className={editSecondPhone ? "" : "hide-field" }
                                onChange={(e) =>setNewSecondPhone(e.target.value)}
                                id="secondPhone"
                                name="secondPhone"
                                />
                                <span className={editSecondPhone ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.secondPhone : ""}</span>
                                <CiEdit className={editSecondPhone || updatingSecondPhone ? "hide-field" : "pen"} onClick={handleSecondPhone} />
                                <div className={editSecondPhone ? "save-btn" : "hide-field"}
                                onClick={changeSecondPhone}
                                >save</div>
                                <div className={editSecondPhone ? "cancel-btn" : "hide-field"} 
                                onClick={handleSecondPhone}>cancel</div>
                                { updatingSecondPhone ? <UpdatingBtn /> : ""}
                            </div>
                            <p>{errors && errors.secondPhone}</p>
                        </div>

                        <div>
                            <label htmlFor="serviceType">Service type</label>
                            <div className="data">
                                <select name="serviceType" id="serviceType" 
                                className={editServiceType ? "" : "hide-field"}
                                onChange={handleUpdateChange}
                                >
                                    <option value="">Service Type</option>
                                    <option value="Automobile">Automobile</option>
                                    <option value="Domestic Services">Domestic Services</option>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Hospitality">Hospitality</option>
                                    <option value="Beautician">Beautician</option>
                                    <option value="Technician">Technician</option>
                                    <option value="Phone/Accessories repair">Phone/Accessories repair</option>
                                </select>
                                <span className={editServiceType ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.serviceType : ""}</span>
                                <CiEdit className={editServiceType ? "hide-field" : "pen"} onClick={handleServiceType} />
                                <div className={editServiceType ? "save-btn" : "hide-field"}>save</div>
                                <div className={editServiceType ? "cancel-btn" : "hide-field"} 
                                onClick={handleServiceType}>cancel</div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subCategory">Subcategory</label>
                            <div className="data">
                                <select name="subCategory" id="subCategory" 
                                className={editSubCategory ? "" : "hide-field" }
                                onChange={handleUpdateChange}
                                >
                                    <option value="">Service Type</option>
                                    <option value="Automobile">Automobile</option>
                                    <option value="Domestic Services">Domestic Services</option>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Hospitality">Hospitality</option>
                                    <option value="Beautician">Beautician</option>
                                    <option value="Technician">Technician</option>
                                    <option value="Phone/Accessories repair">Phone/Accessories repair</option>
                                </select>
                                <span className={editSubCategory ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.subCategory : ""}</span>
                                <CiEdit className={editSubCategory ? "hide-field" : "pen"} onClick={handleSubCategory} />
                                <div className={editSubCategory ? "save-btn" : "hide-field"}>save</div>
                                <div className={editSubCategory ? "cancel-btn" : "hide-field"} 
                                onClick={handleSubCategory}>cancel</div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="stateOfResidence">State of Residence</label> 
                            <div className="data">
                                <select id="stateOfResidence" name="stateOfResidence" 
                                className={editStateOfResidence ? "" : "hide-field" } onChange={HandleSetStateCode}>
                                    <option value="">--Select State--</option>
                                    {
                                        myStateData.map(state => (<option  
                                            name={state.state_code} 
                                            key={state.state_code} 
                                            value={state.state_code}>{state.name}</option>))
                                    }
                                </select>
                                <span className={editStateOfResidence ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.stateOfResidence : ""}</span>
                                <CiEdit className={editStateOfResidence ? "hide-field" : "pen"} onClick={handleStateOfResidence} />
                                <div className={editStateOfResidence ? "save-btn" : "hide-field"}>save</div>
                                <div className={editStateOfResidence ? "cancel-btn" : "hide-field"} 
                                onClick={handleStateOfResidence}>cancel</div>
                            </div>
                        </div>

                        
                        <div className={stateCode==="" ? "hide-field" : ""}>
                            <label htmlFor="city">City</label>
                            <div className="data">
                                <select name="city" id="city" 
                                className={editCity ? "" : "hide-field" }
                                onChange={handleUpdateChange}
                                >
                                    <option value="">--Select City--</option>
                                        {
                                            myCityData.map(city => (
                                                <option  
                                                name={city.name}
                                                key={city.name} 
                                                value={city.name}>{city.name}</option>))
                                        }
                                </select>
                                <span className={editCity ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.city : ""}</span>
                                <CiEdit className={editCity ? "hide-field" : "pen"} onClick={handleCity} />
                                <div className={editCity ? "save-btn" : "hide-field"}>save</div>
                                <div className={editCity ? "cancel-btn" : "hide-field"} 
                                onClick={handleCity}>cancel</div>
                            </div>
                        </div>

                        <div className={stateCode==="" ? "hide-field" : ""}>
                            <label htmlFor="street">Office number and street name (E.g: 25 Adewale street)</label>
                            <div className="data">
                                <input type='text' name="street" 
                                defaultValue={fetchedProvider ? fetchedProvider.skillProvider.street : ""} 
                                className={editStreet ? "" : "hide-field" }
                                onChange={handleUpdateChange}
                                />
                                <span className={editStreet ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.street : ""}</span>
                                <CiEdit className={editStreet ? "hide-field" : "pen"} onClick={handleStreet} />
                                <div className={editStreet ? "save-btn" : "hide-field"} >save</div>
                                <div className={editStreet ? "cancel-btn" : "hide-field"} 
                                onClick={handleStreet}>cancel</div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="openingHour">Opening and closing hour</label>
                            <div className="data">
                                <input type="text" 
                                defaultValue={fetchedProvider ? fetchedProvider.skillProvider.openingHour : ""} 
                                className={editOpeningHour ? "" : "hide-field" }
                                onChange={handleUpdateChange}
                                name="openingHour"
                                />
                                <span className={editOpeningHour ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.openingHour : ""}</span>
                                <CiEdit className={editOpeningHour ? "hide-field" : "pen"} onClick={handleOpeningHour} />
                                <div className={editOpeningHour ? "save-btn" : "hide-field"}>save</div>
                                <div className={editOpeningHour ? "cancel-btn" : "hide-field"} 
                                onClick={handleOpeningHour}>cancel</div>
                            </div>
                        </div>

                        {/* <div>
                            <label htmlFor="referralCode">referralCode</label>
                            <input type="text" 
                            defaultValue={fetchedProvider ? fetchedProvider.skillProvider.referralCode : ""} 
                            className={editMode ? "" : "hide-field" }
                            onChange={handleUpdateChange}
                            name="referralCode"
                            />
                            <span className={editMode ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.referralCode : ""}</span>
                        </div> */}
                    </div> : "" }

                    { fields==="about" ? 
                    <div className="about">
                        <label htmlFor="about">Write a brief description of your service</label>
                        <textarea name="about" id="about" cols="30" rows="10" className={editAbout ? "" : "hide-field"} defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur eius similique sunt, iure neque dolore repellendus voluptatibus dolorum quidem asperiores totam ad architecto, voluptates, tenetur sapiente rem aliquid corporis dignissimos eaque nesciunt ipsam suscipit dolores. commodi at autem placeat."></textarea>
                        <span className={editAbout ? "hide-field" : ""}>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Amet consectetur eius similique sunt, iure neque 
                        dolore repellendus voluptatibus dolorum quidem </span>
                        <section>
                            <button className={editAbout ? "hide-field" : "about-btn"} onClick={handleAbout}><CiEdit className="pen" /> Edit about</button>
                            <button className={editAbout ? "save-btn" : "hide-field"}>save</button>
                            <button className={editAbout ? "cancel-btn" : "hide-field"} onClick={handleAbout}>cancel</button>
                        </section>

                        <label htmlFor="" className={editAbout ? "hide-field" : ""}>profile link</label>
                        <div className={editAbout ? "hide-field" : ""}>
                            <input type="text" name="" 
                            defaultValue={`http://127.0.0.1:3000/market-place/provider/${fetchedProvider ? fetchedProvider.skillProvider.id : ""}`} 
                            onChange={(e) => setCopyText(e.target.value)} />
                            <LuCopy className="copy" onClick={handleCopy} />
                        </div>
                    </div> : "" }

                    { fields==="socials" ? 
                    <div className="socials">
                        <div>
                            <FaFacebook className="facebook" />
                            <input type="text" name="" className={editFb ? "" : "hide-field"} defaultValue="https://facebook.com/user" />
                            <span className={editFb ? "hide-field" : ""}>https://facebook.com/user</span>
                            <CiEdit className={editFb ? "hide-field" : "pen"} onClick={handleFb} />
                            <button className={editFb ? "save-btn" : "hide-field"}>save</button>
                            <button className={editFb ? "cancel-btn" : "hide-field"} onClick={handleFb}>cancel</button>
                        </div>

                        <div>
                            <IoLogoInstagram className="instagram" />
                            <input type="text" name="" className={editGram ? "" : "hide-field"} defaultValue="https://instagram.com/user" />
                            <span className={editGram ? "hide-field" : ""}>https://instagram.com/user</span>
                            <CiEdit className={editGram ? "hide-field" : "pen"} onClick={handleGram} />
                            <button className={editGram ? "save-btn" : "hide-field"}>save</button>
                            <button className={editGram ? "cancel-btn" : "hide-field"} onClick={handleGram}>cancel</button>
                        </div>

                        <div>
                            <FaXTwitter className="witter" />
                            <input type="text" name="" className={editX ? "" : "hide-field"} defaultValue="https://x.com/user" />
                            <span className={editX ? "hide-field" : ""}>https://x.com/user</span>
                            <CiEdit className={editX ? "hide-field" : "pen"} onClick={handleX} />
                            <button className={editX ? "save-btn" : "hide-field"}>save</button>
                            <button className={editX ? "cancel-btn" : "hide-field"} onClick={handleX}>cancel</button>
                        </div>
                    </div> : "" }
                </div>

                {/* { editMode ? <button type="submit" className="">Save Changes</button> : <button onClick={handleEditMode}>Edit Profile</button>} */}
            </form>

            <button className={fields==="password" ? "hide-field" : "logout"} onClick={logoutProvider}
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

export default ProviderProfile
