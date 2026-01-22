import ProfilePhoto from '../../components/profilephoto/profilephoto.jsx';
import "./profile.css";
import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx';
import Playlistcard from '../../components/PlaylistCard/playlistcard.jsx';
import Artistcard from '../../components/ArtistCard/ArtistCard.jsx';
import { useNavigate } from "react-router-dom";
import { getStorageValue } from '../../useLocalStorage.jsx';

const Profile = (props) => {
  const navigate = useNavigate();
  
  // Get username from localStorage
  const [username, setUsername] = getStorageValue("name", "");
            
  const goBack = () => {
    navigate(-1);
  };

  const goToPlaylist = () => {
    navigate("/Playlist");
  };

  return (
    <>
      <div className="profile-background">
        <button className="back-arrow" onClick={goBack}>←</button>

        <ProfileCard 
          username={username} 
          followers={props.followers} 
          following={props.following} 
          playlists={props.playlists} 
          photo={props.photo}
        />
        
        <h2 className="your-library">Your Library</h2>
        <div className="playlist-container">
          <div className="playlist-container-list">
            <Playlistcard title="Liked songs" onClick={goToPlaylist} />
            <Playlistcard title="Playlist 1" onClick={goToPlaylist} />
            <Playlistcard title="Playlist 2" onClick={goToPlaylist} />
          </div>
        </div>
        
        <h2 className="your-artists">Artist you're following</h2>
        <div className="artists-section">
          <Artistcard name="Artist One" photo="" />
          <Artistcard name="Artist Two" photo="" />
          <Artistcard name="Artist Three" photo="" />
          <Artistcard name="Artist Four" photo="" />
          <Artistcard name="Artist Five" photo="" />
          <Artistcard name="Artist Six" photo="" />
        </div>
      </div>
    </>
  );
};

export default Profile;