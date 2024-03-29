import React, { useState, useContext, useEffect } from 'react';
import ServiceProvider from '../ServiceProvider/ServiceProvider'
import ReactPaginate from 'react-paginate';
import './IndividualCategory.css';
import { HandiworkContext } from '../Context/HandiworkContext';
import LSearchBar from '../LSearchBar/LSearchBar'
import PHOTOS from '../images';
import { Link } from "react-router-dom"

function IndividualCategory(props) {

    const {AllServiceProvidersData} = useContext(HandiworkContext);

    //To get all service providers for each category
    const filteredData = AllServiceProvidersData.filter(eachCategory => eachCategory.category === props.category);


    const [providers, setProviders] = useState(filteredData)
    const [pageNumber, setPageNumber] = useState(0);

    const providersPerPage =10
    const pagesVisited = pageNumber * providersPerPage;


    //To get service providers based on the user's location
    const{searchTerm} = useContext(HandiworkContext)
    const{categorySearchError} = useContext(HandiworkContext)
    const{addCategorySearchError} = useContext(HandiworkContext)
    const{removeCategorySearchError} = useContext(HandiworkContext)

    //To return a message if there's no service provider in the searched location
    // const[searchError, setSearchError] = useState(false);
    // const handleSearchError = () =>{
    //   setSearchError(true)
    // }

    const nearByData = providers.filter((nearByProviders) =>{
      if(searchTerm == ""){
        removeCategorySearchError()
        return nearByProviders
      }
      else if(nearByProviders.address.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm == ""){
        removeCategorySearchError()
        return nearByProviders
      }
      else if(!nearByProviders.address.toLowerCase().includes(searchTerm.toLowerCase())){
        addCategorySearchError()
     }
})

    // const handleSearchError = providers.filter((nearByProviders) =>{
    //   if(!nearByProviders.address.toLowerCase().includes(searchTerm.toLowerCase())){
    //     setSearchError(true)
    //   }
    // })
    // handleSearchError()

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

      <LSearchBar />

      <h4>Available <span>{props.categoryTag}</span></h4>
      { categorySearchError ? <p className='searchError'>Sorry, we do not have {props.categoryTag.toLowerCase()} around this location.</p> : ""}
      
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

      <Link to="/market-place" className='market-place-btn'>Back to market place</Link>

      <img src={PHOTOS.Advert} alt="" className='advert' />
    </div>
  )
}

export default IndividualCategory;
