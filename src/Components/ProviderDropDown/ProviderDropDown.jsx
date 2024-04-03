import React, { useContext } from 'react'
import './ProviderDropDown.css'
import { Link, useParams } from "react-router-dom"
import PHOTOS from '../images';
import { HandiworkContext } from '../Context/HandiworkContext';

function ProviderDropDown(props) {

    const {provider} = props;
    const {providerId} = useParams();


    // const {userDropDown} = useContext(HandiworkContext)
    const {handleUserDropDown} = useContext(HandiworkContext)


  return (
    <div className='provider-drop-down'>
        <div className="category-photo">
            <img src="" alt="cover" className="cat" />
            <img src="" alt="photo" className="dp" />
        </div>

        <div className="basic">
            <h5>Promise Okpoto</h5>
            <p>canny@yahoo.com</p>
        </div>

        <hr />

        <Link to={`/market-place/profile/${providerId}`} onClick={handleUserDropDown} key={props.id}>Handiwork profile</Link>


        <hr />

        <button onClick={handleUserDropDown}>Sign out</button>

      {/* <Link to={`/market-place/profile/${providerId}`} className='category-page-btn' key={props.id}>Edit my page</Link> */}
    </div>
  )
}

export default ProviderDropDown;
