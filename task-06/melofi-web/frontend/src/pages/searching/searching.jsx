import React, { useState } from "react";
import SongsuggestionCard from "../../components/SuggestionCard/songsuggestionCard";
import "./searching.css";
import { useNavigate } from "react-router-dom";

const Searching = ({ playSong }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  const goBack = () => navigate(-1);

  const searchSongs = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(
          query
        )}&media=music&limit=40`
      );
      if (!response.ok) throw new Error("Failed to fetch songs");
      const data = await response.json();
      setSongs(data.results);
    } catch (error) {
      console.error(error);
      alert("Unable to fetch music from iTunes");
    } finally {
      setLoading(false);
    }
  };

  const handlePlaySong = (song) => {
    playSong(song); // play song globally
    navigate("/Playing"); // navigate to Playing page
  };

  return (
    <div className="searching-page">
      <div className="searching-top">
        <header className="searching-header">
          <button className="back-arrow" onClick={goBack}>←</button>
          <h1 className="logo">MeloFi</h1>
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search songs or artists"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && searchSongs()}
            />
            <button className="search-btn" onClick={searchSongs}>search</button>
          </div>
        </header>
      </div>

      <main className="searching-content">
        {loading && <p>Loading...</p>}
        {!loading && songs.length === 0 && (
          <p style={{ color: "#aaa" }}>Start typing to search songs</p>
        )}
        <div className="search-suggestions-list">
          {songs.map((song) => (
            <SongsuggestionCard
              key={song.trackId}
              photo={song.artworkUrl100.replace("100x100", "200x200")}
              title={song.trackName}
              artist={song.artistName}
              onClick={() => handlePlaySong(song)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Searching;
