import React from "react";
import SongsuggestionCard from "../../components/SuggestionCard/songsuggestionCard";
import "./searching.css";
import { useNavigate } from "react-router-dom";

const Searching = () => {
  const navigate = useNavigate();
          const goBack = () => {
            navigate(-1)
   };

    return (
        <div className="searching-page">
            <div className="searching-top">
            <header className="searching-header">
                <button className="back-arrow" onClick={goBack}>←</button>
                <h1 className="logo">MeloFi</h1>
                <input type="text" className="search-bar" placeholder="Search" />
            </header>
            </div>

            <main className="searching-content">
                <h2 className="history-title">Based on your search history</h2>
                <div className="search-suggestions-list">
                    <SongsuggestionCard 
                        photo="link_to_image" 
                        title="Song One" 
                        artist="Artist One" 
                    />
                    
                    <SongsuggestionCard 
                        photo="link_to_image" 
                        title="Song Two" 
                        artist="Artist Two" 
                    />
                    
                    <SongsuggestionCard 
                        photo="link_to_image" 
                        title="Song Three" 
                        artist="Artist Three" 
                    />

                    <SongsuggestionCard 
                        photo="link_to_image" 
                        title="Song Four" 
                        artist="Artist Four" 
                    />
                </div>
            </main>
        </div>
    );
}

export default Searching;