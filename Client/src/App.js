//libraries
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Pay from "./Components/PaymentModal";
import Footer from "./Components/Footer.jsx";
import Nav2 from "./Components/Nav";
import Navbar from "./Components/Navbar";

//pages
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashBoard";
import ProtectedRoutes from "./ProtectedRoutes";
import Protected from './Protected'

//other imports
import "./Styles/index.css";
import AuthComponent from "./AuthComponent";
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <Router>

      <div className="container">
        <Switch> 
      <Nav2 /> 

         {/* <Route element={<ProtectedRoutes/>} >
         <Route path="/Dashboard" element={<Dashboard />} />
         </Route> */}
         
          <Route path="/" component={Home } />
          <Route path="/Pay" component={Pay } />
          <Route path="/about" component={About } />
          <Route path="/login" component={Login } />
          <Route path="/register" component={Register } />

        </Switch>
  
      </div>
      <Footer />
    </Router>
  );
}

export default App;
