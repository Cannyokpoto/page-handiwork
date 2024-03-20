import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
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



function Header(){

    //Mobile Navbar

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    //Change Header color

    // const [color, setColor] = useState("wt");


    //Signup

    // const {toggleSignup} = useContext(HandiworkContext)
    // const {signup} = useContext(HandiworkContext)

    const [signup , setSignup] = useState(false);
        const toggleSignup = () => {
        setSignup(!signup);
        handleClick()
    };

    // if(signup) {
    //     document.body.classList.add('active-modal')
    //   } else {
    //     document.body.classList.remove('active-modal')
    //   }


      //Login

        const [login, setLogin] = useState(false);
        const toggleLogin = () => {
            setLogin(!login);
            handleClick()
    };

    if(login) {
        document.body.classList.add('active-modal2')
        } else {
        document.body.classList.remove('active-modal2')
        }

    //SearchBar

    const [search, setSearch] = useState(false);
    const toggleSearch = () => {
        setSearch(!search);
    };

    if(search) {
        document.body.classList.add('active-modal3')
        } else {
        document.body.classList.remove('active-modal3')
        }

    //DropDown
    const [dropDown, setDropDown] = useState(false);



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
                    <img src={ PHOTOS.LOGO } alt="logo" />

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
                        onMouseEnter={() => setDropDown(true)}
                        onMouseLeave={() => setDropDown(false)}
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

                <IoIosSearch onClick={toggleSearch} className="search-wt" />

                {/*Search Bar*/}

                { search ?
                <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content">
                        <IoMdClose onClick={toggleSearch} className="close-modal" />

                        <SearchBar className="drop-down-search" />
                    </div>
                </div> : ""}

                {/*Dropdown Menu*/}

                { dropDown ?
                    <div className={ dropDown ? "show" : "hide-field" } 
                    onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}>
                    <div className='left'>
                        <div className='top'>
                            <ul>
                                <h5>Fashion</h5>
                                <li><Link to="/" onClick={() => setDropDown(false)}>Men</Link></li>
                                <li><Link to="/">Women</Link></li>
                            </ul>

                            <ul>
                                <h5>Technician</h5>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Home</Link></li>
                            </ul>

                            <ul>
                                <h5>Hospitality</h5>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Home</Link></li>
                            </ul>

                            <ul>
                                <h5>Logistics</h5>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Home</Link></li>
                            </ul>
                        </div>

                        <div className='advert'>
                            <img src={ PHOTOS.Advert } alt="advert" />
                        </div>
                    </div>

                    <div className='right'>
                        <ul>
                            <h5>Automobile</h5>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                        </ul>

                        <ul>
                            <h5>Domestic</h5>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Home</Link></li>
                        </ul>
                    </div>
                    </div>
                    : "" }
            </div>
        )
};


export default Header;