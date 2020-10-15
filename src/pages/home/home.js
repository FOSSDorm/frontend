import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import "./home.scss";
import Timeline from "../../components/timeline/timeline";
class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // componentDidUpdate(prevProps) {
  //   if (this.props.location.pathname !== prevProps.location.pathname) {
  //     window.scrollTo(0, 0);
  //   }
  // }
  render() {
    return (
      <>
        <div className="home">
          <div className="logo_div">
            <img src={logo} alt="FOSSDorm" className="logo" />
          </div>
          <div className="intro">
            <h2>What is FOSSDorm?</h2>
            <p>
              
              A&nbsp;
              <a href="https://www.gnome.org/challenge/">
                GNOME Challenge 2020 
              </a>
              &nbsp;project that aims to bring, engage, and retain new contributors to
              the open source community.
            </p>
            <p>
              It is a 100% free and open source platform to help newcomers find
              open source projects based on their skill preference, then learn
              how to contribute to the selected project, and engage them for the
              long term.
            </p>
          </div>
          <Timeline />
        </div>
      </>
    );
  }
}

export default Home;
