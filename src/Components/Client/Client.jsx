import React from 'react';
import './Client.css';

function Client(client) {

  return (
            
            <section className="client">
                <img src={client.image} alt="" />

                <span>
                    <p>{client.testimonial}</p>
                
                    <h4>{client.firstName}<div className='last-name'>{client.lastName}</div></h4>
                </span>
            </section>
        )
}

export default Client;
