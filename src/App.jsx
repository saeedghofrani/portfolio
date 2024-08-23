import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./share/Navbar/Navbar";
import Footer from "./share/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import FindMe from "./share/FindMe/FindMe";
import Exprience from './sections/Exprience/Exprience'
import Album from './sections/Album/Album'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/exprience" element={<Exprience />} />
        <Route path="/publication" element={<Contact />} />
        <Route path="/album" element={<Album />} />
      </Routes>
      <Footer />
      <FindMe />
    </Router>
  );
}

export default App;
