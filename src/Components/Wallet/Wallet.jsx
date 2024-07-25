import React from 'react'
import './Wallet.css'
import { GoPlus } from "react-icons/go";


function ProviderWallet() {
  return (
    <div className='wallet'>
      <div className="side">
        <p className='name'>Hi, <span>canny</span></p>

        <div className="btns">
            <button className='active'>Wallet</button>
            <button>Add Money</button>
            <button>Withdraw</button>
            <button>Transfer</button>
        </div>
      </div>

      <div className="main-wrapper">
        <div className="balance-wrapper">
            <h4>TOTAL BALANCE</h4>
            
            <div className="balance">
                <p>&#8358;300,000</p>
                <GoPlus />
            </div>

            <div className="history">
                <div className="tag">
                    <h5>Transactions</h5>
                    <button>View All</button>
                </div>

                <div className="transaction-list">
                    <div className="record">
                        <div className="details">
                            <h5>Nneka Ogbueli</h5>
                            <p>Makeup Artist</p>
                        </div>

                        <div className="amount">-&#8358;30,000</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProviderWallet
