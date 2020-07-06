import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../Contact.css'

class ContactForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: '',
            subject: "",
            message: ""
        }
    }

    render() {
        return (
            <div className="container">
                <div className="form-title">
                    <h3>Send me an email</h3>
                </div>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                         type="text"
                         name="email"
                         value={this.state.email}
                         onChange={this.onChange} 
                         />
                    </Form.Group>
                    <Form.Group controlId="formBasicSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="subject" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <div className="submit-button">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default ContactForm
