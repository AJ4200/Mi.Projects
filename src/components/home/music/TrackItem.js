import React from "react";

const TrackItem = ({ track, isActive, onClick }) => {
  const { title, artist } = track;

  return (
    <li
      className={`track-item${isActive ? " active" : ""}`}
      onClick={onClick}
    >
      <span className="track-title">{title}</span>
      <span className="track-artist">{artist}</span>
    </li>
  );
};

export default TrackItem;
