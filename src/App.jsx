import React, { useContext, useEffect } from "react";
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
import {VerificationReminder, VerificationPending} from "../src/Components/VerificationReminder/VerificationReminder";
import { Loading } from "../src/Components/Loading/Loading";
import { HandiworkContext } from "./Components/Context/HandiworkContext";
import {Protected, Alert} from "./Components/Protected/Protected";
import { CacSuccess, Success, Success2 } from "./Components/Success/Success";
import { Welcome } from "./Components/Welcome/Welcome";
import { AdminLogin, AdminSignUp } from "./Components/Admin/LoginSignUp/LoginSignUp";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import HeaderAndFooterWrapper from "./Components/HeaderAndFooterWrapper/HeaderAndFooterWrapper";


function App() {

  const {getLoggedinProvider} = useContext(HandiworkContext)
  const {getLoggedinCustomer} = useContext(HandiworkContext)
  const {loggedinProvider} = useContext(HandiworkContext)
  const {viewProvider} = useContext(HandiworkContext)
  const {loading} = useContext(HandiworkContext)
  const {welcome} = useContext(HandiworkContext)
  const {success} = useContext(HandiworkContext)
  const {verify} = useContext(HandiworkContext)
  const {adminAction} = useContext(HandiworkContext)
  const {cacSuccess} = useContext(HandiworkContext)
  const {fetchAdminAction} = useContext(HandiworkContext)

  //Authentication for protected routes
  // const isAuthenticated = loggedinProvider;
  
  
  useEffect(() =>{
    fetchAdminAction()
  }, [])

  useEffect(() =>{
    getLoggedinProvider()
  }, [])

  useEffect(() =>{
    getLoggedinCustomer()
  }, [])

  useEffect(()=>{
        viewProvider()
    }, [loggedinProvider])

  // const location = useLocation();
  // const hideComponent = location.pathname === "/admin";
  


    return (
      <div className="App">
        {/* { loggedinProvider && localStorage.getItem("adminAction") == null ? <VerificationReminder /> : "" } */}
        {loading ? <Loading /> : ""}
        { success ? <Success /> : "" }
        { loggedinProvider && adminAction==="pending" ? <VerificationPending /> : ""}
        <VerificationPending />

        { cacSuccess ? <CacSuccess /> : "" }
        
        <GlobalStyles />
        <Router>
            { welcome ? <Welcome /> : "" }
            <ScrollToTop />
            
            <HeaderAndFooterWrapper>
                <Header />
            </HeaderAndFooterWrapper>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/authentication" element={<Alert />} />
                <Route path="/market-place" element={<MarketPlace />} />
                <Route path="/market-place">
                  <Route path='/market-place/fashion' element={<IndividualCategory category= "fashion" banner ={PHOTOS.fashion}  categoryTag ="Fashion Designers"/>} />
                  <Route path='/market-place/technicians' element={<IndividualCategory category= "technicians" banner ={PHOTOS.technicians} categoryTag ="Technicians" />} />
                  <Route path='/market-place/hospitality' element={<IndividualCategory category= "hospitality" banner ={PHOTOS.hospitality} categoryTag ="Hospitality Service Providers" />} />


                  <Route path='/market-place/domestic' element={<IndividualCategory category= "domestic" banner ={PHOTOS.domestic}  categoryTag ="Domestic Service Providers"/>} />
                  <Route path='/market-place/beauticians' element={<IndividualCategory category= "beauticians" banner ={PHOTOS.beauticians} categoryTag ="Beauticians" />} />
                  <Route path='/market-place/tutors' element={<IndividualCategory category= "technicians" banner ={PHOTOS.tutors} categoryTag ="Tutors" />} />
                  <Route path='/market-place/automobile' element={<IndividualCategory category= "automobile" banner ={PHOTOS.auto}  categoryTag ="Automobile Service Providers"/>} />
                  <Route path='/market-place/health' element={<IndividualCategory category= "health" banner ={PHOTOS.health} categoryTag ="Health Service Providers" />} />
                  <Route path='/market-place/logistics' element={<IndividualCategory category= "logistics" banner ={PHOTOS.logistics} categoryTag ="Logistics Service Providers" />} />
                </Route>

                <Route path="/market-place">

                  {/* <Route path="/market-place/provider" element={<Provider />}>
                      <Route path=':providerId' element={<Provider />} />
                  </Route> */}

                  <Route element={<Protected />} >
                      <Route path="/market-place/provider" element={<Provider />}>
                          <Route path=':providerId' element={<Provider />} />
                      </Route>

                      <Route path="/market-place/profile" element={<ProviderProfile />}>                      
                          <Route path=':providerId' element={<ProviderProfile />} />
                      </Route>
                  </Route>
                </Route>
                
                
                <Route path="/about" element={<About />} />

                <Route path="/admin">
                  <Route path="/admin/signup" element={<AdminSignUp />} />
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin/dashboard" element={<Dashboard />} />
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