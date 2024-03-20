import React, { useState, useContext } from 'react'
import styled from 'styled-components';
import { HandiworkContext } from '../Context/HandiworkContext';
import ServiceProvider from '../ServiceProvider/ServiceProvider';

const TopCategoryStyle = styled.div`
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

            &:focus{
                border: none;
                outline: none;
                color: var(--energyRed);
                border-bottom: solid 4px var(--energyRed);
            }


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

        .active{
                color: var(--energyRed);
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

            &:focus{
                border: none;
                outline: none;
                color: var(--energyRed);
                border-bottom: solid 2px var(--energyRed);
            }


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

        .active{
                color: var(--energyRed);
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



function TopCategory() {
    const { AllServiceProvidersData } = useContext(HandiworkContext);

    const [topCategory, setTopCategory] = useState(AllServiceProvidersData.slice(0, 3));

    const firstTop = () =>{
        setTopCategory(AllServiceProvidersData.slice(0, 3))
    }

    const secondTop = () =>{
        setTopCategory(AllServiceProvidersData.slice(3, 6))
    }

    const thirdTop = () =>{
        setTopCategory(AllServiceProvidersData.slice(6, 9))
    }


    // let categories = [ 'Artisans', 'Technicians', 'Beauticians' ];

    // const filterResult = (selected) =>{
    //     const result=CategoryData.filter((currentCategory)=>{
    //         return currentCategory.category===selected;
    //     });

    //     setMyCategory(result);

    // };


  return (
    <TopCategoryStyle>
        <h3>Popular Categories</h3>

        <div className='category-names'>
            
            {/*
                categories.map((category, idx) =>{
                    
                    return(
                        <button 
                        className={`btn ${myCategory?.includes(category) ? "active" : ""}` } 
                        onClick={() => filterResult(category)}
                        key={`categories-${idx}`}
                        >{category}</button>
                    )
                })
           */}

            <button onClick={firstTop}>Fashion</button>
            <button onClick={secondTop}>Technicians</button>
            <button onClick={thirdTop}>Beauticians</button>
        </div>

        <div className='categories'>
            {
                topCategory.map((cat, i) =>{
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
    </TopCategoryStyle>

  )
}

export default TopCategory
