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
                <li><Link to="/market-place/hospitality">Hospitality</Link></li>
                <li><Link to="/market-place/technicians">Technicians</Link></li>
                <li><Link to="/market-place/automobile">Automobile</Link></li>
                <li><Link to="/market-place/logistics">Logistics</Link></li>
            </ul>

            <ul>
                <li><Link to="/market-place/beauticians">Beaticians</Link></li>
                <li><Link to="/market-place/domestic">Domestic</Link></li>
                <li><Link to="/market-place/tutors">Tutors</Link></li>
                <li><Link to="/market-place/health">Health</Link></li>
            </ul>
      </div>
    </div>
  )
}

export default DropDown
