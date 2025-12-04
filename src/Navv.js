import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
    <nav className="navbar">
      <h1 className="logo">✈️ WanderWorld</h1>
      <ul className="nav-links">
        <li>
           <Link to={"/Homee"}>
                <p>Home</p>
                </Link>
        </li>
        <li><p>Destinations</p></li>
        <li><p>Gallery</p></li>
        <li>
            <Link to={"/Login"}>
                <p>Login</p>
                </Link>
        </li>
        <li><p>Contact</p></li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;