import "./signUp.css";
import { useState } from "react";

const SignUp = () => {
  const [UserName, setUsername] = useState("");
  const [PhoneNumber, setPhonenumber] = useState("");
  const [Password, setPassword] = useState("");
  const HandleSignUp = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: UserName,
          phone: PhoneNumber,
          password: Password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setUsername("");
        setPhonenumber("");
        setPassword("");
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again!");
    }
  };
  return (
    <div className="signup-background">
      <h1 className="signup-logo">MeloFi</h1>
      <div className="signup-glass-card">
        <h2 className="signup-heading">Create Account</h2>
        <form onSubmit={HandleSignUp}>
          <input
            type="text"
            placeholder="Enter UserName"
            className="signup-input"
            value={UserName}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Enter PhoneNumber"
            className="signup-input"
            value={PhoneNumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Set password"
            className="signup-input"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="signup-Button" type="submit">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
