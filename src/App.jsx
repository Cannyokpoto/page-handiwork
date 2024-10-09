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
import { AddMoneySuccess, CacSuccess, CustomerJourney, NewAdminCreation, Success, Success2 } from "./Components/Success/Success";
import { Welcome, WelcomeBackAdmin, WelcomeBackCustomer, WelcomeBackProvider } from "./Components/Welcome/Welcome";
import { AdminLogin, AdminSignUp } from "./Components/Admin/LoginSignUp/LoginSignUp";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import HeaderAndFooterWrapper from "./Components/HeaderAndFooterWrapper/HeaderAndFooterWrapper";
import axios from "axios";
import CustomerProfile from "./Pages/CustomerProfile";
import {CacDocument, CacDocumentView} from "./Components/Admin/CacDocument/CacDocument";
import { ProviderWallet, CustomerWallet } from "./Components/Wallet/Wallet";
import { Test } from "./Components/Test/Test";
import Payment from "./Components/Wallet/Payment";





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
                <Route path="/test" element={<Test />} />
                <Route path="/add-money" element={<AddMoneySuccess />} />
                <Route path="/market-place">                  

                    {/* New Routes */}
                  <Route path='/market-place/fashion' element={<IndividualCategory category= "fashion" banner ={PHOTOS.fashion}  categoryTag ="Fashion Designers"/>} />
                  <Route path='/market-place/vehicle-towing' element={<IndividualCategory category= "towing" banner ={PHOTOS.towing} categoryTag ="Towing Service Providers" />} />
                  <Route path='/market-place/electronics' element={<IndividualCategory category= "electronic" banner ={PHOTOS.electronics} categoryTag ="Electronics Repairers" />} />
                  <Route path='/market-place/automobile' element={<IndividualCategory category= "auto-" banner ={PHOTOS.auto}  categoryTag ="Automobile Service Providers"/>} />
                  <Route path='/market-place/welding' element={<IndividualCategory category= "welding" banner ={PHOTOS.welder}  categoryTag ="Welders"/>} />
                  <Route path='/market-place/beauticians' element={<IndividualCategory category= "Beautician" banner ={PHOTOS.beauticians} categoryTag ="Beauticians" />} />
                  <Route path='/market-place/dispatch' element={<IndividualCategory category= "dispatch" banner ={PHOTOS.dispatch} categoryTag ="Logistics Service Providers" />} />
                  <Route path='/market-place/laundry' element={<IndividualCategory category= "Laundry" banner ={PHOTOS.laundry} categoryTag ="Laundry Service Providers" />} />
                  <Route path='/market-place/barbers' element={<IndividualCategory category= "barber" banner ={PHOTOS.barbers} categoryTag ="Barbers" />} />
                  <Route path='/market-place/brick-layers' element={<IndividualCategory category= "brick" banner ={PHOTOS.brick_layers}  categoryTag ="Brick Layers"/>} />
                  <Route path='/market-place/carpentry' element={<IndividualCategory category= "carpentry" banner ={PHOTOS.carpentry} categoryTag ="Carpenters" />} />
                  <Route path='/market-place/catering' element={<IndividualCategory category= "catering" banner ={PHOTOS.catering}  categoryTag ="Catering Service Providers"/>} />
                  <Route path='/market-place/electrical' element={<IndividualCategory category= "electrical" banner ={PHOTOS.electrical} categoryTag ="Electrical Service Providers" />} />
                  <Route path='/market-place/generator' element={<IndividualCategory category= "generator" banner ={PHOTOS.generator} categoryTag ="Generator Repairers" />} />                  
                  <Route path='/market-place/hair-stylists' element={<IndividualCategory category= "hair stylist" banner ={PHOTOS.hair_stylists} categoryTag ="Hair Stylists" />} />     
                  <Route path='/market-place/interior' element={<IndividualCategory category= "interior" banner ={PHOTOS.interior}  categoryTag ="Interior Decorators"/>} />
                  <Route path='/market-place/painters' element={<IndividualCategory category= "painter" banner ={PHOTOS.painters} categoryTag ="Painters" />} />   
                  <Route path='/market-place/phone-laptop' element={<IndividualCategory category= "phone" banner ={PHOTOS.phone_repairs} categoryTag ="Phone/Laptop Repairers" />} />  
                  <Route path='/market-place/photography' element={<IndividualCategory category= "photograph" banner ={PHOTOS.photography}  categoryTag ="Photographers/Videographers"/>} />
                  <Route path='/market-place/plumbers' element={<IndividualCategory category= "plumbing" banner ={PHOTOS.plumbers} categoryTag ="Plumbers" />} />
                  <Route path='/market-place/realtors' element={<IndividualCategory category= "estate" banner ={PHOTOS.realtors} categoryTag ="Realtors" />} />
                </Route>

                <Route path="/market-place">
                  <Route element={<Protected />} >
                      <Route path="/market-place/provider" element={<Provider />}>
                          <Route path=':providerId' element={<Provider providers={providers} />} />
                      </Route>

                      <Route path="/market-place/profile" element={<ProviderProfile />}>                      
                          <Route path=':providerId' element={<ProviderProfile />} />
                      </Route>

                      {/* <Route path="/market-place/profile" element={<ProviderWallet />}>                      
                          <Route path=':providerId/wallet' element={<ProviderWallet />} />
                      </Route> */}
                  </Route>
                </Route>

                <Route element={<Protected />} >
                      <Route path="/customer" element={<CustomerProfile />}>                      
                          <Route path=':customerId' element={<CustomerProfile />} />
                      </Route>

                      <Route path="/customer" element={<CustomerWallet />}>                      
                          <Route path=':customerId/wallet' element={<CustomerWallet />} />
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

                <Route element={<Protected />} >
                      <Route path="/provider" element={<Payment />}>                      
                          <Route path=':providerId/payment' element={<Payment />} />
                      </Route>

                      <Route path="/profile" element={<ProviderWallet />}>                      
                          <Route path=':providerId/wallet' element={<ProviderWallet />} />
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