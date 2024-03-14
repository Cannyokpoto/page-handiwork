import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PHOTOS from '../images';
import './DropDown.css';

const DropDownStyle = styled.div`
    

`;

function DropDown() {

    const [dropDown, setDropDown] = useState(true);


  return (
    <DropDownStyle className={ dropDown ? "show" : "hide-field" } 
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
    </DropDownStyle>
  )
}

export default DropDown
