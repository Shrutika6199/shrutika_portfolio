import React from "react";

const About = () => {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        {/* Profile Photo */}
        <div style={styles.imageContainer}>
          <img
            src="/photo.jpg"
            alt="Shrutika Kamble"
            style={styles.image}
          />
        </div>

        {/* Info Section */}
        <div style={styles.infoContainer}>
          <h2 style={styles.title}>👋 About Me</h2>
          <p style={styles.text}>
            I’m <strong>Shrutika Kamble</strong>, a passionate web developer focused on building responsive, user-friendly websites.
            I’ve worked on projects using HTML, CSS, JavaScript, and React.js and am currently learning SQL to expand my backend skills.
          </p>

          <div style={styles.details}>
            <div style={styles.card}>
              <h4>🌐 Frontend</h4>
              <p>HTML, CSS, JavaScript, React</p>
            </div>
            <div style={styles.card}>
              <h4>🧰 Tools</h4>
              <p>VS Code, GitHub, Chrome DevTools</p>
            </div>
            <div style={styles.card}>
              <h4>🚀 Projects</h4>
              <p>E-commerce Toy Store, Expense Tracker</p>
            </div>
            <div style={styles.card}>
              <h4>📚 Learning</h4>
              <p>SQL, Responsive Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#f8f9fa",
    padding: "40px 20px"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "30px",
    maxWidth: "1000px",
    margin: "0 auto",
    alignItems: "center"
  },
  imageContainer: {
    flex: "1 1 250px",
    textAlign: "center"
  },
  image: {
    width: "250px",
    height: "300px",
    objectFit: "cover",
    border: "4px solid #black",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    borderRadius: "8px" // Slight rounding for a modern rectangle look
  },
  infoContainer: {
    flex: "2 1 500px"
  },
  title: {
    fontSize: "2rem",
    marginBottom: "15px",
    color: "#007bff"
  },
  text: {
    fontSize: "1.1rem",
    color: "#333",
    lineHeight: "1.6",
    marginBottom: "25px"
  },
  details: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px"
  },
  card: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    border: "1px solid #ddd"
  }
};

export default About;
