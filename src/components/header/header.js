import React, { useState, useEffect } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { withCookies } from "react-cookie";
import data from '../../assets/data/data.json';

const Header = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfileURI, setUserProfileURI] = useState("");
  // const [cookies, setCookie] = useCookies(['token']);
  const { cookies } = props;
  // const data=JSON.parse(data);
  // console.log(data.API_ROOT_URL);
  console.log(cookies.get("token"));
  const logout_api=`${data.API_ROOT_URL}/users/logout`;
  console.log(logout_api);
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        auth_token: cookies.get("token"),
      }),
    };
    fetch(`${data.API_ROOT_URL}/users/auth`, requestOptions)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.isLoggedIn == true) {
          setIsLoggedIn(true);
          const pathname = "/user/" + response.username.toString();
          console.log(response.username);
          console.log(pathname);
          setUserProfileURI(pathname);
        }
      })
      .catch((err) => console.log(err));
  }, []);

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

            {isLoggedIn ? (
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink
                    to={userProfileURI}
                    exact
                    className="dropdown-item"
                    activeClassName="activeNavColor"
                    // data-toggle="collapse"
                    // data-target=".navbar-collapse.show"
                  >
                    Dashboard
                  </NavLink>
                  <a class="dropdown-item" href={logout_api}>Log out</a>
                  
                </div>
              </li>
            ) : (
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
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default withCookies(Header);
