import React from "react";

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <>
      <div className="project">
        <h3 className="project-title">{title}</h3>
        <div className="project-image">
          <img src={`${imageUrl}.jpg`} alt={title} width={150} height={100} />
        </div>
        <p className="project-description">{description}</p>
      </div>
    </>
  );
};

export default ProjectCard;