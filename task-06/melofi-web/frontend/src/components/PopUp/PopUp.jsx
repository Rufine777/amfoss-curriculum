import React from "react";
import "./PopUp.css";

const PopUp = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-menu">
            <ul className="popup-list">
                <li onClick={onClose}>Add to playlist</li>
                <li onClick={onClose}>Share</li>
                <li onClick={onClose}>Add to queue</li>
            </ul>
        </div>
    );
};

export default PopUp;