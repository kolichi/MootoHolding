import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container} from "react-bootstrap";
import Dashboard from "./pages/dashBoard";
import FreeComponent from "./FreeComponent";
import ProtectedRoutes from "./ProtectedRoutes";
import Nav2 from "./Components/Nav";
import Footer from './Components/Footer'
// import Footer from "./Components/Footer.jsx";

import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Register from "./pages/register";
import Pay from "./Components/PaymentModal";

function App() {
  return (
    <>
      <Nav2/>
    <Container>
      {/* <Row>
        <Col className="text-center">
          <h1>React Authentication Mooto </h1>

          <section id="navigation">
            <a href="/">Home</a>
            <a href="/free">Free Component</a>
            <a href="/auth">Auth Component</a>
            </section>
            </Col>
          </Row> */}


      {/* create routes here */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/free" component={FreeComponent} />
          <Route path="/Pay" component={Pay } />
          <Route path="/about" component={About } />
          <Route path="/login" component={Login } />
          <Route path="/register" component={Register } />
        <ProtectedRoutes path="/Dashboard" component={Dashboard} />
      </Switch>
    </Container>
          </>
  
  );
}

export default App;
