import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Tracking from "./Dashboard services/Tracking";
import Dashboard from "./pages/Dashboard";
import Pay from './Components/PaymentModal';
import { Route, Routes } from "react-router-dom";
import "./Styles/index.css";
import UserContext from "./Components/userContext";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";


function App() {
  const [Contact_number, setNumber] = useState("");

  useEffect(() => {
    axios.get('http://localhost:4000/user', {withCredentials:true} )
    
    .then(responce => {
      setNumber(responce.data.Contact_number)
    })
  
  }, []);

 function Logout (){

  axios.post('http://logout:4000/logout', {}, {withCredentials:true})
   
  .then( () => setNumber('')
  );

} 


  return (

    <UserContext.Provider value={{ Contact_number, setNumber }}>

      
      <Navbar />

     {/* <div className="toast">
        {!!Contact_number && <div> logged in as {Contact_number} 
          <button onClick={() => Logout()}> LogOut </button>
         </div>}
        {!Contact_number && <div> NOT logged in as {Contact_number} </div>}
      </div> */}

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tracking" element={<Tracking />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Pay" element={<Pay />} />
          <Route path="/about" element={<About />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
   
    </UserContext.Provider>
  );
}

export default App;
