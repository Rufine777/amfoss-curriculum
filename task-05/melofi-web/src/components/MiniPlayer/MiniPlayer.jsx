import React, { useState } from "react";
import "./MiniPlayer.css";
import ProgressBar from "../ProgressBar/progressbar.jsx";
import PopUp from "../PopUp/PopUp.jsx";

const MiniPlayer = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="miniplayer-container">
            <div className="mini-header">
                <span className="now-playing-label">Now Playing</span>
                <div className="pop-anchor">
                    <button className="mini-dots" onClick={() => setIsMenuOpen(!isMenuOpen)}>⋮</button>
                    <PopUp isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                </div>
            </div>

            <div className="mini-main">
                <img src="" alt="Cover" className="album-large" />
                
                <div className="mini-meta">
                    <div className="song-text">
                        <h1 className="song-title">Song Title</h1>
                        <h2 className="artist-primary">Main Artist</h2>
                        <p className="artist-support">Supporting artists</p>
                    </div>
                    <img src="" alt="Artist" className="artist-thumb" />
                </div>
            </div>

            <div className="mini-controls">
                <button className="add-btn">+</button>
                <ProgressBar width="85%" />
            </div>
        </div>
    );
}

export default MiniPlayer;