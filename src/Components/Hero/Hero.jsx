import "./Hero.css";
import React, { useContext } from "react";
// import SearchBar from "../SearchBar/SearchBar";
import PHOTOS from "../images";
import { Link } from "react-router-dom"
import { HandiworkContext } from "../Context/HandiworkContext";


function Hero(){
    const{loggedinCustomer, loggedinProvider} = useContext(HandiworkContext)

        const logoutProvider = () =>{
            localStorage.clear()
            window.location.reload(false)
          }
    
    const and = "&"

        return(
            <div className={loggedinCustomer || loggedinProvider ? "protected-hero" : "hero"}>
                <video autoPlay muted loop>
                    <source src={PHOTOS.hero_v} type="video/mp4" />
                </video>

                <div className="hero-wrapper">
                    {
                        loggedinCustomer || loggedinProvider ?
                        <h1>Discover the perfect match for every need!</h1> :
                        <h1>Find, Hire {and} Connect With Service Providers Near You.</h1>
                    }
                    <Link to="/market-place">Explore Services</Link>
                    {/* <button onClick={viewCustomer}>test button</button> */}
                    <button onClick={logoutProvider}>provider</button>
                </div>
            </div>
        )
};


    

export default Hero ;