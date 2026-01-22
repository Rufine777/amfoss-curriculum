import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../useLocalStorage";

const Login = () => {
  const [UserName, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const [User, setName] = useLocalStorage("name", "");

  const HandleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: UserName, password: Password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        // Save the username to localStorage on successful login
        setName(UserName);
        navigate("/dashboard");
      } else if (response.status === 404) {
        alert("User not registered. Please register first.");
      } else if (response.status === 401) {
        alert("Incorrect password. Try again or click 'Forgot password'.");
      } else {
        alert(data.error || "Something went wrong. Try again!");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again later!");
    }
  };

  return (
    <div className="login-background">
      <h1 className="login-logo">MeloFi</h1>
      <div className="login-glass-card">
        <h2 className="login-heading">Login</h2>
        <form onSubmit={HandleLogin}>
          <input
            type="text"
            placeholder="Enter UserName"
            className="login-input"
            value={UserName}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            className="login-input"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="login-forgot">
            <Link to="/forgotPassword">Forgot password?</Link>
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
        <div className="login-new-to-melofi">
          <span className="login-newuser">New to MeloFi?</span>
          <Link to="/signUp" className="login-create-Account">
            {" "}
            Create Account{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;