import React, { useState, useContext, useEffect } from 'react';
import { HandiworkContext } from '../Context/HandiworkContext';
import ServiceProvider from '../ServiceProvider/ServiceProvider'
import ReactPaginate from 'react-paginate';
import './AllServiceProviders.css';
import { Link } from "react-router-dom"
import { GoArrowLeft } from "react-icons/go";
import axios from 'axios';
import { IoSearchOutline } from "react-icons/io5";
import '../SearchBar/SearchBar.css';
import { ServiceType2, SubCategory2, ServSubState } from '../ServAndSub/ServAndSub';


function AllServiceProviders() {
  
  //To fetch All providers
  // const [AllServiceProvidersData, setAllServiceProvidersData] = useState([])
  const {AllServiceProvidersData, loadingServices} = useContext(HandiworkContext)

  const {allServiceTypes, setAllServiceTypes, serviceTypeId, setServiceTypeId} = ServSubState()

  //ServiceType Data
  const{serviceDD, serviceType, handleServiceType, 
    serviceValue, handleServiceValue, handleServiceDD} = useContext(HandiworkContext)

//Sub category data
  const{subCategory, handleSubCategory, subCategoryValue, 
    subCategoryDD, handleSubCategoryDD, 
    handleSubCategoryValue, handleSubCategorySelect} = useContext(HandiworkContext)

  const [filteredProviders, setFilteredProviders] = useState([]);

  
  // const url = `https://handiworks.cosmossound.com.ng/api/skill-providers/skillproviders`

  //To fetch All Providers
  // useEffect(()=>{
  //       function fetchProviders(){
  //         axios.get(url)
  //         .then(res => {
  //           setLoading(false)
  //         setAllServiceProvidersData(res.data.skillProviders)
  //         setFilteredProviders(res.data.skillProviders)
  //         })
  //         .catch(dupError=> console.log("caughtError:", dupError))
  //       }

  //       fetchProviders()
  // },[])
  

    //To enhance general market place search
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) =>{
      const location = event.target.value
      setSearchTerm(location)
    }


    //Filter Providers based on selected service type, subCategory and address
    useEffect(()=>{
      if (serviceType ==='' && subCategory ==='' && searchTerm ==='') {
        setFilteredProviders(AllServiceProvidersData);
      }
      else if(serviceType !=='' && subCategory==='' && searchTerm==='') {
        const filteredServiceType = AllServiceProvidersData && AllServiceProvidersData
        .filter(provider => provider.serviceType.includes(serviceType));
        setFilteredProviders(filteredServiceType);
      }

      else if(serviceType !=='' && subCategory !=='' && searchTerm==='') {
          const filteredSubCategory = AllServiceProvidersData && AllServiceProvidersData
          .filter(provider => {
           return provider.serviceType.includes(serviceType) && provider.subCategory.includes(subCategory)
          });
          setFilteredProviders(filteredSubCategory);
      }

      else if(serviceType !=='' && subCategory !=='' && searchTerm !=='') {
        const filteredAddress = AllServiceProvidersData && AllServiceProvidersData
        .filter(provider => {
          return provider.serviceType.includes(serviceType) && provider.subCategory.includes(subCategory) &&
          provider.address.toLowerCase().includes(searchTerm.toLowerCase())
        });
        return setFilteredProviders(filteredAddress);
      }

      else if(serviceType==='' && subCategory==='' && searchTerm !=='') {
          const filteredAddress = AllServiceProvidersData && AllServiceProvidersData
          .filter(provider => {
            return provider.address.toLowerCase().includes(searchTerm.toLowerCase())
          });
          return setFilteredProviders(filteredAddress);
        }        
      
    }, [AllServiceProvidersData, serviceType, subCategory, searchTerm])
    
    
    //Filter Providers based on selected service type
    // useEffect(()=>{
    //   if (service === '') {
    //     setFilteredProviders(AllServiceProvidersData);
    //   } else {
    //     const filtered = AllServiceProvidersData && AllServiceProvidersData
    //     .filter(provider => provider.serviceType.includes(service));
    //     setFilteredProviders(filtered);
    //   }
    //   //
      
    // }, [service, AllServiceProvidersData])


    //To fetch all service types
    // const [allServiceTypes, setAllServiceTypes] = useState([])

    const serviceTypeUrl = `https://handiworks.cosmossound.com.ng/api/skillType/services/allServiceWithcategories`

  // useEffect(()=>{
  //   function fetchServiceTypes(){
  //       axios.get(serviceTypeUrl)
  //           .then(res => {
  //             setAllServiceTypes(res.data)
  //           })
  //           .catch(dupError=> console.log("caughtError:", dupError))
  //     }

  //     fetchServiceTypes()
  // })
  


  // const [providers, setProviders] = useState(AllServiceProvidersData);
    const [pageNumber, setPageNumber] = useState(0);
    const providersPerPage = 10
    const pagesVisited = pageNumber * providersPerPage;

    //To account for an extra page incase the length of the array can not be evenly divided by the
    //providersPerPage (10). E.g 51 instead of 50.
    const pageCount = Math.ceil(filteredProviders.length / providersPerPage);

    //A funtion to update the pageNumber state.
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }



    //General market place search
    // const{searchTerm} = useContext(HandiworkContext)
    const{searchError} = useContext(HandiworkContext)
    const{addSearchError} = useContext(HandiworkContext)
    const{removeSearchError} = useContext(HandiworkContext)



  return (
    <div className='all-service-providers'>
      <h3 className='my-after'>All Service Providers</h3>

      {/* <div className="search-services">
                <IoSearchOutline className='search' />
                <select name="services" id="services" onChange={handleService}>
                    <option value="">Select Service</option>
                    <option value="">All Service Providers</option>                    
                    {
                      allServiceTypes && allServiceTypes.map((service, i)=>(
                        <option 
                        key={i}
                        value={service.serviceType}>{service.serviceType}</option>
                      ))
                    }
                </select>
      </div> */}

      <div className="filter-wrapper">
        <div className="top">
          <div className={serviceType ==="" ? "full-service service-type" : "service-type"}>
            <ServiceType2
              allServiceTypes={allServiceTypes}
              setAllServiceTypes={setAllServiceTypes}
              serviceTypeId={serviceTypeId}
              setServiceTypeId={setServiceTypeId}
            />
          </div>

          <div className={serviceType ==="" ? "no-sub" : "sub-category"}>
            <SubCategory2 
              allServiceTypes={allServiceTypes}
              setAllServiceTypes={setAllServiceTypes}
              serviceTypeId={serviceTypeId}
              setServiceTypeId={setServiceTypeId}
              />
          </div>
        </div>

        <div className="bottom">
          <input type="text" placeholder='search by location' onChange={handleSearch}/>
        </div>
      </div>

      { searchError ? <p className='searchError'>Sorry, we do not have this service provider in your location.</p> : ""}
      <div className='providers'>
        {loadingServices ? <p>Loading all service providers...</p> : ""}

        {!loadingServices && filteredProviders.length < 1 ? <p>Sorry, we do not have service providers in this category right now.</p> : ""}
        { 
          filteredProviders.slice(pagesVisited, pagesVisited + providersPerPage)
          .map((provider, i) =>{    
              return(
                  <ServiceProvider 
                      key={i}
                      id={provider.id}
                      imagePath={provider.imagePath}
                      firstName={provider.firstName.charAt(0).toUpperCase() + provider.firstName.slice(1)+" "}
                      lastName={provider.lastName.charAt(0).toUpperCase() + provider.lastName.slice(1)}
                      serviceType={provider.serviceType}
                      isVerified={provider.isVerified}
                  />
              )
          })
        }
      </div>

      <ReactPaginate 
        previousLabel= {"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"prevBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"disabledBtn"}
        activeClassName = {"activeBtn"}
      />

      <Link to="/" className='home-btn'><GoArrowLeft className='arrow-left' /> Back to home</Link>
      
    </div>
  )
}

export default AllServiceProviders;
