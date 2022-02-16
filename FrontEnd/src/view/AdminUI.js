import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export default function AdminUI() {
  let navigate = useNavigate();

  const logout = () => navigate("/login");

  return (
    <>
      <div>
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
      </div>

      <div className="">
        <h1 className="text-center mt-3">Add/Delete Movie</h1>

        <div className="mt-4 d-flex align-items-center justify-content-center bg-secondary">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control type="text" placeholder="Enter movie name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Director</Form.Label>
              <Form.Control type="text" placeholder="Enter name of director" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Screen number</Form.Label>
              <Form.Control type="text" placeholder="Enter Screen number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Movie Starting Time</Form.Label>
              <Form.Control type="text" placeholder="from" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Movie End Time</Form.Label>
              <Form.Control type="text" placeholder="upto" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <div className="">
              <Button className="mx-2" variant="primary" type="submit">
                Add Movie
              </Button>
              <Button variant="primary" type="submit">
                Delete Movie
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}