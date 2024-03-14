import React, { useState, useContext } from 'react';
import ServiceProvider from '../ServiceProvider/ServiceProvider'
import ReactPaginate from 'react-paginate';
import './IndividualCategory.css';
import { HandiworkContext } from '../Context/HandiworkContext';
import LSearchBar from '../LSearchBar/LSearchBar'
import PHOTOS from '../images';

function IndividualCategory(props) {

    const {AllServiceProvidersData} = useContext(HandiworkContext);

    const filteredData = AllServiceProvidersData.filter(eachCategory => eachCategory.category === props.category);

    const [providers, setProviders] = useState(filteredData)
    const [pageNumber, setPageNumber] = useState(0);

    const providersPerPage =10
    const pagesVisited = pageNumber * providersPerPage;

    //Logic to determine how many providers to display out of the 50 in the array
    const displayProviders = providers.slice(pagesVisited, pagesVisited + providersPerPage)
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

      <img src={PHOTOS.Advert} alt="" className='advert' />
    </div>
  )
}

export default IndividualCategory;
