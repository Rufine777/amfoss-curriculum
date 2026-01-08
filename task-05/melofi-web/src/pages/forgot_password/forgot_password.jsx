import React from "react";
import './forgot_password.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="forgot-background">
      <div className="forgot-glass-card">
        <h1 className="forgot-heading">Reset Your Password</h1>

        <p className="forgot-subtext">Enter the phone number linked to your account to receive an OTP.</p>

        <input type="tel" placeholder="Phone Number" className="phone-number"/>
        <button className="forgot-button">Send OTP</button>
        <input type="text" placeholder="Enter OTP" className="otp"/>


        <Link to="/" className="forgot-back">Go back to Login after changing password</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
