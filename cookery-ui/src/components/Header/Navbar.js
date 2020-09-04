import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/app_logo.svg";

const Navbar = () => {
return (
  
  <div className="navbar">
  <nav className="navbar-sticky">
    <div className="navbar--logo-holder">
       <img src={Logo} alt="logo" className="navbar--logo" /> 
      <h1> Cookery Portal</h1>
    </div>
    <ul className="navbar--link">
      {/* <li className="navbar--link-item">About</li>
      <li className="navbar--link-item">Blog</li> */}
      <li className="navbar--link-item">Sign In</li>
    </ul>
  </nav>
  </div>
  
  
  )};
  export default Navbar;








/*import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">
      <img
        src="../assets/app_logo.PNG"
        width="30"
        height="30"
        id="brand-image"
        className="d-inline-block align-top"
        alt="Cooking-Portal"
      />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/about">Login</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)*/