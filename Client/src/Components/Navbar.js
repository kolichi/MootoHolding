import { Link, useMatch, useResolvedPath } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../Styles/navStyles.css'
import {useState} from 'react'
import axios from "axios";
import React from "react";

export default function Navbar() {
  const [Contact_number, setNumber] = useState("");

  function Logout (){

    axios.post('http://logout:4000/logout', {}, {withCredentials:true})
     
    .then( () => setNumber('')
    );
  
  } 

  return (

<nav className="navbar navbar-expand-lg navbar-light bg-light" value={{ Contact_number, setNumber }}>
  <div className="container-fluid">
  <Link to="/" className="site-title navbar-brand">
         <img src={require("../logo.png")} alt="logo" />
     </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav d-flex">
      <CustomLink to="/Dashboard" className="nav-link active" aria-current="page">Dashboard</CustomLink>
      <CustomLink to="/about" className="nav-link active" aria-current="page">About</CustomLink>  
      <CustomLink to="/SignIn" className="nav-link active d-flex" aria-current="page">Sign In </CustomLink>   
      <CustomLink to="/SignUp" className="nav-link active d-flex" aria-current="page">Sign Up </CustomLink>  
      </div>


      <div children="nav-link active d-flex left-nav">
        <div className="mt">   
      {!!Contact_number && <div> logged in as {Contact_number} 
          <button onClick={() => Logout()}> LogOut </button>
         </div>}
        {!Contact_number && <div> USER NOT lOGGED IN {Contact_number} </div>}
      </div>

        </div>

    </div>
  </div>
</nav>


  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
