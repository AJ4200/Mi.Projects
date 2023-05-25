import React from "react";
import ProjectCard from "../../utils/cards/ProjectCard";

const projects = [];

for (let i = 0; i < 6; i++) {
  projects.push({
    title: `Project Title ${i}`,
    description: `Description of project goes here ${i}`,
    imageUrl: `https://via.placeholder.com/300x200?text=Project+${i}`,
    id: i,
  });
}


const WebDevProjects = () => {
  return (
 <> {projects.map((project) => (
        <div key={project.id}>
          <ProjectCard {...project} />
        </div>
      ))}</>
     

  );
};

export default WebDevProjects;
