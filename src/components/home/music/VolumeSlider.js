import React from "react";

const VolumeSlider = () => {
  return (
    <div className="slider">
      <div className="volume">
        {/* Add volume icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          size="medium"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
        </svg>
      </div>
      <input type="range" className="level" />
    </div>
  );
};

export default VolumeSlider;
