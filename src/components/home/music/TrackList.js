import React from "react";
import TrackItem from "./TrackItem";

const TrackList = ({ trackList, currentTrack, onTrackClick }) => {
  return (
    <div className="track-list">
      <h3>Track List</h3>
      <ul>
        {trackList.map((track) => (
          <TrackItem
            key={track.id}
            track={track}
            isActive={currentTrack && currentTrack.id === track.id}
            onClick={() => onTrackClick(track)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
