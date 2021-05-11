import React from "react";
import { Form } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div className="mt-5 text-center">
      <div className="form-main">
        <h3>CONTACT US</h3>
        <Form>
          <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="d-flex">Full Name</Form.Label>
            <Form.Control type="text" placeholder="Mark Rober" />
          </Form.Group>
          <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="d-flex">Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="d-flex">FeedBack</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
