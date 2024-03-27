import React, { createContext, useState, useEffect, useRef } from 'react';
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

    //To get service providers based on the user's location

    // const inputRef = useRef()
    const [searchTerm, setSearchTerm] = useState("");

    //To grab the user's search input
    const handleSearchTerm = (event) =>{
      setSearchTerm(event.target.value)

      console.warn("searchTerm:", searchTerm)
    }



      //To return a message if there's no service provider in the searched location
      const[searchError, setSearchError] = useState(false);
      const[categorySearchError, setCategorySearchError] = useState(false);
    
      const addSearchError = () =>{
      setSearchError(true)
    }

  
    const removeSearchError = () =>{
      setSearchError(false)
    }

    const removeCategorySearchError = () =>{
      setCategorySearchError(false)
    }

    const addCategorySearchError = () =>{
      setCategorySearchError(true)
    }


    //To enhance general market place search
    const [service, setService] = useState("")
    const handleService = (event) =>{
      setService(event.target.value)
    }

    //To reset search field
    const resetSearch = () =>{
      document.getElementById("searchTerm").reset()
      setSearchTerm("")
      removeCategorySearchError()
    }

    const resetSearch2 = () =>{
      document.getElementById("searchTerm2").reset()
      setSearchTerm("")
      setService("")
      removeSearchError()
    }


    //To handle the predicted location from google geolocation api
    // const handlePlaceChanged = () =>{
    //     const [place] = inputRef.current.getPlaces()
    //     if(place){
    //         console.log(place.formatted_address)
    //         console.log(place.geometry.location.lat())
    //         console.log(place.geometry.location.lng())
    //     }
    // }



    //all the exported context data
  const contextValue = { AllServiceProvidersData, 
                        myStateData, myCityData, 
                        HandleSetStateCode, stateCode, 
                        signup, toggleSignup,
                        login, toggleLogin,
                        search, toggleSearch,
                        click, handleClick,
                        searchTerm, handleSearchTerm,
                        searchError, addSearchError,
                        removeSearchError, resetSearch,
                        resetSearch2,
                        service, handleService,
                        categorySearchError, addCategorySearchError,
                        removeCategorySearchError}

    

  return (
    <HandiworkContext.Provider value= { contextValue }>
        {props.children}
    </HandiworkContext.Provider>
  )
}

export default HandiworkContextProvider;
