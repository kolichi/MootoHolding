import React, { Component } from "react";
import "../Styles/Auth.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default class Login extends Component {
  render() {
    return (
      

  <div id="from" className="auth">                                                  

<form className="row g-3 needs-validation" noValidate >

<div className="site-title">
          {" "}
          <img src={require("../logo.png")} alt="logo" />{" "}
       </div>

<div className="col-md-5">
  <label htmlFor="validationCustom01" className="form-label"> Phone Number</label>
  <input type="Number" className="form-control" id="validationCustom01"  required />
  <div className="valid-feedback">
    Looks good!
  </div>
</div>
<div className="col-md-5">
  <label htmlFor="validationCustom02" className="form-label">Password</label>
  <input type="password" className="form-control" id="validationCustom02" required />
  <div className="valid-feedback">
    Looks good!
  </div>
</div>

<div className="col-md-5">
  <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
    <label className="form-check-label" htmlFor="invalidCheck">
      Agree to terms and conditions
    </label>
    <div className="invalid-feedback">
      You must agree before submitting.
    </div>
  </div>
</div>
<div className="col-12">
  <button className="btn " type="submit">Submit form</button>
  <hr/>
  <button className="btn " type="submit">Sign Up</button>
</div>
</form>

  </div>    



    );
  }
}


