import React, { useState, useContext } from 'react';
import { HandiworkContext } from '../Context/HandiworkContext';
import ServiceProvider from '../ServiceProvider/ServiceProvider'
import ReactPaginate from 'react-paginate';
import './AllServiceProviders.css';
import { Link } from "react-router-dom"
import { GoArrowLeft } from "react-icons/go";


function AllServiceProviders() {

    const {AllServiceProvidersData} = useContext(HandiworkContext);

    const [providers, setProviders] = useState(AllServiceProvidersData);
    const [pageNumber, setPageNumber] = useState(0);

    const providersPerPage =10
    const pagesVisited = pageNumber * providersPerPage;



    //General market place search
    const{searchTerm} = useContext(HandiworkContext)
    const{searchError} = useContext(HandiworkContext)
    const{addSearchError} = useContext(HandiworkContext)
    const{removeSearchError} = useContext(HandiworkContext)
    const{service} = useContext(HandiworkContext)
    

    const availableData = providers.filter((availableProviders) =>{
      if(service == ""){
        // removeSearchError()
        return availableProviders
      }
      else if(availableProviders.skill.toLowerCase().includes(service.toLowerCase())){
        // removeSearchError()
        return availableProviders
      }

      // else if(!availableProviders.skill.toLowerCase().includes(service.toLowerCase())){
      //   addSearchError()
      // }

      // else if(availableProviders.address.toLowerCase().includes(searchTerm.toLowerCase()) && service==""){
      //   removeSearchError()
      //   return availableProviders
      // }

      // else if(availableProviders.address.toLowerCase().includes(searchTerm.toLowerCase()) && availableProviders.skill.toLowerCase().includes(service.toLowerCase())){
      //   removeSearchError()
      //   return availableProviders
      // }

      // else if(!availableProviders.address.toLowerCase().includes(searchTerm.toLowerCase()) && availableProviders.skill.toLowerCase().includes(service.toLowerCase())){
      //   addSearchError()
      // }

      // else if(searchTerm == "" && !availableProviders.address.toLowerCase().includes(searchTerm.toLowerCase())){
      //   addSearchError()
      // }

    //   else if(availableProviders.address.toLowerCase().includes(searchTerm.toLowerCase()) && service==""){
    //     removeSearchError()
    //     return availableProviders
    //   }

    //   else if(searchTerm=="" && availableProviders.skill.toLowerCase().includes(service.toLowerCase())){
    //     removeSearchError()
    //     return availableProviders
    //   }

    //   else if(!availableProviders.address.toLowerCase().includes(searchTerm.toLowerCase()) && availableProviders.skill.toLowerCase().includes(service.toLowerCase())){
    //     addSearchError()
    //  }
    })

    //Logic to determine how many providers to display out of the 50 in the array
    const displayProviders = availableData.slice(pagesVisited, pagesVisited + providersPerPage)
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
      { searchError ? <p className='searchError'>Sorry, we do not have this service provider in your location.</p> : ""}
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

      <Link to="/" className='home-btn'><GoArrowLeft className='arrow-left' /> Back to home</Link>
    </div>
  )
}

export default AllServiceProviders;
