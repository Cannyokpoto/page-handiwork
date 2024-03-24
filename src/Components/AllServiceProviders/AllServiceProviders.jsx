import React, { useState } from 'react';
import { AllServiceProvidersData } from '../Assets/Data';
import ServiceProvider from '../ServiceProvider/ServiceProvider'
import ReactPaginate from 'react-paginate';
import './AllServiceProviders.css';

function AllServiceProviders() {

    const [providers, setProviders] = useState(AllServiceProvidersData);
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
                    id ={provider.id}
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
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

  return (
    <div className='all-service-providers'>
      <h3 className='my-after'>All Service Providers</h3>
      <div className='providers'>
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
    </div>
  )
}

export default AllServiceProviders;
