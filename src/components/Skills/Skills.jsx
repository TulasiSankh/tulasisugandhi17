import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { title: "Frontend", items: ["React.js", "JavaScript (ES6+)", "Bootstrap", "Tailwind CSS"] },
    { title: "Backend", items: ["Java", "Spring Boot", "Node.js", "Microservices"] },
    { title: "Database", items: ["MySQL", "MongoDB"] },
    { title: "Tools", items: ["Git", "Postman API", "GitHub Copilot", "Power BI"] }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-group">
            <h3>{skill.title}</h3>
            <div className="skill-tags">
              {skill.items.map((item, i) => <span key={i} className="tag">{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;