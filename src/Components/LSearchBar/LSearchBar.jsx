import React from 'react'
import styled from 'styled-components';
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";

const LSearchBarStyle = styled.div`
    height: 50px;
    width: 50vw;
    display: flex;
    border-radius: 20px;
    border: 1px solid var(--energyGrey);
    margin-top: 100px;

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


`;

function LSearchBar() {
  return (
    <LSearchBarStyle>
        <form>

            <label htmlFor="location">
                <input type="text" name="location" id="location" placeholder="filter by location" />
                <MdOutlineLocationOn className="icon location" />
            </label>

            <div className="search-close">
                <IoSearchOutline className="icon search" />
            </div>
        </form>
    </LSearchBarStyle>
  )
}

export default LSearchBar;
