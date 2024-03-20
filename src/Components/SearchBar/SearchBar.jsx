import React from 'react'
import styled from 'styled-components';
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";

const SearchBarStyle = styled.div`
    height: 50px;
    width: 70vw;
    display: flex;
    border-radius: 20px;
    border: 1px solid var(--energyGrey);

    form{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: var(--energyWhite);
        border-radius: 20px;

         label{
            height: 100%;
            width: 30%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

             select{
                height: 100%;
                width: 100%;
                color: var(--energyGrey);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                border: none;
                border-radius: 20px;
                padding: 0 20px 0 20px;


                &:focus{
                    border: none;
                    outline: none;
                }

                option{
                    height: 100%;
                    width: 100%;
                }
            }

            input{
                height: 79%;
                width: 100%;
                background-color: transparent;
                border: none;
                padding-left: 10px;

                &:focus{
                    border-bottom: 1px solid var(--energyRed);
                    outline: none;
                }
            }
        }


        .search-close{
            gap: 50px;
            height: 100%;
            width: 30%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
        }

        .icon{
            border-radius: 50%;
            cursor: pointer;
        }

        .location{
            color: var(--energyRed);
            font-size: 30px;
        }

        .close{
            color: var(--energyWhite);
            background-color: var(--energyDarkBlue);
            font-size: 20px;
        }

        .search{
            background-color: var(--energyRed);
            color: var(--energyWhite);
            font-size: 32px;
            padding: 7px;
            outline: 5px solid;
            animation: flash;
            animation-duration: 1s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
        }


        @keyframes flash {
            0% {outline-color: var(--energyWhite)}
            100% {outline-color: var(--energyLightRed)}
        }
    }

    @media (max-width: 500px){

        height: 45px;
        width: 90vw;
        display: flex;
        border-radius: 20px;
        border: 1px solid var(--energyGrey);

    form{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: var(--energyWhite);
        border-radius: 20px;
        position: relative;
        

         label{
            height: 100%;
            width: 37%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

             select{
                height: 100%;
                width: 100%;
                color: var(--energyGrey);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                border: none;
                border-radius: 20px;
                padding: 0 20px 0 20px;
                font-size: 13px;
                


                &:focus{
                    border: none;
                    outline: none;
                }

                option{
                    height: 100%;
                    width: 100%;
                    display: flex;
                    align-self: flex-start;
                }
            }

            input{
                height: 79%;
                width: 100%;
                background-color: transparent;
                border: none;
                padding-left: 10px;
                font-size: 13px;

                &:focus{
                    border-bottom: 1px solid var(--energyRed);
                    outline: none;
                }
            }
        }


        .search-close{
            gap: 0;
            height: 100%;
            width: 25%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding-right: 10px;
        }

        .icon{
            border-radius: 50%;
            cursor: pointer;
        }

        .location{
            color: var(--energyRed);
            font-size: 25px;
            /* position: absolute;
            right: 100px; */
        }

        .search{
            background-color: var(--energyRed);
            color: var(--energyWhite);
            font-size: 30px;
            padding: 5px;
            outline: 3px solid;
            animation: flash;
            animation-duration: 1s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            /* position: absolute;
            right: 15px; */
        }


        @keyframes flash {
            0% {outline-color: var(--energyWhite)}
            100% {outline-color: var(--energyLightRed)}
        }
    }
    }

`;

function SearchBar() {
  return (
    <SearchBarStyle>
        <form>
            <label htmlFor="services" className="search-services">
                <select name="services" id="services">
                    <option value="">Select Service</option>
                    <option value="Service 1">Service 1</option>
                    <option value="Service 2">Service 2</option>
                    <option value="Service 3">Service 3</option>
                    <option value="Service 4">Service 4</option>
                </select>
            </label>

            <label htmlFor="location">
                <input type="text" name="location" id="location" placeholder="Enter your location" />
            </label>

            <div className="search-close">
            <MdOutlineLocationOn className="icon location" />
                <IoSearchOutline className="icon search" />
            </div>
        </form>
    </SearchBarStyle>
  )
}

export default SearchBar;
