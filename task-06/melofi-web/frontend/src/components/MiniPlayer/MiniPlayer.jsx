import React, { useState, useEffect } from "react";
import "./MiniPlayer.css";
import ProgressBar from "../ProgressBar/progressbar.jsx";
import PopUp from "../PopUp/PopUp.jsx";

const MiniPlayer = ({ currentSong, audioRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onplay = () => setIsPlaying(true);
      audioRef.current.onpause = () => setIsPlaying(false);
    }
  }, [audioRef]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  if (!currentSong) {
    return (
      <p style={{ color: "#fff", textAlign: "center", marginTop: "20px" }}>
        No song playing
      </p>
    );
  }

  return (
    <div className="miniplayer-container">
      <div className="mini-header">
        <span className="now-playing-label">Now Playing</span>
        <div className="pop-anchor">
          <button
            className="mini-dots"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ⋮
          </button>
          <PopUp isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </div>
      </div>

      <div className="mini-main">
        <img
          src={currentSong.artworkUrl100.replace("100x100", "200x200")}
          alt="Cover"
          className="album-large"
        />

        <div className="mini-meta">
          <div className="song-text">
            <h1 className="song-title">{currentSong.trackName}</h1>
            <h2 className="artist-primary">{currentSong.artistName}</h2>
            <p className="artist-support">{currentSong.collectionName}</p>
          </div>
          <img
            src={currentSong.artworkUrl100.replace("100x100", "60x60")}
            alt="Artist"
            className="artist-thumb"
          />
        </div>
      </div>

      <div className="mini-controls">
        <button className="add-btn">+</button>
        <ProgressBar
          width="85%"
          isPlaying={isPlaying}
          togglePlay={togglePlay}
        />
      </div>
    </div>
  );
};

export default MiniPlayer;
