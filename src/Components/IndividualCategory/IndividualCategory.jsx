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


function IndividualCategory(props) {

    const {AllServiceProvidersData} = useContext(HandiworkContext);

    // To get all service providers for each category
    const filteredData = AllServiceProvidersData.filter(eachCategory => eachCategory.category.toLowerCase() === props.category.toLowerCase());


    const [providers, setProviders] = useState(filteredData)
    const [pageNumber, setPageNumber] = useState(0);

    const providersPerPage =10
    const pagesVisited = pageNumber * providersPerPage;


    //To get service providers based on the user's location
    // const{searchTerm} = useContext(HandiworkContext)
    const{resetSearch} = useContext(HandiworkContext)
    // const{categorySearchError} = useContext(HandiworkContext)
    // const{addCategorySearchError} = useContext(HandiworkContext)
    // const{removeCategorySearchError} = useContext(HandiworkContext)
    const{toggleCategorySearchError} = useContext(HandiworkContext)

    const[categorySearchError, setCategorySearchError] = useState(false);

    //     const nearByData = providers.filter((nearByProviders) =>{
    //       if(searchTerm == ""){
    //         removeCategorySearchError()
    //         return nearByProviders
    //       }
    //       else if(nearByProviders.address.toLowerCase().includes(searchTerm.toLowerCase())){
    //         removeCategorySearchError()
    //         return nearByProviders
    //       }
    //       else if(!nearByProviders.address.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm !== ""){
    //         addCategorySearchError()
    //     }
    // })



    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState(providers);
  //  const nearByData = providers.filter(nearByProviders => nearByProviders.address.toLowerCase().includes(searchTerm.toLowerCase()));

    //To grab the user's search input

    useEffect(()=>{

    }, [])
      const handleSearchTerm = (event) =>{
        setSearchTerm(event.target.value)
  
        console.warn("searchTerm:", searchTerm)

        setSearchResult(nearByData)
  }


    const nearByData = filteredData.filter(nearByProviders => {

      // const isProviderAvailable = nearByProviders.address.toLowerCase().includes(searchTerm.toLowerCase())

      // setCategorySearchError(!isProviderAvailable)


      return searchTerm.toLowerCase() =="" 
      ? nearByProviders 
      : nearByProviders.address.toLowerCase().includes(searchTerm.toLowerCase())
        

      // if(searchTerm == ""){
      //   return nearByProviders
      // }
      // else if(nearByProviders.address.toLowerCase().includes(searchTerm.toLowerCase())){
      //   return nearByProviders
      // }
  })


    //Logic to determine how many providers to display out of the 50 in the array
    const displayProviders = nearByData.slice(pagesVisited, pagesVisited + providersPerPage)
        .map((provider, i) =>{

            //distructuring to have direct access to the "provider" object properties
            // const{id, image, name, skill, no_off_jobs} = provider;
            return(
                <ServiceProvider 
                    key={i}
                    id = {provider.id}
                    image={provider.image}
                    name={provider.name}
                    skill={provider.skill}
                    no_off_jobs={provider.no_off_jobs}
                />
            )
        })


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
      <p className='searchError'>We have {searchResult.length} { searchResult.length > 1 ? props.categoryTag.toLowerCase() : props.categoryTag.toLowerCase().slice(0, -1)} {searchTerm==="" ? "" : "around this location."}</p>
      
      <div className='service-providers'>
        { displayProviders }
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
