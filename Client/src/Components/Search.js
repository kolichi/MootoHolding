import React, { useState } from "react";
import { Link } from "react-router-dom";

import Data from "../api/api";
import "./ApiData";

import "../Styles/Searchbar.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import Airtel from "../images/airtel.png";
import Mtn from "../images/mtn.png";
import Zamtel from "../images/zamtel.png";
import Visa from "../images/visa.webp";
import MC from "../images/mastercard.png";

const Search = () => {
  const [filter, setFilter] = useState("");

  const searchText = (event) => {
    setFilter(event.target.value);
  };
  let dataSearch = Data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <section className="py-2 container">
      <div className="row justify-content-center">
        <div className="col-12 ">
          <div className="mb-0 col-3 mx-auto text-center sb">
            {/* <label className="form-lable h6 sbt"> Search </label> */}
            <input
              type="text"
              className="form-control sbi"
              value={filter}
              onChange={searchText.bind(this)}
              placeholder=" Search Here"
            />
          </div>
        </div>

        {/* MODAL */}

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Mooto Food Payment Options
                </h5>
                <button
                  type="button"
                  className=" btn btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p> We Accept</p>
                <img src={Airtel} alt="" />
                <img src={Mtn} alt="" />
                <img src={Zamtel} alt="" />
                <img src={MC} alt="" />
                <img src={Visa} alt="" />
              </div>
              <div className="modal-footer">
                <Link to="/Pay" className="btn sbtn">
                  <button
                    type="button"
                    className="btn sbtn"
                    data-bs-dismiss="modal"
                  >
                    Procced
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {dataSearch.map((item, index) => {
          return (
            <div className="card " key={index}>
              <img src={item.img} className="card-img-top" alt="..." />
              <div className="card-body" key={index}>
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.Price}</p>

                <button
                  type="button"
                  className="btn sbtn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Buy
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Search;
