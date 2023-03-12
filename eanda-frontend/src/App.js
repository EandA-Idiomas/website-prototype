import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from './Pages/About';
import Methodology from './Pages/Methodology';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
// import FreeMaterials from './pages/FreeMaterials';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path={"/about"} element={<About />} />
        <Route exact path={"/methodology"} element={<Methodology />} />

        {/* <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/downloads" element={<FreeMaterials />} /> */}
        {/* <Route path="/downloads/:id" element={<FreeMaterials />} /> */}
      </Routes>
    </Router>
  );
}

export default App;