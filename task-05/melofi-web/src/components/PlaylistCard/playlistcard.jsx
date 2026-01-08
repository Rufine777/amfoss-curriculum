import "./playlistcard.css";

const playlistcard = (props) => {
    return (
        <div className="playlist-card" onClick={props.onClick} style={{ cursor: "pointer" }}>
            <img src="" alt="Playlist Cover" className="playlist-cover"/>
            <div className="playlist-info">
                <h3 className="playlist-title">{props.title}</h3>
            </div>
        </div>
    );
}

export default playlistcard;