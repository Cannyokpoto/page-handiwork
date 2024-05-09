import React from 'react'
import "./AdminRecord.css"
import { Link } from 'react-router-dom';
import { TiTickOutline } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";


function AdminRecord(props) {
  return (
        <div className="record">
            <div className='data'>
                {/* <span className='fHead'><input type="checkbox" name="" id="" /> First Name</span> */}

                
                    <div className='fText'>
                        <input type="checkbox" name="" id="" /> 
                        <span className='fName'>{props.fName}</span>
                    </div>
                    <div className="view-delet">
                        {/* <Link to="/">View</Link> */}
                        <button>Delete</button>
                    </div>
            </div>

            <div className='data'>
                {/* <span className='head'>Last Name</span> */}
                <span className='text'>{props.lName}</span>
            </div>

            <div className='data'>
                {/* <span className='head'>Email</span> */}
                <span className='text email'>{props.email}</span>
            </div>

            <div className='data'>
                {/* <span className='head'>Admin ID</span> */}
                <span className='text'>{props.adminId}</span>
            </div>

            <div className='data'>
                {/* <span className='lHead'>Role</span> */}
                <span className='text'>{props.role}</span>
            </div>
        </div>
  )
}

function AdminTags() {
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

  function SkillProvidersRecord(props) {
    return (
          <div className="record">
              <div className='data'>
                  {/* <span className='fHead'><input type="checkbox" name="" id="" /> First Name</span> */}
  
                  
                      <div className='fText'>
                          <input type="checkbox" name="" id="" /> 
                          <span className='fName'>{props.firstName}</span>
                      </div>
                      <div className="view-delet">
                          <Link to="/">View</Link>
                          <button>Delete</button>
                      </div>
              </div>
  
              <div className='data'>
                  {/* <span className='head'>Last Name</span> */}
                  <span className='text'>{props.lastName}</span>
              </div>
  
              <div className='data'>
                  {/* <span className='head'>Email</span> */}
                  <span className='text email'>{props.email}</span>
              </div>
  
              <div className='data'>
                  {/* <span className='head'>Admin ID</span> */}
                  <span className='text'>{props.skill}</span>
              </div>
  
              <div className='data'>
                  {/* <span className='lHead'>Role</span> */}
                  <span className='text'>{props.category}</span>
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

  function CustomersRecord(props) {
    return (
          <div className="record">
              <div className='data'>
                  {/* <span className='fHead'><input type="checkbox" name="" id="" /> First Name</span> */}
  
                  
                      <div className='fText'>
                          <input type="checkbox" name="" id="" /> 
                          <span className='fName'>{props.firstName}</span>
                      </div>
                      <div className="view-delet">
                          <Link to="/">View</Link>
                          <button>Delete</button>
                      </div>
              </div>
  
              <div className='data'>
                  {/* <span className='head'>Last Name</span> */}
                  <span className='text'>{props.lastName}</span>
              </div>
  
              <div className='data'>
                  {/* <span className='head'>Email</span> */}
                  <span className='text email'>{props.email}</span>
              </div>
  
              <div className='data'>
                  {/* <span className='head'>Admin ID</span> */}
                  <span className='text'>{props.phoneNumber}</span>
              </div>
  
              <div className='data'>
                  {/* <span className='lHead'>Role</span> */}
                  <span className='text'>{props.address}</span>
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
                  <span className='lHead'>Action</span>
              </div>
    </div>
    )
  }

  function VerificationRecord(props) {
    return (
          <div className="record">
              <div className='data'>
                  {/* <span className='fHead'><input type="checkbox" name="" id="" /> First Name</span> */}
  
                  
                      <div className='fText'>
                          <input type="checkbox" name="" id="" /> 
                          <span className='fName'>{props.firstName}</span>
                      </div>
                      <div className="view-delet">
                          <Link to="/">View</Link>
                          <button>Delete</button>
                      </div>
              </div>
  
              <div className='data'>
                  {/* <span className='head'>Last Name</span> */}
                  <span className='text'>{props.lastName}</span>
              </div>
  
              <div className='data'>
                  {/* <span className='head'>Email</span> */}
                  <span className='text email'>{props.email}</span>
              </div>
  
              <div className='data'>
                  {/* <span className='head'>Admin ID</span> */}
                  <span className='text'>{props.phoneNumber}</span>
              </div>
  
              <div className='verification-data'>
                  <span className='reject-btn'><MdOutlineCancel className='reject-icon' /> Reject</span>
                  <span className='approve-btn'><TiTickOutline className='approve-icon'/> Approve</span>
              </div>
          </div>
    )
  }

export {AdminRecord, AdminTags, SkillProvidersTag, 
    SkillProvidersRecord, CustomersRecord, 
    CustomersTag, VerificationTag, VerificationRecord}
