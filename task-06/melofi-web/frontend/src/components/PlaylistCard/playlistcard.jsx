const PlaylistCard = ({ title, artist, image, onClick }) => {
  return (
    <div className="playlist-card" onClick={onClick}>
      <img
        src={image}
        alt={title}
        className="playlist-cover"
      />
      <div className="playlist-info">
        <h3 className="playlist-title">{title}</h3>
        <p className="playlist-artist">{artist}</p>
      </div>
    </div>
  );
};

export default PlaylistCard;
