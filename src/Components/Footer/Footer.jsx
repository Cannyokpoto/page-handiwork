import "./Footer.css";
import React from "react";
import PHOTOS from "../images/index";
import { NavLink } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";


function Footer(){

        return(
            <footer className="my-footer">
                <div className="download">
                    <div className="left">
                        <h4>Download App on</h4>
                        <div className="stores">
                            <img src={ PHOTOS.GoogleStore } alt="logo" />
                            <img src={ PHOTOS.AppStore } alt="logo" />
                        </div>
                    </div>

                    <div className="right">
                        <img src={ PHOTOS.Phone } alt="logo" />
                    </div>
                </div>

                <hr className="hr" />


                <div className="quick-links">
                    <div className="left">
                        <img src={ PHOTOS.LOGO } alt="logo" />
                        <p>Handiwork is an online marketplace for service providers. 
                            Find the service provider you need, based on your location. 
                            Get in touch if you need help.</p>
                        <span className="number">
                            <FaPhone className="my-soc" />
                            <p>+234 802 942 5815</p>
                        </span>
                        <span className="email">
                            <IoMdMail className="my-soc" />
                            <p>complaint@handiwork.com</p>
                        </span>
                    </div>

                    <div className="center">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/">What is Handiwork?</NavLink>
                        <NavLink to="">The Scope</NavLink>
                        <NavLink to="/">How it works</NavLink>
                        <NavLink to="/">FAQ</NavLink>
                    </div>

                    <div className="right">
                        <NavLink to="/">About us</NavLink>
                        <NavLink to="/">Who we are</NavLink>
                        <NavLink to="/">Team</NavLink>
                        <NavLink to="/">Roadmap</NavLink>
                    </div>
                </div>

                <hr/>

                <small><div dangerouslySetInnerHTML={{__html: '&#169;'}}></div> 2024 Handiwork, All Rights Reserved</small>
            </footer>
        )
};


    

export default Footer;