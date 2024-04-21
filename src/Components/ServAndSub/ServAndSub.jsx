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




function ServiceType() {

  const{serviceDD} = useContext(HandiworkContext)
  const{serviceType} = useContext(HandiworkContext)
  const{handleServiceType} = useContext(HandiworkContext)
  const{serviceValue} = useContext(HandiworkContext)
  const{handleServiceValue} = useContext(HandiworkContext)
  const{handleServiceSelect} = useContext(HandiworkContext)
  const{handleServiceDD} = useContext(HandiworkContext)

  

  return (
        <div className={ serviceDD ? "service-dropdown" : "short"}>
            <span className="select" onClick={handleServiceDD}>
                <div
                className={serviceType ? "selected" : "my-grey"}
                >{ serviceType ? serviceType : "--Select service type--"}
                </div>
                <RiArrowDropDownLine  className={ serviceDD ? 'up' : "search-drop"} 
                onClick={handleServiceDD} />
            </span>

            <ul className={serviceDD ? "" : "hide-field"}>
                <span className="search">
                    <IoSearchOutline className='lens' />
                    <input type="text" className="text" placeholder="Search service type"
                    onChange={handleServiceValue}
                    />
                </span>
            {  
                serviceTypes.map((service, i) =>(
                <li key={i} 
                className={service.toLowerCase().startsWith(serviceValue) ? "" : "hide-field"}
                onClick={() =>{
                    if(service.toLowerCase() !== serviceType.toLowerCase()){
                      handleServiceType(service)
                    handleServiceSelect(service)
                    }

                    handleServiceDD()
                    
                }}
                >{service}</li>
                ))
            }
            </ul>
        </div>
  )
}

function SubCategory() {
  const{serviceType} = useContext(HandiworkContext)
  const{subCategory} = useContext(HandiworkContext)
  const{handleSubCategory} = useContext(HandiworkContext)
  const{subCategoryValue} = useContext(HandiworkContext)
  const{subCategoryDD} = useContext(HandiworkContext)
  const{handleSubCategoryDD} = useContext(HandiworkContext)
  const{handleSubCategoryValue} = useContext(HandiworkContext)
  const{handleSubCategorySelect} = useContext(HandiworkContext)

  return (
    <div className={ subCategoryDD ? "service-dropdown" : "short"}>
        <span className="select" onClick={handleSubCategoryDD}>
            <div
            className={subCategory ? "selected" : "my-grey"}
            >{ subCategory ? subCategory : "sub-category"}
            </div>
            <RiArrowDropDownLine className={ subCategoryDD ? 'up' : "search-drop"} 
            onClick={handleSubCategoryDD} />
        </span>

        <ul className={subCategoryDD ? "" : "hide-field"}>
            <span className="search">
                <IoSearchOutline className='lens' />
                <input type="text" className="text" placeholder="Search sub-category"
                onChange={handleSubCategoryValue}
                />
            </span>
        {
            
            subCategories.map((category, i) =>(
            <li key={i} 
            className={category.toLowerCase().startsWith(subCategoryValue) ? "" : "hide-field"}
            onClick={() =>{
                if(category.toLowerCase() !== subCategory.toLowerCase()){
                  handleSubCategory(category)
                handleSubCategorySelect(category)
                }

                handleSubCategoryDD()
                
            }}
            >{category}</li>
            ))
        }
        </ul>
    </div>
  )
}

export { ServiceType, SubCategory }
