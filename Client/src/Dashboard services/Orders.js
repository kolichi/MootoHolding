import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import { OrderServices } from "../api/orders";

const orders = () => {
  const [orders, setOrders] = useState();

  useEffect(() => {
    const orderData = OrderServices.getOrders();
  }, []);

  return (
    <div className="table-location">
      <h3> Orders </h3>

      <ReactBootStrap.Table
        striped
        bordered
        hover
        className="responsive"
        responsive
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* {posts.blogs &&
            posts.blogs.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.Description}</td>
                <td>{item.Amount}</td>
                <td>{item.Status}</td>
              </tr>
            ))} */}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default orders;
