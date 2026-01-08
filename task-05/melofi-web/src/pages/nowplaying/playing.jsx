import React, { useState } from "react";
import "./playing.css";
import Progress from "../../components/ProgressBar/progressbar.jsx";
import PopUp from "../../components/PopUp/PopUp.jsx";
import { useNavigate } from "react-router-dom"; 

const Playing = () => {
   
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
   const navigate = useNavigate(); 
   
    const toggleMenu = () => {
       setIsMenuOpen(!isMenuOpen);
   };
   
   const goBack = () => {
            navigate(-1)
   };

   return (

    <div className="playing-background">
        <button className="back-arrow" onClick={goBack}>←</button>
        <div className="playing-glass-card">

            <div className="card-header">
                <span className="playing-heading">Now Playing</span>
                <div className="menu-container">
                    <button className="menu-dots" onClick={toggleMenu}>⋮</button>                   
                    <PopUp isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                </div>
            </div>

            <div className="playing-content">
                <div className="display-box">
                    <div className="image-container">
                        <img src="" alt="Song Cover" className="card-image" />
                    </div>
                    <h2 className="display-title">Song Name</h2>
                </div>

                <div className="display-box">
                    <div className="image-container">
                        <img src="" alt="Artist" className="card-image" />
                    </div>

                    <div className="artist-footer">
                        <div className="artist-details">
                            <h3 className="display-title">Main Artist</h3>
                            <p className="supporting-text">Supporting artists</p>
                        </div>
                    <button className="add-btn">+</button>
                    </div>

                </div>

            </div>

        </div>

        <div className="controls-section">
            <Progress width="35%" />
        </div>
    </div>

   );
}

export default Playing;