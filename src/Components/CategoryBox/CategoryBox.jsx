import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './CategoryBox.css'
import { GiClothes } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { TbHeartStar } from "react-icons/tb";
import { MdEngineering } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { GiPencilBrush } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { MdOutlineHealthAndSafety } from "react-icons/md";

function CategoryBox() {
    // <Link ><img onClick={window.scrollTo(0,0)} src={props.image} alt='' /></Link>
    const [showMore, setShowMore] = useState(false);
  return (
    <div className='category-box'>
      <h3>Browse by category</h3>

      <div className='category-layout'>
        <div className='category-row'>
            <Link to="/market-place/fashion">
                <GiClothes className='categoery-icon' />
                <p>Fashion</p>
                <button>Explore <FaArrowRightLong className='arrow' /></button>
            </Link>
            <Link to="/market-place/hospitality">
                <TbHeartStar className='categoery-icon' />
                <p>Hospitality</p>
                <button>Explore <FaArrowRightLong className='arrow' /></button>
            </Link>
            <Link to="/market-place/technicians">
                <MdEngineering className='categoery-icon' />
                <p>Technicians</p>
                <button>Explore <FaArrowRightLong className='arrow' /></button>
            </Link>
        </div>

        {showMore ?
        <div className='category-row'>
            <Link>
                <FaCar className='categoery-icon' />
                <p>Automobile</p>
                <button>Explore <FaArrowRightLong className='arrow' /></button>
            </Link>
            <Link>
                <FaMotorcycle className='categoery-icon' />
                <p>Logistics</p>
                <button>Explore <FaArrowRightLong className='arrow' /></button>
            </Link>
            <Link>
                <GiPencilBrush className='categoery-icon' />
                <p>Beauticians</p>
                <button>Explore <FaArrowRightLong className='arrow' /></button>
            </Link>
            <Link>
                <FaHome className='categoery-icon' />
                <p>Domestic</p>
                <button>Explore <FaArrowRightLong className='arrow' /></button>
            </Link>
            <Link>
                <GiTeacher className='categoery-icon' />
                <p>Tutors</p>
                <button>Explore <FaArrowRightLong className='arrow' /></button>
            </Link>
            <Link>
                <GoLaw className='categoery-icon' />
                <p>Legal Services</p>
                <button>Explore <FaArrowRightLong className='arrow' /></button>
            </Link>

            <Link>
                <MdOutlineHealthAndSafety className='categoery-icon' />
                <p>Health</p>
                <button>Explore <FaArrowRightLong className='arrow' /></button>
            </Link>
        </div> : "" }


        <div className="more-less" onClick={() => setShowMore(!showMore)}>
            { showMore ? <RiArrowDropUpLine className='less'/> : <RiArrowDropDownLine className='more' /> }
        </div>
      </div>
    </div>
  )
}

export default CategoryBox;
