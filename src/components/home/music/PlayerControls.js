import React from "react";
import VolumeSlider from "./VolumeSlider";

const PlayerControls = ({
  isPlaying,
  onTogglePlay,
  onPrevious,
  onNext,
  onVolumeChange,
  volume,
}) => {
  return (
    <div className="player-controls">
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onTogglePlay}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={onNext}>Next</button>
      <VolumeSlider volume={volume} onVolumeChange={onVolumeChange} />
      {/* Add other player controls as needed */}
    </div>
  );
};

export default PlayerControls;
