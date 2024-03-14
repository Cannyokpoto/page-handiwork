import React from 'react';
import './Client.css';

function Client(props) {

  return (
            
            <section className="testimonial">
                <img src={props.image} alt="" />

                <span>
                    <p>{props.testimonial}</p>
                
                    <h4>{props.fName} <span>{props.lName}</span></h4>
                </span>
            </section>
        )
}

export default Client;
