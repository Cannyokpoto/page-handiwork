import React, {useState, useRef} from 'react'
import styled from 'styled-components';
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api"

const LSearchBarStyle = styled.div`
    height: 50px;
    width: 50vw;
    display: flex;
    border-radius: 20px;
    border: 1px solid var(--energyGrey);
    margin-top: 100px;

    div{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background-color: var(--energyWhite);
        border-radius: 20px;

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


        @keyframes flash {
            0% {opacity: 0}
            100% {opacity: 1}
        }
    }


`;

function LSearchBar() {

    const inputRef = useRef()

    const handlePlaceChanged = () =>{
        const [place] = inputRef.current.getPlaces()
        if(place){
            console.log(place.formatted_address)
            console.log(place.geometry.location.lat())
            console.log(place.geometry.location.lng())
        }
    }

  return (
    <LSearchBarStyle>
        <LoadScript
        googleMapsApiKey='AIzaSyBL5p7ii1_G81f35B3lH4GKQKW46hHh16s'
        libraries={["places"]}
        >
            <StandaloneSearchBox
            onLoad={ref => (inputRef.current = ref)}
            onPlacesChanged={handlePlaceChanged}
            >
                <div>
                    <IoSearchOutline />
                    <input type="text" name="location" id="location" placeholder="Enter location" />
                    <MdOutlineLocationOn className="icon" />
                </div>
            </StandaloneSearchBox>
        </LoadScript>
    </LSearchBarStyle>
  )
}

export default LSearchBar;
