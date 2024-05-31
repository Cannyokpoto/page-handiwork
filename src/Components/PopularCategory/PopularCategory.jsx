import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components';
import { HandiworkContext } from '../Context/HandiworkContext';
import ServiceProvider from '../ServiceProvider/ServiceProvider';
import axios from 'axios';


const PopularCategoryStyle = styled.div`
    height: 100%;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;

    
     h3{
        font-size: 30px;
        text-align: center;
        color: var(--energyBlack);
        font-weight: 700;
    }

    .category-names{
        height: 30px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap: 15px;
        margin-top: 30px;

        button{
            font-size: 15px;
            font-weight: 500;
            cursor: pointer;
            border: none;
            background: transparent;
            color: var(--energyGrey);
            position: relative;

            /* &:focus{
                border: none;
                outline: none;
                color: var(--energyRed);
                border-bottom: solid 4px var(--energyRed);
            } */


            /* &::after{
                content: "";
                width: 70%;
                height: 3px;
                position: absolute;
                bottom: -7px;
                left: 20%;
                background-color: var(--energyRed); 
            }
            */
        }

        .red-btn::after{
                content: "";
                width: 70%;
                height: 3px;
                position: absolute;
                bottom: -7px;
                left: 20%;
                background-color: var(--energyRed); 
            }
           


        
    }

    .categories{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        border: 1px solid var(--energyLightGrey);
        gap: 60px;
        padding: 30px 0 30px 0;
        margin-top: 30px;
}

@media (max-width: 500px){

    height: 100%;
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    
    h3{
        font-size: 20px;
        text-align: center;
        color: var(--energyBlack);
        font-weight: 700;
    }

    .category-names{
        height: 30px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 15px;
        margin-top: 10px;

        button{
            font-size: 15px;
            font-weight: 500;
            cursor: pointer;
            border: none;
            background: transparent;
            color: var(--energyGrey);
            position: relative;

            /* &:focus{
                border: none;
                outline: none;
                color: var(--energyRed);
                border-bottom: solid 2px var(--energyRed);
            } */


            /* &::after{
                content: "";
                width: 70%;
                height: 3px;
                position: absolute;
                bottom: -7px;
                left: 20%;
                background-color: var(--energyRed); 
            }
            */
        }

    }

    .categories{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        border: 1px solid var(--energyLightGrey);
        gap: 60px;
        padding: 30px 0 30px 0;
        margin-top: 30px;
    }    
}

`;



function PopularCategory() {

    //To fetch All providers
  const [AllProvidersData, setAllProvidersData] = useState([])

     //Filter Poviders based on selected service type
  const url = `https://handiworks.cosmossound.com.ng/api/skill-providers/skillproviders`

  //To fetch All Poviders
  useEffect(()=>{
        axios.get(url)
        .then(res => {
            setAllProvidersData(res.data.skillProviders)
        })
        .catch(dupError=> console.log("caughtError:", dupError))

  })


    //to get 3 fashion designer
    const fashion = AllProvidersData ? AllProvidersData
    .filter(provider => provider && provider.serviceType ==="fashion" || provider.serviceType ==="Fashion" ) : "";
    const topFashion = fashion.slice(0, 3)

    //to get 3 hospitality
    const hospitality = AllProvidersData ? AllProvidersData
    .filter(provider => provider && provider.serviceType==="hospitality" || provider.serviceType==="Hospitality") : "";
    const topHospitality = hospitality.slice(0, 3)

    //to get 3 automobile
    const automobile = AllProvidersData ? AllProvidersData
    .filter(provider => provider && provider.serviceType==="automobile" || provider.serviceType==="Automobile") : "";
    const topAutomobile = automobile.slice(0, 3)


    const fashionBtn = document.getElementById("fashion-btn");
    const automobileBtn = document.getElementById("automobile-btn");
    const hospitalityBtn = document.getElementById("hospitality-btn");

    const [popularCategory, setPopularCategory] = useState(topFashion);

    const setFashion = () =>{
       fashionBtn.classList.add("red-btn")
       automobileBtn.classList.remove("red-btn")
       hospitalityBtn.classList.remove("red-btn")
        setPopularCategory(topFashion)
    }


    const setAutomobile = () =>{
        setPopularCategory(topAutomobile)
        automobileBtn.classList.add("red-btn")
        fashionBtn.classList.remove("red-btn")
        hospitalityBtn.classList.remove("red-btn")
    }

    const setHospitality = () =>{
        setPopularCategory(topHospitality)
        fashionBtn.classList.remove("red-btn")
        automobileBtn.classList.remove("red-btn")
        hospitalityBtn.classList.add("red-btn")
    }

        useEffect(()=>{       
            setPopularCategory(topFashion)
    },[])



  return (
    <PopularCategoryStyle>
        <h3>Popular Categories</h3>

        <div className='category-names'>

            <button className="red-btn" id="fashion-btn" onClick={setFashion}>Fashion</button>
            <button className={ popularCategory===topAutomobile ? "red-btn" : "" } id="automobile-btn" onClick={setAutomobile}>Automobile</button>
            <button className={ popularCategory===topHospitality ? "red-btn" : "" } id="hospitality-btn" onClick={setHospitality}>Hospitality</button>
        </div>

        <div className='categories'>
            {
                popularCategory.map((provider, i) =>{
                    return(
                        
                            <ServiceProvider 
                                key={i}
                                id= {provider.id}
                                imagePath={provider.imagePath}
                                firstName={provider.firstName.charAt(0).toUpperCase() + provider.firstName.slice(1)+" "}
                                lastName={provider.lastName.charAt(0).toUpperCase() + provider.lastName.slice(1)}
                                serviceType={provider.serviceType}
                            />

                    )
                })
            }
        </div>
    </PopularCategoryStyle>

  )
}

export default PopularCategory
