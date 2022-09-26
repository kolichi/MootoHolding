import React, { useState} from "react";
import { Link } from "react-router-dom";
import "../Styles/Auth.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const register = () => {

  const [first_name, setFname] = useState("");
  const [last_name, setLname] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

const configuration = {
  method: "post",
  url: "http://localhost:3001/register",
  data: {
    first_name,
    last_name,
    contact,
    password,
  },
};


const handleSubmit = (e) => {
e.preventDefault(); 
   
// set configurations
     
  // make the API call
  axios(configuration)
  .then((result) => {
    setRegister(true);
  })
  .catch((error) => {
    error = new Error();
  });
  };




  return ( 
    <div className="auth">
      <form className="row g-3 needs-validation" action="" onSubmit={(e)=>handleSubmit(e)} noValidate>
        <div className="site-title">
          {" "}
          <img src={require("../logo.png")} alt="logo" />{" "}
        </div>


         {/* display success message */}
      {register ? (
         <p className="text-success" id="alert">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}




        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            {" "}
            First Name
          </label>
          <input
            type="String"
            className="form-control"
            id="validationCustom01"
            name ="first_name"
            onChange={(e)=> setFname(e.target.value) } 
            value={first_name}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            {" "}
            Last Name{" "}
          </label>
          <input
            type="String"
            className="form-control"
            id="validationCustom08"
            name ="last_name"
            required
            onChange={(e)=> setLname(e.target.value) } 
            value={last_name}
          
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-md-4">
          <label htmlFor="validationCustom03" className="form-label">
            {" "}
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="validationCustom03"
            name ="contact"
            required
            onChange={(e)=> setContact(e.target.value) } 
            value={contact}
         
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom04" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="validationCustom04"
            name ="password"
            required
            onChange={(e)=> setPassword(e.target.value) } 
            value={password}
           
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input tick"
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
          <button className="btn " name="submit" type="submit">
            Submit form
          </button>
          <hr />
          <p> Already have an Account?</p>
          <Link to="/login">



          <button className="btn " type=""  >
            {" "}
            Login 
          </button>
          </Link>
        
        </div>
      </form>
    </div>
  );
};
export default register;
