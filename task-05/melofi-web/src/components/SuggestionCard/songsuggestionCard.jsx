import React from "react";
import "./songsuggestionCard.css";

const SongsuggestionCard = ({ photo, title, artist }) => {
    return (
        <div className="songsuggestion-card">
            <img src="" alt="Cover" className="songsuggestion-cover" />
            
            <div className="songsuggestion-info">
                <h3 className="songsuggestion-title">{title}</h3>
                <p className="songsuggestion-artist">{artist}</p>
            </div>

            <div className="songsuggestion-actions">
                <button className="action-btn">+</button>
                <button className="action-btn">×</button>
            </div>
        </div>
    );
}

export default SongsuggestionCard;