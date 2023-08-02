import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./index.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function registerUser(e) {
    e.preventDefault();
  }
  return (
    <div className="login-container">
      <div className="container">
        <div className="registration form">
          <header>Signup</header>
          <form onSubmit={registerUser}>
            <input
              placeholder="Enter your Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Confirm your password"
            />
            {error !== "" && (
              <p style={{ color: "red", marginLeft: "6px" }}>{error}</p>
            )}
            <input type="submit" className="button" value="Signup" />
            {success !== "" && (
              <p style={{ color: "green", marginLeft: "6px" }}>{success}</p>
            )}
          </form>

          <div className="signup">
            <span className="signup">
              Already have an account?
              <Link style={{ textDecoration: "none" }} to="/login">
                <label>Login</label>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
