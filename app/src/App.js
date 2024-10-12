import React from 'react';
import { Routes, Route } from "react-router-dom"; 
import './App.css';
import Portfolio from "./pages/About"; 
import Certifications from './pages/Certification'; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </div>
  );
}

export default App;
