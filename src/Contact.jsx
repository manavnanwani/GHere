import React from 'react'
import { Form,Button } from 'react-bootstrap';

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
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Contact
