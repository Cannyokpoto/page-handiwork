import "./Hero.css";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";

function Hero(){

    const and = "&"

        return(
            <div className="hero">
                <div className="hero-wrapper">
                    
                    <h1>Find, Hire {and} Connect With Service Providers Near You...</h1>

                    <SearchBar className="my-search"/>
                </div>
            </div>
        )
};


    

export default Hero ;