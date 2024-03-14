import React from "react";
import "./CSS/NoPage.css";
import Header from '../Components/Header/Header';


function NoPage(){
    return(
        <div>
            <Header />
            <h3 className="myError">Error 404: Not Found</h3>
            <p>Canny is currently working on it</p>
        </div>
    )
}

export default NoPage;