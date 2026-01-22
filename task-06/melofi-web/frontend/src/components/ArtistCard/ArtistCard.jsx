import "./ArtistCard.css";

const ArtistCard = (props) => {
    return (
        <div className="artist-card">
            <img src="" alt="Artist" className="artist-photo" />
            <h3 className="artist-name">{props.name}</h3>
        </div>
    );
}

export default ArtistCard;