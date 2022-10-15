import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../Styles/navStyles.css";
import { Link } from "react-router-dom";
import { AuthService } from "../api/auth";

export default function Nav2() {
  const logoutUser = AuthService.logout;
  const isAuthenticated = AuthService.isAuth();

  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="site-title navbar-brand">
          <img src={require("../logo.png")} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <ul className="navbar-nav d-flex">
            <Link to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link active d-flex"
              aria-current="page"
            >
              About
            </Link>
            <Link
              to="/Dashboard"
              className="nav-link active"
              aria-current="page"
            >
              Dashboard
            </Link>
            {!isAuthenticated ? (
              <Link
                to="/login"
                className="nav-link active d-flex"
                aria-current="page"
              >
                Login
              </Link>
            ) : (
              <Link
                to={""}
                className="nav-link active d-flex"
                aria-current="page"
                onClick={() => logoutUser()}
              >
                Logout
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
