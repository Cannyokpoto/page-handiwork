import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./Components/GlobalStyles/GlobalStyles";
import MarketPlace from "./Pages/MarketPlace";
import PHOTOS from "./Components/images";
import IndividualCategory from "./Components/IndividualCategory/IndividualCategory";
import About from "./Pages/AboutPage";
import Provider from "./Pages/Provider";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";


function App() {
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
                  <Route path='/market-place/fashion' element={<IndividualCategory category= "Artisans" banner ={PHOTOS.fashion}  categoryTag ="Fashion Designers"/>} />
                  <Route path='/market-place/hospitality' element={<IndividualCategory category= "Technicians" banner ={PHOTOS.technicians} categoryTag ="Technicians" />} />
                  <Route path='/market-place/technicians' element={<IndividualCategory category= "Beauticians" banner ={PHOTOS.beauticians} categoryTag ="Beauticians" />} />
                </Route>

                <Route path="/market-place">
                  <Route path="/market-place/provider" element={<Provider />}>
                      <Route path=':providerId' element={<Provider />} />
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