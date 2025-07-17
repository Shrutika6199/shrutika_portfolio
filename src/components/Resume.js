// Resume.js
import React from "react";

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>You can download my resume below:</p>
      <a
        href="./shrutika_kamble_Resume.pdf" // <-- place the PDF in `public` folder
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px"
        }}
      >
        📄 Download Resume
      </a>
    </section>
  );
};

export default Resume;
