import React, { createContext, useState, useEffect } from 'react';
import { AllServiceProvidersData } from '../Assets/Data';


export const HandiworkContext = createContext(null);
//Remember to import useParams in the child component; where you're going to use this context.

function HandiworkContextProvider(props) {

  //States to manage office address
  const [myStateData, setMyStateData] = useState([]);
  const [stateCode, setStateCode] = useState("");
  const [myCityData, setMyCityData] = useState([]);

  //function to retrieve states and cities

   //To fetch states in nigeria
    
   function fetchStates(){

    //To fetch states in nigeria
    fetch("https://nigeria-states-towns-lga.onrender.com/api/states")    
    .then((res) => res.json())
    .then((response) => setMyStateData(response))
    .catch((stateErr) => console.log(stateErr))
    
    console.warn('myStateData', myStateData)
  }

    useEffect(() =>{
    fetchStates();
    }, [])


    //To get state code from selected state
 
    const HandleSetStateCode = (event) => {

        //to set state code
        const getStateCode = event.target.value;
        const {name, value} = event.target;
        setStateCode(getStateCode);

       console.warn('stateCode', stateCode)

        setFormData({
           ...formData, [name] : value
       })  
    }

  //To get all cities for the selected state
  function fetchCities(){
    fetch(`https://nigeria-states-towns-lga.onrender.com/api/${stateCode}/lgas`)    
    .then((myRes) => myRes.json())
    .then((myResponse) => setMyCityData(myResponse))
    .catch((cityErr) => console.log(cityErr))
    
    console.warn('myCityData', myCityData)
}

  useEffect(() =>{
      fetchCities()
  }, [stateCode])

  //To toggle Signup

  const [signup , setSignup] = useState(false);
        function toggleSignup(){
        setSignup(!signup);
        setClick(false)
  };
  if(signup) {
    document.body.classList.add('active-modal')
    } else {
    document.body.classList.remove('active-modal')
    }

  //To toggle Login

  const [login, setLogin] = useState(false);
  function toggleLogin(){
      setLogin(!login);
      setClick(false)
  };

  if(login) {
    document.body.classList.add('active-modal2')
    } else {
    document.body.classList.remove('active-modal2')
    }

  //To toggle SearchBar

  const [search, setSearch] = useState(false);
  const toggleSearch = () => {
      setSearch(!search);
  };

  if(search) {
      document.body.classList.add('active-modal3')
      } else {
      document.body.classList.remove('active-modal3')
      }

    //To toggle Mobile Navbar

    const [click, setClick] = useState(false);

    function handleClick(){
      setClick(!click);
    }



    //all the exported context data
  const contextValue = { AllServiceProvidersData, 
                        myStateData, myCityData, 
                        HandleSetStateCode, stateCode, 
                        signup, toggleSignup,
                        login, toggleLogin,
                        search, toggleSearch,
                        click, handleClick }

    

  return (
    <HandiworkContext.Provider value= { contextValue }>
        {props.children}
    </HandiworkContext.Provider>
  )
}

export default HandiworkContextProvider;
