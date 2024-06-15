import React from "react";
import "./CSS/NoPage.css";
import Header from '../Components/Header/Header';
import { GoArrowLeft } from "react-icons/go";
import PHOTOS from "../Components/images";



function NoPage(){
    return(
        <div className="noPage">
            <h1>Hmm!</h1>
            <h3>I can't find what you are looking for.</h3>
            <p>We're sorry, but the page you are looking for could not be found. 
                It may have been moved, renamed, or is temporarily unavailable.</p>
            <img src={PHOTOS.noPage} alt="" />
            <a href="/"><GoArrowLeft className='arrow-left' /> Go back</a>
        </div>
    )
}

export default NoPage;