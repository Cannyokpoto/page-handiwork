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

  const [loading, setLoading] = useState(true);

  const [result, setResult] = useState("");

  const [noResult, setNoResult] = useState([]);
  console.warn("result:", result)

  const [filteredProviders, setFilteredProviders] = useState([]);


     //Filter Poviders based on selected service type
  const url = `https://handiworks.cosmossound.com.ng/api/skill-providers/skillproviders`

  //To fetch All Poviders
  useEffect(()=>{
        axios.get(url)
        .then(res => {
          setLoading(false)
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
  },[AllServiceProvidersData])




  // Filter providers based on address

  // Handle change in search term
  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };


  useEffect(() => {
    // if (searchTerm == "") {
    //   setFilteredProviders(filteredProviders);
    // } 
    
    // else {
    //   const nearbyProviders = filteredProviders.filter(provider => provider.address
    //     .toLowerCase().includes(searchTerm.toLowerCase()));
    //     setFilteredProviders(nearbyProviders);
    // }



    

    // filteredProviders.filter((providers)=>{
    //   if(searchTerm==""){
    //     setFilteredProviders(providers)
    //   }

    //   else if(providers.address.toLowerCase().includes(searchTerm.toLowerCase())){
    //     setFilteredProviders(providers)
    //   }
    // })

  }, [searchTerm]);

  const nearbyProviders = filteredProviders
          .filter((providers)=>{
            if(searchTerm==""){
              return providers
            }
      
            else if(providers.address.toLowerCase().includes(searchTerm.toLowerCase())){
              return providers
            }
          })


  //To reset search field
  const resetSearch = () =>{
    setSearchTerm("")
    document.getElementById("searchTerm").reset()
  }



    const [providers, setProviders] = useState(filteredProviders)
    const [pageNumber, setPageNumber] = useState(0);

    const providersPerPage =10
    const pagesVisited = pageNumber * providersPerPage;


    //To get service providers based on the user's location
    // const{resetSearch} = useContext(HandiworkContext)
    const{toggleCategorySearchError} = useContext(HandiworkContext)

    const[categorySearchError, setCategorySearchError] = useState(false);



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

      {loading ? "" : <p className='searchError'>We have {nearbyProviders.length} { filteredProviders.length > 1 ? props.categoryTag.toLowerCase() : props.categoryTag.toLowerCase().slice(0, -1)} {searchTerm==="" ? "" : "around this location."}</p>}
      
      {loading ? <div>Loading...</div> :
      <div className='service-providers'>
        {
          // filteredProviders
          // .filter((providers)=>{
          //   if(searchTerm==""){
          //     return providers
          //   }
      
          //   else if(providers.address.toLowerCase().includes(searchTerm.toLowerCase())){
          //     return providers
          //   }
          // })
          nearbyProviders
          .slice(pagesVisited, pagesVisited + providersPerPage)
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
      </div> }

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
