import React from "react";
import "bootstrap/js/dist/tab";
import "bootstrap/js/src/tab";
import "../Styles/dashboard.css";
import Tracking from "../Dashboard services/Tracking";
import Invoices from "../Dashboard services/invoices";
import AccountInfo from "../Dashboard services/accountInfo";
import Adress from "../Dashboard services/Adress";

const Dashboard = () => {
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
