// import React, { useContext, useRef, useState } from 'react'
// // import './ProviderDropDown.css'
// import { Link, useParams } from "react-router-dom"
// import PHOTOS from '../images';
// import { HandiworkContext } from '../Context/HandiworkContext';
// import { useEffect } from 'react';

// function ProviderDropDown(props) {

//     const {provider} = props;
//     const {providerId} = useParams();


//     // const {userDropDown} = useContext(HandiworkContext)
//     const {handleUserDropDown} = useContext(HandiworkContext)
//     const {logout} = useContext(HandiworkContext)
//     const {loggedinProvider} = useContext(HandiworkContext)
//     const {closeUserDropDown} = useContext(HandiworkContext)


//     //Click outside to close provider drop down
//     const providerRef = useRef()
//     const [providerDropDown, setProviderDropDown] = useState(false)

//     const handleProviderDropDown =()=>{
//       setProviderDropDown(!providerDropDown)
//     }

//     useEffect(() =>{
//       let handler = (event) =>{
//         if(!providerRef.current.contains(event.target)){
//           setProviderDropDown(false)
//         }
//       }
  
//       document.addEventListener("mousedown", handler);
  
//       return ()=>{
//         document.removeEventListener("mousedown", handler);
//       }
  
//     })



//   return (

//     <div ref={providerRef} className="loggedin-provider">

//       <div className="provider-head" onClick={handleProviderDropDown}>
//         <h6>PO</h6>
//         {/* <img src={PHOTOS.auto} alt="" /> */}
//       </div>

//       {
//         providerDropDown ? 
//       <div className='provider-drop-down'>
//           <div className="category-photo">
//               <img src={PHOTOS.hospitality} alt="cover" className="cat" />
//               <img src={PHOTOS.auto} alt="photo" className="dp" />
//           </div>

//           <div className="basic">
//               <h5>{loggedinProvider ? loggedinProvider.skillProvider.firstName
//                 .charAt(0).toUpperCase() + loggedinProvider.skillProvider.firstName
//                 .slice(1) : ""} {loggedinProvider ? loggedinProvider.skillProvider.lastName
//                 .charAt(0).toUpperCase() + loggedinProvider.skillProvider.lastName.slice(1) : ""}
//               </h5>
//               <p>{loggedinProvider ? loggedinProvider.skillProvider.email : ""}</p>
//           </div>

//           <hr />

//           {/* <Link to={`/market-place/profile/${providerId}`} onClick={handleUserDropDown} key={props.id}>Handiwork profile</Link> */}

//           <Link to={`/market-place/profile/${loggedinProvider ? loggedinProvider.skillProvider.id : ""}`} onClick={handleUserDropDown}>Handiwork profile</Link>


//           <hr />

//           <button onClick={logout}>Sign out</button>

//         {/* <Link to={`/market-place/profile/${providerId}`} className='category-page-btn' key={props.id}>Edit my page</Link> */}
//       </div> : ""}

//     </div>
//   )
// }

// export default ProviderDropDown;
