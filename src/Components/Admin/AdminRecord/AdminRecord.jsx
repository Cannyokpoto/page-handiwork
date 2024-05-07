import React from 'react'
import "./AdminRecord.css"
import { Link } from 'react-router-dom';

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
                        <Link to="/">View</Link>
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

export {AdminRecord, AdminTags }
