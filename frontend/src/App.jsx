import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LookingForJob from "./LookingForJob";
import Recruiter from "./Recruiter";
import Navbar from "./Navbar";
import './App.css';
function Home() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Job Portal</h1>
      <div style={{ marginTop: 50 }}>
        <Link to="/jobseeker" className="home-option">Looking for Job</Link>
        <Link to="/recruiter" className="home-option">Option for Recruiter</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobseeker" element={<LookingForJob />} />
        <Route path="/recruiter" element={<Recruiter />} />
      </Routes>
    </Router>
  );
}

export default App;
