import React, { useState } from "react";

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projects = [
    {
      name: "E-commerce Toy Store",
      shortDesc: "An online toy shop built with HTML, CSS, and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      url: "https://your-ecommerce-demo.netlify.app",
      github: "https://github.com/yourusername/toy-store"
    },
    {
      name: "Expense Tracker",
      shortDesc: "A web app to manage expenses using React.",
      tech: ["React", "Hooks", "useState"],
      url: "https://your-expense-tracker.netlify.app",
      github: "https://github.com/yourusername/expense-tracker"
    }
  ];

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.title}>🛠️ Projects</h2>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <h3>{project.name}</h3>
            <p>{project.shortDesc}</p>
            <button onClick={() => toggleDetails(index)} style={styles.button}>
              {expandedIndex === index ? "Hide Details" : "View Details"}
            </button>

            {expandedIndex === index && (
              <div style={styles.details}>
                <p><strong>Tech Used:</strong> {project.tech.join(", ")}</p>
                <p>
                  🔗 <a href={project.url} target="_blank" rel="noreferrer">Live Demo</a>
                </p>
                <p>
                  💻 <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "40px 20px",
    backgroundColor: "#fff"
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#007bff",
    marginBottom: "30px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px"
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  details: {
    marginTop: "15px",
    fontSize: "0.95rem",
    color: "#333"
  }
};

export default Projects;
