import React, { useRef, useState, useEffect, useContext } from "react";
import './Wallet.css'
import { GoPlus } from "react-icons/go";
import { useParams, useNavigate } from "react-router-dom";
import { HandiworkContext } from "../Context/HandiworkContext";
import { NavLink, Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuCopy } from "react-icons/lu";
import { GoArrowLeft } from "react-icons/go";
import { CiBank } from "react-icons/ci";
import { FaInfo } from "react-icons/fa6";



function ProviderWallet() {
    
  const [defWithdrawDetails, setDefWithdrawDetails] = useState(true)
  
  const handleDefSwitch = () =>{
    setDefWithdrawDetails(!defWithdrawDetails)
  }

   // Helper function to format amount to add with commas
   const formatAdd = (num) => {
    if (num === "") return "";
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  

  const [addValue, setAddValue] = useState('')
  console.warn('addValue:', addValue)
  

  const [addValueToSend, setAddValueToSend] = useState('')
  console.warn('addValueToSend:', addValueToSend)

  // Handler for addValue change
  const handleAddChange = (e) => {
    const inputValue = e.target.value.replace(/,/g, ""); // Remove existing commas
    setAddValueToSend(inputValue)
    if (!isNaN(inputValue)) {
        setAddValue(formatAdd(inputValue)); // Update state with formatted value
    }
  };

  

  // Handler for addValue blur to format the number
  const handleAddBlur = (e) => {
    const inputValue = e.target.value.replace(/,/g, ""); // Remove existing commas
    
    if (!isNaN(inputValue)) {
        setAddValue(formatAdd(inputValue)); // Update state with formatted value
    }
  };



  // Helper function to format amount to withdraw with commas
  const formatWithdraw = (num) => {
    if (num === "") return "";
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const [withdrawValue, setWithdrawValue] = useState('')
  console.warn('withdrawValue:', withdrawValue)

  const [withdrawValueToSend, setWithdrawValueToSend] = useState('')
  console.warn('withdrawValueToSend:', withdrawValueToSend)

  // Handler for withdrawValue change
  const handleWithdrawChange = (e) => {
    const inputValue = e.target.value.replace(/,/g, ""); // Remove existing commas
    setWithdrawValueToSend(inputValue)
    if (!isNaN(inputValue)) {
        setWithdrawValue(formatWithdraw(inputValue)); // Update state with formatted value
    }
  };

  

  // Handler for withdrawValue blur to format the number
  const handleWithdrawBlur = (e) => {
    const inputValue = e.target.value.replace(/,/g, ""); // Remove existing commas
    
    if (!isNaN(inputValue)) {
        setWithdrawValue(formatAdd(inputValue)); // Update state with formatted value
    }
  };

  
  
  const [screen, setScreen] = useState('wallet')
  const [addDetails, setAddDetails] = useState(false)
  const [withdrawDetails, setWithdrawDetails] = useState(false)
  // const [addDefAcc, setAddDefAcc] = useState(false)
  const [editAcc, setEditAcc] = useState(false)

  const handleAddDetails = ()=>{
    setScreen('add')
    setAddDetails(!addDetails)
  }

  const handleEditAcc = ()=>{
    setScreen('addDefAcc')
    setEditAcc(!editAcc)
  }

  const handleWithdrawDetails = ()=>{
    setScreen('withdraw')
    setWithdrawDetails(!withdrawDetails)
  }
  
  
  const handleAddReview = ()=>{
    setScreen('add')
    setAddDetails(!addDetails)
  }

  const handleWithdrawReview = ()=>{
    setScreen('withdraw')
    setWithdrawDetails(!withdrawDetails)
  }
  
  return (
    <div className='wallet'>
      <div className="side">
        <p className='name'>Hi, <span>canny</span></p>

        <div className="btns">
            <button className={screen==='wallet' ? 'active' : "side-btns"} onClick={()=>setScreen('wallet')}>Wallet</button>
            <button className={screen==='add' ? 'active' : "side-btns"} onClick={()=>setScreen('add')}>Add Money</button>
            <button className={screen==='withdraw' ? 'active' : "side-btns"} onClick={()=>setScreen('withdraw')}>Withdraw</button>
            {/* <button className={screen==='transfer' ? 'active' : "side-btns"} onClick={()=>setScreen('transfer')}>Transfer</button> */}
            <button className={screen==='addDefAcc' ? 'active' : "side-btns"} onClick={()=>setScreen('addDefAcc')}>Add Bank Account</button>
        </div>
      </div>

      <div className="main-wrapper">
        {
          screen==='wallet' ?
          <div className="balance-wrapper">
              <h4>TOTAL BALANCE</h4>
              
              <div className="balance">
                  <p>&#8358;300,000</p>
                  <GoPlus className='plus' onClick={()=>setScreen('add')}/>
              </div>

              <div className="history">
                  <div className="tag">
                      <h5>Transactions</h5>
                      <button>View All</button>
                  </div>

                  <div className="transaction-list">
                      <div className="transaction">
                          <div className="details">
                              <h5>Nneka Ogbueli</h5>
                              <p>Makeup Artist</p>
                          </div>

                          <div className="amount">-&#8358;30,000</div>
                      </div>

                      <div className="transaction">
                          <div className="details">
                              <h5>Nneka Ogbueli</h5>
                              <p>Makeup Artist</p>
                          </div>

                          <div className="amount">-&#8358;30,000</div>
                      </div>

                      <div className="transaction">
                          <div className="details">
                              <h5>Nneka Ogbueli</h5>
                              <p>Makeup Artist</p>
                          </div>

                          <div className="amount">-&#8358;30,000</div>
                      </div>

                      <div className="transaction">
                          <div className="details">
                              <h5>Nneka Ogbueli</h5>
                              <p>Makeup Artist</p>
                          </div>

                          <div className="amount">-&#8358;30,000</div>
                      </div>
                  </div>
              </div>
          </div> : "" }

          {
          screen==='add' && addDetails===false ?
          <div className="add-wrapper">
              
              <h4>TOTAL BALANCE</h4>
              
              <div className="balance">
                  <p>&#8358;300,000</p>
              </div>
              
              <div className="amount">
                <p>Enter Amount</p>

                <div className="naira">
                    <span className="sign">&#8358;</span>
                    <input 
                        type="text"
                        value={addValue}
                        onChange={handleAddChange}
                        onBlur={handleAddBlur}
                    />
                </div>
              </div>

              <div className="addPhone">
                <p>Phone number</p>

                <input type="text" value='08138957283'/>
              </div>

              <button className="addBtn" onClick={handleAddDetails}>Add Money</button>
          </div> : "" }
          
          {screen==='add' && addDetails===true ?
            <div className="addDetails">
                <div className="tag">
                    <GoArrowLeft className="addBack" onClick={handleAddReview}/>
                    <h3>Add Money</h3>
                    <p>Deposit money into your wallet</p>
                </div>
                
                <div className="mode">Direct bank transfer</div>

                <div className="addAccount">
                    <p className="info">You can pay <span className="purple">&#8358;2000</span> into the bank account below</p>

                    <div className="accDetails">
                        <div className="accNumber"><p>2345678999</p> <LuCopy className="copyAcc" /></div>
                        <div className="bankName">Zenith Bank Plc</div>
                        <div className="accName">HANDIWORK-ACCT</div>
                    </div>
                    <div className="sendProof">Send proof of payment to <span className="purple">+234 708 560 4023</span></div>
                    
                    <div className="duration"><span className="purple">*</span>Note: Your wallet is credited within 
                        15mins after deposit confirmation by Handiwork</div>
                </div>                
            </div> : ""
          }

        {
          screen==='withdraw' && withdrawDetails===false ?
          <div className="withdraw-wrapper">
              <h4>TOTAL BALANCE</h4>
              
              <div className="balance">
                  <p>&#8358;300,000</p>
              </div>

              <div className="withdrawDetails">
                  <div className="withdrawBank">
                      <p>Bank Name</p>
                      <div className="withdrawBankName">
                        <CiBank className={defWithdrawDetails ? "hide-field" : "bank-icon"} />
                        {
                            defWithdrawDetails ? "" :
                            <select name="" id="" className={defWithdrawDetails ? "hide-field" : ""}>
                                <option value="">Select bank</option>
                                <option value="">UBA</option>
                                <option value="">FCMB</option>
                                <option value="">First bank</option>
                            </select>
                        }
                        
                        <span className={defWithdrawDetails ? "defWithdrawBankName" : "hide-field"}>UBA</span>
                      </div>
                  </div>

                  <div className="withdrawAccNum">
                      <div className="tag">
                        <p>Bank Account Number</p>
                          <FaInfo className="inf"/>
                      </div>
                      
                      <input type="text" className={defWithdrawDetails ? "hide-field" : ""}/>
                      <span className={defWithdrawDetails ? "defWithdrawNum" : "hide-field"}
                      >2069254008</span>
                  </div>

                  <div className="withdrawAccNum">
                      <div className="tag">
                        <p>Bank Account Name</p>
                      </div>
                      
                      <input type="text" className={defWithdrawDetails ? "hide-field" : ""}/>
                      <span className={defWithdrawDetails ? "defWithdrawAccName" : "hide-field"}
                      >Promise Okpoto</span>
                  </div>

                  <div className="withdrawAccNum">
                      <div className="tag">
                        <p>Enter Amount</p>
                      </div>
                      
                      {/* <input 
                        type="text"
                        value={withdrawValue}
                        onChange={handleWithdrawChange}
                        onBlur={handleWithdrawBlur}
                      /> */}

                    <div className="naira">
                        <span className="sign">&#8358;</span>
                        <input 
                            type="text"
                            value={withdrawValue}
                            onChange={handleWithdrawChange}
                            onBlur={handleWithdrawBlur}
                        />
                    </div>
                  </div>

                  <p className={defWithdrawDetails ? "switchWithdraw" : "hide-field"}
                  >Withdraw to another account? <span onClick={handleDefSwitch}>Change</span></p>

                  <button className="withdrawBtn" onClick={handleWithdrawDetails}>Withdraw</button>
              </div>
          </div> : "" }

          {
            screen==='withdraw' && withdrawDetails===true ?
          
            <div className="withdrawConfirmWrapper">
              <GoArrowLeft className="withdrawBack" onClick={handleWithdrawReview}/>
              <div className="withdrawConfirmDetails">
                <p><span className="diff">Amount: </span> &#8358;20,000</p>
                <p><span className="diff">Bank Acct. Num: </span> 210456789</p>
                <p><span className="diff">Bank Name: </span> Providence Bank</p>
                <p><span className="diff">Bank Acct Name: </span> Emmanuel Victor Clifford</p>
              </div>

              <span className="withdrawWarn">Kindly Confirm that the information 
              provided above are correct.</span>
              
              <button className="confirmWithdrawBtn">Confirm</button>
            </div> : "" }


            {
          screen==='addDefAcc' ?
          <div className="withdraw-wrapper">
              

              <div className="withdrawDetails">
              <GoArrowLeft className={editAcc ? "addDefBack" : "hide-field"} onClick={handleEditAcc}/>
                  <div className="withdrawBank">
                      <p>Bank Name</p>
                      <div className="withdrawBankName">
                        <CiBank className={editAcc ? "bank-icon" : "hide-field"} />
                        {
                            editAcc ? 
                            <select name="" id="">
                                <option value="">Select bank</option>
                                <option value="">UBA</option>
                                <option value="">FCMB</option>
                                <option value="">First bank</option>
                            </select> : ""
                        }
                        
                        <span className={editAcc ? "hide-field" : "defWithdrawBankName"}>UBA</span>
                      </div>
                  </div>

                  <div className="withdrawAccNum">
                      <div className="tag">
                        <p>Bank Account Number</p>
                          <FaInfo className="inf"/>
                      </div>
                      
                      <input type="text" className={editAcc ? "" : "hide-field"}/>
                      <span className={editAcc ? "hide-field" : "defWithdrawNum"}
                      >2069254008</span>
                  </div>

                  <div className="withdrawAccNum">
                      <div className="tag">
                        <p>Bank Account Name</p>
                      </div>
                      
                      <input type="text" className={editAcc ? "" : "hide-field"}/>
                      <span className={editAcc ? "hide-field" : "defWithdrawAccName"}
                      >Promise Okpoto</span>
                  </div>

                  {/* <div className="withdrawAccNum">
                      <div className="tag">
                        <p>Enter Amount</p>
                      </div>
                      
                      <input 
                        type="text"
                        value={withdrawValue}
                        onChange={handleWithdrawChange}
                        onBlur={handleWithdrawBlur}
                      />

                    <div className="naira">
                        <span className="sign">&#8358;</span>
                        <input 
                            type="text"
                            value={withdrawValue}
                            onChange={handleWithdrawChange}
                            onBlur={handleWithdrawBlur}
                        />
                    </div>
                  </div> */}

                  <button className={editAcc ? "hide-field" : "withdrawBtn"} 
                  onClick={handleEditAcc}>Edit</button>
                  
                  <button className={editAcc ? "withdrawBtn" : "hide-field"}>Save</button>
              </div>
          </div> : "" }
      </div>
    </div>
  )
}

export default ProviderWallet
