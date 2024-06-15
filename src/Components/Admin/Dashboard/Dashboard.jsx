import React, { useContext, useState, useRef, useEffect} from 'react'
import "./Dashboard.css"
import { FiUsers } from "react-icons/fi";
import { MdOutlineVerified } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import PHOTOS from '../../images';
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useNavigate, useNavigation } from 'react-router-dom';
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
import { HandiworkContext } from '../../Context/HandiworkContext';
import { NewAdminCreation } from '../../Success/Success';
import CacDocument from '../CacDocument/CacDocument';



function Dashboard() {

    const {viewAdmin} = useContext(HandiworkContext)
    const {fetchedAdmin} = useContext(HandiworkContext)
    //customized error messages
    const [adminErrors, setAdminErrors] = useState({})

    const [updateSuccess, setUpdateSuccess] = useState(false)
    const [updateFailed, setUpdateFailed] = useState(false)

    const{errors} = useContext(HandiworkContext)
    const{handleAdminChange} = useContext(HandiworkContext)
    const{handleAdminSignUp} = useContext(HandiworkContext)

    const [updatingFirstName, setUpdatingFirstName] = useState(false)
    const [updatingLastName, setUpdatingLastName] = useState(false)
    const [updatingEmail, setUpdatingEmail] = useState(false)
    const [updatingPassword, setUpdatingPassword] = useState(false)
    const [updatingPhone, setUpdatingPhone] = useState(false)
    const [updatingRole, setUpdatingRole] = useState(false)

    //Updated Data
    const [newFirstName, setNewFirstName] = useState("")
    const [newLastName, setNewLastName] = useState("")
   const [newEmail, setNewEmail] = useState("")
   const [newPassword, setNewPassword] = useState("")
   const [newPhone, setNewPhone] = useState("")
   const [newRole, setNewRole] = useState("")

    useEffect(()=>{
        viewAdmin()
    },[])

    //To fetch All providers
  const [AllServiceProviders, setAllServiceProviders] = useState([])

  //To fetch All customers
  const [allCustomers, setAllCustomers] = useState([])

  //To fetch All customers
  const [allAdmins, setAllAdmins] = useState([])
  console.warn("allAdmins:", allAdmins)

  const [loading, setLoading] = useState(true);

  

  //To fetch All Poviders
  const providersUrl = `https://handiworks.cosmossound.com.ng/api/skill-providers/skillproviders`

  useEffect(()=>{
        axios.get(providersUrl)
        .then(res => {
          setLoading(false)
          setAllServiceProviders(res.data.skillProviders)
        })
        .catch(dupError=> console.log("caughtError:", dupError))

  },[])



  //To fetch All customers
  const customersUrl = `https://handiworks.cosmossound.com.ng/api/customers/customers`

  useEffect(()=>{
        axios.get(customersUrl)
        .then(res => {
          setLoading(false)
          setAllCustomers(res.data.customers)
        })
        .catch(dupError=> console.log("caughtError:", dupError))

  },[])



  //To fetch All Admins
  const adminsUrl = `https://handiworks.cosmossound.com.ng/api/auth/users`

  useEffect(()=>{
        axios.get(adminsUrl)
        .then(res => {
          setLoading(false)
          setAllAdmins(res.data.users)
        })
        .catch(dupError=> console.log("caughtError:", dupError))

  })
  

    
    // const {allVerifiedPoviders} = useContext(HandiworkContext)
    const {viewCac} = useContext(HandiworkContext)

     //To toggle edit mode
     const [editFirstName, setEditFirstName] = useState(false);
     const handleFirstName = ()=>{
         setEditFirstName(!editFirstName)
         setAdminErrors({})
     }
 
     const [editLastName, setEditLastName] = useState(false);
     const handleLastName = ()=>{
         setEditLastName(!editLastName)
         setAdminErrors({})
     }
 
     const [editPhone, setEditPhone] = useState(false);
     const handlePhone = ()=>{
        setEditPhone(!editPhone)
         setAdminErrors({})
     }

     const [editEmail, setEditEmail] = useState(false);
     const handleEmail = ()=>{
         setEditEmail(!editEmail)
         setAdminErrors({})
     }
 
     const [editPassword, setEditPassword] = useState(false);
     const handlePassword = ()=>{
        setEditPassword(!editPassword)
         setAdminErrors({})
     }

     const [editRole, setEditRole] = useState(false);
     const handleRole = ()=>{
        setEditRole(!editRole)
         setAdminErrors({})
     }

     //To update admin profile
     const adminUpdateUrl = `https://handiworks.cosmossound.com.ng/api/auth/updateUserByField/${fetchedAdmin && fetchedAdmin.id}`

     async function chageFirstName(e){
        e.preventDefault()
    
        const validationErrors = {}
    
        if(!newFirstName.trim()){
            validationErrors.firstName = "first name is required"
        }
    
        setAdminErrors(validationErrors)
        console.warn("validationErrors:", validationErrors)
    
        const noError = Object.keys(validationErrors).length === 0;
    
        if(noError){
            try {
                handleFirstName()
                setUpdatingFirstName(true)
        
                const formData = new FormData();
                formData.append("firstName", newFirstName);
        
                 const response = await axios.patch(adminUpdateUrl, formData, {
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
        
                  if(dupError.message.includes("Error")){
                    setUpdateFailed(true)
                  }
          
              }
            
              finally{
                setUpdatingFirstName(false)
              }
        }
        
    }

    async function chageLastName(e){
        e.preventDefault()
    
        const validationErrors = {}
    
        if(!newLastName.trim()){
            validationErrors.lastName = "last name is required"
        }
    
        setAdminErrors(validationErrors)
        console.warn("validationErrors:", validationErrors)
    
        const noError = Object.keys(validationErrors).length === 0;
    
        if(noError){
            try {
                handleLastName()
                setUpdatingLastName(true)
        
                const formData = new FormData();
                formData.append("lastName", newLastName);
        
                 const response = await axios.patch(adminUpdateUrl, formData, {
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
                setUpdatingLastName(false)
              }
        }
        
    }

    async function chageEmail(e){
        e.preventDefault()
    
        const validationErrors = {}
    
        if(!newEmail.trim()){
            validationErrors.email = "email is required"
        }
    
        setAdminErrors(validationErrors)
        console.warn("validationErrors:", validationErrors)
    
        const noError = Object.keys(validationErrors).length === 0;
    
        if(noError){
            try {
                handleEmail()
                setUpdatingEmail(true)
        
                const formData = new FormData();
                formData.append("email", newEmail);
        
                 const response = await axios.patch(adminUpdateUrl, formData, {
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
    
        setAdminErrors(validationErrors)
        console.warn("validationErrors:", validationErrors)
    
        const noError = Object.keys(validationErrors).length === 0;
    
        if(noError){
            try {
                handlePhone()
                setUpdatingPhone(true)
        
                const formData = new FormData();
                formData.append("phone", newPhone);
        
                 const response = await axios.patch(adminUpdateUrl, formData, {
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

    async function changeRole(e){
        e.preventDefault()
    
        const validationErrors = {}
    
        if(!newRole.trim()){
            validationErrors.role = "please select a role"
        }
    
        setAdminErrors(validationErrors)
        console.warn("validationErrors:", validationErrors)
    
        const noError = Object.keys(validationErrors).length === 0;
    
        if(noError){
            try {
                handleRole()
                setUpdatingRole(true)
        
                const formData = new FormData();
                formData.append("role", newRole);
        
                 const response = await axios.patch(adminUpdateUrl, formData, {
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
                setUpdatingRole(false)
              }
        }
        
    }


    //Ref for sde bar
    const dashRef = useRef()

    const [menu, setMenu] = useState(false)

    const handleMenu =()=>{
        setMenu(!menu)
    }


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

    navigation = useNavigate()
    const roleSwitch = () =>{
        navigation("/")
        // window.location.reload(false)
      }


    //To fetch providers verification details
const [allVerifiedPoviders, setAllVerifiedPoviders] = useState([])
console.warn('allVerifiedPoviders:', allVerifiedPoviders)


useEffect(()=>{
    async function fetchAllVerifiedPoviders(){

        const url = `https://handiworks.cosmossound.com.ng/api/verify-providers/skillProviders-verificationDetails`
      
        try {
            
           const response = await axios.get(url)
      
           setAllVerifiedPoviders(response.data.data)
      
        }catch (dupError) {
            console.log("caughtError:", dupError.message)
      
        }
      
        
    }

      fetchAllVerifiedPoviders()
})


    //pagination for admin info display
    const [pageNumber, setPageNumber] = useState(0);
    const objectPerPage =10;
    const pagesVisited = pageNumber * objectPerPage;

    const [adminsToShow, setAdminsToShow] = useState(AdminData)
    const [providersToShow, setProvidersToShow] = useState(AllServiceProvidersData)
    const [customersToShow, setCustomersToShow] = useState(AllServiceProvidersData)
    // const [verificationToShow, setVerificationToShow] = useState(allVerifiedPoviders)
    // const verificationToShow = allVerifiedPoviders ? allVerifiedPoviders : "";
    // const verificationPages = allVerifiedPoviders ? allVerifiedPoviders.length / objectPerPage : "";

    const adminsPageCount = Math.ceil(adminsToShow.length / objectPerPage);
    const providersPageCount = Math.ceil(providersToShow.length / objectPerPage);
    const customersPageCount = Math.ceil(customersToShow.length / objectPerPage);
    // verificationPageCountData = verificationToShow ? verificationToShow : "";
    const verificationPageCount = Math.ceil(allVerifiedPoviders && allVerifiedPoviders.length / objectPerPage);
    // const verificationPageCount = Math.ceil(verificationPages);

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    //To handle admin Logout
    const navigate = useNavigate()
    const logoutAdmin = () =>{
        localStorage.clear()
        // localStorage.removeItem("loggedinProvider")
        navigate("/admin/login")
        window.location.reload(false)
      }
    


  return (
    <div className='admin-dashboard'>

    
      <div className={menu ? "mobile-side-bar" : "collapse"}>

       {menu ? <IoClose className='close' onClick={handleMenu} /> : ""}

        <img src={PHOTOS.LOGO} alt="" className='dashboardLogo' />

        <div className="head">
            <span className='acron'>
                {fetchedAdmin ? fetchedAdmin.firstName
                .toUpperCase()
                .charAt(0) + fetchedAdmin.lastName
                .toUpperCase().charAt(0) : ""}
            </span>
            
            <span className='fname'>
                {fetchedAdmin ? fetchedAdmin.firstName.charAt(0).toUpperCase() + 
                fetchedAdmin.firstName.slice(1)+" "+
                fetchedAdmin.lastName.charAt(0).toUpperCase() + 
                fetchedAdmin.lastName.slice(1) : ""}
            </span>
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

        <button className='mobileAdminLogout' onClick={logoutAdmin}>Logout</button>
      </div>

      
      <div className="side-bar">

        <img src={PHOTOS.LOGO} alt="" className='dashboardLogo' />

        <div className="head">
            <span className='acron'>
            {fetchedAdmin ? fetchedAdmin.firstName
                .toUpperCase()
                .charAt(0) + fetchedAdmin.lastName
                .toUpperCase().charAt(0) : ""}
            </span>
            <span className='fname'>
                {fetchedAdmin ? fetchedAdmin.firstName.charAt(0).toUpperCase() + 
                    fetchedAdmin.firstName.slice(1)+" "+
                    fetchedAdmin.lastName.charAt(0).toUpperCase() + 
                    fetchedAdmin.lastName.slice(1) : ""}
            </span>
        </div>

        <div className={ view==="me" ? "me all-bg" : "me"} onClick={handleMe}>
            <CiUser className='icon' />
            <span>Profile</span>
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

        {
            fetchedAdmin && fetchedAdmin.role.toLowerCase()==="superadmin" ?        
        <div className={admins ? "admins admins-bg" : "admins"} onClick={handleAdmins}>
            <RiAdminLine className='icon' />
            <span>Admins</span>
        </div> : ""}


        
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

        <button className='adminLogout' onClick={logoutAdmin}>Logout</button>
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
                    allAdmins.slice(pagesVisited, pagesVisited + objectPerPage)
                    .map((admin, i)=>{
                        return(
                            <AdminRecord 
                            key={i}
                            id={admin.id}
                            firstName={admin.firstName}
                            lastName={admin.lastName}
                            email={admin.email}
                            adminId={admin.adminId}
                            role={admin.role}
                            status={admin.status}
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
                    AllServiceProviders.slice(pagesVisited, pagesVisited + objectPerPage)
                    .map((provider, i)=>{
                        return(
                            <SkillProvidersRecord 
                            key={i}
                            firstName={provider.firstName}
                            lastName={provider.lastName}
                            email={provider.email}
                            serviceType={provider.serviceType}
                            id={provider.id}
                            isVerified={provider.isVerified==="accept" ? "Verified" : "Unverified"}
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
                    allCustomers && allCustomers.slice(pagesVisited, pagesVisited + objectPerPage)
                    .map((customer, i)=>{
                        return(
                            <CustomersRecord 
                            key={i}
                            firstName={customer.firstName}
                            lastName={customer.lastName}
                            phone={customer.phone}
                            email={customer.email}
                            address={customer.address}
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
      
          <p className="hello">Hello {fetchedAdmin ? 
          fetchedAdmin.firstName.charAt(0).toUpperCase() + fetchedAdmin.firstName.slice(1) : ""},</p>

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
                    defaultValue={fetchedAdmin ? 
                        fetchedAdmin.firstName.charAt(0).toUpperCase() + 
                        fetchedAdmin.firstName.slice(1) : ""} 
                    className={editFirstName ? "" : "hide-field"}
                    name="firstName"
                    onChange={(e) => setNewFirstName(e.target.value)}
                    />
                    
                    <span
                    className={editFirstName ? "hide-field" : "old"}
                    >{fetchedAdmin ? 
                        fetchedAdmin.firstName.charAt(0).toUpperCase() + 
                        fetchedAdmin.firstName.slice(1) : ""}
                        </span>
                    <CiEdit className={editFirstName ?  "hide-field" : "pen"} 
                    onClick={handleFirstName} />
                    <div 
                    className={editFirstName ? "save" : "hide-field"}
                    onClick={chageFirstName}
                    >save</div>

                    <div className={editFirstName ? "cancel" : "hide-field"}
                    onClick={handleFirstName}>cancel</div>
                    { updatingFirstName ? <UpdatingBtn /> : ""}
                </div>
                <p>{adminErrors && adminErrors.firstName}</p>
            </div>

            <div className="field">
                <label htmlFor="lastName">Last Name</label>
                <div className='data'>
                    <input type="text" 
                    defaultValue={fetchedAdmin ? 
                        fetchedAdmin.lastName.charAt(0).toUpperCase() + 
                        fetchedAdmin.lastName.slice(1) : ""} 
                    className={editLastName ? "" : "hide-field"}
                    name="lastName"
                    onChange={(e) => setNewLastName(e.target.value)}
                    />
                    <span
                    className={editLastName ? "hide-field" : "old"}
                    >
                        {fetchedAdmin ? 
                        fetchedAdmin.lastName.charAt(0).toUpperCase() + 
                        fetchedAdmin.lastName.slice(1) : ""}
                    </span>
                    <CiEdit className={editLastName ?  "hide-field" : "pen"} 
                    onClick={handleLastName} />
                    <div className={editLastName ? "save" : "hide-field"}
                    onClick={chageLastName}
                    >save</div>

                    <div className={editLastName ? "cancel" : "hide-field"}
                    onClick={handleLastName}>cancel</div>
                    { updatingLastName ? <UpdatingBtn /> : ""}
                </div>
                <p>{adminErrors && adminErrors.lastName}</p>
            </div>

            <div className="field">
                <label htmlFor="lastName">Email</label>
                <div className='data'>
                    <input type="email" 
                    defaultValue={fetchedAdmin ? 
                        fetchedAdmin.email : ""} 
                    className={editEmail ? "" : "hide-field"}
                    name="email"
                    onChange={(e) => setNewEmail(e.target.value)}
                    />
                    
                    <span
                    className={editEmail ? "hide-field" : "old"}
                    >{fetchedAdmin ? 
                        fetchedAdmin.email : ""}
                    </span>
                    
                    <CiEdit className={editEmail ?  "hide-field" : "pen"} 
                    onClick={handleEmail} />
                    
                    <div className={editEmail ? "save" : "hide-field"}
                    onClick={chageEmail}
                    >save</div>

                    <div className={editEmail ? "cancel" : "hide-field"}
                    onClick={handleEmail}>cancel</div>
                    { updatingEmail ? <UpdatingBtn /> : ""}
                </div>
                <p>{adminErrors && adminErrors.email}</p>
            </div>

            <div className="field">
                <label htmlFor="phone">Phone</label>
                <div className='data'>
                    <input type="phone" 
                    defaultValue={fetchedAdmin ? 
                        fetchedAdmin.phone : ""}
                    className={editPhone ? "" : "hide-field"}
                    name="phone"
                    onChange={(e) => setNewPhone(e.target.value)}
                    />
                    
                    <span
                    className={editPhone ? "hide-field" : "old"}
                    >
                        {fetchedAdmin ? 
                        fetchedAdmin.phone : ""}
                    </span>
                    <CiEdit className={editPhone ?  "hide-field" : "pen"} 
                    onClick={handlePhone} />
                    <div className={editPhone ? "save" : "hide-field"}
                    onClick={changePhone}
                    >save</div>

                    <div className={editPhone ? "cancel" : "hide-field"}
                    onClick={handlePhone}>cancel</div>
                    { updatingPhone ? <UpdatingBtn /> : ""}
                </div>
                <p>{adminErrors && adminErrors.phone}</p>
            </div>

            <div className="field">
                <label htmlFor="role">Role</label>
                <div className='data'>
                    <select name="role" id=""
                    className={editRole ? "" : "hide-field"}
                    onChange={(e) => setNewRole(e.target.value)}
                    >
                        <option value="admin">Admin</option>
                        <option value="staff">Staff</option>
                        <option value="fieldStaff">Field Staff</option>
                        <option value="superAdmin">Super Admin</option>
                    </select>
                    <span
                    className={editRole ? "hide-field" : "old"}
                    >
                        {fetchedAdmin ? 
                        fetchedAdmin.role : ""}
                    </span>
                    
                    <CiEdit className={editRole ?  "hide-field" : "pen"} 
                    onClick={handleRole} />
                    <div className={editRole ? "save" : "hide-field"}
                    onClick={changeRole}
                    >save</div>

                    <div className={editRole ? "cancel" : "hide-field"}
                    onClick={handleRole}>cancel</div>
                    { updatingRole ? <UpdatingBtn /> : ""}
                </div>
                <p>{adminErrors && adminErrors.role}</p>
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
                        { updatingPassword ? <UpdatingBtn /> : ""}
                    </div>
                </div>
                <p>{adminErrors && adminErrors.password}</p>
            </div>

            <div className="field">
                <label htmlFor="adminID">Admin ID</label>
                <div className='data'>
                    <span
                    className="old"
                    >
                        {fetchedAdmin ? 
                        fetchedAdmin.adminId : ""}
                    </span>
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
                    onChange={handleAdminChange}
                    />
                </div>
                <p>{errors && errors.firstName}</p>
            </div>

            <div className="field">
                <label htmlFor="lastName">Last Name</label>
                <div className='data'>
                    <input type="text" 
                    className=""
                    name="lastName"
                    onChange={handleAdminChange}
                    />
                </div>
                <p>{errors && errors.lastName}</p>
            </div>

            <div className="field">
                <label htmlFor="email">Email</label>
                <div className='data'>
                    <input type="email" 
                    className=""
                    name="email"
                    onChange={handleAdminChange}
                    />
                </div>
                <p>{errors && errors.email}</p>
            </div>

            <div className="field">
                <label htmlFor="phone">Phone Number</label>
                <div className='data'>
                    <input type="number" 
                    className=""
                    name="phone"
                    onChange={handleAdminChange}
                    />
                </div>
                <p>{errors && errors.phone}</p>
            </div>

            <div className="field">
                <label htmlFor="password">Password</label>
                <div className='data'>
                    <input type="password" 
                    className=""
                    name="password"
                    onChange={handleAdminChange}
                    />
                </div>
                <p>{errors && errors.password}</p>
            </div>

            <div className="field">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className='data'>
                    <input type="password" 
                    className=""
                    name="confirmPassword"
                    onChange={handleAdminChange}
                    />
                </div>
                <p>{errors && errors.confirmPassword}</p>
            </div>

            <div className="field">
                <label htmlFor="adminId">Admin ID</label>
                <div className='data'>
                    <input type="text" 
                    className=""
                    name="adminId"
                    onChange={handleAdminChange}
                    />
                </div>
                <p>{errors && errors.adminId}</p>
            </div>

            <div className="field">
                <label htmlFor="role">Role</label>
                <div className='data'>
                    <select name="role" id="" onChange={handleAdminChange}>
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                    <option value="fieldStaff">Field Staff</option>
                    <option value="superAdmin">Super Admin</option>
                    </select>
                </div>
                <p>{errors && errors.role}</p>
            </div>

            <button className='add-btn' onClick={handleAdminSignUp}>Add Admin</button>
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
                    
                    {allVerifiedPoviders.length===0 ? <p>No verification entry</p> : ""}

                    {
                        allVerifiedPoviders && allVerifiedPoviders.slice(pagesVisited, pagesVisited + objectPerPage)
                        .map((provider, i)=>{
                            return(
                                <VerificationRecord 
                                key={i}
                                provider={provider}
                                firstName={provider.firstName.charAt(0).toUpperCase() + provider.firstName.slice(1)}
                                lastName={provider.lastName.charAt(0).toUpperCase() + provider.lastName.slice(1)}
                                providerId={provider.providerId}
                                isVerified={provider.isVerified}
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
                            </ul> : ""
                        }

                    </div>

                    <div className="btns">
                        <button>Apply</button>
                    </div>
                </div>
        
            </div> : "" }

            {  viewCac ?
                <CacDocument />
                : ""
            }
      </div>

      { updateSuccess ? <UpdateSuccess /> : "" }
      
      { updateFailed ? <UpdateFailed /> : "" }
    </div>
  )
}

export default Dashboard
