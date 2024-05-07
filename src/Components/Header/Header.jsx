import React, { useRef, useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HandiworkContext } from "../Context/HandiworkContext";
import PHOTOS from "../images/index";
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import '../DropDown/DropDown.css';
import { IoMdClose } from "react-icons/io";
import { Signup, Login, VerificationForm } from "../LoginSignup/LoginSignup";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import DropDown from "../DropDown/DropDown";
import { IoMdArrowDropdown } from "react-icons/io";





function Header(){

    //Logout button for both service providers and customers
    // const {logout} = useContext(HandiworkContext)

    //To get loggedinProvider from the local storage
    const {loggedinProvider} = useContext(HandiworkContext)
    const {fetchedProvider} = useContext(HandiworkContext)

    //To get loggedinCustomer from the local storage
    const {loggedinCustomer} = useContext(HandiworkContext)

    //To get loggedinUsers ID
    // const {loggedinUser} = useContext(HandiworkContext)
    // const {providerId} = useContext(HandiworkContext)
    // const {customerId} = useContext(HandiworkContext)
    // let providerId = loggedinUser ? loggedinUser.user.providerId : "";
    // let customerId = loggedinUser ? loggedinUser.user.customerId : "";

    // console.warn("providerId:", providerId)
    // console.warn("customerId:", customerId)

    //To get loggedin customer from the local storage
    const {customerName} = useContext(HandiworkContext)

    //Mobile Navbar
    const {click} = useContext(HandiworkContext)
    const {handleClick} = useContext(HandiworkContext)


    // To toggle Signup

    const {toggleSignup} = useContext(HandiworkContext)
    const {signup} = useContext(HandiworkContext)


    // To toggle verification form
    const {verify} = useContext(HandiworkContext)
    // const {toggleVerify} = useContext(HandiworkContext)



    //Click outside to close provider drop down
    const providerRef = useRef()
    const [providerDropDown, setProviderDropDown] = useState(false)

    const handleProviderDropDown =()=>{
      setProviderDropDown(!providerDropDown)
    }

    useEffect(() =>{
      let handler = (event) =>{
        if(!providerRef.current?.contains(event.target)){
          setProviderDropDown(false)
        }
      }
  
      document.addEventListener("mousedown", handler);
  
      return ()=>{
        document.removeEventListener("mousedown", handler);
      }
  
    })

    //To handle Provider Logout

    const navigate = useNavigate()
    const logoutProvider = () =>{
        localStorage.clear()
        handleProviderDropDown()
        navigate("/")
        window.location.reload(false)
      }



    //To toggle customer drop down
    const [customerDropDown, setCustomerDropDown] = useState(false);

    const handleCustomerDropDown =()=>{
        setCustomerDropDown(!customerDropDown)
    }

    //To handle Logout customer
    const logoutCustomer = () =>{
        localStorage.clear()
        handleCustomerDropDown()
        navigate("/")
        window.location.reload(false)
      }


    //Click outside to close customer drop down

    let customerRef = useRef()

    useEffect(() =>{
      let handler = (event) =>{
        if(!customerRef.current?.contains(event.target)){
            setCustomerDropDown(false)
        }
      }
  
      document.addEventListener("mousedown", handler);
  
      return ()=>{
        document.removeEventListener("mousedown", handler);
      }
  
    })

    // const [signup , setSignup] = useState(false);
    //     const toggleSignup = () => {
    //     setSignup(!signup);
    //     handleClick()
    // };

    


      //To toggle Login

    const {toggleLogin} = useContext(HandiworkContext)
    const {login} = useContext(HandiworkContext)

    //     const [login, setLogin] = useState(false);
    //     const toggleLogin = () => {
    //         setLogin(!login);
    //         handleClick()
    // };


    //SearchBar

    const {toggleSearch} = useContext(HandiworkContext)
    const {search} = useContext(HandiworkContext)

    // const [search, setSearch] = useState(false);
    // const toggleSearch = () => {
    //     setSearch(!search);
    // };

    // if(search) {
    //     document.body.classList.add('active-modal3')
    //     } else {
    //     document.body.classList.remove('active-modal3')
    //     }


    //DropDown navigation menu
    const {dropDown} = useContext(HandiworkContext)
    const {handleDropDown} = useContext(HandiworkContext)
    const {stopDropDown} = useContext(HandiworkContext)

    //Drop down user profile menu
    const {userDropDown} = useContext(HandiworkContext)
    const {handleUserDropDown} = useContext(HandiworkContext)

    
    //To pass parameters to the user drop down component
    const {AllServiceProvidersData} = useContext(HandiworkContext);
    // const {providerId} = useParams();
    // const provider = AllServiceProvidersData.find((e)=> e.id===Number(providerId));



    //To hide NavBar on scroll down

    //vertical scroll distance being used as the scroll data
    const yAndLastY = {
                        y: 0,
                        lastY: 0
                    }

    const [scrollData, setScrollData] = useState(yAndLastY);
    const [hideNav, setHideNav] = useState(false);


    //UseEffect to update scrollData
    useEffect(() => {

        const handleScroll = () => {
            setScrollData(lastState => {
                return {
                    y: window.scrollY,
                    lastY: lastState.y
                }
            })
        }

        window.addEventListener("scroll", handleScroll);


        return () => {
            window.removeEventListener("scroll", handleScroll);
        };



    }, []);

    
    useEffect(() => {

        if (scrollData.lastY === scrollData.y) { // this fixes the trembling
            return;
        }

        if (scrollData.y > 150 && scrollData.y - scrollData.lastY > 0) { // scrollData.y - scrollData last > 0  this means we are scrolling UP
            setHideNav(true);
        } else {
            setHideNav(false);
        }


    }, [scrollData])

    


        return(
            
            <div className={hideNav ? 'header-bg hide-field' : 'header-bg'}>
                <div className="logo">
                    <Link to="/" className="logo-anchor"><img src={ PHOTOS.LOGO_B } alt="logo" /></Link>

                    
                    {/* { loggedinCustomerName ? 
                    <div className="customer" ref={customerRef}>
                        <div className="head" onClick={handleCustomerDropDown}>
                            <p>{customerName}</p>
                            <IoMdArrowDropdown className="customer-arrow" />
                        </div>

                        {
                            customerDropDown ?
                            <div className="logout-wrapper">
                                <button onClick={logoutCustomer}>Sign out</button>
                            </div> : ""
                        }
                    </div> : "" } */}
                    
                    {
                        loggedinCustomer ? 
                        <div className="customer" ref={customerRef}>
                            <div className="head" onClick={handleCustomerDropDown}>
                                <p>{ loggedinCustomer ? loggedinCustomer.user.firstName.charAt(0).toUpperCase() + loggedinCustomer.user.firstName.slice(1) : ""}</p>
                                <IoMdArrowDropdown className="customer-arrow" />
                            </div>
    
                            {
                                customerDropDown ?
                                <div className="logout-wrapper">
                                    <button onClick={logoutCustomer}>Logout</button>
                                </div> : ""
                            }
                        </div> : ""
                    }
                
                

                    { fetchedProvider ?
                    <div ref={providerRef} className="loggedin-provider">

                        <div className={verify ? "hide-field" : "provider-head"} onClick={handleProviderDropDown}>
                            <h6 className={fetchedProvider && fetchedProvider.skillProvider.imagePath !== null ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.firstName
                            .toUpperCase()
                            .charAt(0) + fetchedProvider.skillProvider.lastName
                            .toUpperCase().charAt(0) : ""}</h6>
                            {/* <h6>{ loggedinProvider ? loggedinProvider.user.userName.split(' ')[0] : ""}</h6> */}
                            {/* <h6>{ loggedinProvider ? loggedinProvider.user.firstName : ""}</h6> */}
                            <img 
                            src={`https://handiworks.cosmossound.com.ng/${fetchedProvider ? fetchedProvider.skillProvider.imagePath : ""}`} 
                            alt="" 
                            className={fetchedProvider && fetchedProvider.skillProvider.imagePath !== null ? "" : "hide-field"}
                            />
                        </div>

                        {
                            providerDropDown ? 
                        <div className='provider-drop-down'>
                            <div className="category-photo">
                                {/* <img src={PHOTOS.hospitality} alt="cover" className="cat" /> */}
                                <h6 className={fetchedProvider && fetchedProvider.skillProvider.imagePath !== null ? "hide-field" : ""}>{fetchedProvider ? fetchedProvider.skillProvider.firstName
                                .toUpperCase()
                                .charAt(0) + fetchedProvider.skillProvider.lastName
                                .toUpperCase().charAt(0) : ""}</h6>
                                <img 
                                src={`https://handiworks.cosmossound.com.ng/${fetchedProvider ? fetchedProvider.skillProvider.imagePath : ""}`}
                                alt="dp"
                                className={fetchedProvider && fetchedProvider.skillProvider.imagePath !== null ? "dp" : "hide-field"}
                                />
                            </div>

                            <div className="basic">
                                <h5>{loggedinProvider ? loggedinProvider.user.firstName
                                    .charAt(0).toUpperCase() + loggedinProvider.user.firstName
                                    .slice(1) : ""} {loggedinProvider ? loggedinProvider.user.lastName
                                    .charAt(0).toUpperCase() + loggedinProvider.user.lastName.slice(1) : ""}
                                </h5>
                                <p>{loggedinProvider ? loggedinProvider.user.email : ""}</p>
                            </div>

                            <hr />

                            {/* <Link to={`/market-place/profile/${providerId}`} onClick={handleUserDropDown} key={props.id}>Handiwork profile</Link> */}

                            <Link to={`/market-place/profile/${loggedinProvider ? loggedinProvider.user.id : ""}`} 
                            onClick={handleProviderDropDown}
                            className="profile-anchor"
                            >Handiwork profile</Link>


                            <hr />

                            <button onClick={logoutProvider}>Logout</button>

                            {/* <Link to={`/market-place/profile/${providerId}`} className='category-page-btn' key={props.id}>Edit my page</Link> */}
                        </div> : ""}

                    </div>
                        : "" }

                    {/* {
                        loggedinProvider ? <DefaultUser /> : ""
                    } */}


                    <div className="nav-icons" onClick={handleClick}>
                        {click ? <IoClose className="myBtn" /> : <FiMenu className="myBtn" />}
                    </div>
                </div>

                {/* desktopNav navigation */}

                <nav className= 'desktopNavNew desktopNav'>
                    <ul className="myNav">
                        <li><NavLink to="/" onClick={handleClick}>Home</NavLink></li>
                        <li><NavLink to="/market-place" 
                        onClick={handleClick}
                        onMouseEnter={handleDropDown}
                        onMouseLeave={stopDropDown}
                        >Market Place</NavLink></li>
                        <li><NavLink to="/about" onClick={handleClick}>About Us</NavLink></li>
                        <li><NavLink to="/admin/dashboard" onClick={handleClick}>Dashboard</NavLink></li>
                    </ul>

                    {
                        localStorage.getItem("loggedinProvider") !== null || localStorage.getItem("loggedinCustomer") !== null ?
                        "" :
                        <div className="engage">
                            <button onClick={toggleLogin} className={login ? "red" : ""}>Login</button>
                            <button onClick={toggleSignup} className={signup ? "red" : ""}>Sign Up</button>
                        </div>
                    }
                        {/* <div className="engage">
                            <button onClick={toggleLogin} className={login ? "red" : ""}>Login</button>
                            <button onClick={toggleSignup} className={signup ? "red" : ""}>Sign Up</button>
                        </div> */}
                </nav>

                {/*Sign Up form */}

                { signup ? <Signup /> : ""}


                {/*Login form */}
                
                { login ? <Login /> : ""}

                {/*verification form */}

                { verify ? <VerificationForm /> : "" }
                

                {/* mobile-navigation */}

                <nav className={click ? "mobile-navbar" : "hide-field"}>

                    <div className="nav-logo">
                        <Link to="/" onClick={handleClick}><img src={ PHOTOS.LOGO_B } alt="logo" /></Link>
                    </div>

                    <ul className="myNav">
                        <li><NavLink to="/" onClick={handleClick}>Home</NavLink></li>
                        <li><NavLink to="/market-place" onClick={handleClick}>Market Place</NavLink></li>
                        <li><NavLink to="/about" onClick={handleClick}>About Us</NavLink></li>
                        <li><NavLink to="/admin/dashboard" onClick={handleClick}>Dashboard</NavLink></li>
                    </ul>

                    {
                        localStorage.getItem("loggedinProvider") !== null || localStorage.getItem("loggedinCustomer") !== null ?
                        "" :
                        <div className="engage">
                            <button onClick={toggleLogin} className={login ? "red" : ""}>Login</button>
                            <button onClick={toggleSignup} className={signup ? "red" : ""}>Sign Up</button>
                        </div>
                    }
                </nav>

                    
                {/* <IoIosSearch onClick={toggleSearch} className="search-wt" /> */}
                

                {/*Search Bar*/}

                {/* { search ?
                <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content">
                        <IoMdClose onClick={toggleSearch} className="close-modal" />

                        <SearchBar className="drop-down-search" />
                    </div>
                </div> : ""} */}

                {/*Dropdown Menu*/}

                {/* {
                    userDropDown ? <ProviderDropDown /> : ""
                } */}

                {/* <div className="user">
                    <img src={PHOTOS.auto} alt="round" onClick={handleUserDropDown} />
                </div> */}

                { dropDown ?
                    <DropDown />
                    : "" }
            </div>
        )
};


export default Header;