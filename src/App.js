// App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>My Portfolio</h1>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <Suspense fallback={<p>Loading section...</p>}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            {/* Optional home route */}
            <Route path="/" element={<About />} />
          </Routes>
        </Suspense>

        <footer className="footer">
          <p>&copy; 2025 My Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
