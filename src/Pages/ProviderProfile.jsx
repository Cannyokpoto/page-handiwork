import "./CSS/ProviderProfile.css"
import React, { useContext, useEffect, useState } from 'react'
import { HandiworkContext } from "../Components/Context/HandiworkContext";
import { Link } from 'react-router-dom';
import { MdOutlineFileUpload } from "react-icons/md";
import { LuCopy } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";



function ProviderProfile(props) {

    const{handleUpdateChange} = useContext(HandiworkContext)
    const{expectedChanges} = useContext(HandiworkContext)
    const{handleFileChange} = useContext(HandiworkContext)
    

    //To update service provider details
  
  async function handleProviderUpdate(e){
    e.preventDefault()


      try {
        // setLoading(true)

        setEditMode(false)
    
          // const result = await fetch("https://handiworks.cosmossound.com.ng/api/skill-providers/create", {
          //     method: "POST",
          //     body: JSON.stringify(formData),
          //     headers: {
          //         "Content-Type": "application/json",
          //         "Accept": "application/json"
          //     }
          // })

         const response = await axios.put(`https://handiworks.cosmossound.com.ng/api/skill-providers/updateSkillProvider/${providerId}`, expectedChanges, {
            headers: {
                'Authorization' : `Bearer ${authToken}`
            }
         })
          console.warn('response:', response.data)
    
        //   if(result.ok){
        //       handleSuccess()
        // }
        // else if(!result.ok){
        //   const errorMessage = await result.json();
        //   const lastError = errorMessage ? errorMessage.error : "";
        //   console.log("errorMessage:", lastError)
        //   throw new Error(lastError)
        // }

        if(response.status >= 200 && response.status < 300){
        //   handleSuccess()
        }
        else{
          const errorMessage = response.data.message || "Unknown error, please retry."
          console.log("errorMessage:", errorMessage)
        }

          
    
      }
      catch (dupError) {
          console.log("caughtError:", dupError.message)

        //   if(dupError.message === "Request failed with status code 500"){
        //     setDuplicateError("Email or phone number already exists.")
        //   }
        //   else{
        //     setDuplicateError("Unknown error. Please check your internet connection and retry.")
        //   }
  
      }
    
      finally{
        // setLoading(false)
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
    let authToken = loggedinProvider ? loggedinProvider.token : "";


    //To toggle edit mode
    const [editMode, setEditMode] = useState(false);
    // const [editable, setEditable] = useState(false);
    const [fields, setFields] = useState("basic");

    const handleEditMode = (e) =>{
        e.preventDefault()
        setEditMode(true)
    }

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
                {/* <button>{providerId}</button> */}
                {/* <button>{authToken}</button> */}
            </div>

            <form className={fields==="password" ? "hide-field" : "edit"} onSubmit={handleProviderUpdate}>
                <div className="fields">
                    <div className="dp">

                    

                        <h6 className={fetchedProvider && fetchedProvider.skillProvider.imagePath !== null || preview===true ? "hide-field" : ""}>
                        {fetchedProvider ? fetchedProvider.skillProvider.firstName
                        .charAt(0).toUpperCase() + fetchedProvider.skillProvider.lastName
                        .charAt(0).toUpperCase() : ""}
                        </h6>

                        <img src={fetchedProvider ? fetchedProvider.skillProvider.imagePath : ""} 
                        alt="Dp"
                        className={fetchedProvider && fetchedProvider.skillProvider.imagePath !== null && preview===false ? "" : "hide-field"}
                        />
                        <img src={dp} 
                        alt="preview" 
                        className={preview ? "" : "hide-field"}
                        />
                        <input type="file" name="image" id="image" accept="image/*"
                        onChange={handleFileChange}/>
                        <label htmlFor="image"><MdOutlineFileUpload className="upload" /> Replace</label>
                    </div>

                    <hr />
                    
                    { fields==="basic" ? 
                    <div className="basic">
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" 
                            defaultValue={fetchedProvider ? fetchedProvider.skillProvider.firstName.charAt(0).toUpperCase() + fetchedProvider.skillProvider.firstName.slice(1) : ""} 
                            className={editMode ? "" : "hide-field" }
                            onChange={handleUpdateChange}
                            name="firstName"
                            // defaultValue={providerUpdateData.firstName}
                            // disabled={editable}
                            />
                            <span className={editMode ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.firstName.charAt(0).toUpperCase() + fetchedProvider.skillProvider.firstName.slice(1) : ""}</span>
                        </div>

                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" 
                            defaultValue={fetchedProvider ? fetchedProvider.skillProvider.lastName.charAt(0).toUpperCase() + fetchedProvider.skillProvider.lastName.slice(1) : ""} 
                            className={editMode ? "" : "hide-field" }
                            onChange={handleUpdateChange}
                            name="lastName"
                            />
                            <span className={editMode ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.lastName.charAt(0).toUpperCase() + fetchedProvider.skillProvider.lastName.slice(1) : ""}</span>
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" 
                            defaultValue={fetchedProvider ? fetchedProvider.skillProvider.email : ""} 
                            className={editMode ? "" : "hide-field" }
                            onChange={handleUpdateChange}
                            name="email"
                            />
                            <span className={editMode ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.email : ""}</span>
                        </div>

                        <div>
                            <label htmlFor="phone">Phone1</label>
                            <input type="number" 
                            defaultValue={fetchedProvider ? fetchedProvider.skillProvider.phone : ""} 
                            className={editMode ? "" : "hide-field" }
                            onChange={handleUpdateChange}
                            name="phone"
                            />
                            <span className={editMode ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.phone : ""}</span>
                        </div>

                        <div>
                            <label htmlFor="secondPhone">Phone2</label>
                            <input type="number" 
                            defaultValue={fetchedProvider ? fetchedProvider.skillProvider.secondPhone : ""} 
                            className={editMode ? "" : "hide-field" }
                            onChange={handleUpdateChange}
                            id="secondPhone"
                            name="secondPhone"
                            />
                            <span className={editMode ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.secondPhone : ""}</span>
                        </div>

                        <div>
                            <label htmlFor="serviceType">Service type</label>
                            <select name="serviceType" id="serviceType" 
                            className={editMode ? "" : "hide-field"}
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
                            <span className={editMode ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.serviceType : ""}</span>
                        </div>

                        <div>
                            <label htmlFor="subCategory">Subcategory</label>
                            <select name="subCategory" id="subCategory" 
                            className={editMode ? "" : "hide-field" }
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
                            <span className={editMode ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.subCategory : ""}</span>
                        </div>

                        <div>
                            <label htmlFor="stateOfResidence">State of Residence</label> 
                            <select id="stateOfResidence" name="stateOfResidence" 
                            className={editMode ? "" : "hide-field" } onChange={HandleSetStateCode}>
                                <option value="">--Select State--</option>
                                {
                                    myStateData.map(state => (<option  
                                        name={state.state_code} 
                                        key={state.state_code} 
                                        value={state.state_code}>{state.name}</option>))
                                }
                            </select>
                            <span className={editMode ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.stateOfResidence : ""}</span>
                        </div>

                        
                        <div className={stateCode==="" ? "hide-field" : ""}>
                            <label htmlFor="city">City</label>
                            <select name="city" id="city" 
                            className={editMode ? "" : "hide-field" }
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
                            <span className={editMode ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.city : ""}</span>
                        </div>

                        <div className={stateCode==="" ? "hide-field" : ""}>
                            <label htmlFor="street">Office number and street name (E.g: 25 Adewale street)</label>
                            <input type='text' name="street" 
                            defaultValue={fetchedProvider ? fetchedProvider.skillProvider.street : ""} 
                            className={editMode ? "" : "hide-field" }
                            onChange={handleUpdateChange}
                            />
                            <span className={editMode ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.street : ""}</span>
                        </div>

                        <div>
                            <label htmlFor="openingHour">Opening and closing hour</label>
                            <input type="text" 
                            defaultValue={fetchedProvider ? fetchedProvider.skillProvider.openingHour : ""} 
                            className={editMode ? "" : "hide-field" }
                            onChange={handleUpdateChange}
                            name="openingHour"
                            />
                            <span className={editMode ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.openingHour : ""}</span>
                        </div>

                        <div>
                            <label htmlFor="referralCode">referralCode</label>
                            <input type="text" 
                            defaultValue={fetchedProvider ? fetchedProvider.skillProvider.referralCode : ""} 
                            className={editMode ? "" : "hide-field" }
                            onChange={handleUpdateChange}
                            name="referralCode"
                            />
                            <span className={editMode ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.referralCode : ""}</span>
                        </div>
                    </div> : "" }

                    { fields==="about" ? 
                    <div className="about">
                        <label htmlFor="about">Write a brief description of your service</label>
                        <textarea name="about" id="about" cols="30" rows="10" className={editMode ? "" : "hide-field"} defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur eius similique sunt, iure neque dolore repellendus voluptatibus dolorum quidem asperiores totam ad architecto, voluptates, tenetur sapiente rem aliquid corporis dignissimos eaque nesciunt ipsam suscipit dolores. commodi at autem placeat."></textarea>
                        <span className={editMode ? "hide-field" : ""}>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Amet consectetur eius similique sunt, iure neque 
                        dolore repellendus voluptatibus dolorum quidem </span>

                        <label htmlFor="" className={editMode ? "hide-field" : ""}>profile link</label>
                        <div className={editMode ? "hide-field" : ""}>
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
                            <input type="text" name="" className={editMode ? "" : "hide-field"} defaultValue="https://facebook.com/user" />
                            <span className={editMode ? "hide-field" : ""}>https://facebook.com/user</span>
                        </div>

                        <div>
                            <IoLogoInstagram className="instagram" />
                            <input type="text" name="" className={editMode ? "" : "hide-field"} defaultValue="https://instagram.com/user" />
                            <span className={editMode ? "hide-field" : ""}>https://instagram.com/user</span>
                        </div>

                        <div>
                            <FaXTwitter className="witter" />
                            <input type="text" name="" className={editMode ? "" : "hide-field"} defaultValue="https://x.com/user" />
                            <span className={editMode ? "hide-field" : ""}>https://x.com/user</span>
                        </div>
                    </div> : "" }
                </div>

                { editMode ? <button type="submit">Save Changes</button> : <button onClick={handleEditMode}>Edit Profile</button>}
            </form>

            <button className="logout"><AiOutlineLogout /> Logout</button>

            <hr className={fields==="password" ? "myHr" : "hide-field"} />
            <form className={fields==="password" ? "password" : "hide-field"}>
                <h6><RiLockPasswordLine className="padLock" /> Change Password</h6>
                <div className="change">
                    <input type="text" placeholder="Current Password"/>
                    <input type="text" placeholder="New Password"/>
                    <input type="text" placeholder="Confirm Password"/>
                </div>
                <button type="submit" className="changeBtn">Change password</button>
            </form>
      </div>
    </div>
  )
}

export default ProviderProfile
