import React, { useState } from "react";
import "../Styles/Auth.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  let history = useNavigate(); //use for Navigate on previous
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    Contact_number: "",
    password: "",
  })

  const handleChange=(e)=> {
    setData ({...data, [e.target.name]: e.target.value})

    console.log(data)
  }

const submitForm=(e)=> {
e.preventDefault(); 
const sendData = {
  first_name:data.first_name,
  last_name:data.last_name,
  Contact_number:data.Contact_number,
  password:data.password
}

console.log(sendData)

axios.post('http://127.0.0.1/php-auth/auth.php',sendData) 

.then((result)=>{

if (result.data.Status === 'Invalid'){
  alert('Invalid User'); 
}
else{

  //props.history.push('./Dashboard')
  //props.history.push('./Dashboard') redirect
  Navigate('SignIn');
}
})

}


  return (
    <div className="auth">
      <form className="row g-3 needs-validation" onSubmit={submitForm} noValidate>
        <div className="site-title">
          {" "}
          <img src={require("../logo.png")} alt="logo" />{" "}
        </div>

        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            {" "}
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            name ="first_name"
            onChange={handleChange} 
            value={data.first_name}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            {" "}
            Last Name{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            name ="last_name"
            required
            onChange={handleChange} value={data.last_name}
          
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-md-4">
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
            onChange={handleChange} value={data.Contact_number}
         
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="validationCustom02"
            name ="password"
            required
            onChange={handleChange} value={data.password}
           
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-12">
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
          <button className="btn " name="submit" type="submit">
            Submit form
          </button>
          <hr />
          <p> Already have an Account?</p>
          <button className="btn " type="" to ="/SignIn" >
            {" "}
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
