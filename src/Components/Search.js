import React, { useState } from "react";
import '../Styles/Searchbar.css'
import Data from "../API/Api";
import './ApiData'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Search = () => {
const [filter, setFilter] = useState("");

const searchText = (event) => {
    setFilter(event.target.value);
  };
  let dataSearch = Data.cardData.filter(item =>{
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
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

    
          
        {dataSearch.map((item, index) => {
          return(
 
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-o overflow-hidden h-100 ">
              <img src={item.img} className="card-img-top"   />
              <div className="card-body">
                <h5 className="card-title"> {item.title}</h5>
                <p className="card-text"> {item.desc} </p>
              </div>
            </div>
          </div>

          )
        
      })}
 
      </div>
    </section>
    
  );
};
export default Search;
