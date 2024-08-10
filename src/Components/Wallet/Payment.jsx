import React, { useRef, useState, useEffect, useContext } from "react";
import './Payment.css'
import { GoPlus } from "react-icons/go";
import { useParams, useNavigate } from "react-router-dom";
import { HandiworkContext } from "../Context/HandiworkContext";
import { NavLink, Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuCopy } from "react-icons/lu";
import { GoArrowLeft } from "react-icons/go";
import axios from 'axios';



function Payment(provider) {

  const { providerId } = useParams();
  console.log("providerId:", providerId)
  

   // Helper function to format amount to transfer with commas
   const formatTransfer = (num) => {
    if (num === "") return "";
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  

  const [transferValue, setTransferValue] = useState('')
  console.warn('transferValue:', transferValue)
  
  const [transferValueToSend, setTransferValueToSend] = useState('')
  console.warn('transferValueToSend:', transferValueToSend)

  // Handler for addValue change
  const handleTransferChange = (e) => {
    const inputValue = e.target.value.replace(/,/g, ""); // Remove existing commas
    setTransferValueToSend(inputValue)
    if (!isNaN(inputValue)) {
      setTransferValue(formatTransfer(inputValue)); // Update state with formatted value
    }
  };


  // Handler for addValue blur to format the number
  const handleTransferBlur = (e) => {
    const inputValue = e.target.value.replace(/,/g, ""); // Remove existing commas
    
    if (!isNaN(inputValue)) {
        setTransferValue(formatTransfer(inputValue)); // Update state with formatted value
    }
  };

  
  const [transfer, setTransfer] = useState(true)
  const [transferDetails, setTransferDetails] = useState(false)

  const handleTransfer = ()=>{
    setTransfer(!transfer)
    setTransferDetails(!transferDetails)
  };


  //To fetch provider to pay
  const [providerToPay, setProviderToPay] = useState(null);
  console.log("providerToPay", providerToPay);
    
    
  //To fetch the provider to pay
  useEffect(()=>{
      async function fetchProviderToPay(){
  
          const url = `https://handiworks.cosmossound.com.ng/api/skill-providers/view/${providerId}`
        
          try {
              
             const response = await axios.get(url)
             if(response.status >= 200 && response.status < 300){
              setProviderToPay(response.data.skillProvider)
            }
        
          }catch (dupError) {
              console.log("caughtError:", dupError.message)
        
          }
        
      }
  
      fetchProviderToPay()
  }, []);


  
  return (
    <div className='payment'>

      <div className="main-wrapper">

          {
          transfer===true && transferDetails===false ?
          <div className="payment-wrapper">
              <Link to={`/market-place/provider/${providerToPay ? providerToPay.id : ""}`}>
              <GoArrowLeft className="dontEngage" /></Link>
              
              <h4>TOTAL BALANCE</h4>
              
              <div className="balance">
                  <p>&#8358;300,000</p>
              </div>

              <div className="transferPhone">
                <p>Provider’s ID number</p>

                {/* <input type="text" value='08138957283'/> */}
                
                <div className="receiverPhone">********{providerToPay !==null ? providerToPay.phone.slice(8, 11) : ""}</div>
                
              </div>

              <div className="amount">
                <p>Amount</p>

                <div className="naira">
                    <span className="sign">&#8358;</span>
                    <input 
                        type="text"
                        value={transferValue}
                        onChange={handleTransferChange}
                        onBlur={handleTransferBlur}
                    />
                </div>
              </div>

              <button className="transferBtn" onClick={handleTransfer}>Transfer</button>
          </div> : "" }
          
          {transfer===false && transferDetails===true ?
            <div className="transferDetails">
                <div className="tag">
                    <GoArrowLeft className="transferBack" onClick={handleTransfer}/>
                </div>

                <div className="transferAccount">
                    <p className="info">Amount: {transferValue}</p>
                    <p className="info">Provider ID Num: {providerToPay ? providerToPay.phone : ""}</p>

                    <div className="confirmAmount">Kindly Confirm amount before you proceed.</div>
                    
                    <div className="assurance"><span className="purp">*</span>Note: The service provider can not access this money untill their job has been completed.</div>
                    
                    <button className="confirmTransferBtn">Confirm</button>
                </div>                
            </div> : ""
          }

      </div>
    </div>
  )
}

export default Payment;
