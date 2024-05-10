import React, { useContext, useState, useRef, useEffect} from 'react'
import "./Dashboard.css"
import { FiUsers } from "react-icons/fi";
import { MdOutlineVerified } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import PHOTOS from '../../images';
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { AdminData, AllServiceProvidersData } from '../../Assets/Data';
import {
    AdminRecord, AdminTags, 
    SkillProvidersTag, SkillProvidersRecord, 
    CustomersRecord, CustomersTag, VerificationRecord, VerificationTag
} from '../AdminRecord/AdminRecord';
import { IoClose } from "react-icons/io5";
import '../../Welcome/Welcome.css';
import { MdOutlineDashboard } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { PiEyeClosed } from "react-icons/pi";
import { RxEyeOpen } from "react-icons/rx";
import { UpdatingBtn } from "../../Loading/Loading";
import { UpdateFailed, UpdateSuccess } from "../../Welcome/Welcome";
import ReactPaginate from 'react-paginate';
import { RiAdminLine } from "react-icons/ri";






function Dashboard() {

     
     //customized error messages
    const [errors, setErrors] = useState({})

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
 
     const [editPassword, setEditPassword] = useState(false);
     const handlePassword = ()=>{
        setEditPassword(!editPassword)
         setErrors({})
     }


    //Ref for sde bar
    const dashRef = useRef()

    const [menu, setMenu] = useState(false)

    const handleMenu =()=>{
        setMenu(!menu)
    }

    // useEffect(() =>{
    //   let handler = (event) =>{
    //     if(!dashRef.current?.contains(event.target)){
    //         setMenu(false)
    //     }
    //   }
  
    //   document.addEventListener("mousedown", handler);
  
    //   return ()=>{
    //     document.removeEventListener("mousedown", handler);
    //   }
  
    // })

    //state to manage admin dropdown in the side bar
    const [admins, setAdmins] = useState(false)

    const handleAdmins =()=>{
        setAdmins(!admins)
    }

    const [users, setUsers] = useState(false)

    const handleUsers =()=>{
        setUsers(!users)
    }

    //state to manage bulk action dropdown in the side bar
    const [bulk, setBulk] = useState(false)

    const handleBulk =()=>{
        setBulk(!bulk)
    }

    //state to manage bulk action dropdown in the side bar
    const [bulk2, setBulk2] = useState(false)

    const handleBulk2 =()=>{
        setBulk2(!bulk2)
    }

    //state to manage what is rendered on the dashboard
    const [view, setView] = useState("dash")

    const handleAll =()=>{
        setView("all")
        handleMenu()
    }

    const handleDash =()=>{
        setView("dash")
        setAdmins(false)
        handleMenu()
    }

    const handleMe =()=>{
        setView("me")
        setAdmins(false)
        handleMenu()
    }

    const handleAddNew =()=>{
        setView("addNew")
        // setAdmins(false)
        handleMenu()
    }

    const handleSkillProvider =()=>{
        setView("skillProvider")
        handleMenu()
    }

    const handleCustomer =()=>{
        setView("customer")
        handleMenu()
    }

    const handleVerification =()=>{
        setView("verification")
        handleMenu()
    }

    // const handleSite =()=>{
    //     setView("site")
    //     setAdmins(false)
    //     handleMenu()
    // }

    navigation = useNavigate()
    const roleSwitch = () =>{
        navigation("/")
        // window.location.reload(false)
      }

    //pagination for admin info display
    const [adminsToShow, setAdminsToShow] = useState(AdminData)
    const [providersToShow, setProvidersToShow] = useState(AllServiceProvidersData)
    const [customersToShow, setCustomersToShow] = useState(AllServiceProvidersData)
    const [verificationToShow, setVerificationToShow] = useState(AllServiceProvidersData)
    const [pageNumber, setPageNumber] = useState(0);

    const objectPerPage =10
    const pagesVisited = pageNumber * objectPerPage;

    const adminsPageCount = Math.ceil(adminsToShow.length / objectPerPage);
    const providersPageCount = Math.ceil(providersToShow.length / objectPerPage);
    const customersPageCount = Math.ceil(customersToShow.length / objectPerPage);
    const verificationPageCount = Math.ceil(verificationToShow.length / objectPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    


  return (
    <div className='admin-dashboard'>

    
      <div className={menu ? "mobile-side-bar" : "collapse"}>

       {menu ? <IoClose className='close' onClick={handleMenu} /> : ""}

        <img src={PHOTOS.LOGO} alt="" className='dashboardLogo' />

        <div className="head">
            <span className='acron'>CO</span>
            <span className='fname'>Canny Okpoto</span>
        </div>

        <div
        className={ view=="me" ? "all-bg me" : "me"}>
            <CiUser className='icon' onClick={handleMenu} />
            <span onClick={handleMe}>Me</span>
        </div>

        <div
        className={ view=="site" ? "all-bg site" : "site"}>
            <IoGlobeOutline className='icon' onClick={handleMenu} />
            <span onClick={roleSwitch}>Visit Site</span>
        </div>

        <div className={ view=="dash" ? "all-bg dash" : "dash"}>
            <MdOutlineDashboard className='icon' onClick={handleMenu} />
            <span onClick={handleDash}>Dashboard</span>
        </div>
        
        <div className={admins ? "admins admins-bg" : "admins"} >
            <RiAdminLine className='icon' onClick={handleMenu} />
            <span onClick={handleAdmins}>Admins</span>
        </div>

        
        <div className={ admins ? "admins-dropdown" : "hide-field"}>
            <span onClick={handleAll} 
            className={ view=="all" ? "all-bg" : ""}>All Admins</span>
            <span onClick={handleAddNew}
            className={ view=="addNew" ? "all-bg" : ""}
            >Add new admin</span>
        </div>

        <div className={users ? "users users-bg" : "admins"} onClick={handleUsers}>
            <FiUsers className='icon' onClick={handleMenu} />
            <span>Users</span>
        </div>

        
        <div className={ users ? "users-dropdown" : "hide-field"}>
            <span onClick={handleSkillProvider} 
            className={ view=="skillProvider" ? "all-bg" : ""}>Skill Provider</span>
            <span onClick={handleCustomer}
            className={ view=="customer" ? "all-bg" : ""}
            >Customer</span>
        </div>

        <div
        className={ view=="verification" ? "all-bg verifications" : "verifications"}>
            <MdOutlineVerified className='icon' onClick={handleMenu} />
            <span
            onClick={handleVerification}
            >Verification Entries</span>
        </div>

        {/* <div className="submissions">
            <GoGraph className='icon' onClick={handleMenu} />
            <span>Submissions</span>
        </div> */}
      </div>

      
      <div className="side-bar">

        <img src={PHOTOS.LOGO} alt="" className='dashboardLogo' />

        <div className="head">
            <span className='acron'>CO</span>
            <span className='fname'>Canny Okpoto</span>
        </div>

        <div className={ view==="me" ? "me all-bg" : "me"} onClick={handleMe}>
            <CiUser className='icon' />
            <span>Me</span>
        </div>

        <div className="site">
            <IoGlobeOutline className='icon' />
            <span onClick={roleSwitch}>Visit Site</span>
        </div>

        <div
        className={ view=="dash" ? "all-bg dash" : "dash"}
        onClick={handleDash}>
            <MdOutlineDashboard className='icon' />
            <span>Dashboard</span>
        </div>
        
        <div className={admins ? "admins admins-bg" : "admins"} onClick={handleAdmins}>
            <RiAdminLine className='icon' />
            <span>Admins</span>
        </div>


        
        <div className={ admins ? "admins-dropdown" : "hide-field"}>
            <span onClick={handleAll} 
            className={ view=="all" ? "all-bg" : ""}>All Admins</span>
            <span onClick={handleAddNew}
            className={ view=="addNew" ? "all-bg" : ""}
            >Add new admin</span>
        </div>

        <div className={users ? "users users-bg" : "admins"} onClick={handleUsers}>
            <FiUsers className='icon' />
            <span>Users</span>
        </div>

        
        <div className={ users ? "users-dropdown" : "hide-field"}>
            <span onClick={handleSkillProvider} 
            className={ view=="skillProvider" ? "all-bg" : ""}>Skill Provider</span>
            <span onClick={handleCustomer}
            className={ view=="customer" ? "all-bg" : ""}
            >Customer</span>
        </div>

        <div
        className={ view=="verification" ? "all-bg verifications" : "verifications"}
        onClick={handleVerification}
        >
            <MdOutlineVerified className='icon' />
            <span>Verification Entries</span>
        </div>

        {/* <div className="submissions">
            <GoGraph className='icon' />
            <span>Submissions</span>
        </div> */}
      </div>


      <div className="area">

      { view==="all" ? 
        <div className="all-admins">
            <div className="top">
                <span className="tag" onClick={handleMenu}>All Admins</span>

                <div className="search">
                    <IoSearchOutline className='icon' />

                    <input type="text" placeholder='search admin' />
                </div>
            </div>

            <div className="action">
                <div className="head">
                    <div className="text" onClick={handleBulk}>
                        <span>Bulk action</span>
                        <RiArrowDropDownLine className='icon' />
                    </div>

                    { bulk ?
                        <ul className="dropdown">
                            <li>Delete admin</li>
                            <li>Delete admin</li>
                            <li>Delete admin</li>
                            <li>Delete admin</li>
                        </ul> : ""
                    }

                </div>

                <div className="btns">
                    <button>Apply</button>
                </div>
            </div>

        
            <div className="records">

                <AdminTags /> 

                {
                    adminsToShow.slice(pagesVisited, pagesVisited + objectPerPage)
                    .map((admin, i)=>{
                        return(
                            <AdminRecord 
                            key={i}
                            fName={admin.fName}
                            lName={admin.lName}
                            email={admin.email}
                            adminId={admin.adminId}
                            role={admin.role}
                            />
                        )
                    })
                }

                <ReactPaginate 
                    previousLabel= {"<"}
                    nextLabel={">"}
                    pageCount={adminsPageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBtns"}
                    previousLinkClassName={"prevBtn"}
                    nextLinkClassName={"nextBtn"}
                    disabledClassName={"disabledBtn"}
                    activeClassName = {"activeBtn"}
                />
                
            </div>

            <div className="action action2">
                <div className="head">
                    <div className="text" onClick={handleBulk2}>
                        <span>Bulk action</span>
                        <RiArrowDropDownLine className='icon' />
                    </div>

                    { bulk2 ?
                        <ul className="dropdown">
                            <li>Delete admin</li>
                            <li>Delete admin</li>
                            <li>Delete admin</li>
                            <li>Delete admin</li>
                        </ul> : ""
                    }

                </div>

                <div className="btns">
                    <button>Apply</button>
                </div>
            </div>
       
        </div> : "" }

        { view==="skillProvider" ? 
        <div className="all-admins">
            <div className="top">
                <span className="tag" onClick={handleMenu}>All Skill Providers</span>

                <div className="search">
                    <IoSearchOutline className='icon' />

                    <input type="text" placeholder='search skill provider' />
                </div>
            </div>

            <div className="action">
                <div className="head">
                    <div className="text" onClick={handleBulk}>
                        <span>Bulk action</span>
                        <RiArrowDropDownLine className='icon' />
                    </div>

                    { bulk ?
                        <ul className="dropdown">
                            <li>Delete skill providers</li>
                        </ul> : ""
                    }

                </div>

                <div className="btns">
                    <button>Apply</button>
                </div>
            </div>

        
            <div className="records">

                <SkillProvidersTag /> 

                {
                    providersToShow.slice(pagesVisited, pagesVisited + objectPerPage)
                    .map((provider, i)=>{
                        return(
                            <SkillProvidersRecord 
                            key={i}
                            firstName={provider.name.split(" ")[0]}
                            lastName={provider.name.split(" ")[1]}
                            email={provider.phoneNumber}
                            skill={provider.skill}
                            id={provider.id}
                            category={provider.category}
                            />
                        )
                    })
                }

                <ReactPaginate 
                    previousLabel= {"<"}
                    nextLabel={">"}
                    pageCount={providersPageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBtns"}
                    previousLinkClassName={"prevBtn"}
                    nextLinkClassName={"nextBtn"}
                    disabledClassName={"disabledBtn"}
                    activeClassName = {"activeBtn"}
                />
                
            </div>

            <div className="action action2">
                <div className="head">
                    <div className="text" onClick={handleBulk2}>
                        <span>Bulk action</span>
                        <RiArrowDropDownLine className='icon' />
                    </div>

                    { bulk2 ?
                        <ul className="dropdown">
                            <li>Delete admin</li>
                            <li>Delete admin</li>
                            <li>Delete admin</li>
                            <li>Delete admin</li>
                        </ul> : ""
                    }

                </div>

                <div className="btns">
                    <button>Apply</button>
                </div>
            </div>
       
        </div> : "" }

        { view==="customer" ? 
        <div className="all-admins">
            <div className="top">
                <span className="tag" onClick={handleMenu}>All Customers</span>

                <div className="search">
                    <IoSearchOutline className='icon' />

                    <input type="text" placeholder='search customer' />
                </div>
            </div>

            <div className="action">
                <div className="head">
                    <div className="text" onClick={handleBulk}>
                        <span>Bulk action</span>
                        <RiArrowDropDownLine className='icon' />
                    </div>

                    { bulk ?
                        <ul className="dropdown">
                            <li>Delete customer</li>
                        </ul> : ""
                    }

                </div>

                <div className="btns">
                    <button>Apply</button>
                </div>
            </div>

        
            <div className="records">

                <CustomersTag /> 

                {
                    customersToShow.slice(pagesVisited, pagesVisited + objectPerPage)
                    .map((customer, i)=>{
                        return(
                            <CustomersRecord 
                            key={i}
                            firstName={customer.name.split(" ")[0]}
                            lastName={customer.name.split(" ")[1]}
                            phoneNumber={customer.phoneNumber}
                            email={customer.phoneNumber}
                            address={customer.address.
                                split(" ")[0]+" "+customer.address.
                                split(" ")[1]+" "+customer.address.split(" ")[2]+"..."}
                            />
                        )
                    })
                }

                <ReactPaginate 
                    previousLabel= {"<"}
                    nextLabel={">"}
                    pageCount={customersPageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBtns"}
                    previousLinkClassName={"prevBtn"}
                    nextLinkClassName={"nextBtn"}
                    disabledClassName={"disabledBtn"}
                    activeClassName = {"activeBtn"}
                />
                
            </div>

            <div className="action action2">
                <div className="head">
                    <div className="text" onClick={handleBulk2}>
                        <span>Bulk action</span>
                        <RiArrowDropDownLine className='icon' />
                    </div>

                    { bulk2 ?
                        <ul className="dropdown">
                            <li>Delete admin</li>
                            <li>Delete admin</li>
                            <li>Delete admin</li>
                            <li>Delete admin</li>
                        </ul> : ""
                    }

                </div>

                <div className="btns">
                    <button>Apply</button>
                </div>
            </div>
       
        </div> : "" }


        
        { view==="dash" ? 
        
        <div className='admin-welcome'>
          <img className='photo' src={PHOTOS.dashboard} alt="photo" />
      
          <p className="hello">Hello Admin,</p>

          <span className="greet">Welcome to your dashboard</span>
          {/* <button onClick={handleMenu}>Get started</button> */}
       </div>
        : "" }

         {view==="me" ? 
        <div className="me-wrapper">
            <div className="field">
                <label htmlFor="firstName">First Name</label>
                <div className='data'>
                    <input type="text" 
                    defaultValue="canny" 
                    className={editFirstName ? "" : "hide-field"}
                    name="firstName"
                    />
                    <span
                    className={editFirstName ? "hide-field" : "old"}
                    >canny</span>
                    <CiEdit className={editFirstName ?  "hide-field" : "pen"} 
                    onClick={handleFirstName} />
                    <div className={editFirstName ? "save" : "hide-field"}>save</div>

                    <div className={editFirstName ? "cancel" : "hide-field"}
                    onClick={handleFirstName}>cancel</div>
                    {/* { updatingFirstName ? <UpdatingBtn /> : ""} */}
                </div>
                {/* <p>{errors && errors.firstName}</p> */}
            </div>

            <div className="field">
                <label htmlFor="lastName">Last Name</label>
                <div className='data'>
                    <input type="text" 
                    defaultValue="Edem" 
                    className={editLastName ? "" : "hide-field"}
                    name="lastName"
                    />
                    <span
                    className={editLastName ? "hide-field" : "old"}
                    >Edem</span>
                    <CiEdit className={editLastName ?  "hide-field" : "pen"} 
                    onClick={handleLastName} />
                    <div className={editLastName ? "save" : "hide-field"}>save</div>

                    <div className={editLastName ? "cancel" : "hide-field"}
                    onClick={handleLastName}>cancel</div>
                    {/* { updatingFirstName ? <UpdatingBtn /> : ""} */}
                </div>
                {/* <p>{errors && errors.firstName}</p> */}
            </div>

            <div className="field">
                <label htmlFor="lastName">Email</label>
                <div className='data'>
                    <input type="email" 
                    defaultValue="edem@yahoo.com" 
                    className={editEmail ? "" : "hide-field"}
                    name="email"
                    />
                    <span
                    className={editEmail ? "hide-field" : "old"}
                    >edem@yahoo.com</span>
                    <CiEdit className={editEmail ?  "hide-field" : "pen"} 
                    onClick={handleEmail} />
                    <div className={editEmail ? "save" : "hide-field"}>save</div>

                    <div className={editEmail ? "cancel" : "hide-field"}
                    onClick={handleEmail}>cancel</div>
                    {/* { updatingFirstName ? <UpdatingBtn /> : ""} */}
                </div>
                {/* <p>{errors && errors.firstName}</p> */}
            </div>

            <div className="field">
                <label htmlFor="lastName">Password</label>
                <div className='password-field'>
                    <div className='password-data'>
                        <span
                        className={editPassword ? "hide-field" : "old"}
                        >******</span>
                    
                        <input type="password" 
                            className={editPassword ? "" : "hide-field"}
                        name="password"
                        placeholder='current password'
                        />

                        <input type="password" 
                        className={editPassword ? "" : "hide-field"}
                        name="password"
                        placeholder='new password'
                        />

                        <input type="password" 
                        className={editPassword ? "" : "hide-field"}
                        name="password"
                        placeholder='confirm new password'
                        />
                    </div>   
                    

                    <div className='buttons-wrapper'>                                
                        <div className={editPassword ? "save" : "hide-field"}>save</div>

                        <div className={editPassword ? "cancel" : "hide-field"}
                        onClick={handlePassword}>cancel</div>

                        <CiEdit className={editPassword ?  "hide-field" : "pen"} 
                        onClick={handlePassword} />
                        {/* { updatingFirstName ? <UpdatingBtn /> : ""} */}
                    </div>
                </div>
                {/* <p>{errors && errors.firstName}</p> */}
            </div>

            <div className="field">
                <label htmlFor="adminID">Admin ID</label>
                <div className='data'>
                    <span
                    className="old"
                    >ADS2345</span>
                </div>
            </div>
        </div>
        : ""}

        {view==="addNew" ? 
        <div className="new-admin-wrapper">
            <div className="field">
                <label htmlFor="firstName">First Name</label>
                <div className='data'>
                    <input type="text" 
                    className=""
                    name="firstName"
                    />
                </div>
                {/* <p>{errors && errors.firstName}</p> */}
            </div>

            <div className="field">
                <label htmlFor="lastName">Last Name</label>
                <div className='data'>
                    <input type="text" 
                    className=""
                    name="lastName"
                    />
                </div>
                {/* <p>{errors && errors.firstName}</p> */}
            </div>

            <div className="field">
                <label htmlFor="email">Email</label>
                <div className='data'>
                    <input type="email" 
                    className=""
                    name="email"
                    />
                </div>
                {/* <p>{errors && errors.firstName}</p> */}
            </div>

            <div className="field">
                <label htmlFor="password">Password</label>
                <div className='data'>
                    <input type="password" 
                    className=""
                    name="password"
                    />
                </div>
                {/* <p>{errors && errors.firstName}</p> */}
            </div>

            <div className="field">
                <label htmlFor="adminId">Admin ID</label>
                <div className='data'>
                    <input type="text" 
                    className=""
                    name="adminId"
                    />
                </div>
                {/* <p>{errors && errors.firstName}</p> */}
            </div>

            <button className='add-btn'>Add Admin</button>
        </div>
        : ""}

        { view==="verification" ? 
            <div className="all-admins">
                <div className="top">
                    <span className="tag" onClick={handleMenu}>All Verification Entries</span>

                    <div className="search">
                        <IoSearchOutline className='icon' />

                        <input type="text" placeholder="search by provider's name" />
                    </div>
                </div>

                <div className="action">
                    <div className="head">
                        <div className="text" onClick={handleBulk}>
                            <span>Bulk action</span>
                            <RiArrowDropDownLine className='icon' />
                        </div>

                        { bulk ?
                            <ul className="dropdown">
                                <li>Approve entries</li>
                                <li>Reject entries</li>
                            </ul> : ""
                        }

                    </div>

                    <div className="btns">
                        <button>Apply</button>
                    </div>
                </div>

            
                <div className="records">

                    <VerificationTag /> 

                    {
                        verificationToShow.slice(pagesVisited, pagesVisited + objectPerPage)
                        .map((verification, i)=>{
                            return(
                                <VerificationRecord 
                                key={i}
                                firstName={verification.name.split(" ")[0]}
                                lastName={verification.name.split(" ")[1]}
                                email={verification.phoneNumber}
                                phoneNumber={verification.phoneNumber}
                                // category={verification.category}
                                />
                            )
                        })
                    }

                    <ReactPaginate 
                        previousLabel= {"<"}
                        nextLabel={">"}
                        pageCount={verificationPageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBtns"}
                        previousLinkClassName={"prevBtn"}
                        nextLinkClassName={"nextBtn"}
                        disabledClassName={"disabledBtn"}
                        activeClassName = {"activeBtn"}
                    />
                    
                </div>

                <div className="action action2">
                    <div className="head">
                        <div className="text" onClick={handleBulk2}>
                            <span>Bulk action</span>
                            <RiArrowDropDownLine className='icon' />
                        </div>

                        { bulk2 ?
                            <ul className="dropdown">
                                <li>Delete admin</li>
                                <li>Delete admin</li>
                                <li>Delete admin</li>
                                <li>Delete admin</li>
                            </ul> : ""
                        }

                    </div>

                    <div className="btns">
                        <button>Apply</button>
                    </div>
                </div>
        
            </div> : "" }
      </div>
    </div>
  )
}

export default Dashboard
