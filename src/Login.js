import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
function Login(){
    return(
        <div>
            <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <input type="text" placeholder="Enter your name" />
        <input type="password" placeholder="Enter your password" />
        <Link to={'/Main'}>
        <button>Login</button>
        </Link>
        <p>Welcome back, traveler 🌍</p>
      </div>
    </div>
        </div>
    );
}
export default Login;