import React, { useRef } from "react";
import ProjectModal from "./ProjectModal";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<Props> = ({ title, description, imageUrl }) => {
  const showModal = useRef(false);

  const openModal = () => {
    showModal.current = true;
  };

  const closeModal = () => {
    showModal.current = false;
  };

  return (
    <>
      <div className="project" onClick={openModal}>
        <h3 className="project-title">{title}</h3>
        <div className="project-image">
          <picture>
            <source type="image/webp" srcSet={`${imageUrl}.webp`} />
            <source type="image/jpeg" srcSet={`${imageUrl}.jpg`} />
            <img src={`${imageUrl}.jpg`} alt={title} />
          </picture>
        </div>
        <p className="project-description">{description}</p>
      </div>
      {showModal.current && (
        <ProjectModal
          title={title}
          description={description}
          imageUrl={imageUrl}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default ProjectCard;
