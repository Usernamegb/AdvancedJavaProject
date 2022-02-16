import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//import Login from "./view/Login";
//import movieList from "./view/movieList";

export default function MovieList() {
    let Navigate = useNavigate();
    const logout = () => Navigate("/login");
   
        const [movieData,setMovieData]=useState([{},{},{},{}]);
        console.log(sessionStorage.getItem("id"));
        const getData=(e)=>{
          
          axios.post("http://localhost:8080/get-Ongoing-movies").then((response)=>{
                   
                        setMovieData(response.data);
                        //  console.log(movieData);
                        // console.log(movieData[0].movieName);
                  });
        }

    
    useEffect(getData);
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
            

                  <Nav.Link onClick={logout}>Logout</Nav.Link> 
                </Nav>
                
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div className="mb-5 text-center text-danger">
          <h1>Movie List</h1>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>SrNo</th>
              <th>Movie Name</th>
              <th>Language</th>
              <th>Director</th>
              <th>Timing</th>
              <th>Book</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>1</td>
              <td>{movieData[0].movieName}</td>
              <td>{movieData[0].language}</td>
              <td>{movieData[0].director}</td>
              <td>{movieData[0].startTime}-{movieData[0].endTime}</td>
              <td><button className="btn btn-primary">Delete</button></td>
            </tr>
            <tr className="text-center">
              <td>2</td>
              <td>{movieData[1].movieName}</td>
              <td>{movieData[1].language}</td>
              <td>{movieData[1].director}</td>
              <td>{movieData[1].startTime}-{movieData[1].endTime}</td>
              <td><button className="btn btn-primary">Delete</button></td>
            </tr>
            <tr className="text-center">
              <td>3</td>
              <td>{movieData[2].movieName}</td>
              <td>{movieData[2].language}</td>
              <td>{movieData[2].director}</td>
              <td>{movieData[2].startTime}-{movieData[1].endTime}</td>
              <td><button className="btn btn-primary">Delete</button></td>
            </tr>
            <tr className="text-center">
              <td>4</td>
              <td>{movieData[3].movieName}</td>
              <td>{movieData[3].language}</td>
              <td>{movieData[3].director}</td>
              <td>{movieData[3].startTime}-{movieData[1].endTime}</td>
              <td><button className="btn btn-primary">Delete</button></td>
            </tr>
            
            
          </tbody>
        </Table>
      </div>
    </>
  );
}