import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
// import FreeMaterials from './pages/FreeMaterials';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/downloads" element={<FreeMaterials />} /> */}
        {/* <Route path="/downloads/:id" element={<FreeMaterials />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;