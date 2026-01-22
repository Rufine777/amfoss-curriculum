import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Playlistcard from '../../components/PlaylistCard/playlistcard.jsx';
import MiniPlayer from '../../components/MiniPlayer/MiniPlayer.jsx';
import { useNavigate } from "react-router-dom";

const Dashboard = ({ audioRef, currentSong, isPlaying, playSong, togglePlay }) => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [trendingSongs, setTrendingSongs] = useState([]);
  const navigate = useNavigate();

  const goToPlaylist = () => navigate("/Playlist");
  const goToSettings = () => navigate("/Settings");
  const goToProfile = () => navigate("/Profile");
  const goToSearching = () => navigate("/Searching");

  const handlePlay = (song) => {
    playSong(song);

    setRecentlyPlayed(prev => {
      const updated = [song, ...prev.filter(s => s.trackId !== song.trackId)];
      return updated.slice(0, 5);
    });
  };

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await fetch(
          `https://itunes.apple.com/search?term=top+hits&media=music&limit=40`
        );
        const data = await response.json();
        setTrendingSongs(data.results);
      } catch (err) {
        console.error("Failed to fetch trending songs", err);
      }
    };
    fetchTrending();
  }, []);

  return (
    <div className="dashboard-wrapper">
      <div className={`dashboard-background ${isPlayerOpen ? "shrink" : ""}`}>
        <div className="top-bar">
          <span className="dashboard-logo">MeloFi</span>
          <input
            type="text"
            className="dashboard-search-bar"
            placeholder="Search"
            onClick={goToSearching}
          />
          <span className="settings-icon" onClick={goToSettings}>⚙</span>
          <div className="profile-icon" onClick={goToProfile}></div>
        </div>

        {/* Recently Played */}
        <section className="dashboard-section">
          <h2 className="section-title">Recently Played</h2>
          <div className="row-scroll">
            {recentlyPlayed.length === 0 && (
              <p style={{ color: "#aaa" }}>You haven't played any songs yet</p>
            )}
            {recentlyPlayed.map((song) => (
              <Playlistcard
                key={song.trackId}
                title={song.trackName}
                artist={song.artistName}
                image={song.artworkUrl100.replace("100x100","300x300")}
                onClick={() => handlePlay(song)}
              />
            ))}
          </div>
        </section>

        {/* Trending */}
        <section className="dashboard-section">
          <h2 className="section-title">Recommended for You</h2>
          <div className="row-scroll">
            {trendingSongs.map((song) => (
              <Playlistcard
                key={song.trackId}
                title={song.trackName}
                artist={song.artistName}
                image={song.artworkUrl100.replace("100x100","200x200")}
                onClick={() => handlePlay(song)}
              />
            ))}
          </div>
        </section>

        {!isPlayerOpen && (
          <button className="side-trigger open" onClick={() => setIsPlayerOpen(true)}>‹</button>
        )}
      </div>

      <div className={`miniplayer-side-panel ${isPlayerOpen ? "active" : ""}`}>
        <button className="side-trigger close" onClick={() => setIsPlayerOpen(false)}>›</button>
        <MiniPlayer
          currentSong={currentSong}
          audioRef={audioRef}
          isPlaying={isPlaying}
          togglePlay={togglePlay}
        />
      </div>
    </div>
  );
};

export default Dashboard;
