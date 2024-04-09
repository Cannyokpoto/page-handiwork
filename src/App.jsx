import React, { useContext, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import GlobalStyles from "./Components/GlobalStyles/GlobalStyles";
import MarketPlace from "./Pages/MarketPlace";
import PHOTOS from "./Components/images";
import IndividualCategory from "./Components/IndividualCategory/IndividualCategory";
import About from "./Pages/AboutPage";
import Provider from "./Pages/Provider";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import ProviderProfile from "./Pages/ProviderProfile";
import { HandiworkContext } from "./Components/Context/HandiworkContext";


function App() {

  const {getLoggedinProvider} = useContext(HandiworkContext)
  const {getLoggedinCustomer} = useContext(HandiworkContext)
  

  useEffect(() =>{
    getLoggedinProvider()
  }, [])

  useEffect(() =>{
    getLoggedinCustomer()
  }, [])

    // const {AllServiceProvidersData} = useContext(HandiworkContext);
    // const {providerId} = useParams();
    // const provider = AllServiceProvidersData.find((e)=> e.id===Number(providerId));

    return (
      <div className="App">
        <GlobalStyles />
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
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
                  <Route path="/market-place/provider" element={<Provider />}>
                      <Route path=':providerId' element={<Provider />} />
                  </Route>

                  <Route path="/market-place/profile" element={<ProviderProfile />}>
                      {/* <Route path=':providerId' element={<Provider />} /> */}
                      
                      <Route path=':providerId' element={<ProviderProfile />} />
                  </Route>
                </Route>
                
                
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;