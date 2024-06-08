import React, { useState, useEffect } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState({ serviceType1: [], serviceType2: [], serviceType3: [] });
  const [activeArray, setActiveArray] = useState([]);

  useEffect(() => {
    // Fetch the users from the API
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.example.com/users'); // Replace with your API URL
        const data = await response.json();

        // Filter users based on occupation
        const serviceType1 = data.filter(user => user.serviceType === 'fashion' || 'Fashion');
        const serviceType2 = data.filter(user => user.serviceType === 'automobile' || 'Automobile');
        const serviceType3 = data.filter(user => user.serviceType === 'hospitality' || 'Hospitality');

        setFilteredUsers({ serviceType1, serviceType2, serviceType3 });

        setActiveArray(serviceType1); // Set the first occupation to be rendered by default

      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);


//   const handleArrayChange = (array) => {
//     setActiveArray(array);
//   };


  return (
    <div>
      <h1>User Occupations</h1>
      <div>
        <button onClick={() => handleArrayChange(filteredUsers.occupation1)}>Show Occupation 1</button>
        <button onClick={() => handleArrayChange(filteredUsers.occupation2)}>Show Occupation 2</button>
        <button onClick={() => handleArrayChange(filteredUsers.occupation3)}>Show Occupation 3</button>
      </div>
      <ul>
        {activeArray.map((user, index) => (
          <li key={index}>{user.name} - {user.occupation}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
