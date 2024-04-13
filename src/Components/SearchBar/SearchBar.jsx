import React, { useContext } from 'react'
import styled from 'styled-components';
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { HandiworkContext } from '../Context/HandiworkContext';

const SearchBarStyle = styled.div`
    height: 50px;
    width: 40vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 20px;
    border: 1px solid var(--energyRed);
    padding: 0 20px;
    margin-top: 70px;

    .search-services{
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            .search{
                opacity: .7;
            }

             select{
                height: 100%;
                width: 100%;
                color: red;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                border: none;
                border-radius: 20px;
                padding: 0 20px 0 20px;
                color: var(--energyGrey);
                


                &:focus{
                    border: none;
                    outline: none;
                }

                option{
                    height: 100%;
                    width: 100%;
                }
            }
}


        .input-location{
            height: 100%;
            width: 40%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;

            input{
                height: 100%;
                width: 90%;
                background-color: transparent;
                padding-left: 10px;
                border: none;
                outline: none;
            }

            .location{
                color: var(--energyRed);
                font-size: 30px;
                animation: flash;
                animation-duration: 2s;
                animation-fill-mode: forwards;
                animation-iteration-count: infinite;
            }


            @keyframes flash {
                0% {opacity: 0}
                100% {opacity: 1}
            }          
        }
        .close{
            color: var(--energyBlack);
            font-size: 30px;
            cursor: pointer;
        }

    

    @media (max-width: 500px){

        height: 40px;
        width: 80vw;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        border-radius: 20px;
        border: 1px solid var(--energyRed);
        margin-top: -20px;

    .search-services{
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            .search{
                opacity: .7;
                font-size: 20px;
            }

             select{
                height: 100%;
                width: 100%;
                color: red;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                border: none;
                border-radius: 20px;
                padding-left: 10px;
                color: var(--energyGrey);
                background-color: transparent;
                font-size: 15px;
                
                

                &:focus{
                    border: none;
                    outline: none;
                }

                option{
                    height: 100%;
                    width: 100%;
                }
            }
}


        .input-location{
            height: 100%;
            width: 50%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;

            input{
                height: 100%;
                width: 90%;
                background-color: transparent;
                padding-left: 10px;
                border: none;
                outline: none;
                font-size: 15px;
            }

            .location{
                color: var(--energyRed);
                font-size: 20px;
                animation: flash;
                animation-duration: 2s;
                animation-fill-mode: forwards;
                animation-iteration-count: infinite;
            }


            @keyframes flash {
                0% {opacity: 0}
                100% {opacity: 1}
            }          
        }
    }

`;

function SearchBar() {

    const{handleService} = useContext(HandiworkContext)
    const{handleSearchTerm} = useContext(HandiworkContext)
    const{resetSearch} = useContext(HandiworkContext)
    const{resetSearch2} = useContext(HandiworkContext)

  return (
    <SearchBarStyle>
            <div className="search-services">
                <IoSearchOutline className='search' />
                <select name="services" id="services" onChange={handleService}>
                    <option value="">Select Service</option>
                    <option value="">All Service Providers</option>
                    <option value="Bricklayer">Bricklayers</option>
                    <option value="Plumber">Plumbers</option>
                    <option value="Phone Repairer">Phone Repairers</option>
                    <option value="Makeup Artist">Makeup Artists</option>
                    <option value="Beautician">Beauticians</option>
                    <option value="Technician">Technicians</option>
                </select>
            </div>

            {/* <div className='input-location'>
                <form id='searchTerm2'>
                    <input type="text" placeholder="Enter location" onChange={handleSearchTerm}/>
                </form>
                <IoCloseOutline className="close" onClick={resetSearch2} />
            </div> */}
    </SearchBarStyle>
  )
}

export default SearchBar;
