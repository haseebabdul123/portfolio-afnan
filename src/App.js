import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CursorEffect from "./components/CursorEffect";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
import BackgroundStars from "./components/BackgroundStars";

const Home = () => (
  <>
    <Hero />
    <Testimonials />
  </>
);

const App = () => {
  return (
    <Router>
      <CursorEffect />
      <BackgroundStars />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
