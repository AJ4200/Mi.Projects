import React, { useState, useRef, useEffect } from "react";
import TrackList from "./TrackList";
import PlayerControls from "./PlayerControls";
import VolumeSlider from "./VolumeSlider";
import Seeker from "./Seeker";
import Tooltip from "./Tooltip";

const trackListData = [
  {
    id: 1,
    title: "Track 1",
    artist: "Artist 1",
    src: "/track1.mp3",
  },
  {
    id: 2,
    title: "Track 2",
    artist: "Artist 2",
    src: "/track2.mp3",
  },
  // Add more track objects as needed
];

const MP3Player = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const handleTrackClick = (track) => {
    if (currentTrack && currentTrack.id === track.id) {
      togglePlay();
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleDurationChange = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (seekTime) => {
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  return (
    <div className="mp3-player">
      <TrackList
        trackList={trackListData}
        currentTrack={currentTrack}
        onTrackClick={handleTrackClick}
      />
      <div className="player-controls">
        <PlayerControls isPlaying={isPlaying} onTogglePlay={togglePlay} />
        <Seeker
          currentTime={currentTime}
          duration={duration}
          onSeek={handleSeek}
        />
        {currentTrack && isPlaying && <Tooltip text={`${currentTrack.title} - ${currentTrack.artist}`} />}
      </div>
      <audio
        ref={audioRef}
        src={currentTrack ? currentTrack.src : null}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleDurationChange}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default MP3Player;
