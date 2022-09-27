
//libraries
import React from "react";
import { Route, Routes } from "react-router-dom";

//components 
import Pay from './Components/PaymentModal';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer.jsx";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/Dashboard";

//other imports 
import "./Styles/index.css";



function App() {
  
  return (
<> 
      
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Pay" element={<Pay />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      <Footer />
   
      </>
    
  );
}

export default App;
