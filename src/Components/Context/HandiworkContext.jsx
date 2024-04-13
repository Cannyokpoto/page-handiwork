import React, { createContext, useState, useEffect, useRef } from 'react';
import { AllServiceProvidersData } from '../Assets/Data';
import { useParams } from 'react-router-dom';


export const HandiworkContext = createContext(null);
//Remember to import useParams in the child component; where you're going to use this context.

function HandiworkContextProvider(props) {

  //service providers form validation
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    secondPhone: '',
    serviceType: '',
    subCategory: '',
    openingHour: '',
    referralCode: '',
    stateOfResidence: "", 
    city: "", 
    street: "", 
    imagePath: "",
 })

 //to grab the profile Image field for validation
 const displayPhoto = document.getElementById('imagePath');
  // const displayPhoto2 = document.getElementById('imagePath2');

  //to show selected Image file
  const [justShow, setJustShow] = useState(false);
    const handleShow =()=>{
        setJustShow(!justShow)
    }

//  const showPath=()=>{
//   displayPhoto.classList.add("showPath")
//  };

//  const showPath2=()=>{
//   displayPhoto2.classList.add("showPath")
//  };

//  const [profileImageUpload, setProfileImageUpload] = useState("No file selected")
//  console.warn("profileImageUpload", profileImageUpload)


 //funtion to grab inputs made by service providers

 const handleChange = (e) =>{
  const {name, value, files} = e.target;

  setFormData({
      // ...formData, [name] : value
      ...formData, [name]: name === 'imagePath' ? files[0] : value
  })


  console.warn("formData", formData)
}


//To render certain input fields only when required
const [other, setOther] = useState("");
 
const handleSetOther = (event) => {
    const getOther = event.target.value;
    const {name, value} = event.target;
    setOther(getOther);


    setFormData({
       ...formData, [name] : value
   })
}

//customers form validation
  const [customerFormData, setCustomerFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: "", 
  })


//funtion to grab inputs made customers

const handleCustomerChange = (e) =>{
  const {name, value} = e.target;

  setCustomerFormData({
      // ...formData, [name] : value
      ...customerFormData, [name] : value
  })

  console.warn("customerFormData", customerFormData)
}




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



    //toggle Verification form
    const [verify, setVerify] = useState(false);
    function toggleVerify(){
        setVerify(!verify);
    };

  if(verify) {
    document.body.classList.add('active-modal3')
    } else {
    document.body.classList.remove('active-modal3')
    }


  //To toggle SearchBar

  // const [search, setSearch] = useState(false);
  // const toggleSearch = () => {
  //     setSearch(!search);
  // };

  // if(search) {
  //     document.body.classList.add('active-modal3')
  //     } else {
  //     document.body.classList.remove('active-modal3')
  //     }

    //To toggle Mobile Navbar

    const [click, setClick] = useState(false);

    const handleClick =()=>{
      setClick(!click);
    }




    //To get a loggedin Provider
    const [loggedinProvider, setLoggedinProvider] = useState(null);
    // console.warn('loggedinProvider', loggedinProvider)



    //funtion to handle service providers signUp

     //customized error messages
     const [errors, setErrors] = useState({})

  

    async function handleSubmit(e){
      e.preventDefault()
      const validationErrors = {}


      //To ensure valid inputs
      if(!formData.firstName.trim()){
          validationErrors.firstName = "first name is required"
      }

      if(!formData.lastName.trim()){
          validationErrors.lastName = "last name is required"
      }

      // if(!formData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      //     validationErrors.email = "email is not valid"
      // }

      if (!displayPhoto.files || displayPhoto.files.length === 0){
          validationErrors.imagePath = "profile image is required"
      }

      if(!formData.stateOfResidence.trim()){
          validationErrors.stateOfResidence = "please select state of residence"
      }

      if(!formData.city.trim()){
          validationErrors.city = "please select city"
      }

      if(!formData.street.trim()){
          validationErrors.street = "please provide office no. and street name"
      }

      if(!formData.password.trim()){
          validationErrors.password = "password is required"
      }
      else if(formData.password.length < 6){
          validationErrors.password = "password should be atleast 6 characters"
      }

      if(formData.confirmPassword !== formData.password){
          validationErrors.confirmPassword = "password not matched"
      }

      if(!formData.phone.trim()){
          validationErrors.phone = "phone number is required"
      }
      else if(formData.phone.length < 11){
          validationErrors.phone = "phone number should be atleast 11 characters"
      }

      if(!formData.serviceType.trim()){
          validationErrors.serviceType = "please select service type"
      }

      if(!formData.openingHour.trim()){
          validationErrors.openingHour = "please specify your opening and closing hour"
      }


      console.warn("validationErrors", validationErrors)

      

      //API Integration for service providers Sign Up

  try {
      const result = await fetch("https://handiworks.cosmossound.com.ng/api/skill-providers/create", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          }
      })

      if(!result.ok){
          throw new Error("Bad Response")
      }


      const lastResult = await result.json()

      console.warn('lastResult', lastResult)
      

      //To store the registered Provider in the local storage
      // localStorage.setItem("loggedinProvider", JSON.stringify(lastResult))



      //Retrieving service providers
      // const userData = await fetch("https://handiwork.cosmossound.com.ng/api/skill-providers/skillproviders")

      // const users = await userData.json()

      // console.warn('users', users)
      


  }catch (dupError) {
      console.log(dupError)
  }

  setErrors(validationErrors)


  if(Object.keys(validationErrors).length === 0 || validationErrors == {}){

      //To show success message
          handleSuccess()

      //To clear form
      // e.target.reset();        
  }
      
}


//To display success message after registration

  const [success, setSuccess] = useState(false);

  function handleSuccess(){
    setSuccess(!success)
}

//To display welcome message after login

const [welcome, setWelcome] = useState(false);

function handleWelcome(){
  setWelcome(!welcome)
}



 //To grab the setLoggedinProvider from the local storage

  const getLoggedinProvider = () =>{
    let loggedinProviderData = JSON.parse(localStorage.getItem("loggedinProvider"))
    setLoggedinProvider(loggedinProviderData)

  }

  //To close success message and reload App
  const closeSignupAndRefresh =()=>{
    toggleSignup()
    window.location.reload(false)
  }


  const closeLoginAndRefresh =()=>{
    toggleLogin()
    window.location.reload(false)
  }




  //funtion to handle customers signUp

  async function handleCustomerSignUp(e){
      e.preventDefault()
      const validationErrors = {}


      //To ensure valid inputs
      if(!customerFormData.fullName.trim()){
          validationErrors.fullName = "full name is required"
      }

      if(!customerFormData.phone.trim()){
        validationErrors.phone = "phone number is required"
    }
    else if(customerFormData.phone.length < 11){
        validationErrors.phone = "phone number should be atleast 11 characters"
    }

      // if(!formData.lastName.trim()){
      //     validationErrors.lastName = "last name is required"
      // }

      // if(!formData.email.trim()){
      //     validationErrors.email = "email is required"
      // }
      // else if(!formData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      //     validationErrors.email = "email is not valid"
      // }

      if(!customerFormData.address.trim()){
          validationErrors.address = "address is required"
      }

      if(!customerFormData.password.trim()){
          validationErrors.password = "password is required"
      }
      else if(customerFormData.password.length < 6){
          validationErrors.password = "password should be atleast 6 characters"
      }

      if(customerFormData.confirmPassword !==customerFormData.password){
          validationErrors.confirmPassword = "password not matched"
      }


      console.log(validationErrors)

      

      //API Integration for customer Sign Up

    try {
      const result = await fetch("https://handiworks.cosmossound.com.ng/api/customers/create", {
          method: "POST",
          body: JSON.stringify(customerFormData),
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          }
      })

      if(!result.ok){
          throw new Error("could not complete customer registration")
      }


      const newCustomer = await result.json()

      // console.warn('newCustomer', newCustomer)


      //To store the customers data in the local storage
      localStorage.setItem("loggedinCustomer", JSON.stringify(newCustomer))


      //Retrieving all customers
      // const customersData = await fetch("https://handiwork.cosmossound.com.ng/api/customers/customers")

      // const allCustomers = await customersData.json()

      // console.warn('users', allCustomers)
      


  }catch (dupError) {
      console.log(dupError)
  }

  setErrors(validationErrors)


      if(Object.keys(validationErrors).length === 0 || validationErrors == {}){

          //To show success message
              handleSuccess()

          //To clear form
          // e.target.reset();        
      }
      
  }

  //To grab the loggedinCustomer from the local storage

    const [loggedinCustomer, setLoggedinCustomer] = useState(null);
    console.warn('loggedinCustomer', loggedinCustomer)

  const getLoggedinCustomer = () =>{
    let loggedinCustomerData = JSON.parse(localStorage.getItem("loggedinCustomer"))
    setLoggedinCustomer(loggedinCustomerData)
  }
 


    //API REQUEST FOR SERVICE PROVIDER LOGIN
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [password, setPassword] = useState("");

    const [loginError, setLoginError] = useState("");
    console.warn("loginError", loginError)

    async function handleProviderLogin(e){
      e.preventDefault()

      const loginItem = {emailOrPhone, password}      
      console.warn("loginItem", loginItem)


      try {
        const result = await fetch("https://handiworks.cosmossound.com.ng/api/auth/login", {
            method: "POST",
            body: JSON.stringify(loginItem),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        if(!result.ok){
            throw new Error("incorrect phone number or password")
        }
        else{
            handleWelcome()
        }


        const lastResult = await result.json()

        console.warn('lastResult', lastResult)

        //To store the data in the local storage
        // localStorage.setItem("logged-in-user", JSON.stringify(lastResult))
        localStorage.setItem("loggedinProvider", JSON.stringify(lastResult))
    

    }catch (dupError) {
        console.log(dupError)
        setLoginError(dupError)
    }

  }


  //API REQUEST FOR CUSTOMER LOGIN

    async function handleCustomerLogin(e){
      e.preventDefault()

      const loginItem = {emailOrPhone, password}


      try {
        const result = await fetch("https://handiworks.cosmossound.com.ng/api/auth/login", {
            method: "POST",
            body: JSON.stringify(loginItem),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        if(!result.ok){
            throw new Error("login failed")
        }
        else{
            handleWelcome()
        }


        const newCustomer = await result.json()

        console.warn('lastResult', newCustomer)

        //To store the data in the local storage
        localStorage.setItem("loggedinCustomer", JSON.stringify(newCustomer))
    

    }catch (dupError) {
        console.log(dupError)
    }


}

    
    //To handle phone number input for login
    const handleEmailOrPhone =(e) =>{
      setEmailOrPhone(e.target.value)
      setLoginError(null)
      console.log("emailOrPhone", e.target.value)
    }

    //To handle password input for login
    const handlePassword =(e) =>{
      setPassword(e.target.value)
      setLoginError(null)
      console.log("password", e.target.value)
    }


    //To view a single service provider
    const [fetchedProvider, setFetchedProvider] = useState(null);

    console.warn('fetchedProvider', fetchedProvider)

    async function viewProvider(){

    try {
      const url = `https://handiworks.cosmossound.com.ng/api/skill-providers/view/${loggedinProvider ? loggedinProvider.user.providerId : ""}`
      const result = await fetch(url)

      if(!result.ok){
          throw new Error("could not fetch provider")
      }

      const fetchedProviderData = await result.json()

      setFetchedProvider(fetchedProviderData)

      
  }catch (dupError) {
      console.log(dupError)
  }
      
  }


  //To view a single customer

    const [fetchedCustomer, setFetchedCustomer] = useState(null);

    const [fetchedCustomerName, setFetchedCustomerName] = useState("");

    console.warn('fetchedCustomer', fetchedCustomer)

    console.warn('fetchedCustomerName', fetchedCustomer ? fetchedCustomer.customer.firstName : "")

    // console.log(fetchedCustomer ? fetchedCustomer.customer.fullName : "");


    async function viewCustomer(){

      try {
        const url = `https://handiworks.cosmossound.com.ng/api/customers/view/5`
        const result = await fetch(url)
  
        if(!result.ok){
            throw new Error("could not fetch customer")
        }
  
        const fetchedCustomerData = await result.json()
  
        setFetchedCustomer(fetchedCustomerData)
  
        
        
  
    }catch (dupError) {
        console.log(dupError)
    }
        
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
    
      const addSearchError = () =>{
      setSearchError(true)
    }

    const removeSearchError = () =>{
      setSearchError(false)
    }



    //For each category
    const[categorySearchError, setCategorySearchError] = useState(false);

    const removeCategorySearchError = () =>{
      setCategorySearchError("No")
    }


    const addCategorySearchError = () =>{
      setCategorySearchError("Yes")
    }

    const toggleCategorySearchError = () =>{
      setCategorySearchError(!categorySearchError)
      console.log("errorStatus", categorySearchError)
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

    //To handle the navigation dropdown menu
    const [dropDown, setDropDown] = useState(false);
    const handleDropDown = () =>{
      setDropDown(true)
    }

    const sustainDropDown = () =>{
      setDropDown(true)
    }

    const stopDropDown = () =>{
      setDropDown(false)
    }

     //To handle the user profile dropdown menu

     let dropDownRef = useRef()
    
     const [userDropDown, setUserDropDown] = useState(false);
     const handleUserDropDown = () =>{
       setUserDropDown(!userDropDown)
    }

    const closeUserDropDown = () =>{
      setUserDropDown(false)
   }




    //all the exported context data
  const contextValue = { AllServiceProvidersData, 
                        myStateData, myCityData, 
                        HandleSetStateCode, stateCode, 
                        signup, toggleSignup,
                        login, toggleLogin,
                        click, handleClick,
                        searchTerm, handleSearchTerm,
                        searchError, addSearchError,
                        removeSearchError, resetSearch,
                        resetSearch2,
                        service, handleService,
                        categorySearchError, addCategorySearchError,
                        removeCategorySearchError, toggleCategorySearchError, dropDown, 
                        sustainDropDown, handleDropDown, stopDropDown,
                        userDropDown, handleUserDropDown, loggedinProvider,
                        formData, handleChange, handleSetOther, other, handleProviderLogin, handlePassword, handleSubmit, handleCustomerSignUp, errors,
                         getLoggedinProvider, getLoggedinCustomer, handleSuccess, success, closeUserDropDown, 
                        dropDownRef, closeSignupAndRefresh, closeLoginAndRefresh, handleCustomerChange,
                        viewProvider, fetchedProvider, viewCustomer, handleEmailOrPhone, welcome,
                          handleWelcome, handleCustomerLogin, loginError, justShow, handleShow,
                        verify, toggleVerify}
                    
  

  return (
    <HandiworkContext.Provider value= { contextValue }>
        {props.children}
    </HandiworkContext.Provider>
  )

}

export default HandiworkContextProvider;
