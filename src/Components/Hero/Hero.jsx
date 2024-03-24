import "./Hero.css";
import React from "react";
// import SearchBar from "../SearchBar/SearchBar";
import PHOTOS from "../images";

function Hero(){
    const and = "&"

        return(
            <div className="hero">
                <video autoPlay muted loop>
                    <source src={PHOTOS.hero_v} type="video/mp4" />
                </video>

                <div className="hero-wrapper">
                    <h1>Find, Hire {and} Connect With Service Providers Near You.</h1>
                    <a href="/market-place">Explore</a>
                </div>
            </div>
        )
};


    

export default Hero ;