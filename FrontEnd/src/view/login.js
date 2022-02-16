import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import view from "./2.jpg";
import swal from "sweetalert2";

export default function Login() {
  let navigate = useNavigate();
  const [loginData, setLoginData]=useState({username:'',password:''});
  // const[loginResult,setLoginResult]=useState({});
  
  const login=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/Login",loginData).then((response)=>{
      //  setLoginResult(reponse.data);
      //alert(loginResult.id);
   // alert(loginResult.status);
        //isAdmin(loginResult.status);
      
       // console.log(response.data.user.status);
       // sessionStorage.setItem("id",response.data.user.id);
       // sessionStorage.setItem("name",response.data.user.name);
      //   console.log(response.data.message)
       if(response.data.user==null)
       {
        swal.fire({
          icon: "error",
          title: "Sorry :(",
          text: "Invalid Credentials",
        });
       }
       else{
        sessionStorage.setItem("id",response.data.user.id);
        sessionStorage.setItem("name",response.data.user.name);
        isAdmin(response.data.exist,response.data.user.status);
       }
       
    });
  }
       


  function isAdmin(exist,status){
   if(exist===true ){
    if(status === 0)
    {    
     
     navigate("/WelcomeHome");   
    }
    else{
     navigate("/adminHomePage");
    }
   }
   else{
    swal.fire({
      icon: "error",
      title: "Sorry :(",
      text: "Invalid Credentials",
    });
   }
    
 }

  /*const authenticate = () => {
    //
    navigate("/welcome-home");
  };*/
  function change(e) {
    let name = e.target.name;
    let val = e.target.value;
    setLoginData({ ...loginData, [name] : val});
}


  return (
  
    <div className="container-fluid" >
      <div
        className="row bg-dark align-items-center justify-content-center " 
        style={{ height: "100vh",backgroundImage: `url(${view}` ,backgroundSize:"cover" ,objectFit:"cover"}}
      >
        <div className="col-12 col-md-4  p-4" style={{opacity:0.95}} >
          <form >
            <div className="alert alert-warning h2 text-center">Login</div>

            <div className="mb-1">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Username"
                name="username"
                value={loginData.username}
                onChange={change}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Password"
                name="password"
                onChange={change}
              />
            </div>

            <div className="d-flex justify-content-center">
              <input
                type="button"
                value="Login"
                className="btn btn-lg btn-warning"
                onClick={login}
              />
            </div>

            <div className="text-center mt-1">
              <Link to="/register" className="text-light fs-4 ">
                Register Here...
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}