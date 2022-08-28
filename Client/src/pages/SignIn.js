import React, { useState, useContext } from "react";
import "../Styles/Auth.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import userContext from "../Components/userContext";

function SignIn() {

  const [Contact_number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const user = useContext(userContext);

  function LoginUser(e) {
    e.preventDefault();

    const data = {
      Contact_number,
      password,
    };

    console.log(data);

    axios
      .post("http://localHost:4000/SignIn", data, { withCredentials: true })

      .then((response) => {
        user.setNumber(response.data.Contact_number);
      });
  }

  return (
    <div id="from" className="auth">
      <form
        className="row g-3 needs-validation"
        onSubmit={(e) => LoginUser(e)}
        noValidate
      >
        <div className="site-title">
          {" "}
          <img src={require("../logo.png")} alt="logo" />{" "}
        </div>

        <div className="col-md-5">
          <label htmlFor="validationCustom01" className="form-label">
            {" "}
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="validationCustom01"
            name ="Contact_number"
            required
            onChange={e=> setNumber(e.target.value) } 
            value={Contact_number}
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-5">
          <label htmlFor="validationCustom02" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="validationCustom02"
            name ="password"
            required
            onChange={e=> setPassword(e.target.value) } 
            value={password}
           
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-md-5">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn " type="submit">
            Submit form
          </button>
          <hr />
          <button className="btn ">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
export default SignIn;
