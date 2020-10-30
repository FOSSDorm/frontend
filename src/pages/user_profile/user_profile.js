import React, { Component } from "react";
import PropTypes from "prop-types";

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="user_profile">
        <div>welcoe to dashboard</div>
      </div>
    );
  }
}

UserProfile.propTypes = {};

export default UserProfile;
