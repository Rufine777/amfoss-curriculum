import "./settings.css";
import { useNavigate } from "react-router-dom";
const Settings = () => {
  const navigate = useNavigate();
          const goBack = () => {
            navigate(-1)
   };
  return (
    <div className="settings-background">
                      <button className="back-arrow" onClick={goBack}>←</button>

      <div className="settings-header">
        <img src="" alt="profile" className="settings-avatar"/>
        <label className="edit-profile-btn">
          Edit profile image
          <input type="file" hidden />
        </label>
        <p className="settings-username">@user_id</p>
      </div>

      <textarea className="settings-bio" placeholder="Your bio"/>

      <div className="settings-card">
        <h2>Account Settings</h2>
        <input type="text" placeholder="Change Username" />
        <input type="password" placeholder="Current Password" />
        <input type="password" placeholder="New Password" />
        <button className="save-btn">Save Changes</button>
      </div>

      <button className="logout-btn">Log Out</button>

    </div>
  );
};

export default Settings;
