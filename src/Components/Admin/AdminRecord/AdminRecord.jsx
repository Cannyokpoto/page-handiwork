import React, { useState } from 'react'
import "./AdminRecord.css"
import { Link } from 'react-router-dom';
import { TiTickOutline } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";
import { HandiworkContext } from '../../Context/HandiworkContext';
import { useContext } from 'react';
import axios from 'axios';


function AdminRecord(admin) {

    const [approving, setApproving] = useState(false);

    async function adminApprove(){

        const url = `https://handiworks.cosmossound.com.ng/api/auth/admin-verify-approval/${admin.id}`
      
        try {

            setApproving(true)
            
           const response = await axios.put(url,
                { action: "approve" },
                { 
                    headers: { 
                        'Content-Type': 'application/json' 
                    }
                }
            )
      
        }catch (dupError) {
            console.log("caughtError:", dupError.message)
      
        }
        
        finally{
            setApproving(false)
        }
    }

  return (
        <div className="record">
            <div className='data'>
                {/* <span className='fHead'><input type="checkbox" name="" id="" /> First Name</span> */}

                
                    <div className='fText'>
                        {/* <input type="checkbox" name="" id="" />  */}
                        <span className='fName'>{admin.firstName}</span>
                    </div>
                    <div className="view-delet">
                        {/* <Link to="/">View</Link> */}
                        {
                            admin.status == 1 ?
                            <span className={approving ? "hide-field" : ""}>Approved</span>   :
                            <button 
                            className={approving ? "hide-field" : ""}
                            onClick={adminApprove}>Approve admin</button>
                        }
                        <div className={approving ? "" : "hide-field"}>Approving...</div>
                    </div>
            </div>

            <div className='data'>
                {/* <span className='head'>Last Name</span> */}
                <span className='text'>{admin.lastName}</span>
            </div>

            <div className='data'>
                {/* <span className='head'>Email</span> */}
                <span className='text email'>{admin.email}</span>
            </div>

            <div className='data'>
                {/* <span className='head'>Admin ID</span> */}
                <span className='text'>{admin.adminId}</span>
            </div>

            <div className='data'>
                {/* <span className='lHead'>Role</span> */}
                <span className='text'>{admin.role}</span>
            </div>
        </div>
  )
}

function AdminTags() {
    return (
        <div className="tags">
                <div className='tag'>
                    {/* <input type="checkbox" name="" id="" /> */}
                    <span className='fHead'>First Name</span>
                </div>
    
                <div className='tag'>
                    <span className='head'>Last Name</span>
                </div>
    
                <div className='tag'>
                    <span className='head email'>Email</span>
                </div>
    
                <div className='tag'>
                    <span className='head'>Admin ID</span>
                </div>
    
                <div className='tag'>
                    <span className='lHead'>Role</span>
                </div>
        </div>
    )
  }

function SkillProvidersTag() {
    return (
        <div className="tags">
                <div className='tag'>
                    <input type="checkbox" name="" id="" />
                    <span className='fHead'>First Name</span>
                </div>
    
                <div className='tag'>
                    <span className='head'>Last Name</span>
                </div>
    
                <div className='tag'>
                    <span className='head email'>Email</span>
                </div>
    
                <div className='tag'>
                    <span className='head'>Service Type</span>
                </div>
    
                <div className='tag'>
                    <span className='lHead'>Verification Status</span>
                </div>
        </div>
    )
  }


  function SkillProvidersRecord(provider) {
    return (
          <div className="record">
              <div className='data'>
                  {/* <span className='fHead'><input type="checkbox" name="" id="" /> First Name</span> */}
  
                  
                      <div className='fText'>
                          <input type="checkbox" name="" id="" /> 
                          <span className='fName'>{provider.firstName}</span>
                      </div>
                      <div className="view-delet">
                          <Link to={`/market-place/provider/${provider.id}`}>View</Link>
                          <button>Delete</button>
                      </div>
              </div>
  
              <div className='data'>
                  {/* <span className='head'>Last Name</span> */}
                  <span className='text'>{provider.lastName}</span>
              </div>
  
              <div className='data'>
                  {/* <span className='head'>Email</span> */}
                  <span className='text email'>{provider.email}</span>
              </div>
  
              <div className='data'>
                  {/* <span className='head'>Admin ID</span> */}
                  <span className='text'>{provider.serviceType}</span>
              </div>
  
              <div className='data'>
                  {/* <span className='lHead'>Role</span> */}
                  <span className='text'>{provider.isVerified}</span>
              </div>
          </div>
    )
  }

  function CustomersTag() {
    return (
        <div className="tags">
                <div className='tag'>
                    <input type="checkbox" name="" id="" />
                    <span className='fHead'>First Name</span>
                </div>
    
                <div className='tag'>
                    <span className='head'>Last Name</span>
                </div>
    
                <div className='tag'>
                    <span className='head email'>Email</span>
                </div>
    
                <div className='tag'>
                    <span className='head'>Phone Number</span>
                </div>
    
                <div className='tag'>
                    <span className='lHead'>Address</span>
                </div>
        </div>
    )
  }


  function CustomersRecord(customer) {
    return (
          <div className="record">
              <div className='data'>
                  {/* <span className='fHead'><input type="checkbox" name="" id="" /> First Name</span> */}
  
                      <div className='fText'>
                          <input type="checkbox" name="" id="" /> 
                          <span className='fName'>{customer.firstName}</span>
                      </div>
                      <div className="view-delet">
                          {/* <Link to="/">View</Link> */}
                          <button>Delete</button>
                      </div>
              </div>
  
              <div className='data'>
                  {/* <span className='head'>Last Name</span> */}
                  <span className='text'>{customer.lastName}</span>
              </div>
  
              <div className='data'>
                  {/* <span className='head'>Email</span> */}
                  <span className='text email'>{customer.email}</span>
              </div>
  
              <div className='data'>
                  {/* <span className='head'>Admin ID</span> */}
                  <span className='text'>{customer.phone}</span>
              </div>
  
              <div className='data'>
                  {/* <span className='lHead'>Role</span> */}
                  <span className='text'>{customer.address}</span>
              </div>
          </div>
    )
}

  function VerificationTag() {
    return (
         

    <div className="tags">
              <div className='tag'>
                  <input type="checkbox" name="" id="" />
                  <span className='fHead'>First Name</span>
              </div>
  
              <div className='tag left'>
                  <span className='head'>Last Name</span>
              </div>
  
              <div className='empty'>
                  {/* <span className='head email'>Email</span> */}
              </div>
  
              <div className='empty'>
                  {/* <span className='head'>Phone Number</span> */}
              </div>
  
              <div className='tag'>
                  <span className='lHead'>Action</span>
              </div>
    </div>
    )
  }

  function VerificationRecord(provider) {

    const {toggleCacView} = useContext(HandiworkContext)

    const [accepting, setAccepting] = useState(false);
    const [rejecting, setRejecting] = useState(false);

    async function adminApprove(){

        const url = `https://handiworks.cosmossound.com.ng/api/verify-providers/verification-status/${provider.providerId}`
      
        try {

            setAccepting(true)
            
           const response = await axios.put(url,
                { action: "accept" },
                { headers: { 'Content-Type': 'application/json' } }
            )

           localStorage.setItem("adminAction", JSON.stringify("approved"))
      
        }catch (dupError) {
            console.log("caughtError:", dupError.message)
      
        }

        finally{
            setAccepting(false)
        }
    }

    async function adminReject(){

        const url = `https://handiworks.cosmossound.com.ng/api/verify-providers/verification-status/${provider.providerId}`
      
        try {

            setRejecting(true)
            
           const response = await axios.put(url,
                { action: "reject" },
                { headers: { 'Content-Type': 'application/json' } }
            )

           localStorage.setItem("adminAction", JSON.stringify("rejected"))
      
        }catch (dupError) {
            console.log("caughtError:", dupError.message)
      
        }
        
        finally{
            setRejecting(false)
        }
    }

    return (
          <div className="record">
              <div className='data'>
                  {/* <span className='fHead'><input type="checkbox" name="" id="" /> First Name</span> */}
  
                      <div className='fText'>
                          <input type="checkbox" name="" id="" /> 
                          <span className='fName'>{provider.firstName}</span>
                          {/* <span className='fName'>{provider.providerId}</span> */}
                      </div>
                      <div className="view-delet">
                          <Link to={`/admin/verification-file/${provider.providerId}`}>View</Link>
                          {/* <span onClick={toggleCacView}>View</span> */}
                          <button onClick={adminReject}>Delete</button>
                      </div>
              </div>
  
              <div className='data move'>
                  {/* <span className='head'>Last Name</span> */}
                  <span className='text'>{provider.lastName}</span>
              </div>
  
              <div className='data'>
                  {/* <span className='head'>Email</span> */}
                  {/* <span className='text email'>{props.email}</span> */}
              </div>
  
              <div className='data'>
                  {/* <span className='head'>Admin ID</span> */}
                  {/* <span className='text'>{props.phoneNumber}</span> */}
              </div>
              
  
              <div className='verification-data'>
                  { accepting ? <p>Approving...</p> : "" }
                  { rejecting ? <p>Rejecting...</p> : "" }
                  
                    {accepting || rejecting ? "" :
                    <span className='reject-btn' 
                    onClick={adminReject}><MdOutlineCancel className='reject-icon' /> Reject</span>
                    }
  
                    {accepting || rejecting ? "" :
                        <span className='approve-btn' 
                        onClick={adminApprove}><TiTickOutline className='approve-icon'/> Approve</span>
                    }
              </div>
          </div>
    )
  }

export {AdminRecord, AdminTags, SkillProvidersTag, 
    SkillProvidersRecord, CustomersRecord, 
    CustomersTag, VerificationTag, VerificationRecord}
