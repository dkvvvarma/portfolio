import React from 'react';
import { Routes, Route } from "react-router-dom"; 
import './App.css';
import Portfolio from "./pages/About"; 
import Certifications from './pages/Certification'; 
import ResumeComponent from "./pages/Resume";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/resume" element={<ResumeComponent />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </div>
  );
}

export default App;
