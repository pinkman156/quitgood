import React from "react";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <div>
      <nav>
        <h1 className="choose">
          Choose Life over
          <img
            src="https://cdn.dribbble.com/users/1117273/screenshots/3218934/smoking-01.jpg"
            alt="Smoking"
          />
        </h1>
        <div className="dropdown">
          <a>
            <h1>About</h1>
          </a>
          <div class="dropdown-content">
            It’s never too late to quit smoking. Sometimes, quitting is good.
          </div>
        </div>
      </nav>
    </div>
  );
}
