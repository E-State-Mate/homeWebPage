import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './components/Index'
import Inquire from './components/Inquire/Inquire.jsx'
import Layout from './components/Layout'

// Temporarily removed Route objects so it loads right to page.
// import routes from "./routes";
// import { Route } from 'react-router-dom'

// Import Scss
import "./theme.scss";

//Import Icon Css
import "./assets/css/materialdesignicons.min.css";

const navItems = [
  { id: 1 , idnm : "home", navheading: "Home" },
  { id: 2 , idnm : "about", navheading: "About" },
  // { id: 3 , idnm : "portfolio", navheading: "Portfolio" },
  { id: 4 , idnm : "team", navheading: "Team" },
  // { id: 5 , idnm : "testimonial", navheading: "Testimonial" },
  // { id: 6 , idnm : "pricing", navheading: "Pricing" },
  // { id: 7 , idnm : "blog", navheading: "Blog" },
  { id: 8 , idnm : "contact", navheading: "Contact" }, 
  // *** Need to add a link for "Get a Quote Now"
]

const App = () => {

  const [imglight, setImglight] = useState(true);
  const [navClass, setNavClass] = useState("");
  const [pos, setPos] = useState(document.documentElement.scrollTop);

  useEffect(() => {
      window.addEventListener("scroll", scrollNavigation, true);
  }, [])

  useEffect(() => {
      return () => {
          window.removeEventListener("scroll", this.scrollNavigation, true);
      }
    }, []);

  const scrollNavigation = () => {
      const scrollUp = document.documentElement.scrollTop;
      if(scrollUp > pos){
          setNavClass('nav-sticky');
          setImglight(false);
      } else {
          setNavClass('');
          setImglight(true);
      }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout navItems={navItems} navClass={navClass} imglight={imglight}/>} >
          <Route index element={<Index />} />
          <Route path='inquire' element={<Inquire />} />
          <Route path="*" element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  }
  
  export default App;