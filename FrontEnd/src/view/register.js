import React, { useEffect, useState } from "react";
import "../css/register.css";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
//import base_url from "../api/bootapi.js";
import axios from "axios";

function Register() {
  useEffect(() => {
    document.title = "Register";
  }, []);

  let [uname, setUname] = useState("");
  let [uphone, setUphone] = useState("");
  let [uemail, setUemail] = useState("");
  let [upassword, setUpassword] = useState("");
  let [uusername, setUusername] = useState("");
  

  let unameinp = (e) => setUname(e.target.value);
  
  let uphoneinp = (e) => setUphone(e.target.value);
  let uemailinp = (e) => setUemail(e.target.value);
  let upasswordinp = (e) => setUpassword(e.target.value);
  let uusernameinp = (e) => setUusername(e.target.value);
  ;

  let user = {
    name: uname,
    phone: uphone,
    email: uemail,
    password: upassword,
    username:uusername
  };

  //Register data
  const registerUser = (data) => {
   
    axios.post(`http://localhost:8080/register`, data).then(
      (response) => {
        swal
          .fire({
            icon: "success",
            title: "Registered successfully!",
            text: "You have registered to a great cause",
          })
          .then(function () {
            window.location = "/";
          });
        clearFields();
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Enter Email ID first",
          text: "We need to check if the email is already registered or not",
        });
      }
    );
  };

  //Check Email
  const checkEmail = (data) => {
    axios.post(`http://localhost:8080/findbyemail`, data).then(
      (response) => {
        console.log(response);
        if (response.data.length === 0) {
          registerUser(user);
          clearErrors();
          clearFields();
        } else {
          swal.fire({
            icon: "error",
            title: "Oh no!!!",
            text: "Email is already Registered",
          });
        }
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Oh no!",
          text: "Server is down",
        });
      }
    );
  };
  

  let [ename, setEname] = useState();
 
  let [eemail, setEemail] = useState();
  let [ephone, setEphone] = useState();
  let [epassword, setEpassword] = useState();
 
  let[eusername,setEusername]=useState();

  function clearErrors() {
    document.getElementById("name").classList.remove("is-invalid");
    setEname("");

   

    document.getElementById("phone").classList.remove("is-invalid");
    setEphone("");

    document.getElementById("email").classList.remove("is-invalid");
    setEemail("");

    document.getElementById("password").classList.remove("is-invalid");
    setEpassword("");

    document.getElementById("usernname").classList.remove("is-invalid");
    setEusername("");

   
  }

  function clearFields() {
    setUname("");
    setUphone("");
    setUemail("");
    setUpassword("");
    document.getElementById("tnc").checked = false;
  }

  let validate = () => {
    if (
      uname.trim() === "" ||
      uusername.trim()===""||

      uphone.trim() === "" ||
      uemail.trim() === "" ||
      upassword.trim() === "" 
    ) {
      swal.fire("All fields are  required");
    } else if (
      uname.search(/^[a-zA-Z ]*$/) < 0 ||
      uname.length < 3 ||
      uname.length > 40
    ) {
      document.getElementById("name").classList.add("is-invalid");
      setEname(
        "Please enter characters only and must have length of minimum 3 and maximum 30"
      );
    }
     else if (uphone === "" || uphone.search(/^[789][0-9]{9}$/) < 0) {
      document.getElementById("phone").classList.add("is-invalid");
      setEphone("Enter valid Mobile Number");
    } else if (
      uemail === "" ||
      uemail.search(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) < 0
    ) {
      document.getElementById("email").classList.add("is-invalid");
      setEemail("Enter valid Email ID");
    } else if (
      upassword === "" ||
      upassword.search(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
      ) < 0 ||
      upassword.length < 6
    ) {
      document.getElementById("password").classList.add("is-invalid");
      setEpassword(
        "Enter a password with atleast 8 characters and must include 1 capital, 1 number and 1 special character"
      );
    } 
     else {
      checkEmail(user);
    }
  };

  return (
    <div>
      <div className="vh-100 d-flex reg justify-content-center align-self-center">
        <div className=" w-50 p-3  text-white" style={{opacity:"0.99"}}>
          <h1 className="text-center fw-bold mb-3" style={{ color: "#EE2F0D" }}>
            G3 Miniplex
          </h1>
          <h1 className="text-center display-4">Register</h1>

          <form className="row justify-content-center  mt-1">
            <div className="">
              <label for="name" className="form-label fs-5">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Full name"
                onChange={unameinp}
                onFocus={clearErrors}
                value={uname}
                required
              />
              <div class="invalid-feedback fs-6 fw-bold">{ename}</div>
            </div>
            
            <div>
              <label for="phone" className="form-label fs-5">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Without +91"
                onChange={uphoneinp}
                onFocus={clearErrors}
                value={uphone}
                required
              />
              <div class="invalid-feedback fs-6 fw-bold">{ephone}</div>
            </div>
            <div >
              <label for="email" className="form-label fs-5">
                Email-ID
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Eg:-abc@gmail.com"
                onChange={uemailinp}
                onFocus={clearErrors}
                value={uemail}
                required
              />
              <div class="invalid-feedback fs-6 fw-bold">{eemail}</div>
            </div>
            <div >
              <label for="username" className="form-label fs-5">
               Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Enter username"
                onChange={uusernameinp}//uemailinp
                onFocus={clearErrors}
                value={uusername}
                required
              />
              <div class="invalid-feedback fs-6 fw-bold">{eusername}</div>
            </div>
            <div>
              <label for="password" className="form-label fs-5">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter a strong password"
                onChange={upasswordinp}
                onFocus={clearErrors}
                value={upassword}
                required
              />
              <div class="invalid-feedback fs-6 fw-bold">{epassword}</div>
            </div>
  
            <div className="col-md-12 text-center">
              <h4 className="fs-4">
                Already Registered?
                <Link to="/" href="login.js" className="text-decoration-none">
                  Login here
                </Link>
              </h4>
            </div>

            <div className="col-md-12 text-center">
              <input
                type="button"
                className="btn btn-lg btn-primary"
                value="Register"
                onClick={validate}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
