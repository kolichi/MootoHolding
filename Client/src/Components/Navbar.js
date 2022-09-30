// import { Link, useMatch, useResolvedPath } from "react-router-dom";
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../Styles/navStyles.css'
// import {useState} from 'react'
// import React from "react";

// export default function Navbar() {
//   const [contact, setContact] = useState("");

//   return (

// <nav className="navbar navbar-expand-lg navbar-light bg-light" value={{ contact, setContact }}>
//   <div className="container-fluid">
//   <Link to="/" className="site-title navbar-brand">
//          <img src={require("../logo.png")} alt="logo" />
//      </Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
//       <div className="navbar-nav d-flex">
//       <CustomLink to="/Dashboard" className="nav-link active" aria-current="page">Dashboard</CustomLink>
//       <CustomLink to="/about" className="nav-link active" aria-current="page">About</CustomLink>  
//       <CustomLink to="/login" className="nav-link active d-flex" aria-current="page">Login </CustomLink>   
//       <CustomLink to="/register" className="nav-link active d-flex" aria-current="page">Register </CustomLink>  
//       </div>


//       <div children="nav-link active d-flex left-nav">
//         <div className="mt">   
     

//       </div>

//         </div>

//     </div>
//   </div>
// </nav>


//   );
// }

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true });

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   );
// }
