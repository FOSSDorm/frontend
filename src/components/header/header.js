import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" exact className="navbar-brand">
          FOSSDorm
        </NavLink>
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
              <NavLink
                to="/projects"
                exact
                className="nav-link"
                activeClassName="activeNavColor"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Projects
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/login"
                exact
                className="nav-link"
                activeClassName="activeNavColor"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Log In
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/signup"
                exact
                className="nav-link"
                activeClassName="activeNavColor"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
