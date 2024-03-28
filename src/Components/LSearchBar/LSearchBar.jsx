import React, {useState, useRef, useContext} from 'react'
import styled from 'styled-components';
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
// import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api"
import { IoCloseOutline } from "react-icons/io5";
import { HandiworkContext } from '../Context/HandiworkContext';

const LSearchBarStyle = styled.div`
    height: 50px;
    width: 50vw;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    border: 1px solid var(--energyGrey);
    margin-top: 100px;
    padding: 0 20px;

    .box{
        height: 100%;
        width: 50vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background-color: var(--energyWhite);
        border-radius: 20px;

        form{
            height: 100%;
            width: 90%;
        }


            input{
                height: 100%;
                width: 80%;
                background-color: transparent;
                border: none;
                outline: none;
                padding-left: 10px;
            }


        .icon{
            color: var(--energyRed);
            font-size: 50px;
            padding: 7px;
            animation: flash;
            animation-duration: 2s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
        }

        .close{
            color: var(--energyBlack);
            font-size: 30px;
            cursor: pointer;
        }


        @keyframes flash {
            0% {opacity: 0}
            100% {opacity: 1}
        }
    }

    @media (max-width: 500px){

        height: 45px;
    width: 90vw;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    border: 1px solid var(--energyGrey);
    margin-top: 30px;
    padding: 0 20px;

    .close{
            color: var(--energyBlack);
            font-size: 20px;
            cursor: pointer;
        }

    .box{
        height: 100%;
        width: 90vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background-color: var(--energyWhite);
        border-radius: 20px;
        padding-left: 10px;


            input{
                height: 100%;
                width: 80%;
                background-color: transparent;
                border: none;
                outline: none;
                padding-left: 10px;
                font-size: 15px;
            }


        .icon{
            color: var(--energyRed);
            font-size: 40px;
            padding: 7px;
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

function LSearchBar() {

    const{inputRef} = useContext(HandiworkContext)
    const{handlePlaceChanged} = useContext(HandiworkContext)
    const{handleSearchTerm} = useContext(HandiworkContext)
    const{resetSearch} = useContext(HandiworkContext)

    // const inputRef = useRef()

    // const handlePlaceChanged = () =>{
    //     const [place] = inputRef.current.getPlaces()
    //     if(place){
    //         console.log(place.formatted_address)
    //         console.log(place.geometry.location.lat())
    //         console.log(place.geometry.location.lng())
    //     }
    // }

  return (
    <LSearchBarStyle>
        {/* <LoadScript
        googleMapsApiKey='AIzaSyBL5p7ii1_G81f35B3lH4GKQKW46hHh16s'
        libraries={["places"]}
        >
            
            <StandaloneSearchBox
            onLoad={ref => (inputRef.current = ref)}
            onPlacesChanged={handlePlaceChanged}
            >
                <div className='box'>
                    <IoSearchOutline />
                    <input type="text" placeholder="Enter location" onChange={handleSearchTerm}/>
                    <MdOutlineLocationOn className="icon" />
                </div>
            </StandaloneSearchBox>
        </LoadScript> */}
        <div className='box'>
            <IoSearchOutline />
            <form id='searchTerm'>
                <input type="text" placeholder="Enter location" onChange={handleSearchTerm}/>
            </form>
            <IoCloseOutline className="close" onClick={resetSearch} />
        </div>
    </LSearchBarStyle>
  )
}

export default LSearchBar;
