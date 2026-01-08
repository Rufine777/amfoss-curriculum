import React, { useState } from "react";
import "./dashboard.css";
import Playlistcard from '../../components/PlaylistCard/playlistcard.jsx';
import MiniPlayer from '../../components/MiniPlayer/MiniPlayer.jsx';
import { useNavigate } from "react-router-dom"; 

const Dashboard = () => {
   const [isPlayerOpen, setIsPlayerOpen] = useState(false);
   
   const navigate = useNavigate();

   const goToPlaylist = () => {
      navigate("/Playlist");

   };
   const goToPlaying = () => {
      navigate("/Playing");

   };
   const goToSettings=()=>{
      navigate("/Settings");
   };

   const goToProfile=()=>{
      navigate("/Profile");
   };

   const goToSearching=()=>{
      navigate("/Searching");
   };
   return (
    <div className="dashboard-wrapper">
      <div className={`dashboard-background ${isPlayerOpen ? "shrink" : ""}`}>
         <div className="top-bar">
            <span className="dashboard-logo">MeloFi</span>
            <input type="text" className="dashboard-search-bar" placeholder="Search" onClick={goToSearching}/>
            <span className="settings-icon" onClick ={goToSettings}>⚙</span>
            <div className="profile-icon" onClick={goToProfile}></div>         
         </div>      

         <section className="dashboard-section playlist-gradient">
            <div className="row-scroll">
               <Playlistcard title="Playlist 1" onClick = {goToPlaylist}></Playlistcard>
               <Playlistcard title="Playlist 2" onClick = {goToPlaylist}></Playlistcard>
               <Playlistcard title="Playlist 3" onClick = {goToPlaylist}></Playlistcard>
               <Playlistcard title="Playlist 4" onClick = {goToPlaylist}></Playlistcard>
               <Playlistcard title="Playlist 5" onClick = {goToPlaylist}></Playlistcard>
            </div>
         </section>

         <section className="dashboard-section">
            <h2 className="section-title">Recently Played</h2>
            <div className="row-scroll">
               <Playlistcard title="Song A" onClick = {goToPlaying}/>
               <Playlistcard title="Song B" onClick = {goToPlaying}/>
               <Playlistcard title="Song C" onClick = {goToPlaying}/>
               <Playlistcard title="Song D" onClick = {goToPlaying}/>
               <Playlistcard title="Song E" onClick = {goToPlaying}/>
               <Playlistcard title="Song F" onClick = {goToPlaying}/>
            </div>
         </section>

         <section className="dashboard-section">
            <h2 className="section-title">Recommended for You</h2>
            <div className="row-scroll">
               <Playlistcard title="Suggestion 1" onClick = {goToPlaying} />
               <Playlistcard title="Suggestion 2" onClick = {goToPlaying}/>
               <Playlistcard title="Suggestion 3" onClick = {goToPlaying}/>
               <Playlistcard title="Suggestion 4" onClick = {goToPlaying}/>
               <Playlistcard title="Suggestion 5" onClick = {goToPlaying}/>
               <Playlistcard title="Suggestion 6" onClick = {goToPlaying}/>
            </div>
         </section>


         {!isPlayerOpen && (
            <button className="side-trigger open" onClick={() => setIsPlayerOpen(true)}>‹</button>
         )}
      </div>

      <div className={`miniplayer-side-panel ${isPlayerOpen ? "active" : ""}`}>
         <button className="side-trigger close" onClick={() => setIsPlayerOpen(false)}>›</button>
         <MiniPlayer />
      </div>
    </div> 
   );
}

export default Dashboard;