import React, { Component } from "react";
import { Button, Container, FormControl, Nav, NavLink, Navbar, Form } from "react-bootstrap";
import logo from './logo192.png'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Blog from "../Pages/Blog";


export default class Headers extends Component {
    render() {
        return (
            <>
                <Navbar fixed="md" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> 
                            React site
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink href="/"> Home </NavLink>
                                <NavLink href="/register"> Register </NavLink>
                                <NavLink href="/login"> Login </NavLink>
                                <NavLink href="/blog"> Blog  </NavLink>
                            </Nav>
                            <Form className='d-flex'>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-info"> Search </Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/register" element={<Register/>}/>
                        <Route exact path="/login" element={<Login/>}/>
                        <Route exact path="/blog" element={<Blog/>}/>
                    </Routes>
                </Router>
            </>
        )
    }
}

