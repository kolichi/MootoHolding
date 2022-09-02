import React, { useState, useContext,  } from "react";
import { Link } from "react-router-dom";
import "../Styles/Auth.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import userContext from "../Components/userContext";

function SignUp() {


const [first_name,setFirstName] = useState('') 
const [last_name,setLastName] = useState('') 
const [Contact_number,setNumber] = useState('') 
const [password,setPassword] = useState('') 

const user = useContext(userContext);


function submitForm(e) {
e.preventDefault(); 

const data = {
  first_name,
  last_name,
  Contact_number,
  password
};

console.log(data)

axios.post('http://localHost:4000/SignUp', data, {withCredentials:true})

.then(response =>{
  user.setNumber(response.data.Contact_number);
   
  setFirstName('');
  setLastName('');
  setNumber('');
  setPassword('');

});
}

  return (
    <div className="auth">
      <form className="row g-3 needs-validation" action="" onSubmit={e => submitForm(e)} noValidate>
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
            onChange={e=> setFirstName(e.target.value) } 
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
            type="text"
            className="form-control"
            id="validationCustom08"
            name ="last_name"
            required
            onChange={e=> setLastName(e.target.value) } 
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
            name ="Contact_number"
            required
            onChange={e=> setNumber(e.target.value) } 
            value={Contact_number}
         
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
            onChange={e=> setPassword(e.target.value) } 
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
          <Link to="/SignIn">



          <button className="btn " type=""  >
            {" "}
            Sign in
          </button>
          </Link>
        
        </div>
      </form>
    </div>
  );
};
export default SignUp;
