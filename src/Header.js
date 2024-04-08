import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./logo.png"
import "./header.css"
import "./home.css"


function Header() {
  return (
    <div className='header'>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <img src={logo} alt="CoolGadgets Logo" width="120"/>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Allproduct">AllProduct</Nav.Link>
            <Nav.Link href="/MenClothes">MenClothes</Nav.Link>
            <Nav.Link href="/WomenClothes">WomenClothes</Nav.Link>
            <Nav.Link href="/Jwellery">Jwellery</Nav.Link>
           <Nav.Link href="/Electronics">Electronics</Nav.Link>

           
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;