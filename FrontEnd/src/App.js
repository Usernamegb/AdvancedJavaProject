import { Route, Routes } from "react-router-dom";
import AdminUI2 from "./view/AdminUI2";
import Login from "./view/login";
import Register from "./view/register";
import WelcomeHome from "./view/WelcomeHome";
import Content from "./view/content";
import SeatSelection from "./view/seatSelection";
import MovieList from "./view/movieList";
import AdminHomePage from "./view/adminHomePage";

export default function App() {
  return (
    
    <>
  
       <Routes>
        <Route path="/" element={<Login/>} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/WelcomeHome" element={<WelcomeHome />} />
        <Route path="/AdminUI2" element={<AdminUI2/>}/>
        <Route path="/content" element={<Content/>}/>
        <Route path="/SeatSelection" element={<SeatSelection/>}/>
        <Route path="/movieList" element={<MovieList/>}/>
        <Route path="/adminHomePage" element={<AdminHomePage/>}/>
      </Routes> 
    </>
  );
}