import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "College Management System",
      client: "AMC Group of Institutions",
      status: "Dec 2025 - Present",
      desc: "Developed a web-based system for managing students and faculty with role-based authentication and real-time data processing.",
      tags: ["React.js", "Bootstrap", "REST APIs"]
    },
    {
      title: "HR Management System (HRMS)",
      client: "Company Project",
      status: "Sep 2025 - Present",
      desc: "Streamlined employee lifecycle processes including payroll, attendance tracking, and performance interfaces.",
      tags: ["React.js", "Node.js", "Full Stack"]
    },
    {
      title: "E-Commerce Website",
      client: "Rajashri Shahu Institute",
      status: "Jul 2022 - Sep 2022",
      desc: "Implemented product listing, shopping cart functionality, and responsive UI for online shopping.",
      tags: ["HTML5", "CSS3", "JavaScript"]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Portfolio & Case Studies</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <div className="project-header">
              <span className="project-status">{p.status}</span>
              <h3>{p.title}</h3>
              <p className="client">{p.client}</p>
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;