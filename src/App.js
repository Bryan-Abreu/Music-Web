import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import Navigation from "./ourGallery/nav/Navigate";
import AboutUs from "./about/AboutUs";
import ContactUs from "./contactUs/ContactUs";
import Promotions from "./promotions/Promotions";


function App() {

 

  return  (


  <div>
    <Navigation />  
<BrowserRouter>
  <Routes>

    <Route path="/" element={<Home />}></Route>
    <Route path="/aboutUs" element={<AboutUs/>}></Route>
    <Route path="/contactUs" element={<ContactUs/>}></Route>
    <Route path="/promotions" element={<Promotions/>}></Route>



  </Routes>
</BrowserRouter>

<Footer />
   </div>

  );
}

export default App;
