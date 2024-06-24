import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CategoryBox.css";
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
import { CiUser } from "react-icons/ci";

function CategoryBox() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="category-box">
      <h3>Browse By Category</h3>

      <div className="category-layout">
        <div className="category-row">
          <Link to="/market-place/fashion">
            <GiClothes className="categoery-icon" />
            <p>Fashion</p>
            <button>
              Explore <FaArrowRightLong className="arrow" />
            </button>
          </Link>

          <Link to="/market-place/hospitality">
            <TbHeartStar className="categoery-icon" />
            <p>Hospitality</p>
            <button>
              Explore <FaArrowRightLong className="arrow" />
            </button>
          </Link>

          <Link to="/market-place/technicians">
            <MdEngineering className="categoery-icon" />
            <p>Technicians</p>
            <button>
              Explore <FaArrowRightLong className="arrow" />
            </button>
          </Link>

          <Link to="/market-place/automobile">
            <FaCar className="categoery-icon" />
            <p>Automobile</p>
            <button>
              Explore <FaArrowRightLong className="arrow" />
            </button>
          </Link>

          <Link to="/market-place/logistics">
            <FaMotorcycle className="categoery-icon" />
            <p>Logistics</p>
            <button>
              Explore <FaArrowRightLong className="arrow" />
            </button>
          </Link>

          <Link to="/market-place/beauticians">
            <GiPencilBrush className="categoery-icon" />
            <p>Beauticians</p>
            <button>
              Explore <FaArrowRightLong className="arrow" />
            </button>
          </Link>
        </div>

        {/* <div className='category-row'>
                
                <Link to="/market-place/domestic">
                    <FaHome className='categoery-icon' />
                    <p>Domestic</p>
                    <button>Explore <FaArrowRightLong className='arrow' /></button>
                </Link>

                <Link to="/market-place/tutors">
                    <GiTeacher className='categoery-icon' />
                    <p>Tutors</p>
                    <button>Explore <FaArrowRightLong className='arrow' /></button>
                </Link>

                <Link to="/market-place/health">
                    <MdOutlineHealthAndSafety className='categoery-icon' />
                    <p>Health</p>
                    <button>Explore <FaArrowRightLong className='arrow' /></button>
                </Link>
            </div>  */}
      </div>

      {/* <span  onClick={() => setShowMore(!showMore)}
        >{ showMore ? "show less" : "show more" }</span> */}

      <Link to="/market-place" className="more-less">
        See more
      </Link>
    </div>
  );
}

function SecondCategoryBox() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="second-category-box">
      <div className="category-layout">
        <div className="category-row">
          <Link to="/market-place/fashion">
            <p>Fashion</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/hospitality">
            <p>Vehicle Towing</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/technicians">
            <p>Appliances/Electronics Repairer</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/automobile">
            <p>AUTO-Mechanic/A.C/Rewire/Panel</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/logistics">
            <p>Welder Service</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/beauticians">
            <p>Beauticians</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/logistics">
            <p>Dispatch Rider</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/beauticians">
            <p>Cleaning / Laundry / Fumigation</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/logistics">
            <p>Barber</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/beauticians">
            <p>Brick Layer / Tiller / POP</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/logistics">
            <p>Carpentary Services</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/beauticians">
            <p>Catering Services</p>
            <FaArrowRightLong className="arrow" />
          </Link>
        </div>

        {showMore ? (
          <div className="category-row">
            <Link to="/market-place/domestic">
              <p>Electrical / Inverter Services</p>
              <FaArrowRightLong className="arrow" />
            </Link>

            <Link to="/market-place/tutors">
              <p>Generator Services</p>
              <FaArrowRightLong className="arrow" />
            </Link>

            <Link to="/market-place/health">
              <p>Hair Stylist</p>
              <FaArrowRightLong className="arrow" />
            </Link>

            <Link to="/market-place/domestic">
              <p>Home/Interior Fittings</p>
              <FaArrowRightLong className="arrow" />
            </Link>

            <Link to="/market-place/tutors">
              <p>Painter /Screeder / Wallpaper</p>
              <FaArrowRightLong className="arrow" />
            </Link>

            <Link to="/market-place/health">
              <p>Phone / Laptop</p>
              <FaArrowRightLong className="arrow" />
            </Link>

            <Link to="/market-place/domestic">
              <p>Photographer / Video</p>
              <FaArrowRightLong className="arrow" />
            </Link>

            <Link to="/market-place/tutors">
              <p>Plumbing Services</p>
              <FaArrowRightLong className="arrow" />
            </Link>

            <Link to="/market-place/health">
              <p>Real Estate Realtor</p>
              <FaArrowRightLong className="arrow" />
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="mobile-category-layout">
        <div className="category-row">
          <Link to="/market-place/fashion">
            <CiUser className="user" />
            <p>Fashion</p>
          </Link>

          <Link to="/market-place/hospitality">
            <CiUser className="user" />
            <p>Vehicle Towing</p>
          </Link>

          <Link to="/market-place/technicians">
            <CiUser className="user" />
            <p>Appliances/Electronics Repairer</p>
          </Link>

          <Link to="/market-place/automobile">
            <CiUser className="user" />
            <p>AUTO-Mechanic/A.C/Rewire/Panel</p>
          </Link>

          <Link to="/market-place/logistics">
            <CiUser className="user" />
            <p>Welder Service</p>
          </Link>

          <Link to="/market-place/beauticians">
            <CiUser className="user" />
            <p>Beauticians</p>
          </Link>

          <Link to="/market-place/logistics">
            <CiUser className="user" />
            <p>Dispatch Rider</p>
          </Link>

          <Link to="/market-place/beauticians">
            <CiUser className="user" />
            <p>Cleaning / Laundry / Fumigation</p>
          </Link>

          <Link to="/market-place/logistics">
            <CiUser className="user" />
            <p>Barber</p>
          </Link>

          <Link to="/market-place/beauticians">
            <CiUser className="user" />
            <p>Brick Layer / Tiller / POP</p>
          </Link>

          <Link to="/market-place/logistics">
            <CiUser className="user" />
            <p>Carpentary Services</p>
          </Link>

          <Link to="/market-place/beauticians">
            <CiUser className="user" />
            <p>Catering Services</p>
          </Link>
        </div>

        {showMore ? (
          <div className="category-row">
            <Link to="/market-place/domestic">
              <CiUser className="user" />
              <p>Electrical / Inverter Services</p>
            </Link>

            <Link to="/market-place/tutors">
              <CiUser className="user" />
              <p>Generator Services</p>
            </Link>

            <Link to="/market-place/health">
              <CiUser className="user" />
              <p>Hair Stylist</p>
            </Link>

            <Link to="/market-place/domestic">
              <CiUser className="user" />
              <p>Home/Interior Fittings</p>
            </Link>

            <Link to="/market-place/tutors">
              <CiUser className="user" />
              <p>Painter /Screeder / Wallpaper</p>
            </Link>

            <Link to="/market-place/health">
              <CiUser className="user" />
              <p>Phone / Laptop</p>
            </Link>

            <Link to="/market-place/domestic">
              <CiUser className="user" />
              <p>Photographer / Video</p>
            </Link>

            <Link to="/market-place/tutors">
              <CiUser className="user" />
              <p>Plumbing Services</p>
            </Link>

            <Link to="/market-place/health">
              <CiUser className="user" />
              <p>Real Estate Realtor</p>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>

      <span onClick={() => setShowMore(!showMore)} className="more-less">
        {showMore ? "Show less" : "See all"}
      </span>
    </div>
  );
}

export { CategoryBox, SecondCategoryBox };
