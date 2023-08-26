import React, { useState, useEffect } from "react";
// import Events from "script";
// import Header from "./layout/Header";
import { Navbar, SlideBar } from "./layout/Navigation/Navigation";
import MiddleSection from "./layout/MiddleSection";
import Projects from "./layout/Projects";
import Showcase from "./layout/Showcase";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";
// import ContactPage from "./pages/ContactPage";
import HeaderPage from "./pages/HeaderPage";
// import ProjectsPage from "./pages/ProjectsPage";
// import AboutPage from "./pages/AboutPage";
// import TechPage from "./pages/TechPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./LoadingScreen"; // Import the LoadingScreen component
import profileIMG from "../assets/img/orionpalmer.webp";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false); // Add state for tracking image loading

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Simulate loading images
    const fakeImage = new Image();
    fakeImage.src = profileIMG;
    fakeImage.onload = () => {
      // Wait for both image and fonts to be loaded
      Promise.all([
        document.fonts.ready,
        new Promise((resolve) => setTimeout(resolve, 2000)), // Wait for 2 seconds
      ]).then(() => {
        setImagesLoaded(true);
      });
    };
  }, []);

  return (
    <Router>
      <div className="backgroundColor">
        {/** Render the LoadingScreen component if images are not loaded */}
        {!imagesLoaded && <LoadingScreen />}
        <SlideBar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Routes>
          <Route exact path="/" element={<HeaderPage />} />
        </Routes>
        <div className="wrapper">
          <div>
            <Showcase />
            <Projects />
          </div>
          <div>
            <MiddleSection />
          </div>
          <div>
            <Contact />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
