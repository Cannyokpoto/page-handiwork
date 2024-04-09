import React, { useRef, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { HandiworkContext } from "../Context/HandiworkContext";
import PHOTOS from "../images/index";
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import '../DropDown/DropDown.css';
import { IoMdClose } from "react-icons/io";
import { Signup, Login } from "../LoginSignup/LoginSignup";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import DropDown from "../DropDown/DropDown";
import { IoMdArrowDropdown } from "react-icons/io";





function Header(){

    //Logout button for both service providers and customers
    const {logout} = useContext(HandiworkContext)

    //To get loggedinProvider from the local storage
    const {loggedinProvider} = useContext(HandiworkContext)
    

    //To get loggedin customer from the local storage
    const {loggedinCustomer} = useContext(HandiworkContext)

    //Mobile Navbar
    const {click} = useContext(HandiworkContext)
    const {handleClick} = useContext(HandiworkContext)


    // To toggle Signup

    const {toggleSignup} = useContext(HandiworkContext)
    const {signup} = useContext(HandiworkContext)



    //Click outside to close provider drop down
    const providerRef = useRef()
    const [providerDropDown, setProviderDropDown] = useState(false)

    const handleProviderDropDown =()=>{
      setProviderDropDown(!providerDropDown)
    }

    useEffect(() =>{
      let handler = (event) =>{
        if(!providerRef.current.contains(event.target)){
          setProviderDropDown(false)
        }
      }
  
      document.addEventListener("mousedown", handler);
  
      return ()=>{
        document.removeEventListener("mousedown", handler);
      }
  
    })

    //To toggle customer drop down
    const [customerDropDown, setCustomerDropDown] = useState(false);

    const handleCustomerDropDown =()=>{
        setCustomerDropDown(!customerDropDown)
    }

    //Click outside to close customer drop down

    let customerRef = useRef()

    useEffect(() =>{
      let handler = (event) =>{
        if(!customerRef.current.contains(event.target)){
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
    const {providerId} = useParams();
    const provider = AllServiceProvidersData.find((e)=> e.id===Number(providerId));



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
                    <Link to="/"><img src={ PHOTOS.LOGO } alt="logo" /></Link>

                    
                    {
                        loggedinCustomer ?
                    <div className="customer" ref={customerRef}>
                        <div className="head" onClick={handleCustomerDropDown}>
                            <p>Canny</p>
                            <IoMdArrowDropdown className="customer-arrow" />
                        </div>

                        {
                            customerDropDown ?
                            <div className="logout-wrapper">
                                <button onClick={logout}>Sign out</button>
                            </div> : ""
                        }
                    </div> : "" }

                    { loggedinProvider ?
                    <div ref={providerRef} className="loggedin-provider">

                        <div className="provider-head" onClick={handleProviderDropDown}>
                            <h6>{loggedinProvider ? loggedinProvider.skillProvider.firstName.toUpperCase().charAt(0) + loggedinProvider.skillProvider.lastName.toUpperCase().charAt(0) : ""}</h6>
                            {/* <img src={PHOTOS.auto} alt="" /> */}
                        </div>

                        {
                            providerDropDown ? 
                        <div className='provider-drop-down'>
                            <div className="category-photo">
                                <img src={PHOTOS.hospitality} alt="cover" className="cat" />
                                <img src={PHOTOS.auto} alt="photo" className="dp" />
                            </div>

                            <div className="basic">
                                <h5>{loggedinProvider ? loggedinProvider.skillProvider.firstName
                                    .charAt(0).toUpperCase() + loggedinProvider.skillProvider.firstName
                                    .slice(1) : ""} {loggedinProvider ? loggedinProvider.skillProvider.lastName
                                    .charAt(0).toUpperCase() + loggedinProvider.skillProvider.lastName.slice(1) : ""}
                                </h5>
                                <p>{loggedinProvider ? loggedinProvider.skillProvider.email : ""}</p>
                            </div>

                            <hr />

                            {/* <Link to={`/market-place/profile/${providerId}`} onClick={handleUserDropDown} key={props.id}>Handiwork profile</Link> */}

                            <Link to={`/market-place/profile/${loggedinProvider ? loggedinProvider.skillProvider.id : ""}`} onClick={handleProviderDropDown}>Handiwork profile</Link>


                            <hr />

                            <button onClick={logout}>Sign out</button>

                            {/* <Link to={`/market-place/profile/${providerId}`} className='category-page-btn' key={props.id}>Edit my page</Link> */}
                        </div> : ""}

                    </div>
                        : ""}

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
                    </ul>

                    {
                        loggedinProvider || loggedinCustomer ? "" :
                        <div className="engage">
                            <button onClick={toggleLogin} className={login ? "red" : ""}>Login</button>
                            <button onClick={toggleSignup} className={signup ? "red" : ""}>Sign Up</button>
                        </div>
                    }
                </nav>

                {/*Sign Up form */}

                { signup ? <Signup /> : ""}


                {/*Login form */}
                
                { login ? <Login /> : ""}
                

                {/* mobile-navigation */}

                <nav className={click ? "mobile-navbar" : "hide-field"}>

                    <div className="nav-logo">
                        <Link to="/" onClick={handleClick}><img src={ PHOTOS.LOGO } alt="logo" /></Link>
                    </div>

                    <ul className="myNav">
                        <li><NavLink to="/" onClick={handleClick}>Home</NavLink></li>
                        <li><NavLink to="/market-place" onClick={handleClick}>Market Place</NavLink></li>
                        <li><NavLink to="/about" onClick={handleClick}>About Us</NavLink></li>
                    </ul>

                    {
                        loggedinProvider || loggedinCustomer ? "" :
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