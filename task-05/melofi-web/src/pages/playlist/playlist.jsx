import "./playlist.css";
import PlaylistCard from '../../components/PlaylistCard/playlistcard.jsx';
import { useNavigate } from "react-router-dom"; 

const Playlist = (props) => {
       const navigate = useNavigate();
    
       const goToPlaying = () => {
          navigate("/Playing");
       };
       
        const goBack = () => {
            navigate(-1)
   };
    return (
    <div className="playlist-background">
        
            <div className="playlist-top-section">
                <button className="back-arrow" onClick={goBack}>←</button>
                <PlaylistCard></PlaylistCard>
                <div className="playlist-info-text"> 
                    <h1 className = "playlist-name-title">{props.playlistname}</h1>
                    <span className ="number-of-songs">{props.number} songs </span>
                </div>
            </div>
        <div className="songs-list-section">
                <p onClick = {goToPlaying}> <span>1</span> <span>{props.sname1}</span> <span>{props.aname1}</span> <span>{props.duration1}</span></p>
                <p onClick = {goToPlaying}> <span>2</span> <span>{props.sname2}</span> <span>{props.aname2}</span> <span>{props.duration2}</span></p>
                <p onClick = {goToPlaying}> <span>3</span> <span>{props.sname3}</span> <span>{props.aname3}</span> <span>{props.duration3}</span></p>
                <p onClick = {goToPlaying}> <span>4</span> <span>{props.sname4}</span> <span>{props.aname4}</span> <span>{props.duration4}</span></p>
                <p onClick = {goToPlaying}> <span>5</span> <span>{props.sname5}</span> <span>{props.aname5}</span> <span>{props.duration5}</span></p>        
        </div>
    </div>
    );
}

export default Playlist;