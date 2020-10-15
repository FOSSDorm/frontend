import React from "react";
import "./timeline.scss";

/**
 * Credit for Timeline - https://codepen.io/cplepage/pen/EozVXL
 */
const TimelineDiv = () => {
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
              <h5>Search Project</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                porttitor gravida aliquam. Morbi orci urna, iaculis in ligula
                et, posuere interdum lectus.
              </p>
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
              <h5>Learn To Contribute</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                porttitor gravida aliquam. Morbi orci urna, iaculis in ligula
                et, posuere interdum lectus.
              </p>
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
              <h5>Merge Code And Earn Rewards</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                porttitor gravida aliquam. Morbi orci urna, iaculis in ligula
                et, posuere interdum lectus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineDiv;
