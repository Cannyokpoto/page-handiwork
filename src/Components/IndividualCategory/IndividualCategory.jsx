import React, { useState, useContext, useEffect } from 'react';
import ServiceProvider from '../ServiceProvider/ServiceProvider'
import ReactPaginate from 'react-paginate';
import './IndividualCategory.css';
import { HandiworkContext } from '../Context/HandiworkContext';
import LSearchBar from '../LSearchBar/LSearchBar'
import PHOTOS from '../images';
import { Link } from "react-router-dom"
import "../LSearchBar/LSearchBar.css"
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import axios from 'axios';


function IndividualCategory(props) {

    // const {AllServiceProvidersData} = useContext(HandiworkContext);


    //To fetch All providers
  const [AllServiceProvidersData, setAllServiceProvidersData] = useState([])

  const [filteredProviders, setFilteredProviders] = useState([]);
  console.warn("filteredProviders:", filteredProviders)


     //Filter Poviders based on selected service type
  const url = `https://handiworks.cosmossound.com.ng/api/skill-providers/skillproviders`

  //To fetch All Poviders
  useEffect(()=>{
        axios.get(url)
        .then(res => {
        setAllServiceProvidersData(res.data.skillProviders)
        // setFilteredProviders(res.data.skillProviders)
        })
        .catch(dupError=> console.log("caughtError:", dupError))

  },[])


  const [searchTerm, setSearchTerm] = useState('');
  useEffect(()=>{
    const filterByCategory = ()=>{
      const filteredData = AllServiceProvidersData
      .filter(providers => providers.serviceType === props.category)
      setFilteredProviders(filteredData)
    }

    filterByCategory()
  },[AllServiceProvidersData, searchTerm])




  // Filter providers based on address

  // Handle change in search term
  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };


  useEffect(() => {
    if (searchTerm === '') {
      setFilteredProviders(filteredProviders);
    } else {
      const nearbyProviders = filteredProviders.filter(provider => provider.address
        .toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredProviders(nearbyProviders);
    }
  }, [searchTerm, filteredProviders]);


  //To reset search field
  const resetSearch = () =>{
    document.getElementById("searchTerm").reset()
    setSearchTerm("")
  }

   //To enhance general market place search
  //  const [service, setService] = useState("");

  //   const handleService = (event) =>{
  //     const option = event.target.value
  //     setService(option)     
  //   }

  //   useEffect(()=>{
  //     if (service === '') {
  //       // setFilteredProviders(AllServiceProvidersData);
  //     } else {
  //       const filtered = AllServiceProvidersData.filter(provider => provider.serviceType === service);
  //       // setFilteredProviders(filtered);
  //     }
  //   }, [service, AllServiceProvidersData])











    // To get all service providers for each category
    // const filteredData = AllServiceProvidersData.filter(eachCategory => eachCategory.serviceType.toLowerCase() === props.category.toLowerCase());
    // const filteredData = AllServiceProvidersData.filter(eachCategory => eachCategory.serviceType === props.category);


    const [providers, setProviders] = useState(filteredProviders)
    const [pageNumber, setPageNumber] = useState(0);

    const providersPerPage =10
    const pagesVisited = pageNumber * providersPerPage;


    //To get service providers based on the user's location
    // const{resetSearch} = useContext(HandiworkContext)
    const{toggleCategorySearchError} = useContext(HandiworkContext)

    const[categorySearchError, setCategorySearchError] = useState(false);


    
  //  const nearByData = providers.filter(nearByProviders => nearByProviders.address.toLowerCase().includes(searchTerm.toLowerCase()));

    //To grab the user's search input
    // const [searchTerm, setSearchTerm] = useState("");

  //   const nearByData = filteredProviders.filter(nearByProviders => {

  //     return searchTerm.toLowerCase() =="" 
  //     ? nearByProviders 
  //     : nearByProviders.address.toLowerCase().includes(searchTerm.toLowerCase())
        
  // });

  // const [searchResult, setSearchResult] = useState(filteredProviders);
    

  //     const handleSearchTerm = (event) =>{
  //       setSearchTerm(event.target.value)
  
  //       console.warn("searchTerm:", searchTerm)

  //       setSearchResult(nearByData)
  // }



    //Logic to determine how many providers to display out of the 50 in the array
    


    //To account for an extra page incase the length of the array can not be evenly divided by the
    //providersPerPage (10). E.g 51 instead of 50.
    const pageCount = Math.ceil(providers.length / providersPerPage);

    //A funtion to update the pageNumber state.
    //"selected" is a variable from react-paginate; which carries the page clicked

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

  return (
    <div className='individual-category'>
      <img src={props.banner} alt="" className='banner' />

      {/* <LSearchBar /> */}

      <div className='LsearchBar'>
        <div className='box'>
            <IoSearchOutline />
            <form id='searchTerm'>
                <input type="text" placeholder="search by location" onChange={handleSearchTerm}/>
            </form>
            <IoCloseOutline className="close" onClick={resetSearch} />
        </div>
    </div>

      <h4>Available <span>{props.categoryTag.split(" ")[0]}</span> {props.categoryTag.split(" ").slice(1).join(" ")}</h4>
      {/* { categorySearchError ? <p className='searchError'>Sorry, we do not have {props.categoryTag.toLowerCase()} around this location.</p> : ""} */}
      <p className='searchError'>We have {filteredProviders.length} { filteredProviders.length > 1 ? props.categoryTag.toLowerCase() : props.categoryTag.toLowerCase().slice(0, -1)} {searchTerm==="" ? "" : "around this location."}</p>
      
      <div className='service-providers'>
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

      <Link to="/market-place" className='market-place-btn'><GoArrowLeft className='arrow-left' /> Back to market place</Link>

      <img src={PHOTOS.Advert} alt="" className='advert' />
    </div>
  )
}

export default IndividualCategory;
