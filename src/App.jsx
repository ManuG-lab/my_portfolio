import React from "react";
import { Routes, Route, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./components/PageWrapper";
import Home from "./pages/Home";
import Aboutt from "./pages/About";
import Skill from "./pages/Skills";
import Project from "./pages/Projects";
import Testimonial from "./pages/Testimonials";
import Contact from "./pages/Contact";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <header className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </header>

      <main className="transition-colors duration-300 bg-white dark:bg-black">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><Aboutt /></PageWrapper>} />
            <Route path="/skills" element={<PageWrapper><Skill /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Project /></PageWrapper>} />
            <Route path="/testimonials" element={<PageWrapper><Testimonial /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
          </AnimatePresence>
      </main>

      <SocialLinks />

    </>
  );
}

export default App;



