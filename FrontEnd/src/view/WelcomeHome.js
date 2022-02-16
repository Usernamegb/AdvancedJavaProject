import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";


export default function WelcomeHome() {
  
  let navigate = useNavigate();
  const [movieData,setMovieData]=useState([{},{},{},{}]);
 // console.log(sessionStorage.getItem("id"));
  const getData=(e)=>{
    
    axios.post("http://localhost:8080/get-Ongoing-movies").then((response)=>{
             
                  setMovieData(response.data);
                  //  console.log(movieData);
                  // console.log(movieData[0].movieName);
            });
  }
  const booking1=()=>{
    sessionStorage.setItem("screenNo",1);
    navigate("/SeatSelection");
  }
  const booking2=()=>{
    sessionStorage.setItem("screenNo",2);
    navigate("/SeatSelection");
  }
  const booking3=()=>{
    sessionStorage.setItem("screenNo",3);
    navigate("/SeatSelection");
  }
  const booking4=()=>{
    sessionStorage.setItem("screenNo",4);
    navigate("/SeatSelection");
  }
 
  useEffect(getData,[]);
  return (
    <>
      <HeaderNavigation />
      
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://picsum.photos//1300/400"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://picsum.photos//1300/401"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://picsum.photos//1300/402"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
   <div className="alert alert-warning text-center fs-4">Current Movies</div>
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
              <td><button className="btn btn-primary"  onClick={booking1}>Book</button></td>
            </tr>
            <tr className="text-center">
              <td>2</td>
              <td>{movieData[1].movieName}</td>
              <td>{movieData[1].language}</td>
              <td>{movieData[1].director}</td>
              <td>{movieData[1].startTime}-{movieData[1].endTime}</td>
              <td><button className="btn btn-primary"  onClick={booking2}>Book</button></td>
            </tr>
            <tr className="text-center">
              <td>3</td>
              <td>{movieData[2].movieName}</td>
              <td>{movieData[2].language}</td>
              <td>{movieData[2].director}</td>
              <td>{movieData[2].startTime}-{movieData[1].endTime}</td>
              <td><button className="btn btn-primary"  onClick={booking3}>Book</button></td>
            </tr>
            <tr className="text-center">
              <td>4</td>
              <td>{movieData[3].movieName}</td>
              <td>{movieData[3].language}</td>
              <td>{movieData[3].director}</td>
              <td>{movieData[3].startTime}-{movieData[1].endTime}</td>
              <td><button className="btn btn-primary" onClick={booking4}>Book</button></td>
            </tr>
            
          </tbody>
        </Table>    
  
    </>
  );
}