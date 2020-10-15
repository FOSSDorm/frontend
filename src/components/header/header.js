import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          FOSSDorm — Build Your Open Source Profile
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Projects{" "}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Log In
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
