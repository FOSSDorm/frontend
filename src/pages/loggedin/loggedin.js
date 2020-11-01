import React, { Component } from "react";
import "./loggedin.scss";
import Cookie from 'js-cookie';

class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:props.match.params.username,
      isLoggedIn: props.match.params.isLoggedIn,
      token:props.match.params.access_token
    };
  }

  render() {
    // console.log(this.state.token);
    Cookie.set("token",this.state.token,{expires:2});
    // console.log("cookie token");
    // console.log(Cookie.get("token"));
    return (
      <div className="loggedin">
        {this.state.isLoggedIn === "success" ? (
          <div class="ui success message">
            <div class="header">You've successfully logged in.</div>
            <p>
              You may now proceed to <a href="/projects">find</a> projects.
            </p>
          </div>
        ) : (
          <div class="ui negative message">
            <div class="header">We're sorry, but you failed to log in.</div>
            <p style={{ textAlign: "center" }}>
              Please, <a href="/login">try again</a> later.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default LoggedIn;
