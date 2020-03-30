import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="rmdb-header">
      <div className="rmdb-header-content">
        <Link to="/">

          <div className="mrmv-logo">
            <h3> MR MOVIE</h3>

          </div>

          
        </Link>
        <img
          src="./images/tmdb_logo.png"
          className="rmdb-tmdb-logo"
          alt="tmdb-logo"
        />
      </div>
    </div>
  );
};

export default Header;
