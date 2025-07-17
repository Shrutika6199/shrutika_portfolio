import React from "react";

const Skills = () => {
  const categories = [
    {
      title: "Languages",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Frameworks / Libraries",
      skills: ["React.js"]
    },
    {
      title: "Tools & Software",
      skills: ["Git & GitHub", "VS Code", "Chrome DevTools"]
    },
    {
      title: "Currently Learning",
      skills: ["SQL"]
    }
  ];

  return (
    <section id="skills" style={{ padding: "20px" }}>
      <h2>Skills</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 250px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "16px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
          >
            <h3 style={{ color: "#007bff", marginBottom: "10px" }}>
              {category.title}
            </h3>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              {category.skills.map((skill, i) => (
                <li key={i} style={{ marginBottom: "6px", fontSize: "1.05rem" }}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
