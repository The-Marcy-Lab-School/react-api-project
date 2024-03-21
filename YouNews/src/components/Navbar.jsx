import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

const NavBar = () => {
   return(
    <Navbar expand="xxl" className="bg-body-tertiary" sticky="top" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"><h1>YouNews</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Item>
             <Nav.Link > <Link to="/"><h4>Home</h4></Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
             <Nav.Link href="#link"><Link to="/GazaInfo"><h4>Gaza Info</h4></Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
             <Nav.Link href="#about"><h4>About</h4></Nav.Link>
          </Nav.Item>
          </Nav>
         </Navbar.Collapse>
      </Container>
    </Navbar>
   )
}

export default NavBar 
