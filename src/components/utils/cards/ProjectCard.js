import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ title, description, imageUrl }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="project" onClick={handleCardClick}>
        <h3 className="project-title">{title}</h3>
        <div className="project-image">
          <img
            src={`${imageUrl}.jpg`}
            alt={title}
            width={150}
            height={100}
          />
        </div>
        <p className="project-description">{description}</p>
      </div>
      {modalOpen && (
        <ProjectModal
          title={title}
          longdescription={description}
          imageUrl={`${imageUrl}.jpg`}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default ProjectCard;
