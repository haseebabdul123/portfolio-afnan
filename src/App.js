import React, { useState } from "react";
import CursorEffect from "./components/CursorEffect";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  const [page, setPage] = useState("home");

  return (
    <div>
      <CursorEffect />
      <Navbar setPage={setPage} />
      {page === "home" && (
        <>
          <Hero />
          <Testimonials />
        </>
      )}
      {page === "about" && <About />}
      <Footer/>
    </div>
  );
};

export default App;
