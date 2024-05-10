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

function VerificationPending() {

  const {toggleVerify} = useContext(HandiworkContext)

return (
  <div className='VerificationReminder pending'>
    <FaInfo className='icon' />
    <p>Verification pending...</p>
  </div>
)

}

export {VerificationReminder, VerificationPending}
