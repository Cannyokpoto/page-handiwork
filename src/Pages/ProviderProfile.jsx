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
import { CiEdit } from "react-icons/ci";



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

    // const [formData, setFormData] = useState({
    //     image: "",
    //  })


    //To toggle edit mode
    const [editFirstName, setEditFirstName] = useState(false);
    const handleFirstName = ()=>{
        setEditFirstName(!editFirstName)
    }

    const [editLastName, setEditLastName] = useState(false);
    const handleLastName = ()=>{
        setEditLastName(!editLastName)
    }

    const [editEmail, setEditEmail] = useState(false);
    const handleEmail = ()=>{
        setEditEmail(!editEmail)
    }

    const [editPhone, setEditPhone] = useState(false);
    const handlePhone = ()=>{
        setEditPhone(!editPhone)
    }

    const [editSecondPhone, setEditSecondPhone] = useState(false);
    const handleSecondPhone = ()=>{
        setEditSecondPhone(!editSecondPhone)
    }

    const [editServiceType, setEditServiceType] = useState(false);
    const handleServiceType = ()=>{
        setEditServiceType(!editServiceType)
    }

    const [editSubCategory, setEditSubCategory] = useState(false);
    const handleSubCategory = ()=>{
        setEditSubCategory(!editSubCategory)
    }

    const [editOpeningHour, setEditOpeningHour] = useState(false);
    const handleOpeningHour = ()=>{
        setEditOpeningHour(!editOpeningHour)
    }

    const [editStateOfResidence, setEditStateOfResidence] = useState(false);
    const handleStateOfResidence = ()=>{
        setEditStateOfResidence(!editStateOfResidence)
    }

    const [editCity, setEditCity] = useState(false);
    const handleCity = ()=>{
        setEditCity(!editCity)
    }

    const [editStreet, setEditStreet] = useState(false);
    const handleStreet = ()=>{
        setEditStreet(!editStreet)
    }

    const [editAbout, setEditAbout] = useState(false);

    const handleAbout = ()=>{
        setEditAbout(!editAbout)
    }

    const [editFb, setEditFb] = useState(false);

    const handleFb = ()=>{
        setEditFb(!editFb)
    }

    const [editX, setEditX] = useState(false);

    const handleX = ()=>{
        setEditX(!editX)
    }

    const [editGram, setEditGram] = useState(false);

    const handleGram = ()=>{
        setEditGram(!editGram)
    }


    const [fields, setFields] = useState("basic");

    // const handleEditMode = (e) =>{
    //     e.preventDefault()
    //     setEditMode(!editMode)
    // }

    //To activate edit mode
    // const [active, setActive] = useState("");

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
                                onChange={handleUpdateChange}
                                name="firstName"
                                />
                                <span className={editFirstName ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.firstName.charAt(0).toUpperCase() + fetchedProvider.skillProvider.firstName.slice(1) : ""}</span>
                                <CiEdit className={editFirstName ? "hide-field" : "pen"} onClick={handleFirstName} />
                                <button className={editFirstName ? "save-btn" : "hide-field"}>save</button>
                                <button className={editFirstName ? "cancel-btn" : "hide-field"} onClick={handleFirstName}>cancel</button>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <div className="data">
                                <input type="text" 
                                defaultValue={fetchedProvider ? fetchedProvider.skillProvider.lastName.charAt(0).toUpperCase() + fetchedProvider.skillProvider.lastName.slice(1) : ""} 
                                className={editLastName ? "" : "hide-field" }
                                onChange={handleUpdateChange}
                                name="lastName"
                                />
                                <span className={editLastName ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.lastName.charAt(0).toUpperCase() + fetchedProvider.skillProvider.lastName.slice(1) : ""}</span>
                                <CiEdit className={editLastName ? "hide-field" : "pen"} onClick={handleLastName} />
                                <button className={editLastName ? "save-btn" : "hide-field"}>save</button>
                                <button className={editLastName ? "cancel-btn" : "hide-field"} onClick={handleLastName}>cancel</button>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <div className="data">
                                <input type="text" 
                                defaultValue={fetchedProvider ? fetchedProvider.skillProvider.email : ""} 
                                className={editEmail ? "" : "hide-field" }
                                onChange={handleUpdateChange}
                                name="email"
                                />
                                <span className={editEmail ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.email : ""}</span>
                                <CiEdit className={editEmail ? "hide-field" : "pen"} onClick={handleEmail} />
                                <button className={editEmail ? "save-btn" : "hide-field"}>save</button>
                                <button className={editEmail ? "cancel-btn" : "hide-field"} onClick={handleEmail}>cancel</button>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone">Phone1</label>
                            <div className="data">
                                <input type="number" 
                                defaultValue={fetchedProvider ? fetchedProvider.skillProvider.phone : ""} 
                                className={editPhone ? "" : "hide-field" }
                                onChange={handleUpdateChange}
                                name="phone"
                                />
                                <span className={editPhone ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.phone : ""}</span>
                                <CiEdit className={editPhone ? "hide-field" : "pen"} onClick={handlePhone} />
                                <button className={editPhone ? "save-btn" : "hide-field"}>save</button>
                                <button className={editPhone ? "cancel-btn" : "hide-field"} onClick={handlePhone}>cancel</button>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="secondPhone">Phone2</label>
                            <div className="data">
                                <input type="number" 
                                defaultValue={fetchedProvider ? fetchedProvider.skillProvider.secondPhone : ""} 
                                className={editSecondPhone ? "" : "hide-field" }
                                onChange={handleUpdateChange}
                                id="secondPhone"
                                name="secondPhone"
                                />
                                <span className={editSecondPhone ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.secondPhone : ""}</span>
                                <CiEdit className={editSecondPhone ? "hide-field" : "pen"} onClick={handleSecondPhone} />
                                <button className={editSecondPhone ? "save-btn" : "hide-field"}>save</button>
                                <button className={editSecondPhone ? "cancel-btn" : "hide-field"} onClick={handleSecondPhone}>cancel</button>
                            </div>
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
                                <button className={editServiceType ? "save-btn" : "hide-field"}>save</button>
                                <button className={editServiceType ? "cancel-btn" : "hide-field"} onClick={handleServiceType}>cancel</button>
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
                                <button className={editSubCategory ? "save-btn" : "hide-field"}>save</button>
                                <button className={editSubCategory ? "cancel-btn" : "hide-field"} onClick={handleSubCategory}>cancel</button>
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
                                <button className={editStateOfResidence ? "save-btn" : "hide-field"}>save</button>
                                <button className={editStateOfResidence ? "cancel-btn" : "hide-field"} onClick={handleStateOfResidence}>cancel</button>
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
                                <button className={editCity ? "save-btn" : "hide-field"}>save</button>
                                <button className={editCity ? "cancel-btn" : "hide-field"} onClick={handleCity}>cancel</button>
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
                                <button className={editStreet ? "save-btn" : "hide-field"} >save</button>
                                <button className={editStreet ? "cancel-btn" : "hide-field"} onClick={handleStreet}>cancel</button>
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
                                <button className={editOpeningHour ? "save-btn" : "hide-field"}>save</button>
                                <button className={editOpeningHour ? "cancel-btn" : "hide-field"} onClick={handleOpeningHour}>cancel</button>
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
