import "./Hero.css";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";

function Hero(){

    const and = "&"

        return(
            <div className="hero">
                <div className="hero-wrapper">
                    
                    <h1>Find, Hire {and} Connect With Artisans {and} Service Providers near you...</h1>

                    <SearchBar/>
                </div>
            </div>
        )
};


    

export default Hero ;