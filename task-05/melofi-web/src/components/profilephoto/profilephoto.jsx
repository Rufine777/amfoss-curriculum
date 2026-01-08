import "./profilephoto.css";

const ProfilePhoto = (props) => {
  return (
    <img
      src={props.src}
      alt="Profile"
      className="profile-photo"
    />
  );
};

export default ProfilePhoto;