import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Dashboard from "./pages/dashBoard";
import FreeComponent from "./FreeComponent";
import ProtectedRoutes from "./ProtectedRoutes";
import Nav2 from "./Components/Nav";
import Footer from "./Components/Footer";

import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Register from "./pages/register";
import Pay from "./Components/PaymentModal";
import { AuthService } from "./api/auth";
import { OrderServices } from "./api/orders";

function App() {
  const isAuthenticated = AuthService.isAuth;

  const orders = OrderServices.getOrders();

  useEffect(() => {
    console.log("auth status : ", isAuthenticated);
    console.log("Order Data : ", orders);
  });

  return (
    <>
      <Nav2 />
      <Container>
        {/* create routes here */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/free" component={FreeComponent} />
          <Route path="/Pay" component={Pay} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <ProtectedRoutes path="/Dashboard" component={Dashboard} />
        </Switch>
      </Container>
      <Footer />
    </>
  );
}

export default App;
