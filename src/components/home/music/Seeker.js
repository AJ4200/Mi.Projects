import React from "react";

const Seeker = ({ currentTime, duration, onSeek }) => {
  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    onSeek(seekTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="seeker">
      <input
        className="seeker-input"
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={handleSeek}
      />
      <div className="seeker-time-info">
        <span className="seeker-current-time">{formatTime(currentTime)}</span>
        <span className="seeker-total-time">{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default Seeker;
