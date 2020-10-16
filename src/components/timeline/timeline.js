import React from "react";
import "./timeline.scss";
import { useHistory } from "react-router-dom";
/**
 * Credit for Timeline - https://codepen.io/cplepage/pen/EozVXL
 */
const TimelineDiv = () => {
  const history = useHistory();
  const goToProjectsPage = () => {
    history.push("projects");
  };
 const goToLearnToContributePage=()=>{
  history.push("learn-to-contribute");

  }
  const goToRewardSystemPage=()=>{
    history.push("reward-system");
  
    }
  return (
    <>
      <div class="container-fluid blue-bg">
        <div class="container">
          <h2 class="pb-3 pt-2">How To Build Open Source Profile?</h2>
          {/* <!--first section--> */}
          <div class="row align-items-center how-it-works">
            <div class="col-2 text-center bottom">
              <div class="circle">1</div>
            </div>
            <div class="col-6">
              <h4 className="highlight_text">Search Project</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                porttitor gravida aliquam. Morbi orci urna, iaculis in ligula
                et, posuere interdum lectus.
              </p>
              <button
                type="button"
                class="ui button primary ui-btn"
                onClick={goToProjectsPage}
              >
                Projects
              </button>
            </div>
          </div>
          {/* <!--path between 1-2--> */}
          <div class="row timeline">
            <div class="col-2">
              <div class="corner top-right"></div>
            </div>
            <div class="col-8">
              <hr />
            </div>
            <div class="col-2">
              <div class="corner left-bottom"></div>
            </div>
          </div>
          {/* <!--second section--> */}
          <div class="row align-items-center justify-content-end how-it-works">
            <div class="col-6 text-right">
              <h4 className="highlight_text">Learn To Contribute</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                porttitor gravida aliquam. Morbi orci urna, iaculis in ligula
                et, posuere interdum lectus.
              </p>
              <button
                type="button"
                class="ui button primary ui-btn"
                onClick={goToLearnToContributePage}
              >
                Learn To Contribute
              </button>
            </div>
            <div class="col-2 text-center full">
              <div class="circle">2</div>
            </div>
          </div>
          {/* <!--path between 2-3--> */}
          <div class="row timeline">
            <div class="col-2">
              <div class="corner right-bottom"></div>
            </div>
            <div class="col-8">
              <hr />
            </div>
            <div class="col-2">
              <div class="corner top-left"></div>
            </div>
          </div>
          {/* <!--third section--> */}
          <div class="row align-items-center how-it-works">
            <div class="col-2 text-center top">
              <div class="circle">3</div>
            </div>
            <div class="col-6">
              <h4 className="highlight_text">Earn Rewards And Scale up Profile</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                porttitor gravida aliquam. Morbi orci urna, iaculis in ligula
                et, posuere interdum lectus.
              </p>
              <button
                type="button"
                class="ui button primary ui-btn"
                onClick={goToRewardSystemPage}
              >
                Reward System
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineDiv;
