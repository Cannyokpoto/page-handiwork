import React, {useContext} from 'react'
import './VerificationReminder.css';
import { FaInfo } from "react-icons/fa6";
import { HandiworkContext } from '../Context/HandiworkContext';




function VerificationReminder() {

    const {toggleVerify} = useContext(HandiworkContext)

  return (
    <div className='VerificationReminder'>
      <FaInfo className='icon' />
      <p>To become a verified service provider, kindly verify account</p>
      <button onClick={toggleVerify}>Verify</button>
    </div>
  )
}

function VerificationRejected() {

  const {toggleVerify} = useContext(HandiworkContext)

return (
  <div className='rejected'>
    <FaInfo className='icon' />
    <p>Sorry, your file did not meet our verification criteria. Upload a valid image or PDF file</p>
    <button onClick={toggleVerify}>Verify</button>
  </div>
)
}

function VerificationPending() {

  const {toggleVerify} = useContext(HandiworkContext)

return (
  <div className='pending'>
    <FaInfo className='icon' />
    <p>Verification pending...</p>
  </div>
)

}

export {VerificationReminder, VerificationPending, VerificationRejected}
