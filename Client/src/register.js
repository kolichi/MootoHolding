import React, {useState} from 'react'
import axios from 'axios';
import { Form, Button } from "react-bootstrap";



const register = () => {
    const [first_name, setFname] = useState("");
    const [last_name, setLname] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    
const configuration = {
    method: "post",
    url: "http://localhost:3001/register",
    data: {
      first_name,
      last_name,
      contact,
      password,
    },
  };

const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text
    // alert("Submited");
    
// set configurations
     
  // make the API call
  axios(configuration)
  .then((result) => {
    setRegister(true);
  })
  .catch((error) => {
    error = new Error();
  });
  };


  return (
    <>
    
    <h2>Register</h2>
      <Form onSubmit={(e)=>handleSubmit(e)}>
 {/* number */}
 <Form.Group controlId="formBasicContact">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
          type="String" 
          name="first_name"
          value={first_name}
          onChange={(e) => setFname(e.target.value)}
          placeholder="Enter first Name"
        />
        </Form.Group>

        {/* number */}
        <Form.Group controlId="formBasicContact">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
          type="String" 
          name="last_name"
          value={last_name}
          onChange={(e) => setLname(e.target.value)}
          placeholder="Enter Last Name"
        />
        </Form.Group>



        {/* number */}
        <Form.Group controlId="formBasicContact">
          <Form.Label>Contact Number</Form.Label>
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

        
      {/* display success message */}
      {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}


      </Form>

    </>
  )
}

export default register