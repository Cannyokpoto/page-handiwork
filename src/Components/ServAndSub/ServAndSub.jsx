import React, { useState, useContext } from 'react'
import './ServAndSub.css'
import Select from "react-select"
import { serviceTypes, subCategories } from "../Assets/Data";
import { HandiworkContext } from '../Context/HandiworkContext';
import Downshift, { useCombobox } from 'downshift';
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";


import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const options = [
  'Apple',
  'Banana',
  'Cherry',
  'Grape',
  'Orange'
];


//Styles for select element
const customStyles = {
    control: (provided) => ({
      ...provided,
      height: 40,
      border: "none",
      fontSize: 15,
      outline: "none"
    }),

    placeholder: (provided) => ({
        ...provided,
        color: '#000', // Customize placeholder color
        fontSize: 15
      })
  };

function Wrong() {
  const{handleServiceType} = useContext(HandiworkContext)
  const{selectedOption} = useContext(HandiworkContext)
  const{formData} = useContext(HandiworkContext)
  const{handleChange} = useContext(HandiworkContext)
  const{other} = useContext(HandiworkContext)
    // const [selectedOption, setSelectedOption] = useState(null);

    // const handleChange = (selectedOption)=>{
    //     setSelectedOption(selectedOption)
    // }

  return (
    <div className="dropdown-container">
        <Select
            options={serviceTypes}
            value={other}
            onChange={handleServiceType}
            styles={customStyles}
            className="custom-select"
            placeholder="--Select service type--"
         />
    </div>
  )
}

function SubCategory() {
  const{handleSubCategory} = useContext(HandiworkContext)
  const{formData} = useContext(HandiworkContext)

  return (
    <div className="dropdown-container">
        <Select
            options={subCategories}
            value={formData.subCategory}
            onChange={handleSubCategory}
            placeholder="Select sub-category"
            className="custom-select"
            styles={customStyles}
         />
    </div>
  )
}



const DropdownExample = () => {


  return (
    <div></div>
  );
};




function ServiceType() {
  // const{handleServiceType} = useContext(HandiworkContext)
  // const{serviceType} = useContext(HandiworkContext)
  // const{selectedOption} = useContext(HandiworkContext)
  // const{formData} = useContext(HandiworkContext)
  // const{handleChange} = useContext(HandiworkContext)
  // const{other} = useContext(HandiworkContext)

  const [serviceDD, setServiceDD] = useState(false);
  const [serviceValue, setServiceValue] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleServiceDD = ()=>{
    setServiceDD(!serviceDD)
  }

  const handleServiceValue = (e)=>{
    setServiceValue(e.target.value.toLowerCase())
  }

  

  return (
    <div className={ serviceDD ? "service-dropdown" : "short"}>
        <div className="select" onClick={handleServiceDD}>
          <span
          className={selectedService ? "" : "my-grey"}
          >{ selectedService ? selectedService : "--Select service type--"}</span>
          <RiArrowDropDownLine  className={ serviceDD ? 'up' : "search-drop"} 
          onClick={handleServiceDD} />
        </div>

        {/* <h1 className='canny'>{inputValue}canny</h1> */}

        <ul className={serviceDD ? "" : "hide-field"}>
          <div className="search">
            <IoSearchOutline className='lens' />
            <input type="text" placeholder="Search service type"
              onChange={handleServiceValue}
            />
          </div>
          {
            serviceTypes.map((service, i) =>(
              <li key={i} 
              className={service.toLowerCase().startsWith(serviceValue) ? "" : "hide-field"}
              onClick={() =>{
                if(service.toLowerCase() !== selectedService.toLowerCase()){
                  setSelectedService(service)
                }
                setServiceDD(false)
              }}
              >{service}</li>
            ))
          }
        </ul>
    </div>
  )
}

export { ServiceType, SubCategory, DropdownExample}
