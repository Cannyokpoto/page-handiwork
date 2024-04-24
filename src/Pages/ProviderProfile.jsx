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



function ProviderProfile(props) {

    const{fetchedProvider} = useContext(HandiworkContext)
    const{viewProvider} = useContext(HandiworkContext)

    useEffect(()=>{
        viewProvider()
    })

    const{myStateData} = useContext(HandiworkContext)
    const{myCityData} = useContext(HandiworkContext)
    const{stateCode} = useContext(HandiworkContext)
    const{HandleSetStateCode} = useContext(HandiworkContext)
    const {loggedinProvider} = useContext(HandiworkContext)


    //To toggle edit mode
    const [editMode, setEditMode] = useState(false);
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
    const saveChanges = (e) =>{
        e.preventDefault()
        setEditMode(false)
    }

  return (
    <div className="provider-profile">
      <Link to="/">Back to home</Link>

      <div className="edit-wrapper">
            <div className="switch">
                <button onClick={() => setFields("basic")} className={fields==="basic" ? "active-fields" : ""}>Basic information</button>
                <button onClick={() => setFields("about")} className={fields==="about" ? "active-fields" : ""}>About me</button>
                <button onClick={() => setFields("socials")} className={fields==="socials" ? "active-fields" : ""}>Social links</button>
                <button onClick={() => setFields("password")} className={fields==="password" ? "active-fields" : ""}>Change password</button>
            </div>

            <form className="edit">
                <div className={fields==="password" ? "hide-field" : "fields"}>
                    <div className="dp">
                        <img src="" alt="" />    
                        <input type="file" name="dpUpload" id="dpUpload" />
                        <label htmlFor="dpUpload"><MdOutlineFileUpload className="upload" /> Replace</label>
                    </div>

                    <hr />
                    
                    { fields==="basic" ? 
                    <div className="basic">
                        <div>
                            <label htmlFor="">First Name</label>
                            <input type="text" defaultValue="Promise" className={editMode ? "" : "hide-field" }/>
                            <span className={editMode ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.firstName.charAt(0).toUpperCase() + fetchedProvider.skillProvider.firstName.slice(1) : ""}</span>
                        </div>

                        <div>
                            <label htmlFor="">Last Name</label>
                            <input type="text" defaultValue="Okpoto" className={editMode ? "" : "hide-field" }/>
                            <span className={editMode ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.lastName.charAt(0).toUpperCase() + fetchedProvider.skillProvider.lastName.slice(1) : ""}</span>
                        </div>

                        <div>
                            <label htmlFor="serviceType">Service type</label>
                            <select name="serviceType" id="serviceType" className={editMode ? "" : "hide-field" }>
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
                            <select name="subCategory" id="subCategory" className={editMode ? "" : "hide-field" }>
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
                            <select id="stateOfResidence" name="stateOfResidence" className={editMode ? "" : "hide-field" } onChange={HandleSetStateCode}>
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
                            <select name="city" id="city" className={editMode ? "" : "hide-field" }>
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
                            <input type='text' name="street" defaultValue="29 Ebong Essien street" className={editMode ? "" : "hide-field" }/>
                            <span className={editMode ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.street : ""}</span>
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

                { editMode ? <button type="submit" onClick={saveChanges}>Save Changes</button> : <button onClick={handleEditMode}>Edit Profile</button>}
            </form>

            <button className="logout"><AiOutlineLogout /> Logout</button>
            <form className={fields==="password" ? "password" : "hide-field"}>
                <h6><RiLockPasswordLine /> Change Password</h6>
                <div className="change">
                    <input type="text" placeholder="Current Password"/>
                    <input type="text" placeholder="New Password"/>
                    <input type="text" placeholder="Confirm Password"/>
                </div>
            </form>
      </div>
    </div>
  )
}

export default ProviderProfile
