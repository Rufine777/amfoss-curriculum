import React from "react";
import "./songsuggestionCard.css";

const SongsuggestionCard = ({ photo, title, artist, onClick }) => {
    return (
        <div className="songsuggestion-card" onClick={onClick}>
            <img src={photo} alt={title} className="songsuggestion-cover" />
            
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
