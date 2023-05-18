import React from "react";
import ProjectModal from "./ProjectModal";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<Props> = ({ title, description, imageUrl }) => {


  return (
    <>
      <div 
      className="project">
        <h3 className="project-title">{title}</h3>
            <Image className="project-image" src={`${imageUrl}.jpg`} alt={title} />
        <p className="project-description">{description}</p>
      </div>         
    </>
  );
};

export default ProjectCard;
