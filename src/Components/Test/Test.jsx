import React, { useContext, useEffect, useState } from 'react'
import { ServiceType, SubCategory, ServSubState } from '../ServAndSub/ServAndSub'
import { HandiworkContext } from '../Context/HandiworkContext'
import axios from 'axios'


function Test() {
    const {allServiceTypes, setAllServiceTypes, serviceTypeId, setServiceTypeId} = ServSubState()

    const {AllServiceProvidersData, loadingServices} = useContext(HandiworkContext)

    //ServiceType Data
    const{serviceDD, serviceType, handleServiceType, 
        serviceValue, handleServiceValue, handleServiceDD} = useContext(HandiworkContext)

    //Sub category data
    const{subCategory, handleSubCategory, subCategoryValue, 
        subCategoryDD, handleSubCategoryDD, 
        handleSubCategoryValue, handleSubCategorySelect} = useContext(HandiworkContext)
    
    //To enhance general market place search
   const [searchTerm, setSearchTerm] = useState("");

   const handleSearch = (event) =>{
     const location = event.target.value
     setSearchTerm(location)
   }

   const [filteredProviders, setFilteredProviders] = useState([]);
   console.warn('filteredProviders:', filteredProviders)

   

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





      // useEffect(()=>{
      //   const handleTest = async () => {
      //     try {
      //       const params = {};
      //       if (serviceType) params.serviceType = serviceType;
      //       if (subCategory) params.subCategory = subCategory;
      //       if (searchTerm) params.searchTerm = searchTerm;

      //       const response = await axios.get('https://handiworks.cosmossound.com.ng/api/skill-providers/search', { params });
      //       setFilteredProviders(response.data.data);
      //     } 
      //     catch (error) {
      //       console.error('Error fetching users:', error);
      //     }
      //   };

      //   handleTest()
      // }, [searchTerm])



  return (
    <div style={{marginTop: "150px"}}>

        <ServiceType 
            allServiceTypes={allServiceTypes}
            setAllServiceTypes={setAllServiceTypes}
            serviceTypeId={serviceTypeId}
            setServiceTypeId={setServiceTypeId}
        />

      <SubCategory 
        allServiceTypes={allServiceTypes}
        setAllServiceTypes={setAllServiceTypes}
        serviceTypeId={serviceTypeId}
        setServiceTypeId={setServiceTypeId}
        />

        <input type="text" name="" id="" placeholder='search by location' onChange={handleSearch}/>

        <ul>
            { 
                filteredProviders ? filteredProviders
                .map((provider, i) =>{    
                    return(
                        <li
                        key={i}
                        style={{fontSize: "13px"}}
                        >{provider.firstName}---{provider.serviceType}---{provider.subCategory}---{provider.address}</li>
                    )
                }) : ""
            }
        </ul>
    </div>
  )
}

export default Test
