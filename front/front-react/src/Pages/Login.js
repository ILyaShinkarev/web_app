import React, { Component } from "react";
import { Form, Button, Container } from 'react-bootstrap';

export default class Register extends Component {
    render() {
        return (
            <Container style={{ width: '500px' }}>
                <h1 className="text-center"> Авторизация </h1>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Адрес электронной почты </Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label> Пароль </Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group> 

                <Button  class="btn btn-outline-primary" variant="primary" type="submit" className="mt-3"> Отправить </Button>
            </Container>
        )
    }
}