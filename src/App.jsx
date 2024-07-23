import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import { BrowserRouter as Router, Routes, Route, useParams, useLocation, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./Components/GlobalStyles/GlobalStyles";
import MarketPlace from "./Pages/MarketPlace";
import PHOTOS from "./Components/images";
import IndividualCategory from "./Components/IndividualCategory/IndividualCategory";
import About from "./Pages/AboutPage";
import Provider from "./Pages/Provider";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import ProviderProfile from "./Pages/ProviderProfile";
import {VerificationReminder, 
  VerificationPending,
  VerificationRejected} from "../src/Components/VerificationReminder/VerificationReminder";
import { Loading } from "../src/Components/Loading/Loading";
import { HandiworkContext } from "./Components/Context/HandiworkContext";
import {Protected, Alert} from "./Components/Protected/Protected";
import { CacSuccess, CustomerJourney, NewAdminCreation, Success, Success2 } from "./Components/Success/Success";
import { Welcome, WelcomeBackAdmin, WelcomeBackCustomer, WelcomeBackProvider } from "./Components/Welcome/Welcome";
import { AdminLogin, AdminSignUp } from "./Components/Admin/LoginSignUp/LoginSignUp";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import HeaderAndFooterWrapper from "./Components/HeaderAndFooterWrapper/HeaderAndFooterWrapper";
import axios from "axios";
import CustomerProfile from "./Pages/CustomerProfile";
import {CacDocument, CacDocumentView} from "./Components/Admin/CacDocument/CacDocument";


function App(props) {

  const {getLoggedinProvider} = useContext(HandiworkContext)
  const {getLoggedinCustomer} = useContext(HandiworkContext)
  const {loggedinProvider} = useContext(HandiworkContext)
  const {loggedinCustomer} = useContext(HandiworkContext)
  const {loggedinAdmin} = useContext(HandiworkContext)
  const {viewProvider} = useContext(HandiworkContext)
  const {viewCustomer} = useContext(HandiworkContext)
  const {viewAdmin} = useContext(HandiworkContext)
  const {loading} = useContext(HandiworkContext)
  const {welcome} = useContext(HandiworkContext)
  const {success} = useContext(HandiworkContext)
  const {verify} = useContext(HandiworkContext)
  const {adminAction} = useContext(HandiworkContext)
  const {cacSuccess} = useContext(HandiworkContext)
  const {fetchAdminAction} = useContext(HandiworkContext)
  const {fetchedProvider} = useContext(HandiworkContext)
  const {welcomeAdmin} = useContext(HandiworkContext)
  const {getLoggedinAdmin} = useContext(HandiworkContext)
  const {fetchProviders, providerWelcome, 
    customerWelcome, adminWelcome, 
    customerJourney, getFirstTimeCustomer} = useContext(HandiworkContext)


    //To fetch verified provider details
    const [verificationStatus, setVerificationStatus] = useState("")
    
    useEffect(()=>{
        async function fetchVerifiedPovider(){
    
            const url = `https://handiworks.cosmossound.com.ng/api/verify-providers/verify-skillProvider-details/${loggedinProvider ? loggedinProvider.user.id : ""}`
          
            try {
                
               const response = await axios.get(url)
               if(response.status >= 200 && response.status < 300){
                setVerificationStatus(response.data.data.isVerified)
              }
          
            }catch (dupError) {
                console.log("caughtError:", dupError.message)
          
            }
          
        }
    
        fetchVerifiedPovider()
    }, [])  
  

  useEffect(() =>{
    fetchAdminAction()
  }, [])


  useEffect(() =>{
    getLoggedinProvider()
  }, [])
  

  useEffect(() =>{
    getLoggedinCustomer()
  }, [])

  useEffect(() =>{
    getLoggedinAdmin()
  }, [])


  useEffect(()=>{
        viewProvider()
    }, [loggedinProvider])

    useEffect(()=>{
      viewCustomer()
  }, [loggedinCustomer])

  useEffect(()=>{
    viewAdmin()
}, [loggedinAdmin])

useEffect(()=>{
  fetchProviders()
}, [])

useEffect(()=>{
  getFirstTimeCustomer()
}, [])



 
       //To fetch All providers
  const [providers, setProviders] = useState([])


     //Filter Poviders based on selected service type
  const url = `https://handiworks.cosmossound.com.ng/api/skill-providers/skillproviders`

  //To fetch All Poviders
  useEffect(()=>{
        axios.get(url)
        .then(res => {
          setProviders(res.data.skillProviders)
        })
        .catch(dupError=> console.log("caughtError:", dupError))

  },[])
  


    return (
      <div className="App">
        { fetchedProvider && fetchedProvider.skillProvider.isVerified==="unverified" ? 
        <VerificationReminder /> : "" }

        { fetchedProvider && fetchedProvider.skillProvider.isVerified==="pending" ? 
        <VerificationPending /> : ""}

        { fetchedProvider && fetchedProvider.skillProvider.isVerified==="reject" ? 
        <VerificationRejected /> : ""}

        {loading ? <Loading /> : ""}
        { success ? <Success /> : "" }
        { cacSuccess ? <CacSuccess /> : "" }

        

        <GlobalStyles />
        <Router>
            { welcome ? <Welcome /> : "" }

            { customerJourney ? <CustomerJourney /> : "" }

            { providerWelcome ? <WelcomeBackProvider /> : "" }

            { customerWelcome ? <WelcomeBackCustomer /> : "" }

            { adminWelcome ? <WelcomeBackAdmin /> : "" }
            <ScrollToTop />

            {/* <NewAdminCreation /> */}
            
            <HeaderAndFooterWrapper>
                <Header />
            </HeaderAndFooterWrapper>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/authentication" element={<Alert />} />
                <Route path="/market-place" element={<MarketPlace />} />
                <Route path="/market-place">
                  <Route path='/market-place/fashion' 
                  element={<IndividualCategory category= "Fashion" 
                  banner ={PHOTOS.fashion}  categoryTag ="Fashion Designers"/>} />
                  <Route path='/market-place/technicians' 
                  element={<IndividualCategory category= "Technicians" 
                  banner ={PHOTOS.technicians} categoryTag="Technicians" />} />
                  <Route path='/market-place/hospitality' 
                  element={<IndividualCategory category= "Hospitality" 
                  banner ={PHOTOS.hospitality} categoryTag ="Hospitality Service Providers" />} />


                  <Route path='/market-place/domestic' element={<IndividualCategory category= "Domestic" banner ={PHOTOS.domestic}  categoryTag ="Domestic Service Providers"/>} />
                  <Route path='/market-place/beauticians' element={<IndividualCategory category= "Beauticians" banner ={PHOTOS.beauticians} categoryTag ="Beauticians" />} />
                  <Route path='/market-place/tutors' element={<IndividualCategory category= "Technicians" banner ={PHOTOS.tutors} categoryTag ="Tutors" />} />
                  <Route path='/market-place/automobile' element={<IndividualCategory category= "Automobile" banner ={PHOTOS.auto}  categoryTag ="Automobile Service Providers"/>} />
                  <Route path='/market-place/health' element={<IndividualCategory category= "Health" banner ={PHOTOS.health} categoryTag ="Health Service Providers" />} />
                  <Route path='/market-place/logistics' element={<IndividualCategory category= "Logistics" banner ={PHOTOS.logistics} categoryTag ="Logistics Service Providers" />} />
                </Route>

                <Route path="/market-place">
                  <Route element={<Protected />} >
                      <Route path="/market-place/provider" element={<Provider />}>
                          <Route path=':providerId' element={<Provider providers={providers} />} />
                      </Route>

                      <Route path="/market-place/profile" element={<ProviderProfile />}>                      
                          <Route path=':providerId' element={<ProviderProfile />} />
                      </Route>
                  </Route>
                </Route>

                <Route element={<Protected />} >
                      <Route path="/customer" element={<CustomerProfile />}>                      
                          <Route path=':customerId' element={<CustomerProfile />} />
                      </Route>
                </Route>
                
                
                <Route path="/about" element={<About />} />

                <Route path="/admin">
                    <Route path="/admin/signup" element={<AdminSignUp />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                </Route>

                <Route element={<Protected />}>
                  <Route path="/admin">
                    <Route path="/admin/dashboard" element={<Dashboard />} />

                    <Route path="/admin/verification-file" element={<CacDocument />}>                      
                        <Route path=':providerId' element={<CacDocument />} />
                    </Route>

                    <Route path="/admin/verification-view" element={<CacDocumentView />}>                      
                        <Route path=':providerId' element={<CacDocumentView />} />
                    </Route>
                  </Route>
                </Route>

                <Route path="*" element={<NoPage />} />
            </Routes>
            
            <HeaderAndFooterWrapper>
                <Footer />
            </HeaderAndFooterWrapper>
        </Router>
      </div>
    );
  }
  
  export default App;