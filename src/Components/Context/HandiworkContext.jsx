import React, { createContext, useState, useEffect, useRef } from 'react';
import { AllServiceProvidersData, serviceTypes} from '../Assets/Data';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import axios from "axios";


export const HandiworkContext = createContext(null);
//Remember to import useParams in the child component; where you're going to use this context.

function HandiworkContextProvider(props) {

  //API URLS
  const imageUrl = "https://server.handiwork.com.ng";
  const baseUrl = "https://server.handiwork.com.ng/api"


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

  const [loggedinCustomer, setLoggedinCustomer] = useState(null);
  console.warn('loggedinCustomer:', loggedinCustomer)

  const [fetchedProvider, setFetchedProvider] = useState(null);

  const [loggedinAdmin, setLoggedinAdmin] = useState(null);

  const [firstTimeCustomer, setFirstTimeCustomer] = useState(null);
  console.warn('firstTimeCustomer:', firstTimeCustomer)


  //For service type custom dropdown
  const [serviceDD, setServiceDD] = useState(false);
  const [serviceValue, setServiceValue] = useState("");
  const [serviceType, setServiceType] = useState("");

  //For service type custom dropdown for profile update
  const [newServiceType, setNewServiceType] = useState("")


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


   //to toggle subCategory custom dropdown
  const handleSubCategoryDD = ()=>{
      setSubCategoryDD(!subCategoryDD)
  }

  //to update selected subCategory
  const handleSubCategory = (category)=>{
    setSubCategory(category)
}

//to reset market place search
const resetFilter = ()=>{
  setServiceType("")
  setSubCategory("")
  handleServiceDD()
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
//  const displayPhoto = document.getElementById('imagePath');
//  const displayPhoto2 = document.getElementById('imagePath2');
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
  })

  console.warn("formData:", formData)

}

//CAC submission states

let currentId = fetchedProvider ? fetchedProvider.skillProvider.id : "";
console.warn("currentId:", currentId)

const [cacData, setCacData] = useState({
  cacImage: null,
})

const [selectedCacImageName, setSelectedCacImageName] = useState("")
const [mandatoryCacImage, setMandatoryCacImage] = useState(null)


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

}

//admin form validation
const [adminFormData, setAdminFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  adminId: '',
  role: ''
})

const handleAdminChange = (e) =>{
  const {name, value} = e.target;

  setDuplicateError("")

  setAdminFormData({
    ...adminFormData, [name] : value
  })

  console.warn("adminFormData:", adminFormData)

}


  //States to manage office address
  const [myStateData, setMyStateData] = useState([]);
  console.warn('myStateData', myStateData)
  const [stateCode, setStateCode] = useState("");
  const [myCityData, setMyCityData] = useState([]);
  console.warn('myCityData', myCityData)

  //function to retrieve states and cities

   //To fetch states in nigeria
    
   function fetchStates(){

    //To fetch states in nigeria
    fetch(`${baseUrl}/nigerian-states/states`)
    // fetch("https://handiworks.cosmossound.com.ng/api/nigerian-states/states")
    .then((res) => res.json())
    .then((response) => setMyStateData(response.states))
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
    fetch(`${baseUrl}/nigerian-states/${stateCode}/cities`)  
     
    .then((myRes) => myRes.json())
    .then((myResponse) => setMyCityData(myResponse.cities))
    .catch((cityErr) => console.log(cityErr))
    
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

    const [viewCac, setViewCac] = useState(false);

    const toggleCacView =()=>{
      setViewCac(!viewCac);
    }


    //funtion to handle service providers signUp

     //customized error messages
     const [errors, setErrors] = useState({})

     const [duplicateError, setDuplicateError] = useState("")
     const [duplicateEmail, setDuplicateEmail] = useState("")
     const [duplicateNumber, setDuplicateNumber] = useState("")

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
            

           const response = await axios.post(`${baseUrl}/skill-providers/create`, formToSend, {
            headers: {
              "Content-Type"  : "multipart/form-data"
              }
           })
  

          if(response.status >= 200 && response.status < 300){
            handleSuccess()
            setSignup(false)
            setLogin(false)
          }
          else{
            const errorMessage = response.data.message
            console.log("errorMessage:", errorMessage)
          }

          const lastResult = response.data

          localStorage.setItem("loggedinProvider", JSON.stringify(lastResult))
            
      
        }catch (dupError) {
            console.log("caughtError:", dupError.response.data.error)


            setDuplicateError(dupError.response.data.error)
        }
      
        finally{
          setLoading(false)
        }

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

const [welcomeAdmin, setWelcomeAdmin] = useState(false);

function handleWelcomeAdmin(){
  setWelcomeAdmin(!welcomeAdmin)
}


  //To get a loggedin Provider
  const getLoggedinProvider = () =>{
    let loggedinProviderData = JSON.parse(localStorage.getItem("loggedinProvider"))
    setLoggedinProvider(loggedinProviderData)
  }

  //To grab the loggedinCustomer from the local storage

  const getLoggedinCustomer = () =>{
    let loggedinCustomerData = JSON.parse(localStorage.getItem("loggedinCustomer"))
    setLoggedinCustomer(loggedinCustomerData)
  }

  //To grab the firstTimeCustomer from the local storage

  const getFirstTimeCustomer = () =>{
    let firstTimeData = JSON.parse(localStorage.getItem("firstTimeCustomer"))
    setFirstTimeCustomer(firstTimeData)
  }

  //To get a loggedin Provider
  const getLoggedinAdmin = () =>{
    let loggedinAdminData = JSON.parse(localStorage.getItem("loggedInAdmin"))
    setLoggedinAdmin(loggedinAdminData)
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

  const [customerJourney, setCustomerJourney] = useState(false);

    const handleCustomerJourney = ()=>{
      setCustomerJourney(!customerJourney)
    }

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

          const response = await axios.post(`${baseUrl}/customers/create`, customerFormData)
            console.warn('response:', response.data)

            if(response.status >= 200 && response.status < 300){
              // handleSuccess()
              setSignup(false)
              setLogin(false)
              handleCustomerJourney()
              setFirstTimeCustomer(response.data)
            }
  
  
          const newCustomer = response.data
  
  
          //To store the customers data in the local storage
          localStorage.setItem("firstTimeCustomer", JSON.stringify(newCustomer))
          localStorage.setItem("loggedinCustomer", JSON.stringify(newCustomer))
          
  
  
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

  //funtion to handle admins signUp

  async function handleAdminSignUp(e){
    const passCode = "YCNSU100"

    e.preventDefault()
    const validationErrors = {}


    //To ensure valid inputs
    if(!adminFormData.firstName.trim()){
        validationErrors.firstName = "first name is required"
    }

    if(!adminFormData.lastName.trim()){
      validationErrors.lastName = "last name is required"
  }

    if(!adminFormData.phone.trim()){
      validationErrors.phone = "phone number is required"
  }
  else if(adminFormData.phone.length < 11){
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

    if(!adminFormData.role.trim()){
        validationErrors.role = "please select a role"
    }

    if(!adminFormData.adminId.trim()){
        validationErrors.adminId = "please provide admin ID"
    }

    else if(adminFormData.adminId !==passCode){
      validationErrors.adminId = "Invalid admin ID"
  }
    
    
    if(adminFormData.password.length < 6){
        validationErrors.password = "password should be atleast 6 characters"
    }

    if(adminFormData.confirmPassword !==adminFormData.password){
        validationErrors.confirmPassword = "password not matched"
    }

    setErrors(validationErrors)

    console.log(validationErrors)

    const noError = Object.keys(validationErrors).length === 0;
    

    //API Integration for customer Sign Up

    if(noError){
      try {

        setLoading(true)

        const response = await axios.post(`${baseUrl}/auth/register`, adminFormData)
          console.warn('response:', response.data)

          if(response.status >= 200 && response.status < 300){
            handleSuccess()
            // setSignup(false)
            // setLogin(false)
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


        const newAdmin = response.data

        console.warn('newAdmin:', newAdmin)


        //To store the customers data in the local storage
        // localStorage.setItem("loggedinCustomer", JSON.stringify(newCustomer))


        //Retrieving all customers
        // const customersData = await fetch("https://handiwork.cosmossound.com.ng/api/customers/customers")

        // const allCustomers = await customersData.json()

        // console.warn('users', allCustomers)
        


    }catch (dupError) {
        console.log("caughtError:", dupError.message)

        setDuplicateError(dupError.message)

          // if(dupError.message === "Request failed with status code 500"){
          //   setDuplicateError("Email or phone number already exists.")
          // }
          // else{
          //   setDuplicateError("Unknown error. Please check your internet connection and retry.")
          // }
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
    const [currentProvider, setCurrentProvider] = useState({});


    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [password, setPassword] = useState("");

    const [loginError, setLoginError] = useState("");

    const [providerWelcome, setProviderWelcome] = useState(false);
    const handleProviderWelcome = ()=>{
      setProviderWelcome(!providerWelcome)
    }


    async function handleProviderLogin(e){
      e.preventDefault()

      const loginItem = {emailOrPhone, password}      
      console.warn("loginItem", loginItem)


      try {

        setLoading(true)

        const response = await axios.post(`${baseUrl}/auth/login/skill-provider`, loginItem)
            
        if(response.status >= 200 && response.status < 300){
          getLoggedinProvider()
          handleProviderWelcome()
          setSignup(false)
          setLogin(false)
          setCurrentProvider(response.data.skillProvider)
        }

        const lastResult = response.data

        localStorage.setItem("loggedinProvider", JSON.stringify(lastResult))
        
    

    }catch (dupError) {
        console.log("dupError:", dupError.response.data.error)

        setLoginError(dupError.response.data.error)
    }

    finally{
      setLoading(false)
  }

  }


  //API REQUEST FOR CUSTOMER LOGIN

  const [currentCustomer, setCurrentCustomer] = useState({});
  console.warn("currentCustomer:", currentCustomer)

  const [customerWelcome, setCustomerWelcome] = useState(false);
    const handleCustomerWelcome = ()=>{
      setCustomerWelcome(!customerWelcome)
    }

    async function handleCustomerLogin(e){
      e.preventDefault()

      const loginItem = {emailOrPhone, password}

      try {
        setLoading(true)

      const response = await axios.post(`${baseUrl}/auth/login/customer`, loginItem)
            
        if(response.status >= 200 && response.status < 300){
          getLoggedinCustomer()
          handleCustomerWelcome()
          setSignup(false)
          setLogin(false)
          setCurrentCustomer(response.data.customer)
        }

        const newCustomer = response.data
        

        // console.warn('lastResult', newCustomer)

        //To store the data in the local storage
        localStorage.setItem("loggedinCustomer", JSON.stringify(newCustomer))
        // localStorage.setItem("loggedinUser", JSON.stringify(newCustomer))
    

    }catch (dupError) {
      console.log("dupError:", dupError.response.data.error)

      setLoginError(dupError.response.data.error)
    }

    finally{
      setLoading(false)
    }
}

//API REQUEST FOR ADMIN LOGIN

const [currentAdmin, setCurrentAdmin] = useState({});

const [adminWelcome, setAdminWelcome] = useState(false);
const handleAdminWelcome = ()=>{
  setAdminWelcome(!adminWelcome)
}

async function handleAdminLogin(e){
  e.preventDefault()

  const loginItem = {emailOrPhone, password}


  try {
    setLoading(true)

  const response = await axios.post(`${baseUrl}/auth/handiwork-admin/login`, loginItem,{
    headers: {
      'Content-Type': 'application/json',
    },
  })
        
    if(response.status >= 200 && response.status < 300){
      handleAdminWelcome()
      setCurrentAdmin(response.data.user)
      setSignup(false)
      setLogin(false)
    }

    const newAdmin = response.data

    //To store the data in the local storage
    localStorage.setItem("loggedInAdmin", JSON.stringify(newAdmin))


}catch (dupError) {
  console.log("dupError:", dupError)

  setLoginError(dupError.response.data.message)

  // if(dupError.message === "Request failed with status code 401"){
  //   setLoginError("Invalid login credentials. Please check and retry.")
  // }
  // else{
  //   setLoginError("Unknown error. Please check your internet connection and retry.")
  // }
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

    async function viewProvider(){

    try {

      const url = `${baseUrl}/skill-providers/view/${loggedinProvider ? loggedinProvider.skillProvider.id : ""}`
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



  //To view a single admin
  const [fetchedAdmin, setFetchedAdmin] = useState(null);

    console.warn('fetchedAdmin:', fetchedAdmin)

  async function viewAdmin(){

    try {

      const url = `${baseUrl}/auth/viewUser/${loggedinAdmin ? loggedinAdmin.user.id : ""}`
      const result = await fetch(url)

      if(!result.ok){
          throw new Error("could not fetch admin")
      }

      const Data = await result.json()

      //To store the data in the local storage
        localStorage.setItem("fetchedAdmin", JSON.stringify(Data))

        //To retreive the data from the local storage
        let fetchedAdmnData = JSON.parse(localStorage.getItem("fetchedAdmin"))

        setFetchedAdmin(fetchedAdmnData)

      
  }catch (dupError) {
      console.log(dupError)
  }
      
  }


  //To view a single customer

    const [fetchedCustomer, setFetchedCustomer] = useState(null);
    console.warn("fetchedCustomer:", fetchedCustomer)


    async function viewCustomer(){
      const url = `${baseUrl}/customers/view/${loggedinCustomer ? loggedinCustomer.customer.id : "" }`

      try {

        if(loggedinCustomer){
          const result = await fetch(url)

          const data = await result.json()

          localStorage.setItem("fetchedCustomer", JSON.stringify(data))

          //To retreive the data from the local storage
          let fetchedCustomerData = JSON.parse(localStorage.getItem("fetchedCustomer"))
          setFetchedCustomer(fetchedCustomerData)
        }
        else if(firstTimeCustomer){
          const firstTimeResult = await fetch(url)

          const firstTimeData = await firstTimeResult.json()
          localStorage.setItem("fetchedCustomer", JSON.stringify(firstTimeData))

          //To retreive the data from the local storage
          let fetchedCustomerData = JSON.parse(localStorage.getItem("fetchedCustomer"))
          setFetchedCustomer(fetchedCustomerData)
        }



        //To store the data in the local storage
        // localStorage.setItem("fetchedCustomer", JSON.stringify(data))

        //To retreive the data from the local storage
        // let fetchedCustomerData = JSON.parse(localStorage.getItem("fetchedCustomer"))
        // setFetchedCustomer(fetchedCustomerData)
        
        
    }catch (dupError) {
        console.log(dupError)
    }
        
  }

  //To view a single admin

    // const [fetchedAdmin, setFetchedAdmin] = useState(null);

    // console.warn('fetchedAdmin', fetchedAdmin)

  //   function viewAdmin(){
  //       //To retreive the data from the local storage
  //       let fetchedAdminData = JSON.parse(localStorage.getItem("loggedInAdmin"))
  
  //       setFetchedAdmin(fetchedAdminData)
  // }


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


const fetchAdminAction = () =>{
  //To retreive the adminAaction from the local storage
  let adminActionData = JSON.parse(localStorage.getItem("adminAction"))
  setAdminAction(adminActionData)
}




//To submit CAC document
async function handleCacSubmit(e){
  e.preventDefault()

  const cacUrl = `${baseUrl}/verify-providers/create`

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
        // localStorage.setItem("adminAction", JSON.stringify("pending"))
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
  
}



//To fetch verified provider details
// const [allVerifiedPoviders, setAllVerifiedPoviders] = useState([])
// console.warn('allVerifiedPoviders:', allVerifiedPoviders)


// async function fetchAllVerifiedPoviders(){

//   const url = `https://handiworks.cosmossound.com.ng/api/verify-providers/allVerifiedProviders`

//   try {
      
//      const response = await axios.get(url)

//      setAllVerifiedPoviders(response.data)

//   }catch (dupError) {
//       console.log("caughtError:", dupError.message)

//   }

  
// }





    //To get service providers based on the user's location   
    
    // const inputRef = useRef()
    const [searchTerm, setSearchTerm] = useState("");

    //To grab the user's search input
    const handleSearchTerm = (event) =>{
      setSearchTerm(event.target.value)
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

   const [passwordFailed, setPasswordFailed] = useState(false)

   const closePasswordFail = ()=>{
      setPasswordFailed(!passwordFailed)
   }


   const [AllServiceProvidersData, setAllServiceProvidersData] = useState([])
   const [loadingServices, setLoadingServices] = useState(true)
  const serviceUrl = `${baseUrl}/skill-providers/skillproviders`

  //To fetch All Providers
  // useEffect(()=>{
        

  //       fetchProviders()
  // },[])

  function fetchProviders(){
    axios.get(serviceUrl)
    .then(res => {
      setLoadingServices(false)
    setAllServiceProvidersData(res.data.skillProviders)
    // setFilteredProviders(res.data.skillProviders)
    })
    .catch(dupError=> console.log("caughtError:", dupError))
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
                        categorySearchError, addCategorySearchError,
                        removeCategorySearchError, toggleCategorySearchError, dropDown, 
                        sustainDropDown, handleDropDown, stopDropDown,
                        userDropDown, handleUserDropDown, loggedinProvider,
                        formData, handleChange, handleFileChange, handleServiceDD, serviceType, handleServiceType,
                        serviceDD, serviceValue, handleServiceValue, handleServiceSelect,
                        subCategoryDD, subCategoryValue, subCategory, handleSubCategory, handleSubCategoryDD, handleSubCategoryValue,
                        handleSubCategorySelect, other, handleProviderLogin, 
                        handlePassword, handleProviderSignUp, handleCustomerSignUp, errors,
                         getLoggedinProvider, loggedinCustomer, getLoggedinCustomer, handleSuccess, success, closeUserDropDown, 
                        dropDownRef, closeSignupAndRefresh, closeLoginAndRefresh, handleCustomerChange,
                        viewProvider, fetchedProvider, viewCustomer, handleEmailOrPhone, welcome,
                          handleWelcome, handleCustomerLogin, loginError, justShow, handleShow,
                        verify, toggleVerify, loading, duplicateEmail, duplicateNumber, 
                        rejectedProvider, handleRejectedProvider, rejectedCustomer, handleRejectedCustomer,
                          duplicateError, handleUpdateChange, expectedChanges, dp, preview, 
                        newServiceType, newSubCategory, newStateOfResidence, newImage, selectedImageName,
                      proceed, handleProceed, handleCacSubmit, cacSuccess, toggleCac, 
                      adminAction, fetchAdminAction, viewCac, toggleCacView, fetchedCustomer,
                      loggedinCustomer, handleAdminChange, handleAdminSignUp, 
                      handleAdminLogin, welcomeAdmin, viewAdmin, fetchedAdmin, 
                      getLoggedinAdmin, loggedinAdmin, passwordFailed, closePasswordFail,
                      AllServiceProvidersData, fetchProviders, loadingServices, currentId, 
                      providerWelcome, customerWelcome, currentCustomer, currentProvider, 
                      currentAdmin, adminWelcome, customerJourney, handleCustomerJourney, 
                      firstTimeCustomer, getFirstTimeCustomer, resetFilter, baseUrl, imageUrl}
                    


  return (
    <HandiworkContext.Provider value= { contextValue }>
        {props.children}
    </HandiworkContext.Provider>
  )

}

export default HandiworkContextProvider;
