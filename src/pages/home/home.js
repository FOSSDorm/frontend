import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import "./home.scss";
import Timeline from "../../components/timeline/timeline";
import { Link } from "react-router-dom";
import CEChallangeCompetitorBadge from "../../assets/images/CEChallenge-badge.png";
import CEChallangePOneBadge from "../../assets/images/CEChallenge-P1Winner2.png";

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
          <div className="intro home_text_center">
            <h2>What is FOSSDorm?</h2>
            <p>
              <span className="highlight_text">FOSSDorm</span> is a&nbsp;
              <a
                href="https://www.gnome.org/challenge/"
                rel="noopener noreferrer"
                target="_blank"
              >
                GNOME Challenge 2020
              </a>
              &nbsp;project that aims to bring, engage, and retain
              <span className="highlight_text"> new contributors </span> to the
              open source community.
            </p>
            <p>
              It is a
              <span className="highlight_text"> free and open source </span>
              platform&nbsp;
              <a
                href="https://github.com/FOSSDorm"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: "black", fontSize: "1.3rem" }}
              >
                <i aria-hidden="true" class="github icon"></i>{" "}
              </a>
              to help newcomers
              <span className="highlight_text"> find </span>
              open source projects based on their skill preference, then
              <span className="highlight_text"> learn </span>
              how to contribute to the selected project, and
              <span className="highlight_text"> engage </span> them for the long
              term.
            </p>
          </div>
          <div className="badges">
            <div>
              <img
                src={CEChallangeCompetitorBadge}
                alt="CEChallenge Competitor Badge"
              />
            </div>
            <div>
              <img
                src={CEChallangePOneBadge}
                alt="CEChallenge Phase 1 Winner Badge"
              />
            </div>
          </div>
          <Timeline />
          <div className="submit_projects home_text_center">
            <h2>Submit Your Own Open Source Project</h2>
            <p>
              <span className="highlight_text">FOSSDorm</span> allows every
              developer submit their open source project hosted at GitHub.
            </p>
            <p>
              Refer&nbsp;
              <Link
                to={{
                  pathname: "/guide-to-submit-project",
                }}
              >
                this page
              </Link>
              &nbsp;to get your project listed on
              <span className="highlight_text"> FOSSDorm</span>.
            </p>
          </div>
          <div className="contributors home_text_center">
            <h2>FOSSDorm Contributors</h2>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
