import React, { useState, useContext, useEffect } from 'react'
import './ServAndSub.css'
import Select from "react-select"
import { serviceTypes, subCategories } from "../Assets/Data";
import { HandiworkContext } from '../Context/HandiworkContext';
import Downshift, { useCombobox } from 'downshift';
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from 'axios';


// Custom hook to manage shared state

const ServSubState = () => {
    const [allServiceTypes, setAllServiceTypes] = useState([])
    console.warn("allServiceTypes:", allServiceTypes)

    const [serviceTypeId, setServiceTypeId] = useState("")
    console.warn("serviceTypeId:", serviceTypeId)


    //to fetch service type
    const serviceTypeUrl = `https://handiworks.cosmossound.com.ng/api/skillType/services/allServiceWithcategories`

  useEffect(()=>{
    function fetchServiceTypes(){
        axios.get(serviceTypeUrl)
            .then(res => {
              setAllServiceTypes(res.data)
            })
            .catch(dupError=> console.log("caughtError:", dupError))
      }

      fetchServiceTypes()
  }, [])

  
    return {allServiceTypes, setAllServiceTypes, 
        serviceTypeId, setServiceTypeId, };
  };



function ServiceType({allServiceTypes, setAllServiceTypes, serviceTypeId, setServiceTypeId, }) {

//   const{allServiceTypes} = useContext(HandiworkContext)
  const{serviceDD} = useContext(HandiworkContext)
  const{serviceType} = useContext(HandiworkContext)
  const{handleServiceType} = useContext(HandiworkContext)
  const{serviceValue} = useContext(HandiworkContext)
  const{handleServiceValue} = useContext(HandiworkContext)
  const{handleServiceSelect} = useContext(HandiworkContext)
  const{handleServiceDD} = useContext(HandiworkContext)

//   const [allServiceTypes, setAllServiceTypes] = ServiceTypeState()
//   const [serviceTypeId, setServiceTypeId] = ServiceTypeIdState("");
//   const [allSubCategories, setAllSubCategories] = SubCategoryState()


  //To fetch all service types
//   const [allServiceTypes, setAllServiceTypes] = useState([])
//   console.warn("allServiceTypes:", allServiceTypes)

//   const [serviceTypeId, setServiceTypeId] = useState([])
//   console.warn("serviceTypeId:", serviceTypeId)

//   const serviceTypeUrl = `https://handiworks.cosmossound.com.ng/api/skillType/services/allServiceWithcategories`

//   useEffect(()=>{
//     function fetchServiceTypes(){
//         axios.get(serviceTypeUrl)
//             .then(res => {
//               setAllServiceTypes(res.data)
//             })
//             .catch(dupError=> console.log("caughtError:", dupError))
//       }

//       fetchServiceTypes()
//   }, [])

  //To fetch all subcategories

//   const categoryUrl = `https://handiworks.cosmossound.com.ng/api/skillType/service/servicewithcategories/${serviceTypeId}`

//   useEffect(()=>{
//     function fetchSubCategories(){
//         axios.get(categoryUrl)
//             .then(res => {
//               setAllSubCategories(res.data.subCategories)
//             })
//             .catch(dupError=> console.log("caughtError:", dupError))
//       }

//       fetchSubCategories()
//   }, [serviceTypeId])

  

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
                allServiceTypes && allServiceTypes.map((service, i) =>(
                <li key={i} 
                className={service.serviceType.toLowerCase().includes(serviceValue) ? "" : "hide-field"}
                onClick={() =>{
                    if(service.serviceType.toLowerCase() !== serviceType.toLowerCase()){
                      handleServiceType(service.serviceType)
                      handleServiceSelect(service.serviceType)
                    }

                    handleServiceDD()
                    setServiceTypeId(service.id)
                    
                }}
                >{service.serviceType}</li>
                ))
            }
            </ul>
        </div>
  )
}

function SubCategory({allServiceTypes, setAllServiceTypes, serviceTypeId, setServiceTypeId, }) {
  const{serviceType} = useContext(HandiworkContext)
  const{subCategory} = useContext(HandiworkContext)
  const{handleSubCategory} = useContext(HandiworkContext)
  const{subCategoryValue} = useContext(HandiworkContext)
  const{subCategoryDD} = useContext(HandiworkContext)
  const{handleSubCategoryDD} = useContext(HandiworkContext)
  const{handleSubCategoryValue} = useContext(HandiworkContext)
  const{handleSubCategorySelect} = useContext(HandiworkContext)

//   const [allServiceTypes, setAllServiceTypes] = ServiceTypeState()
//   const [allSubCategories, setAllSubCategories] = SubCategoryState()
//   const [serviceTypeId, setServiceTypeId] = ServiceTypeIdState();
//   console.warn("allSubCategories:", allSubCategories)
  
//   console.warn("allSubCategories:", allSubCategories)

  //To fetch all service types
//   const [allServiceTypes, setAllServiceTypes] = useState([])
//   console.warn("allServiceTypes:", allServiceTypes)

//   const [serviceTypeId, setServiceTypeId] = useState([])
//   console.warn("serviceTypeId:", serviceTypeId)

//   const serviceTypeUrl = `https://handiworks.cosmossound.com.ng/api/skillType/services/allServiceWithcategories`

//   useEffect(()=>{
//     function fetchServiceTypes(){
//         axios.get(serviceTypeUrl)
//             .then(res => {
//               setAllServiceTypes(res.data)
//             })
//             .catch(dupError=> console.log("caughtError:", dupError))
//       }

//       fetchServiceTypes()
//   }, [])
  

  //To fetch all subcategories
  
  const [allSubCategories, setAllSubCategories] = useState([])
  console.warn("allSubCategories:", allSubCategories)

  const categoryUrl = `https://handiworks.cosmossound.com.ng/api/skillType/service/servicewithcategories/${serviceTypeId}`

  useEffect(()=>{
    function fetchSubCategories(){
        axios.get(categoryUrl)
            .then(res => {
                setAllSubCategories(res.data.subCategories)
            })
            .catch(dupError=> console.log("caughtError:", dupError))
      }

      fetchSubCategories()
  }, [serviceTypeId])

  return (
    <div className={ subCategoryDD ? "service-dropdown" : "short"}>
        <span className="select" onClick={handleSubCategoryDD}>
            <div
            className={subCategory ? "selected" : "my-grey"}
            >{ subCategory ? subCategory : "--select sub-category--"}
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
            
            allSubCategories && allSubCategories.map((category, i) =>(
            <li key={i} 
            className={category.toLowerCase().includes(subCategoryValue) ? "" : "hide-field"}
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

function ServiceType2({allServiceTypes, setAllServiceTypes, serviceTypeId, setServiceTypeId, }) {

  //   const{allServiceTypes} = useContext(HandiworkContext)
    const{serviceDD} = useContext(HandiworkContext)
    const{serviceType} = useContext(HandiworkContext)
    const{handleServiceType} = useContext(HandiworkContext)
    const{serviceValue} = useContext(HandiworkContext)
    const{handleServiceValue} = useContext(HandiworkContext)
    const{handleServiceSelect} = useContext(HandiworkContext)
    const{handleServiceDD, resetFilter} = useContext(HandiworkContext)
  
  //   const [allServiceTypes, setAllServiceTypes] = ServiceTypeState()
  //   const [serviceTypeId, setServiceTypeId] = ServiceTypeIdState("");
  //   const [allSubCategories, setAllSubCategories] = SubCategoryState()
  
  
    //To fetch all service types
  //   const [allServiceTypes, setAllServiceTypes] = useState([])
  //   console.warn("allServiceTypes:", allServiceTypes)
  
  //   const [serviceTypeId, setServiceTypeId] = useState([])
  //   console.warn("serviceTypeId:", serviceTypeId)
  
  //   const serviceTypeUrl = `https://handiworks.cosmossound.com.ng/api/skillType/services/allServiceWithcategories`
  
  //   useEffect(()=>{
  //     function fetchServiceTypes(){
  //         axios.get(serviceTypeUrl)
  //             .then(res => {
  //               setAllServiceTypes(res.data)
  //             })
  //             .catch(dupError=> console.log("caughtError:", dupError))
  //       }
  
  //       fetchServiceTypes()
  //   }, [])
  
    //To fetch all subcategories
  
  //   const categoryUrl = `https://handiworks.cosmossound.com.ng/api/skillType/service/servicewithcategories/${serviceTypeId}`
  
  //   useEffect(()=>{
  //     function fetchSubCategories(){
  //         axios.get(categoryUrl)
  //             .then(res => {
  //               setAllSubCategories(res.data.subCategories)
  //             })
  //             .catch(dupError=> console.log("caughtError:", dupError))
  //       }
  
  //       fetchSubCategories()
  //   }, [serviceTypeId])
  
    
  
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
                  <li onClick={resetFilter}>All service types</li>
              {  
                  allServiceTypes && allServiceTypes.map((service, i) =>(
                  <li key={i} 
                  className={service.serviceType.toLowerCase().includes(serviceValue) ? "" : "hide-field"}
                  onClick={() =>{
                      if(service.serviceType.toLowerCase() !== serviceType.toLowerCase()){
                        handleServiceType(service.serviceType)
                        handleServiceSelect(service.serviceType)
                      }
  
                      handleServiceDD()
                      setServiceTypeId(service.id)
                      
                  }}
                  >{service.serviceType}</li>
                  ))
              }
              </ul>
          </div>
    )
  }
  
  function SubCategory2({allServiceTypes, setAllServiceTypes, serviceTypeId, setServiceTypeId, }) {
    const{serviceType} = useContext(HandiworkContext)
    const{subCategory} = useContext(HandiworkContext)
    const{handleSubCategory} = useContext(HandiworkContext)
    const{subCategoryValue} = useContext(HandiworkContext)
    const{subCategoryDD} = useContext(HandiworkContext)
    const{handleSubCategoryDD} = useContext(HandiworkContext)
    const{handleSubCategoryValue} = useContext(HandiworkContext)
    const{handleSubCategorySelect} = useContext(HandiworkContext)
  
  //   const [allServiceTypes, setAllServiceTypes] = ServiceTypeState()
  //   const [allSubCategories, setAllSubCategories] = SubCategoryState()
  //   const [serviceTypeId, setServiceTypeId] = ServiceTypeIdState();
  //   console.warn("allSubCategories:", allSubCategories)
    
  //   console.warn("allSubCategories:", allSubCategories)
  
    //To fetch all service types
  //   const [allServiceTypes, setAllServiceTypes] = useState([])
  //   console.warn("allServiceTypes:", allServiceTypes)
  
  //   const [serviceTypeId, setServiceTypeId] = useState([])
  //   console.warn("serviceTypeId:", serviceTypeId)
  
  //   const serviceTypeUrl = `https://handiworks.cosmossound.com.ng/api/skillType/services/allServiceWithcategories`
  
  //   useEffect(()=>{
  //     function fetchServiceTypes(){
  //         axios.get(serviceTypeUrl)
  //             .then(res => {
  //               setAllServiceTypes(res.data)
  //             })
  //             .catch(dupError=> console.log("caughtError:", dupError))
  //       }
  
  //       fetchServiceTypes()
  //   }, [])
    
  
    //To fetch all subcategories
    
    const [allSubCategories, setAllSubCategories] = useState([])
    console.warn("allSubCategories:", allSubCategories)
  
    const categoryUrl = `https://handiworks.cosmossound.com.ng/api/skillType/service/servicewithcategories/${serviceTypeId}`
  
    useEffect(()=>{
      function fetchSubCategories(){
          axios.get(categoryUrl)
              .then(res => {
                  setAllSubCategories(res.data.subCategories)
              })
              .catch(dupError=> console.log("caughtError:", dupError))
        }
  
        fetchSubCategories()
    }, [serviceTypeId])
  
    return (
      <div className={ subCategoryDD ? "service-dropdown" : "short"}>
          <span className="select" onClick={handleSubCategoryDD}>
              <div
              className={subCategory ? "selected" : "my-grey"}
              >{ subCategory ? subCategory : "--select sub-category--"}
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
              
              allSubCategories && allSubCategories.map((category, i) =>(
              <li key={i} 
              className={category.toLowerCase().includes(subCategoryValue) ? "" : "hide-field"}
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

export { ServiceType, SubCategory, ServSubState, ServiceType2, SubCategory2 }
