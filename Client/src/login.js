import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Login = () => {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  // set configurations
  const configuration = {
    method: "post",
    url: "http://localhost:3001/login",
    data: {
      contact,
      password,
    },
  };

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text
    // alert("Submited");

    // make the API call
    axios(configuration)
      .then((result) => {
        setLogin(true);

        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        // redirect user to the auth page
        window.location.href = "/auth";
        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <>
      <h2>Login</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* display success message */}
        {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}

        {/* Number */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Contact Nuber</Form.Label>
          <Form.Control
            type="number"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Number"
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        {/* submit button */}
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
