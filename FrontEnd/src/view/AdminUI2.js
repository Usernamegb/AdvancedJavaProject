import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Form,  Nav, Navbar } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import view from "./3.jpg";

export default function AdminUI() {
  let navigate = useNavigate();

  const logout = () => navigate("/login");
  //const navHome = () => navigate("/welcome-home");
 
 
      useEffect(()=> {
          document.title ="AdminUi";

      },[]);

      let[umoviename,setUmoviename]=useState("");
      let[umoviedirector,setUmovieDirector]=useState("");
      let[umovielanguage,setUmovieLanguage]=useState("");
      
      let[umoviestarttime,setUmovieStartTime]=useState("");
      let[umovieendtime,setUmovieEndTime]=useState("");
      let[umoviedate,setUmovieDate]=useState("");

      let umovienameinp = (e) => setUmoviename(e.target.value);
      let umoviedirectorinp =(e) => setUmovieDirector(e.target.value);
      let umovielanguageinp =(e) => setUmovieLanguage(e.target.value);
      let umoviestarttimeinp =(e) => setUmovieStartTime(e.target.value);
      let umovieendtimeinp=(e)=> setUmovieEndTime(e.target.value);
      let umoviedateinp=(e)=>setUmovieDate(e.target.value);
      ;

      let admin={
        movieName: umoviename,
        language: umovielanguage,
        startTime: umoviestarttime,
        endTime: umovieendtime,
        director: umoviedirector,
        date:umoviedate
      };
        
      const obj = {
        screenNo:sessionStorage.getItem("screenNo"),
         movie:admin
    }

      const moviehandler =(e)=>{
          console.log(admin);
           AddMovie(obj);
           e.preventDefault();

      }

      const AddMovie = (obj) => {
        if (
          umoviename.trim() === "" ||
          umovielanguage.trim()===""||
    
          umoviestarttime.trim() === "" ||
          umovieendtime.trim() === "" ||
          umoviedirector.trim() === "" 
        ) {
          Swal.fire("All fields are  required"); }
          else{
        axios.post(`http://localhost:8080/movie`, obj).then(
          (response) => {
            Swal
              .fire({
                icon: "success",
                title: "movie added successfully!",
                text: "movie added",
              })
              .then(function () {
                window.location = "/movieList";
              });
            clearFields();
          },
          (error) => {
            console.log(error);
            Swal.fire({
              icon: "error",
              title: "enter movie name",
              text: "already added movie",
            });
          }
        );}
      };
      function clearFields() {
        setUmoviename("");
        setUmovieDirector("");
        setUmovieLanguage("");
        setUmovieStartTime("");
        setUmovieEndTime("");
        document.getElementById("tnc").checked = false;
      };

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
            <Nav.Link as={Link} to="/movieList">
              Movies List
            </Nav.Link>

            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>

      <div className="">
        

        <div className=" d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${view})`}}>
          <Form className=" p-4 w-25">
          <div className="text-center text-light fs-2">Add Movies</div>
            <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control
              name="moviename"
              onChange={umovienameinp}
              value={umoviename}
              type="text" placeholder="Enter movie name" />
            </Form.Group>
            <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
              <Form.Label>Movie Director</Form.Label>
              <Form.Control
              name="moviedirector"
              onChange={umoviedirectorinp}
              value={umoviedirector}
              type="text" placeholder="Enter name of director" />
            </Form.Group>
            
            <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
              <Form.Label>Movie Language</Form.Label>
              <Form.Control 
              name="movielanguage"
              onChange={umovielanguageinp}
              value={umovielanguage}
              type="text" placeholder="...." />
            </Form.Group>

           
            <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
              <Form.Label>Movie Starting Time</Form.Label>
              <Form.Control
              name="moviestarttime"
              onChange={umoviestarttimeinp}
              value={umoviestarttime}
              type="time" placeholder="from" />
            </Form.Group>
            <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
              <Form.Label>Movie End Time</Form.Label>
              <Form.Control 
              name="movieendtime"
              onChange={umovieendtimeinp}
              value={umovieendtime}
              type="time" placeholder="upto" />
            </Form.Group>
            <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
              <Form.Label>Movie Date</Form.Label>
              <Form.Control 
              name="moviedate"
              onChange={umoviedateinp}
              value={umoviedate}
              type="date" placeholder="upto" />
            </Form.Group>
            <Form.Group className="mb-3 text-light" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <div className="d-flex justify-content-center text-light ">
              <Button 
              onClick={moviehandler}
              className="mx-2 bg-warning text-dark" variant="primary" type="submit">
                Add Movie
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}