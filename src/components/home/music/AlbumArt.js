import React from "react";

const AlbumArt = ({ albumArtUrl }) => {
  return (
    <div className="album-art">
      <img src={albumArtUrl} alt="Album Art" />
    </div>
  );
};

export default AlbumArt;
