import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

export default function Nav2(){

  return(
        <div className="navbar">
          <div className="logo">Shopio</div>
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/login">login</Link>
              <Link to="/register">Register</Link>
           </ul>
        </div>
  );}
