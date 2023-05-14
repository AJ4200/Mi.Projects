import React from "react";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  closeModal: () => void;
}

const ProjectModal: React.FC<Props> = ({
  title,
  description,
  imageUrl,
  closeModal,
}) => {
  return (
    <div className="project-modal-container">
      <div className="project-modal-blur"></div>
      <div className="project-modal">
        <button className="project-modal-close" onClick={closeModal}>
          X
        </button>
        <h3 className="project-modal-title">{title}</h3>
        <div className="project-modal-image">
          <picture>
            <source type="image/webp" srcSet={`${imageUrl}.webp`} />
            <source type="image/jpeg" srcSet={`${imageUrl}.jpg`} />
            <img src={`${imageUrl}.jpg`} alt={title} />
          </picture>
        </div>
        <p className="project-modal-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectModal;
