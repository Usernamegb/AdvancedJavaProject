import { Container, Nav, Navbar, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
//import Login from "./view/login";
//import movieList from "./view/movieList";

export default function Content() {
  return (
    // <>
    //   <movieList />

    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/movieList" element={<movieList />} />
    //   </Routes>
    // </>
    <>
      <div>
        <div className="mb-3">
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

                  {/* <Nav.Link onClick={logout}>Logout</Nav.Link> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>sr.no</th>
              <th>Movie Name</th>
              <th>Language</th>
              <th>Director</th>
              <th>Timing</th>
              <th>Book</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}