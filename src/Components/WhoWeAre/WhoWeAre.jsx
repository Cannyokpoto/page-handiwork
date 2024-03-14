import React from "react";
import "./Who.css";
import PHOTOS from "../images/index";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const WhoStyles = styled.div`

    width: 100vw;
    height: 75vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 100px;
    padding: 0 50px 0 50px;


    .left-hand-side{
        width: 37%;
        height: 79%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;


        h3{
            font-size: 40px;
            color: var(--secondary);
        }

        p{
            color: var(--energyGrey);
            font-size: 15px;
            line-height: 2;
            }

            a{
                width: 37%;
                height: 60px;
                background-color: var(--secondary);
                display: flex;
                flex-direction: row;
                align-items: center;
                border-radius: 4px;
                justify-content: center;
                color: var(--energyWhite);
                text-decoration: none;
                font-size: 15px;
                margin-top: 20px;
            }
        }


    .right-hand-side{
        width: 35%;
        height: 79%;
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            width: 100%;
            height: 100%;
        }
    }

    @media (max-width: 500px){
        width: 90vw;
        height: 75vh;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-top: 50px;
        gap: 20px;

        
        
        .left-hand-side{
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;


        h3{
            font-size: 25px;
            color: var(--energyBlack);
        }

        p{
            color: var(--energyBlack);
            font-size: 15px;
            line-height: 1.5;
        }
        
        
        }

        .right-hand-side{
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        img{
            width: 100%;
            height: 100%;
        }
    }
    
    }


`;

function WhoWeAre(){

        return(
            <WhoStyles id="about">

                <div className="left-hand-side">
                    <h3>Who we are</h3>
                    <p>We believe not only in offering the customers with the best 
                        professional artisans and handymen in the neighborhood, but also to empower 
                        the well-trained Artisans and handymen by providing them with an increased revenue 
                        and a larger pool of clients, we will in turn encourage the majority, whom are not 
                        properly trained to go get a proper education in their skill because without that, 
                        they won’t be able to  get on our platform.</p>
                    <Link to="/about">Explore more</Link>
                </div>

                <div className="right-hand-side">
                    <img src={PHOTOS.whoWoman} alt=""/>
                </div>
            </WhoStyles>
        )
};



export default WhoWeAre;