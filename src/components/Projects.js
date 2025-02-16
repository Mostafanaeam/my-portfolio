import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { title: 'Project 1', description: 'A brief description of Project 1.', link: '#' },
    { title: 'Project 2', description: 'A brief description of Project 2.', link: '#' },
    { title: 'Project 3', description: 'A brief description of Project 3.', link: '#' },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;