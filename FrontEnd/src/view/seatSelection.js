import HeaderNavigation from "./HeaderNavigation";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import e from "cors";
import { useEffect, useState } from "react";
export default function SeatSelection() {
  let seatData = { seatNo: 0, userId: 0, screenNo: 0, status: "booked" };
  let navigate = useNavigate();
  const [data, setData] = useState();

  const print = (e) => {
    setData(e.target.value);
  };
  const call = (e) => {
    seatData.seatNo = data;
    console.log(seatData.seatNo);
    if (seatData.seatNo === "") {
      Swal.fire({
        icon: "error",
        title: "All fields are required",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Payment Successful",
        text: "Thank you for visiting us",
      });
      seatData.screenNo = sessionStorage.getItem("screenNo");
      console.log(seatData.screenNo);
      seatData.userId = sessionStorage.getItem("id");
      console.log(seatData.userId);
      axios
        .post("http://localhost:8080/Book-Seat", seatData)
        .then((response) => {});
    }
  };
  const getAllSeatData = () => {
    axios.post("http://localhost:8080/Show-Seats").then((response) => {
      //console.log(response.data);
      for (let i = 0; i < 50; i++) {
        console.log(response.data[i].status);
      }
    });
  };
  useEffect(getAllSeatData, []);
  return (
    <div style={{ height: "100vh" }}>
      <HeaderNavigation />
      <h2 className="mx-1 text-danger mt-2">
        Screen No: {sessionStorage.getItem("screenNo")}
      </h2>
      <div className="row p-4">
        <div className="col-md-4 ">
          <div className="p-4">
            <div>
              <div className="form-control">Enter Seat No:</div>
              <input
                className="form-control"
                onChange={print}
                type={"number"}
                id="id1"
              />
              <button className="btn btn-primary" onClick={call}>
                Click me
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-sm-12 bg-warning">
          <div className="row">
            <div className="alert alert-dark text-center mb-5 shadow-lg">
              Screen Here
            </div>
          </div>

          <div className="row  mt-5 mb-4">
            <div className="col-md-6 col-6">
              <span className="mx-1">A</span>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
            </div>
            <div className="col-md-2 col-2 "></div>
            <div className="col-md-4 col-4">
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1" o>
                Seat
              </button>
            </div>
          </div>
          <div className="row  mt-5 mb-4">
            <div className="col-md-6 col-6">
              <span className="mx-1">B</span>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
            </div>
            <div className="col-md-2 col-2 "></div>
            <div className="col-md-4 col-4">
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
            </div>
          </div>
          <div className="row  mt-5 mb-4">
            <div className="col-md-6 col-6">
              <span className="mx-1">C</span>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
            </div>
            <div className="col-md-2 col-2 "></div>
            <div className="col-md-4 col-4">
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
            </div>
          </div>
          <div className="row  mt-5 mb-4">
            <div className="col-md-6 col-6">
              <span className="mx-1">D</span>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
            </div>
            <div className="col-md-2 col-2 "></div>
            <div className="col-md-4 col-4">
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
            </div>
          </div>
          <div className="row  mt-5 mb-4">
            <div className="col-md-6 col-6">
              <span className="mx-1">E</span>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
            </div>
            <div className="col-md-2 col-2 "></div>
            <div className="col-md-4 col-4">
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
              <button className="btn btn-danger mx-1">Seat</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
