import { Link, useMatch, useResolvedPath } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../Styles/navStyles.css'

export default function Navbar() {
  return (
    // <nav className="nav">
    //   <Link to="/" className="site-title" className="navbar-brand">
    //     <img src={require("../logo.png")} alt="logo" />
    //   </Link>
    //   <ul>
    //     <CustomLink to="/Categories">Categories</CustomLink>
    // 
    //     <CustomLink to="/about">About</CustomLink>
    //     <CustomLink to="/SignIn">Sign In </CustomLink>
    //   </ul>
    // </nav>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Link to="/" className="site-title navbar-brand">
         <img src={require("../logo.png")} alt="logo" />
     </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav d-flex">
      <CustomLink to="/Tracking" className="nav-link active" aria-current="page">Tracking</CustomLink>
      <CustomLink to="/about" className="nav-link active" aria-current="page">About</CustomLink>     
      </div>
      <div children="nav-link active d-flex left-nav">
      <CustomLink to="/SignIn" className="nav-link active d-flex" aria-current="page">Sign In </CustomLink>   
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
