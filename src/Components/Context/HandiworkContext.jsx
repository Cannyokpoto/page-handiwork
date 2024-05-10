import React, { createContext, useState, useEffect, useRef } from 'react';
import { AllServiceProvidersData, serviceTypes} from '../Assets/Data';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import axios from "axios";


export const HandiworkContext = createContext(null);
//Remember to import useParams in the child component; where you're going to use this context.

function HandiworkContextProvider(props) {

  //To show loading on api calls
  const [loading, setLoading] = useState(false)

  if(loading) {
    document.body.classList.add('active-loading')
    } else {
    document.body.classList.remove('active-loading')
    }



  //service providers form validation
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    secondPhone: '',
    serviceType: "",
    subCategory: "",
    openingHour: '',
    referralCode: '',
    stateOfResidence: "", 
    city: "", 
    street: "", 
    image: "",
 })


  const [loggedinProvider, setLoggedinProvider] = useState(null);
  console.warn('loggedinProvider:', loggedinProvider)

  const [fetchedProvider, setFetchedProvider] = useState(null);


  //For service type custom dropdown
  const [serviceDD, setServiceDD] = useState(false);
  const [serviceValue, setServiceValue] = useState("");
  const [serviceType, setServiceType] = useState("");

  //For service type custom dropdown for profile update
  const [newServiceType, setNewServiceType] = useState("")

  console.warn("newServiceType:", newServiceType)

  //to toggle service type custom dropdown
  const handleServiceDD = ()=>{
      setServiceDD(!serviceDD)
  }

  //to updated selected service type
  const handleServiceType = (service)=>{
    setServiceType(service)
}

  //to get search term from service type dropdown search box
  const handleServiceValue = (e)=>{
      setServiceValue(e.target.value.toLowerCase())
  }

  //to get selected value from service type dropdown
  const handleServiceSelect = (service)=>{
      setFormData({
          ...formData,
          serviceType: service
        });

        //service type for profile update
        setNewServiceType(service)
  }


   //For subCategory custom dropdown
   const [subCategoryDD, setSubCategoryDD] = useState(false);
   const [subCategoryValue, setSubCategoryValue] = useState("");
   const [subCategory, setSubCategory] = useState("");

   //subCategory custom dropdown for profile update
  const [newSubCategory, setNewSubCategory] = useState("")
  console.warn("newSubCategory:", newSubCategory)


   //to toggle subCategory custom dropdown
  const handleSubCategoryDD = ()=>{
      setSubCategoryDD(!subCategoryDD)
  }

  //to updated selected subCategory
  const handleSubCategory = (category)=>{
    setSubCategory(category)
}

  //to get search term from subCategory dropdown search box
  const handleSubCategoryValue = (e)=>{
      setSubCategoryValue(e.target.value.toLowerCase())
  }

  //to get selected value from subCategory dropdown
  const handleSubCategorySelect = (category)=>{
      setFormData({
          ...formData,
          subCategory: category
        });

        //subCategory custom dropdown for profile update
        setNewSubCategory(category)
  }



 //to grab the profile Image field for validation
 const displayPhoto = document.getElementById('imagePath');
 const displayPhoto2 = document.getElementById('imagePath2');
  // const displayPhoto2 = document.getElementById('imagePath2');

  //to show selected Image file
  const [justShow, setJustShow] = useState(false);
    const handleShow =()=>{
        setJustShow(true)
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
//  const [serviceType, setServiceType] = useState("");


//     const handleServiceType =(e)=>{
//       const {name, value} = e.target;
//       typedService = e.target;

//       setServiceType(typedService)

//         setFormData({
//           ...formData, [name] : value
//       })
//     }



 const handleChange = (e) =>{
  const {name, value} = e.target;

  setDuplicateError("")

  setFormData({
      ...formData, [name] : value
      // ...formData, [name]: name === 'imagePath' || 'imagePath2' ? files[0] : value
  })

  console.warn("formData", formData)
}

//CAC submission states

let currentId = fetchedProvider ? fetchedProvider.skillProvider.id : "";
console.warn("currentId:", currentId)

const [cacData, setCacData] = useState({
  cacImage: null,
})

const [selectedCacImageName, setSelectedCacImageName] = useState("")
const [mandatoryCacImage, setMandatoryCacImage] = useState(null)
console.warn("selectedCacImageName:", selectedCacImageName)

//profile picture update
const [selectedImageName, setSelectedImageName] = useState("")
const [newImage, setNewImage] = useState(null)
const [mandatoryImage, setMandatoryImage] = useState(null)



const handleFileChange = (e) =>{
  const selectedImage = e.target.files[0];
  const getSelectedImageName = e.target.files[0].name;
  setSelectedImageName(getSelectedImageName)
  setMandatoryCacImage(getSelectedImageName)


  const collectedImage = e.target.files[0];
  setMandatoryImage(collectedImage)
  setMandatoryCacImage(collectedImage)


  setCacData({
    ...cacData, cacImage: selectedImage
  })

  // viewProvider()

  console.warn("cacData:", cacData)


  //To update profile photo
  
  setNewImage(selectedImage)


  //To Preview Dp
    const imagePreview = URL.createObjectURL(e.target.files[0])

    setDp(imagePreview)

    if(!selectedImage){
      setPreview(false)
    }
    else{
      setPreview(true)
    }


    //for sign up
    setFormData({
      // ...formData, [name]: name === 'imagePath' ? files[0] : value
      // ...formData, imagePath: e.target.files[0]
      ...formData, image: selectedImage
   })
}

//To show the search box for service type search
const [serviceSearch, setServiceSearch] = useState(false);

const handleServiceSearch = ()=>{
  setServiceSearch(!serviceSearch)
}

const [serviceTerm, setServiceTerm] = useState("");
const [services, setServices] = useState(serviceTypes);

const handleServiceTerm = (e)=>{
  const term = e.target.value.toLowerCase();
  setServiceTerm(term)

  const filteredService = services.filter(service =>
    service.toLowerCase().includes(term)
  );
  setServices(filteredService);
}

//To service type dropdown open
// const serviceType = document.getElementById("serviceType")
// const openSelect = ()=>{
//   serviceType.click()
// }




//To render certain input fields only when required
const [other, setOther] = useState("");
// const [serviceType, setServiceType] = useState(null);
 
// const handleServiceType = (serviceType) => {
    // const serviceType = service.value;
    // setOther(serviceType)
    // const {name, value} = event.target;
    // setOther(serviceType);

    // const getOther = serviceType.value

    //To hide subCategory when "other" option is selected

  // setOther(getOther)


  // setFormData({
  //      ...formData,  serviceType
  //  })
// }

// const handleSubCategory = (subCategory) => {
//     // const subCategory = sub.value;


//   setFormData({
//        ...formData,  subCategory
//    })
// }

//customers form validation
  const [customerFormData, setCustomerFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: "", 
  })


//funtion to grab inputs made customers

const handleCustomerChange = (e) =>{
  const {name, value} = e.target;

  setDuplicateError("")

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
    // fetch("https://handiworks.cosmossound.com.ng/api/nigerian-states/states")
    .then((res) => res.json())
    .then((response) => setMyStateData(response))
    .catch((stateErr) => console.log(stateErr))
    console.warn('myStateData', myStateData)
  }

    useEffect(() =>{
    fetchStates();
    }, [])


    //To get state code from selected state

    //To get state code from selected state for profile update
    const [newStateOfResidence, setNewStateOfResidence] = useState("")
 
    const HandleSetStateCode = (event) => {

        //to set state code
        const getStateCode = event.target.value;
        const {name, value} = event.target;
        setStateCode(getStateCode);

       console.warn('stateCode', stateCode)

        setFormData({
           ...formData, [name] : value
       })  



       //To set Provider Update Data

       setNewStateOfResidence(getStateCode)

    //    setExpectedChanges({
    //     ...expectedChanges, [name] : value
    // })
  }

  //To get all cities for the selected state
  function fetchCities(){
    fetch(`https://nigeria-states-towns-lga.onrender.com/api/${stateCode}/lgas`)  
    // fetch(`https://handiworks.cosmossound.com.ng/api/nigerian-states/${stateCode}/towns`) 
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
        setErrors({})
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




    //funtion to handle service providers signUp

     //customized error messages
     const [errors, setErrors] = useState({})

     const [duplicateError, setDuplicateError] = useState("")
     const [duplicateEmail, setDuplicateEmail] = useState("")
     const [duplicateNumber, setDuplicateNumber] = useState("")
     console.warn('duplicateEmail:', duplicateEmail)
     console.warn('duplicateNumber:', duplicateNumber)

    async function handleProviderSignUp(e){
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

      // if (!displayPhoto.files || displayPhoto.files.length === 0){
      //     validationErrors.imagePath = "profile image is required"
      // }

      if (!mandatoryImage){
        validationErrors.image = "profile image is required"
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
          validationErrors.phone = "phone number should be atleast 11 digits"
      }

      else if(formData.phone.length > 11){
        validationErrors.phone = "phone number should not be more than 11 digits"
    }

      if(formData.secondPhone === formData.phone){
        validationErrors.secondPhone = "phone2 is same as phone1"
    }
  //   else if(formData.secondPhone.length < 11){
  //     validationErrors.secondPhone = "phone number should be atleast 11 digits"
  // }

      if(!formData.serviceType){
          validationErrors.serviceType = "please select service type"
      }

      if(!formData.openingHour.trim()){
          validationErrors.openingHour = "please specify your opening and closing hour"
      }

      setErrors(validationErrors)

      console.warn("validationErrors", validationErrors)

      const noError = Object.keys(validationErrors).length === 0;

      

      //API Integration for service providers Sign Up

      if(noError){

        try {
          setLoading(true)
      
            // const result = await fetch("https://handiworks.cosmossound.com.ng/api/skill-providers/create", {
            //     method: "POST",
            //     body: JSON.stringify(formData),
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Accept": "application/json"
            //     }
            // })

            const formToSend = new FormData()
            formToSend.append("firstName", formData.firstName);
            formToSend.append("lastName", formData.lastName);
            formToSend.append("email", formData.email);
            formToSend.append("password", formData.password);
            formToSend.append("confirmPassword", formData.confirmPassword);
            formToSend.append("phone", formData.phone);
            formToSend.append("secondPhone", formData.secondPhone);
            formToSend.append("serviceType", formData.serviceType);
            formToSend.append("subCategory", formData.subCategory);
            formToSend.append("openingHour", formData.openingHour);
            formToSend.append("referralCode", formData.referralCode);
            formToSend.append("stateOfResidence", formData.stateOfResidence);
            formToSend.append("city", formData.city);
            formToSend.append("street", formData.street);
            formToSend.append("image", formData.image, selectedImageName);
            

           const response = await axios.post("https://handiworks.cosmossound.com.ng/api/skill-providers/create", formToSend, {
            headers: {
              "Content-Type"  : "multipart/form-data"
              }
           })
            console.warn('response:', response.data)
      
          //   if(result.ok){
          //       handleSuccess()
          // }
          // else if(!result.ok){
          //   const errorMessage = await result.json();
          //   const lastError = errorMessage ? errorMessage.error : "";
          //   console.log("errorMessage:", lastError)
          //   throw new Error(lastError)
          // }

          if(response.status >= 200 && response.status < 300){
            handleSuccess()
            setSignup(false)
            setLogin(false)
          }
          else{
            const errorMessage = response.data.message || "Unknown error, please retry."
            console.log("errorMessage:", errorMessage)
          }
      
      
            // const lastResult = await result.json()
      
            // console.warn('lastResult', lastResult)
            
      
            //To store the registered Provider in the local storage
            // localStorage.setItem("loggedinProvider", JSON.stringify(lastResult))
      
      
      
            //Retrieving service providers
            // const userData = await fetch("https://handiwork.cosmossound.com.ng/api/skill-providers/skillproviders")
      
            // const users = await userData.json()
      
            // console.warn('users', users)
            
      
        }catch (dupError) {
            console.log("caughtError:", dupError.message)

            if(dupError.message === "Request failed with status code 500"){
              setDuplicateError("Email or phone number already exists.")
            }
            else{
              setDuplicateError("Unknown error. Please check your internet connection and retry.")
            }
    
        }
      
        finally{
          setLoading(false)
        }

    }

  


  // if(Object.keys(validationErrors).length === 0 || validationErrors == {}){

  //     //To show success message
  //         handleSuccess()

  //     //To clear form
  //     // e.target.reset();        
  // }
      
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


  //To get a loggedin Provider
  const getLoggedinProvider = () =>{
    let loggedinProviderData = JSON.parse(localStorage.getItem("loggedinProvider"))
    setLoggedinProvider(loggedinProviderData)
  }

  //To grab the loggedinCustomer from the local storage

    const [loggedinCustomer, setLoggedinCustomer] = useState(null);
    let customerName = loggedinCustomer ? loggedinCustomer.user.firstName : "";
    console.warn('customerName:', customerName)
    console.warn('loggedinCustomer:', loggedinCustomer)

  const getLoggedinCustomer = () =>{
    let loggedinCustomerData = JSON.parse(localStorage.getItem("loggedinCustomer"))
    setLoggedinCustomer(loggedinCustomerData)
  }

  

  //To close success message and reload App
  // const navigate = useNavigate()
  const closeSignupAndRefresh =()=>{
    // toggleSignup()
    // navigate("/")
    window.location.reload(false)
  }


  const closeLoginAndRefresh =()=>{
    // toggleLogin()
    // navigate("/")
    window.location.reload(false)
  }



  //funtion to handle customers signUp

  async function handleCustomerSignUp(e){
      e.preventDefault()
      const validationErrors = {}


      //To ensure valid inputs
      if(!customerFormData.firstName.trim()){
          validationErrors.firstName = "first name is required"
      }

      if(!customerFormData.lastName.trim()){
        validationErrors.lastName = "last name is required"
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

      setErrors(validationErrors)

      console.log(validationErrors)

      const noError = Object.keys(validationErrors).length === 0;
      

      //API Integration for customer Sign Up

      if(noError){
        try {

          setLoading(true)
  
          // const result = await fetch("https://handiworks.cosmossound.com.ng/api/customers/create", {
          //     method: "POST",
          //     body: JSON.stringify(customerFormData),
          //     headers: {
          //         "Content-Type": "application/json",
          //         "Accept": "application/json"
          //     }
          // })

          const response = await axios.post("https://handiworks.cosmossound.com.ng/api/customers/create", customerFormData)
            console.warn('response:', response.data)

            if(response.status >= 200 && response.status < 300){
              handleSuccess()
              setSignup(false)
              setLogin(false)
            }

  
          // if(result.ok){
          //   handleSuccess()
          // }
          // else if(!result.ok){
          //   const errorMessage = await result.json();
          //   const lastError = errorMessage ? errorMessage.error : "";
          //   console.log("errorMessage:", lastError)
          //   throw new Error(lastError)
          // }
  
  
          const newCustomer = response.data
  
          console.warn('newCustomer:', newCustomer)
  
  
          //To store the customers data in the local storage
          // localStorage.setItem("loggedinCustomer", JSON.stringify(newCustomer))
  
  
          //Retrieving all customers
          // const customersData = await fetch("https://handiwork.cosmossound.com.ng/api/customers/customers")
  
          // const allCustomers = await customersData.json()
  
          // console.warn('users', allCustomers)
          
  
  
      }catch (dupError) {
          console.log("caughtError:", dupError.message)

            if(dupError.message === "Request failed with status code 500"){
              setDuplicateError("Email or phone number already exists.")
            }
            else{
              setDuplicateError("Unknown error. Please check your internet connection and retry.")
            }
      }
  
      finally{
        setLoading(false)
      }
    }

      
  }

 

  //to handle a rejected user
  const [rejectedProvider, setRejectedProvider] = useState(false);

  const handleRejectedProvider = () =>{
    localStorage.clear()
    setRejectedProvider(false)
  }

  const [rejectedCustomer, setRejectedCustomer] = useState(false);

  const handleRejectedCustomer = () =>{
    localStorage.clear()
    setRejectedCustomer(false)
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

        setLoading(true)

        const response = await axios.post("https://handiworks.cosmossound.com.ng/api/auth/login/skill-provider", loginItem)
            
        if(response.status >= 200 && response.status < 300){
          handleWelcome()
          setSignup(false)
          setLogin(false)
        }

        const lastResult = response.data

        // if(!result.ok){
        //     throw new Error("incorrect phone number or password")
        // }
        // else{
        //   handleWelcome()
        // }

        // const lastResult = await result.json()

        // console.warn('lastResult', lastResult)

        //To store the data in the local storage
        // localStorage.setItem("logged-in-user", JSON.stringify(lastResult))
        localStorage.setItem("loggedinProvider", JSON.stringify(lastResult))
        // localStorage.setItem("loggedinUser", JSON.stringify(lastResult))
    

    }catch (dupError) {
        console.log("dupError:", dupError.message)

        if(dupError.message === "Request failed with status code 401"){
          setLoginError("Invalid login credentials. Please check and retry.")
        }
        else{
          setLoginError("Unknown error. Please check your internet connection and retry.")
        }
    }

    finally{
      setLoading(false)

      
      //   if(typeof providerId !== 'number'){
      //     setWelcome(false)
      //     setRejectedProvider(true)
      // }
      // else{
      //   handleWelcome()
      // }
  }

  }


  //API REQUEST FOR CUSTOMER LOGIN

    async function handleCustomerLogin(e){
      e.preventDefault()

      const loginItem = {emailOrPhone, password}


      try {

        setLoading(true)

      //   const result = await fetch("https://handiworks.cosmossound.com.ng/api/auth/login/customer", {
      //       method: "POST",
      //       body: JSON.stringify(loginItem),
      //       headers: {
      //           "Content-Type": "application/json",
      //           "Accept": "application/json"
      //       }
      //   })

      //   if(!result.ok){
      //     throw new Error("incorrect phone number or password")
      // }
      // else{
      //   handleWelcome()
      // }

      const response = await axios.post("https://handiworks.cosmossound.com.ng/api/auth/login/customer", loginItem)
            
        if(response.status >= 200 && response.status < 300){
          handleWelcome()
          setSignup(false)
          setLogin(false)
        }

        const newCustomer = response.data
        

        // console.warn('lastResult', newCustomer)

        //To store the data in the local storage
        localStorage.setItem("loggedinCustomer", JSON.stringify(newCustomer))
        // localStorage.setItem("loggedinUser", JSON.stringify(newCustomer))
    

    }catch (dupError) {
      console.log("dupError:", dupError.message)

      if(dupError.message === "Request failed with status code 401"){
        setLoginError("Invalid login credentials. Please check and retry.")
      }
      else{
        setLoginError("Unknown error. Please check your internet connection and retry.")
      }
    }

    finally{
      setLoading(false)
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

    console.warn('fetchedProvider', fetchedProvider)

    async function viewProvider(){

    try {

      const url = `https://handiworks.cosmossound.com.ng/api/skill-providers/view/${loggedinProvider ? loggedinProvider.user.id : ""}`
      const result = await fetch(url)

      if(!result.ok){
          throw new Error("could not fetch provider")
      }

      const Data = await result.json()

      //To store the data in the local storage
        localStorage.setItem("fetchedProvider", JSON.stringify(Data))

        //To retreive the data from the local storage
        let fetchedProviderData = JSON.parse(localStorage.getItem("fetchedProvider"))

        setFetchedProvider(fetchedProviderData)

      
  }catch (dupError) {
      console.log(dupError)
  }
      
  }


  //To view a single customer

    const [fetchedCustomer, setFetchedCustomer] = useState(null);

    const [fetchedCustomerName, setFetchedCustomerName] = useState("");

    console.warn('fetchedCustomer', fetchedCustomer)

    // console.warn('fetchedCustomerName', fetchedCustomer ? fetchedCustomer.customer.firstName : "")

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


    //data to service providers profile

    const [expectedChanges, setExpectedChanges] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      secondPhone: "",
      serviceType: "",
      subCategory: "",
      openingHour: "",
      stateOfResidence: "", 
      city: "", 
      street: "", 
      image: null,
})


//provider dp change and preview

const [dp, setDp] = useState(null);

const [preview, setPreview] = useState(false);
    // const handleDpChange = (e) =>{
    //     const imagePreview = URL.createObjectURL(e.target.files[0])

    //     setDp(imagePreview)
    // } 


const handleUpdateChange = (e) =>{
  const { name, value } = e.target;

  setExpectedChanges({
      ...expectedChanges, [name] : value
  })


  console.warn("expectedChanges:", expectedChanges)
  // console.warn("providerDefaultData:", providerDefaultData)
}


//to handle admin sign up
const [proceed, setProceed] = useState(false)

  const handleProceed =()=>{
    setProceed(!proceed)
  }

  if(proceed) {
    document.body.classList.add('active-proceed')
    } else {
    document.body.classList.remove('active-proceed')
    }


//A function to handle CAC Submit

const [cacSuccess, setCacSuccess] = useState(false)
const [adminAction, setAdminAction] = useState("")
console.warn("adminAction:", adminAction)


const toggleCac = () =>{
  setCacSuccess(!cacSuccess)
  window.location.reload(false)
}

// const adminPending = () =>{
//   setAdminAction("pending")
// }

// const adminApprove = () =>{
//   setAdminAction("approved")
// }

// const adminReject = () =>{
//   setAdminAction("approved")
// }

const fetchAdminAction = () =>{
  //To retreive the adminAaction from the local storage
  let adminActionData = JSON.parse(localStorage.getItem("adminAction"))
  setAdminAction(adminActionData)
}

async function handleCacSubmit(e){
  e.preventDefault()

  const cacUrl = "https://handiworks.cosmossound.com.ng/api/verify-providers/create"

  const validationErrors = {}

  //To ensure valid inputs

  if (!mandatoryCacImage){
    validationErrors.cacImage = "please select a file"
}

  setErrors(validationErrors)

  console.warn("validationErrors:", validationErrors)

  const noError = Object.keys(validationErrors).length === 0;

  //API Integration to handle CAC Submit

  if(noError){

    try {
      setLoading(true)

        const formToSend = new FormData()
        formToSend.append("cacImage", cacData.cacImage);
        formToSend.append("providerId", currentId);
        
       const response = await axios.post(cacUrl, formToSend, {
        headers: {
          "Content-Type"  : "multipart/form-data"
          }
       })
        console.warn('response:', response.data)

      if(response.status >= 200 && response.status < 300){
        localStorage.setItem("adminAction", JSON.stringify("pending"))
        setVerify(false)
        setCacSuccess(true)
      }
      else{
        const errorMessage = response.data.message
        console.log("errorMessage:", errorMessage)
      }
        
  
    }catch (dupError) {
        console.log("caughtError:", dupError.message)

    }
  
    finally{
      setLoading(false)
    }

}




// if(Object.keys(validationErrors).length === 0 || validationErrors == {}){

//     //To show success message
//         handleSuccess()

//     //To clear form
//     // e.target.reset();        
// }
  
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
                        formData, handleChange, handleFileChange, handleServiceDD, serviceType, handleServiceType,
                        serviceDD, serviceValue, handleServiceValue, handleServiceSelect,
                        subCategoryDD, subCategoryValue, subCategory, handleSubCategory, handleSubCategoryDD, handleSubCategoryValue,
                        handleSubCategorySelect, other, handleProviderLogin, 
                        handlePassword, handleProviderSignUp, handleCustomerSignUp, errors,
                         getLoggedinProvider, loggedinCustomer, getLoggedinCustomer, customerName, handleSuccess, success, closeUserDropDown, 
                        dropDownRef, closeSignupAndRefresh, closeLoginAndRefresh, handleCustomerChange,
                        viewProvider, fetchedProvider, viewCustomer, handleEmailOrPhone, welcome,
                          handleWelcome, handleCustomerLogin, loginError, justShow, handleShow,
                        verify, toggleVerify, loading, duplicateEmail, duplicateNumber, 
                        rejectedProvider, handleRejectedProvider, rejectedCustomer, handleRejectedCustomer,
                          duplicateError, handleUpdateChange, expectedChanges, dp, preview, 
                        newServiceType, newSubCategory, newStateOfResidence, newImage, selectedImageName,
                      proceed, handleProceed, handleCacSubmit, cacSuccess, toggleCac, 
                      adminAction, fetchAdminAction}
                    


  return (
    <HandiworkContext.Provider value= { contextValue }>
        {props.children}
    </HandiworkContext.Provider>
  )

}

export default HandiworkContextProvider;
