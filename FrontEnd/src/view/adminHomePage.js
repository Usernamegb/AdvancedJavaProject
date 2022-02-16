import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
  
} from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import view  from "./Screen 1.jpg";




export default function AdminHomePage() {
  let navigate = useNavigate();
  const logout=()=>{
    navigate("/login");
  }
  const screenNo1=()=>{
     sessionStorage.setItem("screenNo",1);
     navigate("/AdminUI2");
  }
  const screenNo2=()=>{
    sessionStorage.setItem("screenNo",2);
    navigate("/AdminUI2");
  }
  const screenNo3=()=>{
    sessionStorage.setItem("screenNo",3);
    navigate("/AdminUI2");
  }
  const screenNo4=()=>{
    sessionStorage.setItem("screenNo",4);
    navigate("/AdminUI2");
  }
  
  return (
    <>
      <div>
        <div className="mb-3 ">
          <Navbar bg="warning" variant="warning" expand="lg" sticky="top">
            <Container fluid>
              <Navbar.Brand href="#home" className="fs-3 text-dark">
                G3 Miniplex
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto text-dark">    
                </Nav>
                <input
                  className="btn btn-primary"
                  type="button"
                  value="Log Out"
                  onClick={logout}
                />
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div className="mb-5 text-center text-danger">
          <h1>Sreen selection</h1>
        </div>
      </div>

      <div>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={view}/>
              <Card.Body>
                <Card.Title>Screen 1</Card.Title>
                <Card.Text>
                  Welcome Admin ! You can select the screen for showing next
                  Movie ..
                </Card.Text>
                <Button variant="primary" onClick={(screenNo1)}>Screen 1</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={view} />
              <Card.Body>
                <Card.Title>Screen 2</Card.Title>
                <Card.Text>
                  Welcome Admin ! You can select the screen for showing next
                  Movie ..
                </Card.Text>
                <Button variant="primary" onClick={(screenNo2)}>Screen 2</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={view} />
              <Card.Body>
                <Card.Title>Screen 3</Card.Title>
                <Card.Text>
                  Welcome Admin ! You can select the screen for showing next
                  Movie ..
                </Card.Text>
                <Button variant="primary" onClick={(screenNo3)}>Screen 3</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={view} />
              <Card.Body>
                <Card.Title>Screen 4</Card.Title>
                <Card.Text>
                  Welcome Admin ! You can select the screen for showing next
                  Movie ..
                </Card.Text>
                <Button variant="primary" onClick={(screenNo4)}>Screen 4</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}