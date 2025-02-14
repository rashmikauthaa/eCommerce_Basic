import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';


function Header(){
    return(
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav>
          <Link to="/add-product">Add Product</Link>
          <Link to="/update-cart">Update Cart</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          </Nav>
          </Navbar>
        </div>
    )
}

export default Header;