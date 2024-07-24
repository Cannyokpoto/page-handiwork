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

          <Link to="/market-place/laundry">
            {/* <TbHeartStar className="categoery-icon" /> */}
            <FaHome className="categoery-icon" />
            <p>Laundry</p>
            <button>
              Explore <FaArrowRightLong className="arrow" />
            </button>
          </Link>

          <Link to="/market-place/electrical">
            <MdEngineering className="categoery-icon" />
            <p>Electricians</p>
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

          <Link to="/market-place/dispatch">
            <FaMotorcycle className="categoery-icon" />
            <p>Dispatch</p>
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
        See all
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

          <Link to="/market-place/vehicle-towing">
            <p>Vehicle Towing</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/electronics">
            <p>Appliances/Electronics Repairer</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/automobile">
            <p>AUTO-Mechanic/A.C/Rewire/Panel</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/welding">
            <p>Welder Service</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/beauticians">
            <p>Beauticians</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/dispatch">
            <p>Dispatch Rider</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/laundry">
            <p>Cleaning / Laundry / Fumigation</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/barbers">
            <p>Barber</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/brick-layers">
            <p>Brick Layer / Tiller / POP</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/carpentry">
            <p>Carpentary Services</p>
            <FaArrowRightLong className="arrow" />
          </Link>

          <Link to="/market-place/catering">
            <p>Catering Services</p>
            <FaArrowRightLong className="arrow" />
          </Link>
        </div>

        {showMore ? (
          <div className="category-row">
            <Link to="/market-place/electrical">
              <p>Electrical / Inverter Services</p>
              <FaArrowRightLong className="arrow" />
            </Link>

            <Link to="/market-place/generator">
              <p>Generator Services</p>
              <FaArrowRightLong className="arrow" />
            </Link>

            <Link to="/market-place/hair-stylists">
              <p>Hair Stylist</p>
              <FaArrowRightLong className="arrow" />
            </Link>

            <Link to="/market-place/interior">
              <p>Home/Interior Fittings</p>
              <FaArrowRightLong className="arrow" />
            </Link>

            <Link to="/market-place/painters">
              <p>Painter /Screeder / Wallpaper</p>
              <FaArrowRightLong className="arrow" />
            </Link>

            <Link to="/market-place/phone-laptop">
              <p>Phone / Laptop</p>
              <FaArrowRightLong className="arrow" />
            </Link>

            <Link to="/market-place/photography">
              <p>Photographer / Video</p>
              <FaArrowRightLong className="arrow" />
            </Link>

            <Link to="/market-place/plumbers">
              <p>Plumbing Services</p>
              <FaArrowRightLong className="arrow" />
            </Link>

            <Link to="/market-place/realtors">
              <p>Real Estate</p>
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

          <Link to="/market-place/vehicle-towing">
            <CiUser className="user" />
            <p>Vehicle Towing</p>
          </Link>

          <Link to="/market-place/electronics">
            <CiUser className="user" />
            <p>Appliances/Electronics Repairer</p>
          </Link>

          <Link to="/market-place/automobile">
            <CiUser className="user" />
            <p>AUTO-Mechanic/A.C/Rewire/Panel</p>
          </Link>

          <Link to="/market-place/welding">
            <CiUser className="user" />
            <p>Welding Service</p>
          </Link>
        </div>

        {showMore ? (
          <div className="category-row">
            <Link to="/market-place/beauticians">
              <CiUser className="user" />
              <p>Beauticians</p>
            </Link>

            <Link to="/market-place/dispatch">
              <CiUser className="user" />
              <p>Dispatch Rider</p>
            </Link>

            <Link to="/market-place/laundry">
              <CiUser className="user" />
              <p>Cleaning / Laundry / Fumigation</p>
            </Link>

            <Link to="/market-place/barbers">
              <CiUser className="user" />
              <p>Barber</p>
            </Link>

            <Link to="/market-place/brick-layers">
              <CiUser className="user" />
              <p>Brick Layer / Tiller / POP</p>
            </Link>

            <Link to="/market-place/carpentry">
              <CiUser className="user" />
              <p>Carpentary Services</p>
            </Link>

            <Link to="/market-place/catering">
              <CiUser className="user" />
              <p>Catering Services</p>
            </Link>

            <Link to="/market-place/electrical">
              <CiUser className="user" />
              <p>Electrical / Inverter Services</p>
            </Link>

            <Link to="/market-place/generator">
              <CiUser className="user" />
              <p>Generator Services</p>
            </Link>

            <Link to="/market-place/hair-stylists">
              <CiUser className="user" />
              <p>Hair Stylist</p>
            </Link>

            <Link to="/market-place/interior">
              <CiUser className="user" />
              <p>Home/Interior Fittings</p>
            </Link>

            <Link to="/market-place/painters">
              <CiUser className="user" />
              <p>Painter /Screeder / Wallpaper</p>
            </Link>

            <Link to="/market-place/phone-laptop">
              <CiUser className="user" />
              <p>Phone / Laptop</p>
            </Link>

            <Link to="/market-place/photography">
              <CiUser className="user" />
              <p>Photographer / Video</p>
            </Link>

            <Link to="/market-place/plumbers">
              <CiUser className="user" />
              <p>Plumbing Services</p>
            </Link>

            <Link to="/market-place/realtors">
              <CiUser className="user" />
              <p>Real Estate</p>
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
