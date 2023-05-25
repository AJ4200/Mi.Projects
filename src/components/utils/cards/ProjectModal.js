import React, { useEffect, useState } from "react";

const ProjectModal = ({
  title,
  longdescription,
  imageUrl,
  onClose,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <dialog className="project-modal-container" open>
      {isLoading ? (
        <div className="project-loader"></div>
      ) : (
        <>
          <div className="project-modal">
            <button className="exit-btn" onClick={onClose}>
              &times;
            </button>
            <h2 className="project-title">{title}</h2>
            <div className="project-image">
              <img src={imageUrl} alt={title} />
            </div>
            <p className="project-description">{longdescription}</p>
          </div>
        </>
      )}
    </dialog>
  );
};

export default ProjectModal;
