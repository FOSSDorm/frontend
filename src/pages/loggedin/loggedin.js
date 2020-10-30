import React, { Component } from "react";
import "./loggedin.scss";
import { withCookies } from 'react-cookie';

class LoggedIn extends Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
    console.log(cookies.get('token'));
    this.state = {
      isLoggedIn: props.match.params.isLoggedIn
    };
  }

  render() {
    // console.log(this.state.auth_token);
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

export default withCookies(LoggedIn);
