import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TestimonialData } from '../Assets/Data';
import Client from '../Client/Client';
import './TestimonialCarousel.css';


function TestimonialCarousel(client) {
    
  const [currentIndex, setCurrentIndex] = useState(0);

//   to fetch users from api
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=6');
        const usersData = response.data.results.map(user => ({
          firstName: user.name.first,
          lastName: user.name.last,
          email: user.email,
          image: user.picture.large,
        }));
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  
  //funtion for previous button
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? TestimonialData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  
  //funtion for next button
  const goToNext = () => {
    const isLastSlide = currentIndex === TestimonialData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  //funtion for autoplay
  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [currentIndex]);


  
  return (
    <div className="carousel">
          <button onClick={goToPrevious} className="carousel-button">
            ❮
          </button>
            <Client 
                image = {client.image}
                testimonial = {client.testimonial}
                firstName = {client.firstName}
                lastName = {client.lastName}
                
                {...TestimonialData[currentIndex]}
            />
          <button onClick={goToNext} className="carousel-button">
            ❯
          </button>
    </div>
  );
};

export default TestimonialCarousel;
