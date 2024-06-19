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


function AllServiceProviders() {

  const [loading, setLoading] = useState(true);

  //To fetch All providers
  const [AllServiceProvidersData, setAllServiceProvidersData] = useState([])

  const [filteredProviders, setFilteredProviders] = useState([]);


     //Filter Providers based on selected service type
  const url = `https://handiworks.cosmossound.com.ng/api/skill-providers/skillproviders`

  //To fetch All Providers
  useEffect(()=>{
        function fetchProviders(){
          axios.get(url)
          .then(res => {
            setLoading(false)
          setAllServiceProvidersData(res.data.skillProviders)
          setFilteredProviders(res.data.skillProviders)
          })
          .catch(dupError=> console.log("caughtError:", dupError))
        }

        fetchProviders()
  }, [])

   //To enhance general market place search
   const [service, setService] = useState("");

    const handleService = (event) =>{
      const option = event.target.value
      setService(option)     
    }

    useEffect(()=>{
      if (service === '') {
        setFilteredProviders(AllServiceProvidersData);
      } else {
        const filtered = AllServiceProvidersData
        .filter(provider => provider.serviceType.includes(service));
        setFilteredProviders(filtered);
      }
      // 
      
    }, [service, AllServiceProvidersData])
  


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
    const{searchTerm} = useContext(HandiworkContext)
    const{searchError} = useContext(HandiworkContext)
    const{addSearchError} = useContext(HandiworkContext)
    const{removeSearchError} = useContext(HandiworkContext)


  return (
    <div className='all-service-providers'>
      <h3 className='my-after'>All Service Providers</h3>

      <div className="search-services">
                <IoSearchOutline className='search' />
                <select name="services" id="services" onChange={handleService}>
                    <option value="">Select Service</option>
                    <option value="">All Service Providers</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Automobile">Automobile</option>
                    <option value="Logistics"> Logistics</option>
                    <option value="Beautician">Beauticians</option>
                    <option value="Domestic">Domestic</option>
                    <option value="Tutors">Tutors</option>
                    <option value="Health">Health</option>
                </select>
        </div>

      { searchError ? <p className='searchError'>Sorry, we do not have this service provider in your location.</p> : ""}
      <div className='providers'>
        {loading ? <p>Loading all service providers...</p> : ""}

        {!loading && filteredProviders.length < 1 ? <p>Sorry, we do not have service providers in this category at the moment</p> : ""}
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
