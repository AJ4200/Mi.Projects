import React from "react";
import ProjectCard from "../../utils/cards/ProjectCard";

const projects = [
  {
    title: "Project Title 2",
    description: "Description of project goes here 2",
    imageUrl: "https://via.placeholder.com/300x200?text=Project+2",
    id: 2,
  },
  {
    title: "Project Title 3",
    description: "Description of project goes here 3",
    imageUrl: "https://via.placeholder.com/300x200?text=Project+3",
    id: 3,
  },
  // Add more imagery projects...
];

const ImageryProjects = () => {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
};

export default ImageryProjects;
