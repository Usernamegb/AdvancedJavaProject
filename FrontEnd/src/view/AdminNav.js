import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

export default function AdminNav(){
    const logout = () => Navigate("/login");
  const navHome = () => Navigate("/welcome-home");
    return <div>
    <Navbar bg="warning" variant="warning" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#home" className="fs-3 text-dark">
          G3 Miniplex
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/movie-list">
              Movies List
            </Nav.Link>

            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>;
}