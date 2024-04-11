import "./Hero.css";
import React, { useContext } from "react";
// import SearchBar from "../SearchBar/SearchBar";
import PHOTOS from "../images";
import { Link } from "react-router-dom"
import { HandiworkContext } from "../Context/HandiworkContext";


function Hero(){
    const{viewProvider} = useContext(HandiworkContext)
    const{viewCustomer} = useContext(HandiworkContext)
    const and = "&"

        return(
            <div className="hero">
                <video autoPlay muted loop>
                    <source src={PHOTOS.hero_v} type="video/mp4" />
                </video>

                <div className="hero-wrapper">
                    <h1>Find, Hire {and} Connect With Service Providers Near You.</h1>
                    <Link to="/market-place">Explore</Link>
                    <button onClick={viewCustomer}>test button</button>
                </div>
            </div>
        )
};


    

export default Hero ;