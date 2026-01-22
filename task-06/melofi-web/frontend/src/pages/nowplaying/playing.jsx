import React from "react";
import "./playing.css";
import Progress from "../../components/ProgressBar/progressbar.jsx";
import PopUp from "../../components/PopUp/PopUp.jsx";
import { useNavigate } from "react-router-dom";

const Playing = ({ currentSong, audioRef, isPlaying, togglePlay }) => {
  const navigate = useNavigate();

  if (!currentSong) return <p style={{ color:"#fff", textAlign:"center", marginTop:"50px"}}>No song selected</p>;

  const goBack = () => navigate(-1);

  return (
    <div className="playing-background">
      <button className="back-arrow" onClick={goBack}>←</button>
      <div className="playing-glass-card">

        <div className="card-header">
          <span className="playing-heading">Now Playing</span>
          <div className="menu-container">
            <button className="menu-dots">⋮</button>
            <PopUp isOpen={false} onClose={() => {}} />
          </div>
        </div>

        <div className="playing-content">
          <div className="display-box">
            <div className="image-container">
              <img src={currentSong.artworkUrl100.replace("100x100","200x200")} alt="Song Cover" className="card-image"/>
            </div>
            <h2 className="display-title">{currentSong.trackName}</h2>
          </div>

          <div className="display-box">
            <div className="image-container">
              <img src={currentSong.artworkUrl100.replace("100x100","200x200")} alt="Artist" className="card-image"/>
            </div>

            <div className="artist-footer">
              <div className="artist-details">
                <h3 className="display-title">{currentSong.artistName}</h3>
                <p className="supporting-text">{currentSong.collectionName}</p>
              </div>
              <button className="add-btn" >+</button>
            </div>
          </div>

        </div>

      </div>

      <div className="controls-section">
        <Progress width="35%" isPlaying={isPlaying} togglePlay={togglePlay} />
      </div>
    </div>
  );
};

export default Playing;
