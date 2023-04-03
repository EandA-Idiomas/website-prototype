import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from './Pages/About';
import Methodology from './Pages/Methodology';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Testimonials from './Pages/Testimonials';
import FreeCourse from './Pages/FreeCourse';
import Team from './Pages/Team';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/methodology" element={<Methodology />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/free-course" element={<FreeCourse />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route exact path="/team" element={<Team />} />
        {/* <Route path="/downloads" element={<FreeMaterials />} /> */}
        {/* <Route path="/downloads/:id" element={<FreeMaterials />} /> */}
      </Routes>
    </Router>
  );
}

export default App;