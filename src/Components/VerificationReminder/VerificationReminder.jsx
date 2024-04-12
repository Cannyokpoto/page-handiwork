import React, {useContext} from 'react'
import './VerificationReminder.css';
import { FaInfo } from "react-icons/fa6";
import { GoVerified } from "react-icons/go";
import { HandiworkContext } from '../Context/HandiworkContext';

// {/* <GoVerified /> */}


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

export default VerificationReminder
