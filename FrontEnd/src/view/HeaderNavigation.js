import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export default function HeaderNavigation() {
  let navigate = useNavigate();

  const logout = () => navigate("/login");
  //const navHome = () => navigate("/welcomeHome");

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#home">G3 Miniplex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="fs-4 text-warning">
              Welcome {sessionStorage.getItem("name")}
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/welcomeHome"></Nav.Link>

            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
