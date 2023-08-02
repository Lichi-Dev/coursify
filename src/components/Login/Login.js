import React, { useState } from "react";
import "./index.css";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

function Login(history) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function loginUser(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.user) {
      setError("");
      navigate("/");
    } else {
      setError("Incorrect Email or Password");
    }
    console.log(data);
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
