import React, { useState } from "react";
import "./index.css";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

function Login(history) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function loginUser(e) {
    e.preventDefault();
  }
  return (
    <div className="login-container">
      <div className="container">
        <div className="login form">
          <header>Login</header>
          <form onSubmit={loginUser}>
            <input
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <input
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            {error !== "" && (
              <p style={{ color: "red", marginLeft: "6px" }}>{error}</p>
            )}
            <input type="submit" className="button" value="Login" />
          </form>
          <div className="signup">
            <span className="signup">
              Don't have an account?
              <Link style={{ textDecoration: "none" }} to="/register">
                <label>Signup</label>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
