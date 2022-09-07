import React, { useState } from "react";

import '../Styles/Searchbar.css'
import Data from "../API/Api";
import './ApiData'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import 'animate.css';


//payment gatddseway 
// import FWH from '../Components/PaymentModal'
// import  { FlutterWaveButton, useFlutterwave }  from "flutterwave-react-v3";



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

     
     
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    
          
        {dataSearch.map((item, index) => {
          return(
 
          //   <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 animate__pulse"  key={index}>
          //   <div className="card p-o overflow-hidden h-100  " key={index}>
          //     <img src={item.img} className="card-img-top"  alt="" />
          //     <div className="card-body"  key={index}>
          //       <h5 className="card-title"> {item.title}</h5>
          //       <p className="card-text"> {item.desc} </p>
          //     </div>
          //   </div>
          // </div>
<div className="card "  key={index}>
  <img src={item.img} className="card-img-top" alt="..." />
  <div className="card-body" key={index}>
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.Price}</p>

  <button type="button" className="btn sbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" >Buy</button>




  </div>
</div>

          )
        
      })}
 
      </div>
    </section>
    
  );
};
export default Search;
