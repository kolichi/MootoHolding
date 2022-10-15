import React, { useState } from "react";
import "../Styles/Auth.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function login() {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  // set configurations
  const configuration = {
    method: "post",
    url: "http://localhost:3001/login",
    data: {
      contact,
      password,
    },
  };

  const handleLogn = (e) => {
    e.preventDefault();

    // make the API call
    axios(configuration)
      .then((result) => {
        setLogin(true);

        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        // redirect user to the auth page
        window.location.href = "/Dashboard";
        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <div id="from" className="auth">
      <form
        className="row g-3 needs-validation"
        onSubmit={(e) => handleLogn(e)}
        noValidate
      >
        <div className="site-title">
          {" "}
          <img src={require("../logo.png")} alt="logo" />{" "}
        </div>

        {/* display success message */}
        {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}

        <div className="row-md-5">
          <label htmlFor="validationCustom01" className="form-label">
            {" "}
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="validationCustom01"
            name="contact"
            required
            onChange={(e) => setContact(e.target.value)}
            value={contact}
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="row-md-5">
          <label htmlFor="validationCustom02" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="validationCustom02"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-12">
          <button className="btn " type="submit" onClick={(e) => handleLogn(e)}>
            Submit form
          </button>
          <hr />
          <Link to="/register">
            <button className="btn ">Register</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default login;
