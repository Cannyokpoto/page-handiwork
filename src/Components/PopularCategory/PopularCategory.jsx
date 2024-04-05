import React, { useState, useContext } from 'react'
import styled from 'styled-components';
import { HandiworkContext } from '../Context/HandiworkContext';
import ServiceProvider from '../ServiceProvider/ServiceProvider';

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
    const { AllServiceProvidersData } = useContext(HandiworkContext);

    //to get 3 fashion designer
    const fashion = AllServiceProvidersData.filter(provider => provider.category.toLowerCase().includes("fashion"));
    const topFashion = fashion.slice(0, 3)

    //to get 3 technicians
    const technicians = AllServiceProvidersData.filter(provider => provider.category.toLowerCase().includes("technicians"));
    const topTechnicians = technicians.slice(0, 3)

    //to get 3 beautician
    const beauticians = AllServiceProvidersData.filter(provider => provider.category.toLowerCase().includes("beauticians"));
    const topBeauticians = beauticians.slice(0, 3)

    console.warn("fashion people", fashion);
    console.warn("top fashion people", topFashion);

    const [popularCategory, setPopularCategory] = useState(topFashion);

    const fashionBtn = document.getElementById("fashion-btn");
    const beauticiansBtn = document.getElementById("beauticians-btn");
    const techniciansBtn = document.getElementById("technicians-btn");

    const setFashion = () =>{
       fashionBtn.classList.add("red-btn")
       techniciansBtn.classList.remove("red-btn")
        beauticiansBtn.classList.remove("red-btn")
        setPopularCategory(topFashion)
    }


    const setTechnicians = () =>{
        setPopularCategory(topTechnicians)
        techniciansBtn.classList.add("red-btn")
        fashionBtn.classList.remove("red-btn")
        beauticiansBtn.classList.remove("red-btn")
    }

    const setBeauticians = () =>{
        setPopularCategory(topBeauticians)
        fashionBtn.classList.remove("red-btn")
        techniciansBtn.classList.remove("red-btn")
        beauticiansBtn.classList.add("red-btn")
    }



  return (
    <PopularCategoryStyle>
        <h3>Popular Categories</h3>

        <div className='category-names'>

            <button className="red-btn" id="fashion-btn" onClick={setFashion}>Fashion</button>
            <button className={ popularCategory===topTechnicians ? "red-btn" : "" } id="technicians-btn" onClick={setTechnicians}>Technicians</button>
            <button className={ popularCategory===topBeauticians ? "red-btn" : "" } id="beauticians-btn" onClick={setBeauticians}>Beauticians</button>
        </div>

        <div className='categories'>
            {
                popularCategory.map((cat, i) =>{
                    return(
                        
                            <ServiceProvider 
                                key={i}
                                id={cat.id}
                                image={cat.image}
                                name={cat.name}
                                skill={cat.skill}
                                no_off_jobs={cat.no_off_jobs}
                            />

                    )
                })
            }
        </div>
    </PopularCategoryStyle>

  )
}

export default PopularCategory
