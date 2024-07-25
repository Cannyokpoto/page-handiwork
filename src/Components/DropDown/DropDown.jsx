import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './DropDown.css';
import { HandiworkContext } from '../Context/HandiworkContext';

function DropDown() {

  // const {dropDown} = useContext(HandiworkContext)
  const {sustainDropDown} = useContext(HandiworkContext)
  const {stopDropDown} = useContext(HandiworkContext)

  return (
    <div className="drop-down"
    onMouseEnter={sustainDropDown}
    onMouseLeave={stopDropDown}
    >
      <div className='categories'>
            <ul>
                <li><Link to="/market-place/fashion">Fashion</Link></li>
                <li><Link to="/market-place/catering">Catering</Link></li>
                <li><Link to="/market-place/electrical">Electricians</Link></li>
                <li><Link to="/market-place/automobile">Automobile</Link></li>
                <li><Link to="/market-place/dispatch">Dispatch</Link></li>
            </ul>

            <ul>
                <li><Link to="/market-place/beauticians">Beaticians</Link></li>
                <li><Link to="/market-place/laundry">Laundry</Link></li>
                <li><Link to="/market-place/realtors">Realtors</Link></li>
                <li><Link to="/market-place/barbers">Barbers</Link></li>
                <li><Link to="/market-place">See all...</Link></li>
            </ul>
      </div>
    </div>
  )
}

export default DropDown
