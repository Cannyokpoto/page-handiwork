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

    const [loading, setLoading] = useState(true)

    //To fetch All providers
    const [fetchedProviders, setFetchedProviders] = useState([])

    const [filteredProviders, setFilteredProviders] = useState({ fashion: [], automobile: [], hospitality: [] });

    const [activeArray, setActiveArray] = useState([]);

    const [filteredFashion, setFilteredFashion] = useState([]);

    const [filteredAuto, setFilteredAuto] = useState([]);

    const [filteredHosp, setfilteredHosp] = useState([]);

    const [activeBtn, setActiveBtn] = useState("fashion");

    

    // console.warn("topFashion:", topFashion)

    // const [popularCategory, setPopularCategory] = useState();
    // console.warn("popularCategory:", popularCategory)

    // const [categoryToRender, setCategoryToRender] = useState([]);

    // console.warn("categoryToRender:", categoryToRender)

     //Filter Poviders based on selected service type
  const url = `https://handiworks.cosmossound.com.ng/api/skill-providers/skillproviders`

  //To fetch All Poviders
  useEffect(()=>{

        const fetchProviders = () =>{
            axios.get(url)
            .then(res => {

                setLoading(false)
            // setAllProvidersData(res.data.skillProviders)

            const providers = res.data.skillProviders
            

            // Filter providers based on service type
            const topFashion = providers
            .filter(provider => provider.serviceType.toLowerCase().includes("fashion")).slice(0, 3)

            const topAutomobile = providers
            .filter(provider => provider.serviceType.toLowerCase().includes("automobile")).slice(0, 3)

            const topHospitality = providers
            .filter(provider => provider.serviceType.toLowerCase().includes("hospitality")).slice(0, 3)

            setFilteredProviders({ topFashion, topAutomobile, topHospitality });

            setFilteredAuto(topAutomobile)

            setfilteredHosp(topHospitality)

            setFilteredFashion(topFashion)

            setActiveArray(topFashion); //Set the first service type to be rendered by default
        })
        .catch(dupError=> console.log("caughtError:", dupError))

        }

        fetchProviders()
  }, [])

    // const handleArrayChange = (array) => {
    //     setActiveArray(array);
    // };

    //to get 3 fashion designer
    // const fashion = AllProvidersData ? AllProvidersData
    // .filter(provider => provider && provider.serviceType ==="fashion" || provider.serviceType ==="Fashion" ) : "";
    // const topFashion = fashion.slice(0, 3)


    //to get 3 hospitality
    // const hospitality = AllProvidersData ? AllProvidersData
    // .filter(provider => provider && provider.serviceType==="hospitality" || provider.serviceType==="Hospitality") : "";
    // const topHospitality = hospitality.slice(0, 3)

    //to get 3 automobile
    // const automobile = AllProvidersData ? AllProvidersData
    // .filter(provider => provider && provider.serviceType==="automobile" || provider.serviceType==="Automobile") : "";
    // const topAutomobile = automobile.slice(0, 3)


    // const fashionBtn = document.getElementById("fashion-btn");
    // const automobileBtn = document.getElementById("automobile-btn");
    // const hospitalityBtn = document.getElementById("hospitality-btn");


    const setFashion = () =>{
        setActiveBtn("fashion")
        setActiveArray(filteredFashion);
    }


    const setAutomobile = () =>{
        setActiveBtn("automobile")
        setActiveArray(filteredAuto);
    }

    const setHospitality = () =>{
        setActiveBtn("hospitality")
        setActiveArray(filteredHosp);
    }



  return (
    <PopularCategoryStyle>
        <h3>Popular Categories</h3>

        <div className='category-names'>
            <button className={activeBtn == "fashion" ? "red-btn" : ""} onClick={setFashion}>Fashion</button>
            <button className={activeBtn == "automobile" ? "red-btn" : ""} onClick={setAutomobile}>Automobile</button>
            <button className={activeBtn == "hospitality" ? "red-btn" : ""} onClick={setHospitality}>Hospitality</button>
        </div>

        <div className='categories'>
            {
                loading ? <div>Loading categories...</div> :

                activeArray && activeArray.map((provider, i) =>{
                    return(
                        
                            <ServiceProvider 
                                key={i}
                                id= {provider.id}
                                imagePath={provider.imagePath}
                                firstName={provider.firstName.charAt(0).toUpperCase() + provider.firstName.slice(1)+" "}
                                lastName={provider.lastName.charAt(0).toUpperCase() + provider.lastName.slice(1)}
                                serviceType={provider.serviceType}
                                isVerified={provider.isVerified}
                            />

                    )
                })

            }
        </div>
    </PopularCategoryStyle>

  )
}

export default PopularCategory
