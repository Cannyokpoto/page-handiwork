import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { HandiworkContext } from "../Context/HandiworkContext";
import PHOTOS from "../images/index";
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import '../DropDown/DropDown.css';
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Signup, Login } from "../LoginSignup/LoginSignup";
import SearchBar from "../SearchBar/SearchBar";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import DropDown from "../DropDown/DropDown";
import ProviderDropDown from "../ProviderDropDown/ProviderDropDown";



function Header(){

    //Mobile Navbar
    const {click} = useContext(HandiworkContext)
    const {handleClick} = useContext(HandiworkContext)


    // To toggle Signup

    const {toggleSignup} = useContext(HandiworkContext)
    const {signup} = useContext(HandiworkContext)

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

                    <div className="engage">
                        <button onClick={toggleLogin} className={login ? "red" : ""}>Login</button>
                        <button onClick={toggleSignup} className={signup ? "red" : ""}>Sign Up</button>
                    </div>
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

                    <div className="engage">
                        <button onClick={toggleLogin} className={login ? "red" : ""}>Login</button>
                        <button onClick={toggleSignup} className={signup ? "red" : ""}>Sign Up</button>
                    </div>
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

                {
                    userDropDown ? <ProviderDropDown provider ={provider} /> : ""
                }

                <div className="user">
                    <img src={PHOTOS.auto} alt="round" onClick={handleUserDropDown} />
                </div>

                { dropDown ?
                    <DropDown />
                    : "" }
            </div>
        )
};


export default Header;