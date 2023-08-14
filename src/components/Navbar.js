import React from 'react';
import {Link} from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import {Navbar, Nav, Container} from "react-bootstrap";
import { Cart } from './pages/cart/Cart';

export const Navigation = () => {
  return (
    <div className="navbar"> 
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/" style={{color:'red'}}>Supreme New York </Navbar.Brand>
        <Nav className="ms-auto">
          <div className="links"> 
          <Link to="/cart" element={<Cart />} > <BsHandbag size= {21}/>
    </Link>
    </div>
        </Nav>
    </Container>
    </Navbar>
    </div>
  )
}

Navigation();
