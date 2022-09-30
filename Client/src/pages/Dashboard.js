import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../Styles/dashboard.css";
import Tracking from "../Dashboard services/Tracking";
import Invoices from "../Dashboard services/invoices";
import AccountInfo from "../Dashboard services/accountInfo";
import Adress from "../Dashboard services/Adress";

import Cookies from "universal-cookie";
const cookies = new Cookies();

// get token generated on login
const token = cookies.get("TOKEN");

const Dashboard = () => {
 // set an initial state for the message we will receive after the API call
 const [message, setMessage] = useState("");

 // useEffect automatically executes once the page is fully loaded
 useEffect(() => {
   // set configurations for the API call here
   const configuration = {
     method: "get",
     url: "localhost:3001/auth-endpoint",
     headers: {
       Authorization: `Bearer ${token}`,
     },
   };

   // make the API call
   axios(configuration)
     .then((result) => {
       // assign the message in our result to the message we initialized above
       setMessage(result.data.message);
     })
     .catch((error) => {
       error = new Error();
     });
 }, []);

 // logout
 const logout = () => {
   // destroy the cookie
   cookies.remove("TOKEN", { path: "/" });
   // redirect user to the landing page
   window.location.href = "/";
 }


  return (
    <div>

     <img src={require('../images/icon.jpg')} className='tablogo' alt="" />
     <br/> 
     <p>Welcome </p>
     <br/> 
     <hr/> 
     <br/> 
      <div className="d-flex align-items-start">
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link active tb"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-accountInfo"
            type="button"
            role="tab"
            aria-controls="v-pills-accountInfo"
            aria-selected="true"
          >
            {" "}
            Account Information{" "}
          </button>
          <button
            className="nav-link tb"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-invoice"
            type="button"
            role="tab"
            aria-controls="v-pills-invoice"
            aria-selected="false"
          >
            {" "}
            Invoices{" "}
          </button>
          <button
            className="nav-link tb"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-adress"
            type="button"
            role="tab"
            aria-controls="v-pills-adress"
            aria-selected="false"
          >
            Adress
          </button>
          <button
            className="nav-link tb"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-tracking"
            type="button"
            role="tab"
            aria-controls="v-pills-tracking"
            aria-selected="false"
          >
            Tracking
          </button>
          <button
            className="nav-link tb"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-Logout"
            type="button"
            role="tab"
            aria-controls="v-pills-Logout"
            aria-selected="false"
            onClick={() => logout()}
          >
            LogOut
          </button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-accountInfo"
            role="tabpanel"
            aria-labelledby="v-pills-accountInfo-tab"
          >
            <AccountInfo/>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-invoice"
            role="tabpanel"
            aria-labelledby="v-pills-invoice-tab"
          >
            <Invoices/>

          </div>
          <div
            className="tab-pane fade"
            id="v-pills-adress"
            role="tabpanel"
            aria-labelledby="v-pills-adress-tab"
          >
            <Adress/>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-tracking"
            role="tabpanel"
            aria-labelledby="v-pills-tracking-tab"
          >
            <Tracking/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
