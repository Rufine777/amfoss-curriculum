import ProfilePhoto from "../profilephoto/profilephoto.jsx";
import "./ProfileCard.css";

const ProfileCardv=(props)=>{
    return(
    <div className="profile-card-container">
      <div className="profile-avatar-wrapper">
            <div className="profile-avatar-container">
                <ProfilePhoto src="" />
          </div>
          <p className = "user-id">{props.userid}</p> 
      </div>

      <h1 className="hello">Hello {props.username};</h1>

      <div className="user-stats">
        <div className="stat-block">
          <span className="stat-number">{props.followers}</span>
          <span className="stat-label">Followers</span>
        </div>

        <div className="stat-block">
          <span className="stat-number">{props.following}</span>
          <span className="stat-label">Following</span>
        </div>

        <div className="stat-block">
          <span className="stat-number">{props.playlists}</span>
          <span className="stat-label">Playlists</span>
        </div>
      </div>
    </div>
    
    )
}

export default ProfileCardv;